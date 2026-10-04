import { Link } from "react-router";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Event } from "../data/events";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    // Parse date as local time to avoid timezone offset issues
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const bgGradient = event.id === "2" 
    ? "bg-gradient-to-br from-purple-100 to-pink-100" 
    : event.id === "3"
    ? "bg-gradient-to-br from-blue-100 to-indigo-100"
    : event.id === "4"
    ? "bg-gradient-to-br from-orange-100 to-yellow-100"
    : "bg-gradient-to-br from-teal-100 to-cyan-100";
  
  const titleColor = event.id === "2" 
    ? "text-purple-600" 
    : event.id === "3"
    ? "text-blue-600"
    : event.id === "4"
    ? "text-orange-600"
    : "text-teal-600";
    
  const linkColor = event.id === "2" 
    ? "text-purple-600 hover:text-purple-700" 
    : event.id === "3"
    ? "text-blue-600 hover:text-blue-700"
    : event.id === "4"
    ? "text-orange-600 hover:text-orange-700"
    : "text-teal-600 hover:text-teal-700";

  return (
    <article className={`${bgGradient} rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow`}>
      <h3 className={`${titleColor} mb-3`}>
        <Link 
          to={`/event/${event.id}`}
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
        >
          {event.title}
        </Link>
      </h3>
      <p className="text-gray-700 mb-4">{event.shortDescription}</p>
      <div className="space-y-2 text-gray-700">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" aria-hidden="true" />
          <time dateTime={event.date}>{formatDate(event.date)}</time>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" aria-hidden="true" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" aria-hidden="true" />
          <span>{event.location}</span>
        </div>
      </div>
      <Link
        to={`/event/${event.id}`}
        className={`inline-block mt-4 ${linkColor} hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded`}
        aria-label={`View details for ${event.title}`}
      >
        View Details →
      </Link>
    </article>
  );
}