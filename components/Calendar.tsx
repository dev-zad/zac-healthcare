import { useEffect, useState } from "react";

type Event = {
  $id: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
};

const Calendar = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Calendar</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div key={event.$id} className="rounded-lg bg-white p-4 shadow-md">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.description}</p>
            <p className="text-gray-500">
              {new Date(event.start_time).toLocaleString()} -{" "}
              {new Date(event.end_time).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
