"use client";

import AuthModal from "@/components/AuthModal";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import UploadModal from "@/components/UploadModal";
import SubscribeModal from "@/components/SubscribeModal";
import { ProductWithPrice } from "@/types";


interface ModalProviderProps{
  products: ProductWithPrice[];

}

const ModalProvider:React.FC<ModalProviderProps> = ({products}) => {
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
      <SubscribeModal products={products}></SubscribeModal>
    </>
  );
};

export default ModalProvider;
