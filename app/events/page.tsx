"use client";
import Calendar from "@/components/Calendar";
import AddEventForm from "@/components/forms/AddEventForm";

export function EventsPage() {
  return (
    <div>
      <AddEventForm />
      <Calendar />
    </div>
  );
}
export default EventsPage;
