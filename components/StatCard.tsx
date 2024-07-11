import clsx from "clsx";
import Image from "next/image";

import { Typography } from "./Typography";

type StatCardProps = {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
};

export const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "appointments",
        "bg-pending": type === "pending",
        "bg-cancelled": type === "cancelled",
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          height={32}
          width={32}
          alt="appointments"
          className="size-8 w-fit"
        />
        <Typography variant="h1" className="px-4">
          {count}
        </Typography>
      </div>

      <Typography variant="paragraph_md" className="">
        {label}
      </Typography>
    </div>
  );
};
