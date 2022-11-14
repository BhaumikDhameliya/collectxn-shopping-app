import React from "react";

import img_signup from "../assets/img/img_signup.png";
import logo_cxn from "../assets/img/logo_cxn.png";

import { ReactComponent as RightArrow } from "../assets/svg/svg_arrow_right.svg";

const Singup = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col">
        <div className="h-20 flex items-center px-8">
          <div className="flex items-center gap-8">
            <RightArrow />
            <img src={logo_cxn} alt="cxn" />
          </div>
        </div>
        <div className="px-20 flex items-center justify-center h-full">
          <div>
            <div>
              <p className="font-bold text-3xl font-['Space Grotesk']">
                Sign up
              </p>
            </div>
            <div>
              <p>
                Join our community or <span>login</span>
              </p>
            </div>
            <div className="pb-10 border-b flex items-center justify-between border-neutral-light-grey">
              <button>google</button>
              <button>facebook</button>
            </div>
            <div>
              <div>
                <label htmlFor="">Full Name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Email Address</label>
                <input type="text" />
              </div>
              <button>Sign up</button>
            </div>
            <div>
              <p>
                By creating an account, you agree to our Terms and have read and
                acknowledge the Global Privacy Statement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={img_signup} alt="sign up" className="w-100" />
      </div>
    </div>
  );
};

export default Singup;
