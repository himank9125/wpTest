import React, { useEffect, useState } from "react";
import Countries from "./subs/Countries";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "@firebase/auth";
import firebase from "../firebase";
import { useDispatch, useSelector } from "react-redux";

const auth = getAuth();

export default function Signin() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("+91");
  const [otp, setOtp] = useState("");
  const codeSent = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    window.recaptcha = new RecaptchaVerifier("captcha", {}, auth);
    window.recaptcha.render().then((widget) => {
      window.authWidget = widget;
    });
  }, []);

  let signing = () => {
    signInWithPhoneNumber(auth, code + phone, window.recaptcha)
      .then((confirmationCode) => {
        dispatch({ type: "codeSent", confirmation: confirmationCode });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const verifying = () => {
    console.log(codeSent.confirmation);
    codeSent.confirmation
      .confirm(otp)
      .then((res) => {
        dispatch({ type: "update" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const authView = () => {
    return (
      <div className={`auth rel`}>
        <h2 className={`s20 font title b`}>Sign in to Whatsapp</h2>
        <h2 className={`s15 font slogan`}>
          Enter your phone number. We will verify your number by sending a
          verificatopn code
        </h2>
        <div className={`signin`}>
          <select
            className={`input s15 font`}
            value={code}
            onChange={(event) => setCode(event.target.value)}
          >
            {Countries.map((elm, idx) => {
              return (
                <option key={idx} value={elm.Iso}>
                  {elm.Iso}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            placeholder="000 000 0000"
            className={`input s15 font phone`}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className={`captcha`} id={`captcha`}></div>
        <button className={`button s15 font b cfff`} onClick={signing}>
          Continue
        </button>
      </div>
    );
  };
  const verifyView = () => {
    return (
      <div className={`auth rel`}>
        <h2 className={`s20 font title b`}>Verify Phone Number</h2>
        <h2 className={`s15 font slogan`}>
          We have sent an verification code to{" "}
          <span className={`b`}>{code + phone}</span>
        </h2>
        <div className={`signin`}>
          <input
            type="text"
            placeholder="Enter Code Here"
            className={`input s15 font code`}
            value={otp}
            onChange={(evt) => {
              setOtp(evt.target.value);
            }}
          />
        </div>
        <button className={`button s15 font b dfff`} onClick={verifying}>
          Submit
        </button>
      </div>
    );
  };
  return codeSent.codeSent ? verifyView() : authView();
}
