"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Doctors } from "@/constants";
import { Appointment } from "@/types/appwrite.types";

import { AppointmentModal } from "../AppointmentModal";
import { StatusBadge } from "../StatusBadge";
import { Typography } from "../Typography";

export const columns: ColumnDef<Appointment>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <Typography variant="paragraph_sm">{row.index + 1}</Typography>;
    },
  },
  {
    accessorKey: "patient",
    header: () => <Typography variant="paragraph_sm">Name</Typography>,
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <Typography variant="paragraph_sm" className="text-[#3D3D3D]">
          {appointment.patient.name}
        </Typography>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <Typography variant="paragraph_sm">Status</Typography>,
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <div className="min-w-[115px]">
          <StatusBadge status={appointment.status} />
        </div>
      );
    },
  },
  // {
  //   accessorKey: "schedule",
  //   header: "Appointment",
  //   cell: ({ row }) => {
  //     const appointment = row.original;
  //     return (
  //       <p className="text-14-regular min-w-[100px]">
  //         {formatDateTime(appointment.schedule).dateTime}
  //       </p>
  //     );
  //   },
  // },
  {
    accessorKey: "primaryPhysician",
    header: () => <Typography variant="paragraph_sm">Tribe</Typography>,
    cell: ({ row }) => {
      const appointment = row.original;

      const doctor = Doctors.find(
        (doctor) => doctor.name === appointment.primaryPhysician
      );

      return (
        <div className="flex items-center gap-3">
          <Typography
            variant="paragraph_sm"
            className="whitespace-nowrap text-[#3D3D3D]"
          >
            {doctor?.name}
          </Typography>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => (
      <div className="pl-4">
        <Typography variant="paragraph_sm">Actions</Typography>
      </div>
    ),
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <div className="flex gap-1">
          <AppointmentModal
            patientId={appointment.patient.$id}
            userId={appointment.userId}
            appointment={appointment}
            type="connect"
            title="Schedule Appointment"
            description="Please confirm the following details to schedule."
          />
          <AppointmentModal
            patientId={appointment.patient.$id}
            userId={appointment.userId}
            appointment={appointment}
            type="cancel"
            title="Cancel Appointment"
            description="Are you sure you want to cancel your appointment?"
          />
        </div>
      );
    },
  },
];
