import React from "react";

import { Button } from "@/components/ui/button";

type ButtonProps = {
  label: string;
  className?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LifeButton: React.FC<ButtonProps> = ({
  label,
  className,
  open,
  setOpen,
}) => {
  const handleClick = () => {
    setOpen(true); // Open the dialog
  };

  return (
    <Button className={className} onClick={handleClick}>
      {label}
    </Button>
  );
};

export default LifeButton;
