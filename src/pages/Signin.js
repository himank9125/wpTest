import React from "react";
import Countries from "./subs/Countries";

export default function Signin() {
  const authVew = () => {
    return (
      <div className={`auth rel`}>
        <h2 className={`s20 font title b`}>Sign in to Whatsapp</h2>
        <h2 className={`s15 font slogan`}>
          Enter your phone number. We will verify your number by sending a
          verificatopn code
        </h2>
        <div className={`signin`}>
          <select className={`input s15 font`}>
            {Countries.map((elm) => {
              return (
                <option key={elm.Iso} value={elm.Iso}>
                  {elm.Iso}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            placeholder="000 000 0000"
            className={`input s15 font`}
          />
        </div>
        <button className={`button s15 font b cfff`}>Continue</button>
      </div>
    );
  };
  const verifyVew = () => {
    return (
      <div className={`auth rel`}>
        <h2 className={`s20 font title b`}>Verify Phone Number</h2>
        <h2 className={`s15 font slogan`}>
          We have sent an verification code to{" "}
          <span className={`b`}>000 000 000</span>
        </h2>
        <div className={`signin`}>
          <input
            type="text"
            placeholder="Enter Code Here"
            className={`input s15 font phone`}
          />
        </div>
        <button className={`button s15 font b dfff`}>Continue</button>
      </div>
    );
  };
  return verifyVew();
}
