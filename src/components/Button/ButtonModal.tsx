import { useState } from "react";

interface ButtonStyleProps {
  title: string;
  toggleModal: React.MouseEventHandler;
}

export default function ButtonModal({ title, toggleModal }: ButtonStyleProps) {
  return (
    <>
      <button
        onClick={toggleModal}
        type="button"
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        data-hs-overlay="#hs-basic-modal"
      >
        {title}
      </button>
    </>
  );
}
