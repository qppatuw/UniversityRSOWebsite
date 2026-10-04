import { EventCard } from "../components/EventCard";
import { events } from "../data/events";

export function Events() {
  return (
    <div className="bg-white min-h-screen">
      {/* Events List Section */}
      <section className="py-16 container mx-auto px-4" aria-labelledby="events-list-heading">
        <div className="text-center mb-12">
          <h1 id="events-list-heading" className="text-teal-600 mb-4">
            Upcoming Events
          </h1>
          <p className="text-black max-w-2xl mx-auto mb-2">
            Join us for our upcoming events! 
          </p>
          <p className="text-black">
            Unless otherwise stated, all our events are free & open to all Allen School students. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}