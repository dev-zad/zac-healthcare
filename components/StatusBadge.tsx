import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

import { Typography } from "./Typography";

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-200": status === "scheduled",
        "bg-blue-200": status === "pending",
        "bg-red-200": status === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[status]}
        alt="doctor"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <Typography
        variant="paragraph_sm"
        className={clsx("capitalize text-[#3D3D3D]", {
          "text-green-500": status === "scheduled",
          "text-blue-500": status === "pending",
          "text-red-500": status === "cancelled",
        })}
      >
        {status}
      </Typography>
    </div>
  );
};
