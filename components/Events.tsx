import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { EventModal } from "../components/Modals/EGW";
import { Badge } from "../components/ui/badge";

import { Typography } from "./Typography";

export function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventsData = [
    {
      id: 1,
      imgUrl: "/assets/images/sunday.jpg",
      title: "SUNDAY CELEBRATION",
      date: "Sunday | 10:30AM - 12:00PM",
      location: "Ayala Malls Vertis North, 4th flr. Cinema 2, Quezon City.",
    },
    {
      id: 2,
      imgUrl: "/assets/images/prayer1.jpg",
      title: "PRAYERWORKS",
      description: "We Intercede, God Intervenes.",
      date: "Saturday | 6AM - 7:30AM",
      location: "Sikat Inc., Tomas Morato, Quezon City.",
    },
    {
      id: 3,
      imgUrl: "/assets/images/catalyst.jpg",
      title: "MIDWEEK BREAK",
      date: "Every 3rd week of the month | 7PM",
      location: "Sikat Inc., Tomas Morato, Quezon City.",
    },
  ];

  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <div className="flex flex-col px-0 lg:p-20 lg:px-40">
      {eventsData.map((event, index) => (
        <motion.div
          key={event.id} // Add the key prop here
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <div
            key={event.id}
            className={`flex items-center justify-between p-4 lg:p-10 ${index % 2 === 0 ? "flex-col lg:flex-row " : "flex-col lg:flex-row-reverse"}`}
          >
            <div className="relative size-[280px] lg:h-[400px] lg:w-[600px] ">
              <Image src={event.imgUrl} alt="Event" layout="fill" objectFit="cover" />
            </div>
            <div className="flex  flex-col items-center justify-center pt-4 lg:items-start lg:pt-0">
              <Typography variant="h2">
                {event.id === 3 ? (
                  <span className="relative">
                    <span onClick={handleOpenModal}>{event.title}</span>
                    <Badge
                      variant="destructive"
                      className="absolute -right-2 -top-0 flex size-5 items-center justify-center text-center"
                    >
                      1
                    </Badge>
                  </span>
                ) : (
                  event.title
                )}
              </Typography>
              {event.description && (
                <Typography variant="paragraph" className="font-bold">
                  {event.description}
                </Typography>
              )}
              <Typography variant="paragraph">{event.date}</Typography>
              <Typography variant="paragraph">{event.location}</Typography>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Modal for event with ID 3 */}
      <EventModal imgUrl="/assets/images/egw.jpg" isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
