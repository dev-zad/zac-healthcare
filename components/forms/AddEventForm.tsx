"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const EventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
});

type EventForm = z.infer<typeof EventSchema>;

const AddEventForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<EventForm>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      title: "",
      description: "",
      startTime: "",
      endTime: "",
    },
  });

  const onSubmit = async (values: EventForm) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Event added successfully");
        form.reset();
      } else {
        throw new Error("Failed to add event");
      }
    } catch (error) {
      console.error("Failed to add event", error);
      alert("Failed to add event");
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mb-4 rounded-lg bg-white p-4 shadow-md"
    >
      <h2 className="mb-4 text-xl font-semibold">Add Event</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          {...form.register("title")}
          className="mt-1 w-full rounded border border-gray-300 p-2"
          required
        />
        {form.formState.errors.title && (
          <p className="text-red-500">{form.formState.errors.title.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          {...form.register("description")}
          className="mt-1 w-full rounded border border-gray-300 p-2"
          required
        ></textarea>
        {form.formState.errors.description && (
          <p className="text-red-500">
            {form.formState.errors.description.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Start Time</label>
        <input
          type="datetime-local"
          {...form.register("startTime")}
          className="mt-1 w-full rounded border border-gray-300 p-2"
          required
        />
        {form.formState.errors.startTime && (
          <p className="text-red-500">
            {form.formState.errors.startTime.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">End Time</label>
        <input
          type="datetime-local"
          {...form.register("endTime")}
          className="mt-1 w-full rounded border border-gray-300 p-2"
          required
        />
        {form.formState.errors.endTime && (
          <p className="text-red-500">
            {form.formState.errors.endTime.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 p-2 text-white"
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add Event"}
      </button>
    </form>
  );
};

export default AddEventForm;
