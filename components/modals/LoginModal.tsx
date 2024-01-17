"use client";
//import Custom Hook
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import useModal from "@/hooks/useModal";
import { useTheme } from "next-themes";
//import react-hook-form
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
//import icon
import { LuAlertCircle } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
//
import redLogo from "@/public/images/logo/redLogo.svg";
import whiteLogo from "@/public/images/logo/whiteLogo.svg";

import Image from "next/image";

import { signIn } from "next-auth/react";

import { useCallback, useState } from "react";
import { AiFillGithub } from "react-icons/ai";

import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const modal = useModal();
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        // toast.success("Logged in");
        router.refresh();
        loginModal.onClose();
        modal.onClose();
      }
      if (callback?.error) {
        console.log(callback.error);
        // toast.error(callback.error);
      }
    });
  };

  console.log("errors", errors);

  const toggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  return (
    <div
      className=" z-40 mx-5 flex  h-[32rem] w-[50rem] flex-col text-popover-foreground md:flex-row"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="border-darkModeBorder flex h-1/6 w-full items-center  justify-center rounded-t-2xl border-2 border-b-0 bg-background md:h-full md:w-1/3 md:flex-col md:rounded-s-2xl md:rounded-tr-none md:border-b-2 md:border-e-0">
        <Image
          src={theme !== "dark" ? redLogo : whiteLogo}
          alt=""
          className="animate-spin-slow mx-5 w-10 md:mb-3 md:w-20"
        />
        <p className=" text-center text-2xl  font-medium tracking-widest md:text-3xl ">
          溢學 一起學
        </p>
      </div>
      <div className="border-darkModeBorder flex h-5/6 w-full items-center justify-center rounded-b-2xl  border-2 bg-popover md:h-full md:w-2/3 md:rounded-e-2xl md:rounded-bl-none ">
        <div className="flex  h-full w-5/6 flex-col items-center justify-center md:w-2/3">
          <h2 className="mb-5  text-xl font-medium tracking-wider md:text-4xl">
            登入帳號
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col"
          >
            <label htmlFor="signUp-email" className="my-2">
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
              <span className="  flex items-center">
                <LuAlertCircle className="me-1" />
                請輸入電子信箱
              </span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="  flex items-center">
                <LuAlertCircle className="me-1" />
                請輸入有效的電子信箱
              </span>
            )}

            <label htmlFor="signUp-name" className="my-2">
              <input
                type="password"
                placeholder="請輸入密碼"
                id="signUp-name"
                className="  text-red-foreground h-10 w-full rounded-md  border ps-3"
                {...register("password", { required: true, minLength: 6 })}
              />
            </label>
            {errors.password && errors.password.type === "required" && (
              <span className="  flex items-center">
                <LuAlertCircle className="me-1" />
                請輸入密碼
              </span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="  flex items-center">
                <LuAlertCircle className="me-1" />
                密碼長度需至少6碼
              </span>
            )}

            <label
              htmlFor="signUp-submit"
              id="signUp-submit-container"
              className="flex items-center justify-center"
            >
              <input
                type="submit"
                id="signUp-submit"
                className="my-5 h-12 w-60 cursor-pointer  rounded-full bg-popover-foreground tracking-wider text-popover"
                value="登入帳號"
              />
            </label>
          </form>

          <div className="flex flex-col items-center justify-center ">
            <div className=" flex w-full  items-center justify-center">
              <div className=" h-[1px]  w-10"></div>
              <p className=" mx-3 w-28 text-center">or login with</p>

              <div className=" h-[1px]  w-10"></div>
            </div>
            <div className="my-3 flex">
              <FcGoogle
                className="mx-2 h-10 w-10 cursor-pointer"
                onClick={() => signIn("google")}
              />
              <AiFillGithub
                className="mx-2 h-10 w-10 cursor-pointer"
                onClick={() => signIn("github")}
              />
            </div>
          </div>

          {/* {loginError && <p>{loginError}</p>} */}

          <p className=" mt-1 text-base text-popover-foreground">
            還沒有帳號？
            <span
              className="cursor-pointer  border-b  border-popover-foreground"
              onClick={toggle}
            >
              點此註冊
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
