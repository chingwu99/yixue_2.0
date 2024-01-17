"use client";

import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { useTheme } from "next-themes";

import { LuAlertCircle } from "react-icons/lu";
import redLogo from "@/public/images/logo/redLogo.svg";
import whiteLogo from "@/public/images/logo/whiteLogo.svg";

import Image from "next/image";

import axios from "axios";
import { useCallback, useState } from "react";
// import { AiFillGithub } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// import { toast } from "react-hot-toast";
// import { signIn } from "next-auth/react";

const SignupModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const { theme } = useTheme();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post(`/api/register`, data)
      .then(() => {
        // toast.success("Success!");
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch((error) => {
        // toast.error("Something Went Wrong.");
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  console.log("errors", errors);

  const toggle = useCallback(() => {
    loginModal.onOpen();
    registerModal.onClose();
  }, [loginModal, registerModal]);

  return (
    <div
      className=" z-40 mx-5  flex h-[32rem] w-[50rem] flex-col text-popover-foreground md:flex-row-reverse"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="border-darkModeBorder flex h-1/6 w-full items-center justify-center rounded-t-2xl border-2 border-b-0 bg-background md:h-full md:w-1/3 md:flex-col md:rounded-e-2xl md:rounded-tl-none md:border-b-2 md:border-s-0">
        <Image
          src={theme !== "dark" ? redLogo : whiteLogo}
          alt=""
          className=" animate-spin-slow mx-5 w-10 md:mb-3 md:w-20"
        />
        <p className=" text-center text-2xl  font-medium tracking-widest md:text-3xl ">
          溢學 一起學
        </p>
      </div>
      <div className="border-darkModeBorder flex  h-5/6 w-full items-center justify-center rounded-b-2xl  border-2 bg-popover md:h-full md:w-2/3  md:rounded-s-2xl md:rounded-br-none ">
        <div className=" flex h-full w-5/6 flex-col items-center justify-center md:w-2/3">
          <h2 className="mb-5   text-xl font-medium tracking-wider md:text-4xl">
            註冊帳號
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col  items-center "
          >
            <label htmlFor="signUp-name" className="my-2 w-full">
              <input
                type="text"
                placeholder="請輸入姓名"
                id="signUp-name"
                className="  text-red-foreground h-10 w-full rounded-md  border ps-3"
                {...register("name", {
                  required: true,
                })}
              />
            </label>
            {errors.name && errors.name.type === "required" && (
              <span className=" flex w-full items-center text-popover-foreground">
                <LuAlertCircle className="me-1" />
                請輸入姓名
              </span>
            )}
            <label htmlFor="signUp-email" className="my-2 w-full">
              <input
                type="text"
                placeholder="請輸入信箱"
                id="signUp-email"
                className="  text-red-foreground h-10 w-full rounded-md  border ps-3"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </label>
            {errors.email && errors.email.type === "required" && (
              <span className=" flex w-full items-center text-popover-foreground">
                <LuAlertCircle className="me-1" />
                請輸入電子信箱
              </span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className=" flex w-full items-center text-popover-foreground ">
                <LuAlertCircle className="me-1" />
                請輸入有效的電子信箱
              </span>
            )}

            <label htmlFor="signUp-name" className="my-2 w-full">
              <input
                type="password"
                placeholder="請輸入密碼"
                id="signUp-name"
                className="  text-red-foreground h-10 w-full rounded-md  border ps-3"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
            </label>
            {errors.password && errors.password.type === "required" && (
              <span className=" flex w-full items-center text-popover-foreground">
                <LuAlertCircle className="me-1" />
                請輸入密碼
              </span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className=" flex w-full items-center text-popover-foreground">
                <LuAlertCircle className="me-1" />
                密碼長度需至少6碼
              </span>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <span className=" flex w-full items-center text-popover-foreground">
                <LuAlertCircle className="me-1" />
                密碼長度不超過12碼
              </span>
            )}

            <label
              htmlFor="signUp-submit"
              id="signUp-submit-container"
              className="my-5 flex h-12 w-60 items-center justify-center rounded-full"
            >
              <input
                type="submit"
                id="signUp-submit"
                className="h-12 w-60 cursor-pointer rounded-full bg-popover-foreground tracking-wider text-popover"
                value="註冊帳號"
              />
            </label>
          </form>

          {/* {signupError && <p>{signupError}</p>} */}

          <p className=" text-base text-popover-foreground ">
            已經有帳號？
            <span
              className="cursor-pointer  border-b border-popover-foreground "
              onClick={toggle}
            >
              點此登入
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
