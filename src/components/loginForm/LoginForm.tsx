import React from "react";
import { Button } from "../ui/button";
import GoogleIcon from "../../app/icons/GoogleIcon";
import { signIn, useSession } from "next-auth/react";

// LOGIN NEXT AUTH GOOGLE
const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => signIn("google")}
        className="md:w-80 h-9 gap-1 bg-butt hover:bg-hov  rounded-xl  flex items-center justify-center"
      >
        <GoogleIcon />
        <span>Sign in with Google</span>
      </Button>
    </div>
  );
};

export default Login;
