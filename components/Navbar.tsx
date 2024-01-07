"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// //import Custom Hook
import useMediaQuery from "@/hooks/useMediaQuery";
// //import icon
// import { HiMenu } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const isAboutMediumScreens = useMediaQuery("(min-width:1024px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const currentUserUid = "";

  return (
    <nav>
      {!isMenuToggled === false && (
        <div
          className="fixed top-0 z-40 h-full w-full bg-[rgb(0,0,0,0.7)]"
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        />
      )}

      <div className="border-darkModeBorder fixed top-0 z-30 flex w-full items-center justify-between  border-b-2 bg-background py-6 shadow-lg">
        <div className="mx-auto flex w-5/6 items-center justify-between ">
          <div className="me-5 flex w-full items-center justify-between gap-16">
            {/* left side */}

            <Link href="/" as="" className=" text-3xl italic ">
              Yixue
            </Link>

            {/* right side */}

            {isAboutMediumScreens ? (
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-between gap-8 text-sm">
                  <Link href="/" />

                  <Link
                    href="/"
                    className="hover:text-orange text-base transition duration-500"
                  >
                    分享廣場
                  </Link>
                </div>
                <div className="flex items-center justify-between gap-8">
                  {currentUserUid ? (
                    <>
                      <p className="hover:text-orange cursor-pointer text-base transition duration-500">
                        登出
                      </p>

                      {false ? (
                        <Link
                          href="/"
                          className="border-gray flex  h-10 w-10 overflow-hidden rounded-[50%] border-2"
                        >
                          {/* <Image
                            src={userData?.profileImg}
                            alt="圖片預覽"
                            className="h-full w-full object-cover"
                          /> */}
                        </Link>
                      ) : (
                        <Link
                          href="/"
                          className=" border-gray100Border bg-gray flex  h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-[50%] border-2 bg-gray-300"
                        >
                          {/* <Image src={defaultProfileImg} alt="" /> */}
                        </Link>
                      )}

                      <button className=" bg-yellow  text-red  h-10 w-24 rounded-md shadow-md  transition duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white">
                        新增分享
                      </button>
                    </>
                  ) : (
                    <>
                      <p
                        onClick={() => {}}
                        className="hover:text-orange cursor-pointer text-base transition duration-500"
                      >
                        登入
                      </p>
                      <button
                        className=" bg-yellow text-red h-10 w-24 rounded-md shadow-md  transition duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white"
                        onClick={() => {}}
                      >
                        立刻加入
                      </button>
                    </>
                  )}
                  {/* <ModeToggle /> */}
                </div>
              </div>
            ) : (
              <div className="flex">
                {/* <ModeToggle /> */}
                <button
                  className=" ms-3 rounded-full bg-red-400  p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  {/* <HiMenu className="h-6 w-6" /> */}x
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}

      {!isAboutMediumScreens && (
        <div
          className={`border-darkModeBorder bg-gray fixed bottom-0 right-0 z-50 h-full w-[300px]  border-s-2 drop-shadow-xl transition duration-1000 ease-in-out ${
            !isMenuToggled ? ` translate-x-full` : `translate-x-0`
          }`}
        >
          {/* close icon */}
          <div className="ms-5 flex justify-start pt-6">
            <button
              className=" rounded-full bg-red-400 p-2 "
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {/* <IoClose className="h-6 w-6" /> */}x
            </button>
          </div>

          {/* menu items */}

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link href="/" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              首頁
            </Link>
            <Link
              href="/"
              onClick={() => {
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              分享廣場
            </Link>

            {currentUserUid ? (
              <>
                <Link href="/" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  我的檔案
                </Link>
                <p
                  onClick={() => {
                    setIsMenuToggled(!isMenuToggled);
                  }}
                >
                  新增分享
                </p>
                <p
                  onClick={() => {
                    setIsMenuToggled(!isMenuToggled);
                  }}
                  className=" cursor-pointer"
                >
                  登出
                </p>
              </>
            ) : (
              <>
                <p
                  onClick={() => {
                    setIsMenuToggled(!isMenuToggled);
                  }}
                >
                  登入
                </p>
                <p
                  onClick={() => {
                    setIsMenuToggled(!isMenuToggled);
                  }}
                >
                  註冊
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
