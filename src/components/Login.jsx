import { useState, useEffect } from "react";
import logo from "../Assets/logo/logo.svg";
import loginBg from "../Assets/login-bg.svg";
import loginImg1 from "../Assets/login-img-1.png";
import primaryLogo from "../Assets/primary-logo.svg";
import showPasswordIcon from "../Assets/show-password-icon.svg";
import hidePasswordIcon from "../Assets/hide-password-icon.svg";
import { Checkbox } from "antd";
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";

function Login({ login, setLogin }) {
  const navigate = useNavigate();
  const [height, setHeight] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmalValid] = useState(true);

  useEffect(() => {
    setHeight(window.screen.height);
  }, []);

  const onRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const onEmailChange = (event) => {
    isEmail(event.target.value) ? setEmail(event.target.value) : setEmail("");
    setIsEmalValid(isEmail(event.target.value));
  };

  const onLogin = () => {
    if (isEmailValid && email && password) {
      setLogin(true);
      navigate("/");
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center"
        style={{ height: `${height}px` }}
      >
        {/* Login Fields */}
        <div
          className="w-[30%] bg-[#E5E5E5] flex flex-col gap-16 justify-center items-center px-10"
          style={{ height: `${height}px` }}
        >
          <div className="flex flex-col justify-center items-center gap-10">
            <img src={logo} alt="logo" />
            <p className="text-[#0B132B] text-2xl font-dm-sans font-medium leading-normal">
              Log in
            </p>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#06152B] font-dm-sans text-base font-medium leading-normal">
                      Email Address
                    </label>
                    <input
                      onChange={onEmailChange}
                      type="email"
                      placeholder="example@gmail.com"
                      className="bg-[#F1F4FA] p-4 rounded-lg border-nonde outline-none h-50px w-full"
                    />
                    {!isEmailValid && (
                      <p className="text-sm font-dm-sans leading-normal text-[#ff0000]">
                        Enter a valid Email.
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#06152B] font-dm-sans text-base font-medium leading-normal">
                      Password
                    </label>
                    <div className="flex gap-2 bg-[#F1F4FA] rounded-lg pr-4">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        placeholder=""
                        className="bg-[#F1F4FA] p-4 rounded-lg border-nonde outline-none h-50px w-full"
                      />
                      <img
                        src={showPassword ? hidePasswordIcon : showPasswordIcon}
                        alt="pass"
                        className="cursor-pointer w-5"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 justify-between items-center">
                  <Checkbox
                    className="text-[#06152B] text-sm font-dm-sans leading-normal"
                    onChange={onRememberMeChange}
                  >
                    Remember me
                  </Checkbox>
                  <p className="cursor-pointer text-[#FC8D71] text-sm font-dm-sans leading-normal">
                    Reset Password?
                  </p>
                </div>
              </div>
              <button
                onClick={onLogin}
                className="bg-[#0E72B7] rounded-lg py-4 px-4 w-full font-dm-sans text-base font-medium leading-normal text-white"
              >
                Log in
              </button>
            </div>
            <p className="text-[#06152B] text-base font-dm-sans leading-normal font-medium">
              Don’t have account yet?{" "}
              <span className="text-[#FC8D71] cursor-pointer">New Account</span>
            </p>
          </div>
        </div>

        {/* Side Img */}
        <div
          className="w-[70%] bg-no-repeat bg-cover flex flex-col gap-20 items-center justify-center px-40 bg-[#F1F4FA]"
          style={{ backgroundImage: `url(${loginBg})`, height: `${height}px` }}
        >
          <div className="flex justify-center items-center w-full">
            <img src={primaryLogo} alt="logo" />
          </div>
          <div className="flex justify-center items-center w-[500px]">
            <img src={loginImg1} alt="logo_bg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
