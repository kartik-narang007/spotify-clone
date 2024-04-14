"use client";

import AuthModal from "@/components/AuthModal";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal></AuthModal>
      <UploadModal></UploadModal>
    </>
  );
};

export default ModalProvider;
