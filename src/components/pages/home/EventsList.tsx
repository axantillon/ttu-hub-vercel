import { getAllEvents } from "@/db/events";
import { FC } from "react";
import { EventCard } from "./EventCard";

interface EventsListProps {
  events: ({
    users: {
      profilePic: string | null;
    }[];
  } & {
    id: string;
    name: string;
    description: string;
    startTime: Date;
    location: string;
    organizer: string;
    coverImg: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    category: string | null;
  })[];
  small: boolean;
}

export const EventsList: FC<EventsListProps> = async ({ events, small }) => {
  return (
    <div className={"flex flex-col space-y-4"}>
      {events.sort((a, b) => b.startTime.getTime() - a.startTime.getTime()).map((event, index) => (
        <EventCard key={index} event={event} small={small} />
      ))}
    </div>
  );
};