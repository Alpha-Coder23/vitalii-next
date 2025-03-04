"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { FaPaperPlane } from "react-icons/fa";

const MessageDialog = ({ isOpen, onClose }) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-[350px] p-6 rounded-lg bg-[#1e1e23] sm:max-w-[500px] sm:p-8 shadow-lg">
        <AlertDialogHeader className="flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-accent text-primary">
            <FaPaperPlane size={32} />
          </div>
          <AlertDialogTitle className="text-2xl font-semibold text-accent sm:text-3xl">
            Message Sent!
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-2 text-sm leading-6 text-center text-white/80 sm:text-base">
            Thank you for contacting me! I have received your message and will
            respond as soon as possible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-center mt-6">
          <AlertDialogAction
            onClick={onClose}
            className="px-8 py-3 text-lg font-semibold text-white rounded-full bg-accent hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent-hover focus:ring-opacity-50 sm:px-10 sm:py-3"
          >
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MessageDialog;
