import { Dialog } from "@headlessui/react";
import { FunctionComponent, useState } from "react";

interface ExploreModalProps {
  open: boolean;
  onClose: () => void;
}

const ExploreModal: FunctionComponent<ExploreModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="bg-black p-8 rounded-lg border border-teal-300 w-1/2">
          <Dialog.Title className="text-lg text-teal-300">
            Conquer Objective
          </Dialog.Title>
          <Dialog.Description className="text-white">
            You are conquering this objective
          </Dialog.Description>
        </div>
      </div>
    </Dialog>
  );
};

export default ExploreModal;
