"use client";

import useModal from "@/hooks/useModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Modal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const modal = useModal();

  return (
    <>
      {modal.isOpen && (
        <div
          className=" fixed left-0 top-0 z-40 flex h-full w-full  items-center justify-center bg-[rgba(0,0,0,0.5)] "
          onClick={() => modal.onClose()}
        >
          {loginModal.isOpen && <LoginModal />}
          {registerModal.isOpen && <RegisterModal />}
        </div>
      )}
    </>
  );
};

export default Modal;
