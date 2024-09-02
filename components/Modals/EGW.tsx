import Image from "next/image";

import { Dialog, DialogContent } from "../ui/dialog";

interface EventModalProps {
  imgUrl: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EventModal({ imgUrl, isOpen, onOpenChange }: EventModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <div className="relative mb-4 size-[400px] p-4">
          <Image src={imgUrl} alt="egw" layout="fill" objectFit="cover" className="rounded p-2" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
