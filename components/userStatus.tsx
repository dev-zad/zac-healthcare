// UserStatus.tsx
import { formatDateTime } from "@/lib/utils";
import { Appointment } from "@/types/appwrite.types";

import { StatusBadge } from "./StatusBadge";

export const UserStatus = ({ appointment }: { appointment: Appointment }) => {
  if (!appointment) {
    return <div className="border">Loading...</div>;
  }

  const { patient, status, schedule, primaryPhysician } = appointment;

  console.log("Patient data:", patient); // Debug line

  return (
    <div className="border">
      <h2>{patient?.name ?? "Unknown Patient"}</h2>
      <p>
        Status: <StatusBadge status={status} />
      </p>
      <p>Email: {patient?.email ?? "No Email"}</p>
      <p>Appointment: {formatDateTime(schedule).dateTime}</p>
      <p>Doctor: {primaryPhysician ?? "Unknown Doctor"}</p>
    </div>
  );
};
