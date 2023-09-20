import React, { useState } from "react";
import NextImage from "next/image";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { Image } from "@/types";

// Create a Modal component (you can use a library or create your own)

const Modal = ({ image, onClose }) => {
  return (
    // Your modal content here, e.g., a full-screen image
    <div className="modal">
      <button className="close-button absolute top-3 right-11 mr-20 font-bold text-1xl z-40 border p-3 rounded-md hover:bg-black hover:text-white transition-all" onClick={onClose}>
        X Close Preview
      </button>
      <NextImage src={image.url} alt="" fill className="object-center object-contain z-10 py-10" />
    </div>
  );
};

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
        onClick={openModal}
      >
        <div className="">
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md ">
            <NextImage
              src={image.url}
              alt=""
              width={image.width}
              height={image.height}
              className="object-center object-contain"
              fill
            />
          </span>
        </div>
        {/* ... your overlay */}
    
 
 
      </div>
      {isModalOpen && (
        <Modal image={image} onClose={closeModal} />
      )}
    </>
  );
};

export default GalleryTab;