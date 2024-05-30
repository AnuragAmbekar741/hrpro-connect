"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import candidateImg from "../../../assets/candidate.png";
import recruiterImg from "../../../assets/recruiter.png";
import TextField from "../base/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { GoogleOutlined, LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { signupWithFirebase, resetUser } from "@/redux/slice/userSignupSlice";
import { loginWithFirebase } from "@/redux/slice/userLoginSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

interface UserAuthFormProps {
  selectedRole: "Candidate" | "Recruiter";
  setFormStep: React.Dispatch<React.SetStateAction<"role" | "auth">>;
}

interface UserAuthFormState {
  email: string;
  password: string;
}

const UserAuthForm: React.FC<UserAuthFormProps> = ({
  selectedRole,
  setFormStep,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const UserAuthStatus = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const [authType, setAuthType] = useState<"login" | "signup">("signup");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserAuthFormState>();

  const signup = async (userCred: { email: string; password: string }) => {
    await dispatch(signupWithFirebase(userCred));
  };
  const login = async (userCred: { email: string; password: string }) => {
    await dispatch(loginWithFirebase(userCred));
  };

  const onSubmit: SubmitHandler<UserAuthFormState> = (formData) => {
    if (authType === "login") login(formData);
    else signup(formData);
  };

  useEffect(() => {
    if (UserAuthStatus.Error) {
      dispatch(resetUser());
      toast.error(UserAuthStatus.Error);
    }
    if (UserAuthStatus.User) {
      console.log(UserAuthStatus.User);

      toast.success(
        authType === "login" ? "Login successfull!" : "Sign up successfull!"
      );
    }
  }, [UserAuthStatus]);

  useEffect(() => {
    dispatch(resetUser());
  }, [authType]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Toaster />
      <div className="w-[425px] bg-gray-50 grid gap-10 p-5 border border-slate-100 rounded-md shadow-sm">
        {UserAuthStatus.Loading && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <LoadingOutlined className="text-white text-5xl" />
          </div>
        )}
        <div className="flex items-center">
          <Image
            src={selectedRole === "Candidate" ? candidateImg : recruiterImg}
            width={60}
            height={50}
            alt="user profile image"
            className="rounded-full border-2 border-slate-400 p-1 cursor-pointer"
            onClick={() => setFormStep("role")}
          />
          <h3 className="text-3xl text-left font-normal mx-4">
            {authType === "login" ? "Welcome back 😇" : "Let's get started 🚀"}
          </h3>
        </div>
        <div className="grid gap-2">
          <TextField
            label="Email"
            placeholder="Enter your email"
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            errorMsg={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            placeholder="Enter your email"
            register={register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              validate: {
                uppercase: (value) =>
                  /[A-Z]/.test(value) ||
                  "Password must contain at least one uppercase letter",
                number: (value) =>
                  /\d/.test(value) ||
                  "Password must contain at least one number",
                specialChar: (value) =>
                  /[!@#$%^&*]/.test(value) ||
                  "Password must contain at least one special character",
              },
            })}
            error={!!errors.password}
            errorMsg={errors.password?.message}
          />
        </div>
        <div className="flex justify-between px-1">
          <div className="flex items-center">
            <input type="checkbox" className="custom-checkbox" />
            <p className="text-sm font-light text-primary mx-1">Remeber me?</p>
          </div>
          <p className="text-sm font-light text-textLight mx-1">
            Forgot password?
          </p>
        </div>
        <div className="grid gap-4">
          <button type="submit" className="custom-button">
            {authType === "login" ? "Login" : "Sign up"}
          </button>
          <button className="custom-button-outlined">
            Continue with
            <GoogleOutlined className="text-xl ml-1" />
            oogle
          </button>
        </div>
        <p
          onClick={() => setAuthType(authType === "login" ? "signup" : "login")}
          className="text-sm font-light text-textLight text-center cursor-pointer hover-base"
        >
          {authType === "login"
            ? "New user? Create an account?"
            : "Already a user? Login"}
        </p>
      </div>
    </form>
  );
};

export default UserAuthForm;
