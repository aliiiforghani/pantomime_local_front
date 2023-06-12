"use client";
import { useEffect, useState } from "react";
import RegisterForm from "./registerForm";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import LoginForm from "./LoginForm";
import { useRouter } from "next/navigation";
import { checkOtp } from "../services/authServices";
const RESEND_TIME = 90;

function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(2);
  const router = useRouter();

  const { mutateAsync: mutateCheckOtp, isLoading: isCechkingOtp } = useMutation(
    {
      mutationFn: checkOtp,
    }
  );

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateCheckOtp({ phoneNumber, otp });

      toast.success(message);
      if (user.isActive) {
        router.push("/");
      } else {
        router.push("/complete-profile");
      }
      // push -> /complete-profile
      // isActive -> / : /complete-profile
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderSteps = () => {
    switch (step) {
      case 1:
        return <RegisterForm setStep={setStep} />;
      case 2:
        return <LoginForm setStep={setStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        {renderSteps()}
      </div>
    </div>
  );
}
export default AuthPage;

//? TASK #1 : auth user using OTP :

//1. form -> getOTP -> input + button => phoneNumber => send OTP
// input => TextField
// 2. form -> checkOTP ->
// request => ?
//* 1. axios (useState + useEffect),
//* 2. useFetch (data, loading, error),
//* 3. react-query ->  redux alternative (state management) + fetch , mutate !
