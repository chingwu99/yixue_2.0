"use client";

import Image from "next/image";
import Link from "next/link";
// import theme
import { useTheme } from "next-themes";
// import img
// import redLogo from "@/public/images/logo/redLogo.svg";
import whiteLogo from "@/public/images/logo/whiteLogo.svg";
import { useEffect } from "react";

const Footer = () => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <footer className=" border-darkModeBorder relative  z-10 border-t-2  bg-background py-16">
      <div className=" mx-auto w-5/6 justify-center gap-16 md:flex">
        <div className="  basis-1/2 md:mt-0">
          <div className="flex flex-col items-center justify-center">
            <Link href="/">
              {/* <Image
                src={redLogo}
                alt="yixue"
                className={`hover:animate-spin-slow w-28 bg-orange-400 `}
              /> */}
              <Image
                src={whiteLogo}
                alt="yixue"
                className="hover:animate-spin-slow text-red w-28"
              />
            </Link>

            <small className="my-3">
              ©Copyright Yixue 2023 All Rights Reserved
            </small>
          </div>
        </div>

        <div className=" flex basis-1/2 flex-col items-start justify-center md:mt-0 md:items-end md:pe-5 ">
          <Link href="/">
            <p className="hover:text-orange my-3 cursor-pointer text-base transition duration-500">
              首頁
            </p>
          </Link>
          <Link href="/plaza">
            <p className="hover:text-orange my-3 cursor-pointer text-base transition duration-500">
              分享廣場
            </p>
          </Link>
          <p className="hover:text-orange my-3 cursor-pointer  text-base transition duration-500">
            註冊
          </p>
          <p className="hover:text-orange my-3 cursor-pointer  text-base transition duration-500">
            登入
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
