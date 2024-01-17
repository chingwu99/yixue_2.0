"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
//import icon
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

// import shadcn ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ModeToggle from "@/components/ModeToggle";
//import Custom Hook
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import useModal from "@/hooks/useModal";
import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  console.log(currentUser);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const modal = useModal();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const registerModalHandler = useCallback(() => {
    modal.onOpen();
    loginModal.onClose();
    registerModal.onOpen();
  }, [modal, loginModal, registerModal]);

  const loginModalHandler = useCallback(() => {
    modal.onOpen();
    loginModal.onOpen();
    registerModal.onClose();
  }, [modal, loginModal, registerModal]);

  return (
    <nav className="border-darkModeBorder fixed top-0 z-30 flex w-full items-center justify-between  border-b-2 bg-background py-6 shadow-lg">
      <div className="mx-auto flex w-5/6  items-center justify-between">
        <div className="me-5 flex w-full items-center justify-between gap-16">
          {/* left side */}

          <Link href="/" as="" className=" text-3xl italic ">
            Yixue
          </Link>

          {/* right side */}

          <div className=" hidden w-full items-center justify-between lg:flex">
            <div className="flex items-center justify-between gap-8 text-sm">
              <Link href="/" />

              <Link
                href="/explore"
                className="hover:text-orange text-base transition duration-500"
              >
                分享廣場
              </Link>
            </div>
            <div className="flex items-center justify-between gap-8">
              {currentUser ? (
                <>
                  <p
                    className="hover:text-orange cursor-pointer text-base transition duration-500"
                    onClick={() => signOut()}
                  >
                    登出
                  </p>

                  <button className=" bg-yellow  text-red  h-10 w-24 rounded-md shadow-md  transition duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white">
                    新增分享
                  </button>

                  <Avatar>
                    <AvatarImage src={`${currentUser?.image}`} />
                    <AvatarFallback>
                      <Image
                        src="/images/placeholder.jpg"
                        className=" object-cover"
                        height="30"
                        width="30"
                        alt="Avater"
                      />
                    </AvatarFallback>
                  </Avatar>
                </>
              ) : (
                <>
                  <p
                    onClick={loginModalHandler}
                    className="hover:text-orange cursor-pointer text-base transition duration-500"
                  >
                    登入
                  </p>

                  <Button
                    className="shadow-md  transition duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-500 hover:text-white"
                    onClick={registerModalHandler}
                  >
                    立刻加入
                  </Button>
                </>
              )}
              <ModeToggle />
            </div>
          </div>

          {/* MOBILE MENU */}
          <div className="lg:hidden ">
            {/* <ModeToggle /> */}

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className=" rounded-[50%]"
                >
                  <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when youre
                    done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      value="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                {/*  */}
                <div>
                  {/* menu items */}

                  <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link
                      href="/"
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                      className="text-black"
                    >
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
                  </div>
                </div>
                {/*  */}
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
