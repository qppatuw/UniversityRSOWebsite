import { useParams, Link } from "react-router";
import { Calendar, Clock, MapPin, ExternalLink, ArrowLeft } from "lucide-react";
import { events } from "../data/events";

export function EventDetail() {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="mb-4">Event Not Found</h1>
          <p className="mb-6 text-gray-700">
            Sorry, we couldn't find the event you're looking for.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 hover:underline focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

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

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 mb-6 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Events
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="mb-6 text-teal-600">{event.title}</h1>
            
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar className="w-5 h-5 text-teal-600" aria-hidden="true" />
                <div>
                  <span className="sr-only">Date:</span>
                  <time dateTime={event.date}>{formatDate(event.date)}</time>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="w-5 h-5 text-teal-600" aria-hidden="true" />
                <div>
                  <span className="sr-only">Time:</span>
                  <span>{event.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-teal-600" aria-hidden="true" />
                <div>
                  <span className="sr-only">Location:</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-8" aria-labelledby="description-heading">
            <h2 id="description-heading" className="mb-4 text-teal-600">
              About This Event
            </h2>
            <p className="text-gray-700 leading-relaxed">{event.fullDescription}</p>
          </section>

          <section aria-labelledby="rsvp-heading">
            <a
              href={event.rsvpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              <span>RSVP Now</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
            <p className="mt-3 text-gray-600">
              Click to RSVP and let us know you're coming!
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}