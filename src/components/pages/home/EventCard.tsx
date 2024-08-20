import AvatarCircles from "@/components/magicui/avatar-circles";
import { Badge } from "@/components/ui/shadcn/badge";
import { Separator } from "@/components/ui/shadcn/separator";
import { EVENT_CATEGORIES } from "@/lib/utils/consts";
import { formatInTimeZone } from "date-fns-tz";
import Image from "next/image";
import Link from "next/link";

export function EventCard({
  event,
  small,
}: {
  event: {
    users?: {
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
  };
  small: boolean;
}) {
  if (small) {
    return (
      <Link href={`/event/${event.id}`}>
        <div className="relative flex flex-row w-full h-24 rounded-2xl shadow-sm shadow-gray-300 bg-white">
          <Image
            src={event.coverImg || ""}
            width={96}
            height={96}
            className="rounded-2xl shadow-md object-cover bg-sky-400"
            alt=""
          />
          <div className="flex flex-col justify-evenly w-[calc(100%-96px)] px-2 py-1">
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="grey"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <span className="pl-0.5 text-[10px] font-bold text-gray-500 line-clamp-1">
                  {event.location}
                </span>
              </div>
              <span className="text-[10px] font-bold text-gray-500">
                {formatInTimeZone(
                  event.startTime,
                  "America/Costa_Rica",
                  "dd MMM yy"
                )}
              </span>
            </div>

            <span className="text-lg font-bold leading-tight line-clamp-1">
              {event.name}
            </span>

            <span className="my-0.5 text-xs font-medium leading-snug line-clamp-2">
              {event.description}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/event/${event.id}`}>
      <div className="flex flex-col gap-y-1 w-full h-[290px] rounded-2xl shadow-sm shadow-gray-300 bg-white ">
        <div className="relative flex items-end justify-between w-full h-44 p-3 rounded-2xl shadow-md bg-sky-400 shadow-gray-400 overflow-clip">
          <Image
            src={event.coverImg || ""}
            fill
            alt=""
            className="absolute top-0 left-0 aspect-auto object-cover"
          />
          <Badge
            className="z-10"
            style={{
              backgroundColor: EVENT_CATEGORIES.find(
                (cat) => cat.name === event.category
              )?.color,
            }}
          >
            {event.category}
          </Badge>
          {event.users && event.users.length !== 0 && (
            <AvatarCircles
              className="-space-x-6 *:bg-white *:text-black *:shadow-lg "
              numPeople={event.users.length}
              avatarUrls={event.users
                .slice(0, 3)
                .map((user) => user.profilePic || "")}
            />
          )}
        </div>

        <div className="flex flex-1 flex-row items-center w-full">
          <div className="flex flex-col items-center justify-center w-1/3 h-full gap-y-2">
            <span className="text-xs text-center font-normal -mb-2">
              {formatInTimeZone(
                event.startTime,
                "America/Costa_Rica",
                "EEEE"
              )}
            </span>
            <span className="text-2xl text-center font-normal">
              {formatInTimeZone(
                event.startTime,
                "America/Costa_Rica",
                "MMM dd"
              )}
            </span>

            <div className="flex justify-center items-center px-2 py-1 rounded-2xl bg-gray-300">
              <span className="text-xs leading-none text-center font-normal">
                {formatInTimeZone(
                  event.startTime,
                  "America/Costa_Rica",
                  "K:mm aa"
                )}
              </span>
            </div>
          </div>

          <Separator orientation="vertical" className="h-20" />

          <div className="flex flex-col items-left justify-evenly w-2/3 h-full px-3 py-1">
            <div className="flex flex-row test-xs font-bold text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="grey"
                className="size-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <span className="pl-0.5 text-xs font-bold text-gray-500 line-clamp-1">
                {event.location}
              </span>
            </div>

            <span className="text-lg font-bold leading-tight line-clamp-2">
              {event.name}
            </span>

            <p className="text-xs font-medium text-slate-800 line-clamp-2 mb-1">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
