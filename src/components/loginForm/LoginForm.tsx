import React from "react";
import { Button } from "../ui/button";
import GoogleIcon from "../../app/icons/GoogleIcon";
import FaceIcon from "../../app/icons/FaceIcon";

const Login = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button className="w-80 h-9 gap-1 bg-butt dark:bg-hov  rounded-xl  flex items-center justify-center">
        <GoogleIcon />
        <span>Sign in with Google</span>
      </Button>
      <Button className="w-80 h-9 gap-1 bg-butt dark:bg-hov  rounded-xl  flex items-center justify-center">
        <FaceIcon />
        <span>Sign in with Facebook</span>
      </Button>
    </div>
  );
};

export default Login;
