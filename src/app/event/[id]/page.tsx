import SubPageLayout from "@/app/(protected)/(main)/(subpages)/layout";
import AppLayout from "@/app/(protected)/(main)/layout";
import AvatarCircles from "@/components/magicui/avatar-circles";
import RegisterBtn from "@/components/pages/(subpages)/event/RegisterBtn";
import { Badge } from "@/components/ui/shadcn/badge";
import { getEventByIdWithUserPics } from "@/db/events";
import { EVENT_CATEGORIES } from "@/lib/utils/consts";
import { formatInTimeZone } from "date-fns-tz";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageResponse } from "next/og";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Fetch data for the specific page
  const event = await getEventByIdWithUserPics(params.id);

  if (!event)
    return {
      title: "Event not found",
      description: "Event not found",
    };

  // Optionally access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: event.name,
    description: event.description,
    openGraph: {
      title: event.name,
      description: event.description,
      images: new ImageResponse(
        (
          <Image
            src={`https://yyccawyordfhdjblwusu.supabase.co/storage/v1/object/public/${event.coverImg}?width=800&height=600&quality=75`}
            alt=""
            width={800}
            height={600}
          />
        ),
        {
          width: 800,
          height: 600,
        }
      ),
    },
    twitter: {
      card: "summary_large_image",
      title: event.name,
      description: event.description,
      images: new ImageResponse(
        (
          <Image
            src={`https://yyccawyordfhdjblwusu.supabase.co/storage/v1/object/public/${event.coverImg}?width=800&height=600&quality=75`}
            alt=""
            width={800}
            height={600}
          />
        ),
        {
          width: 800,
          height: 600,
        }
      ),
    },
  };
}

export default async function Event({ params }: { params: { id: string } }) {
  const event = await getEventByIdWithUserPics(params.id);

  if (!event)
    return (
      <div className="text-red-500 font-bold text-xl p-5">Event not found</div>
    );

  //(position) (display) (align & justify) (width) (height) (margin) (padding) (tailwind-spacing)
  //(animate) (border & rounded) (shadow) (color) (text & font)

  return (
    <AppLayout>
      <SubPageLayout>
        <div className="w-full overflow-x-visible pb-2">
          <div className="relative flex justify-between items-end h-52 -mt-4 -mx-4 p-4 rounded-b-3xl shadow-md shadow-gray-400 overflow-clip">
            <Image
              src={event.coverImg || ""}
              fill
              alt=""
              className="-z-10 absolute top-0 left-0 object-cover"
            />

            <Link href={`/event/${event.id}/users`}>
              {event.users.length !== 0 && (
                <AvatarCircles
                  className="-space-x-6 *:bg-white *:text-black *:shadow-lg"
                  numPeople={event.users.length}
                  avatarUrls={event.users
                    .slice(0, 3)
                    .map((user) => user.profilePic || "")}
                />
              )}
            </Link>

            <div className="flex flex-col items-end gap-y-2">
              <div className="flex items-center text-center size-20 rounded-2xl bg-stone-100">
                <h3 className="text-3xl">
                  {formatInTimeZone(
                    event.startTime,
                    "America/Costa_Rica",
                    "MMM dd"
                  )}
                </h3>
              </div>
              <RegisterBtn
                eventId={event.id}
                registeredIds={event.users.map((u) => u.id)}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col py-4 gap-y-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-4xl pb-0.5 font-bold line-clamp-2">
                  {event.name}
                </h1>
                <Badge
                  style={{
                    backgroundColor: EVENT_CATEGORIES.find(
                      (cat) => cat.name === event.category
                    )?.color,
                  }}
                >
                  {event.category}
                </Badge>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="grey"
                    className="size-6"
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
                  <h2 className="text-gray-500 font-bold">{event.location}</h2>
                </div>
                <div className="flex justify-center items-center px-2 py-1 rounded-2xl bg-gray-300">
                  <span className="text-xs leading-none text-center">
                    {formatInTimeZone(
                      event.startTime,
                      "America/Costa_Rica",
                      "K:mm aa"
                    )}
                  </span>
                </div>
              </div>
              <p className="line-clamp-4 leading-snug">{event.description}</p>
              {event.messages
                .slice()
                .reverse()
                .map((message, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col w-full rounded-xl shadow-sm shadow-gray-3000 bg-white text-gray-500 px-6 py-4"
                  >
                    <div dangerouslySetInnerHTML={{ __html: message }} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </SubPageLayout>
    </AppLayout>
  );
}
