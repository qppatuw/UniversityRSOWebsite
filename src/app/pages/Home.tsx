import { EventCard } from "../components/EventCard";
import { Gallery } from "../components/Gallery";
import { events } from "../data/events";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "https://images.unsplash.com/photo-1644204617659-c8b3bb6800db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwd2FzaGluZ3RvbiUyMGNoZXJyeSUyMGJsb3Nzb20lMjBjYW1wdXN8ZW58MXx8fHwxNzc0NjM5NjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center" aria-labelledby="hero-heading">
        {/* Slide layers */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              animation: index === currentSlide ? 'kenburns 8s ease-in-out infinite alternate' : 'none',
            }}
            role="img"
            aria-label="University of Washington campus featuring pink cherry blossom trees in bloom with the historic Denny Hall tower in the background"
          />
        ))}

        {/* Dark overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.42) 50%, rgba(0,0,0,0.7) 100%)'
          }}
        />

        {/* Photo credit */}
        <div className="absolute top-4 right-4 z-30 text-white/60 text-xs">
          Photo by{' '}
          <a 
            href="https://unsplash.com/@kjpargeter?utm_source=figma&utm_medium=referral" 
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/80"
          >
            Kalen James
          </a>
          {' '}on{' '}
          <a 
            href="https://unsplash.com?utm_source=figma&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/80"
          >
            Unsplash
          </a>
        </div>

        {/* Hero content */}
        <div className="relative z-20 text-center text-white px-8 max-w-[820px]">
          <p className="text-xs tracking-[0.22em] uppercase text-teal-300 mb-5 opacity-0 animate-fadeUp" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            All are welcome
          </p>
          <h1 
            id="hero-heading" 
            className="mb-6 text-6xl md:text-7xl opacity-0 animate-fadeUp"
            style={{ 
              fontFamily: 'Georgia, serif',
              lineHeight: '1.08',
              animationDelay: '0.5s',
              animationFillMode: 'forwards'
            }}
          >
            Welcome to Q++!
          </h1>
          <p className="text-lg font-light text-white/80 max-w-[540px] mx-auto mb-10 leading-relaxed opacity-0 animate-fadeUp" style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}>
            Queer and Allied Students at the University of Washington Allen School. 
            Building an inclusive community where everyone in computer science can thrive.
          </p>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full border-0 cursor-pointer transition-all duration-300 p-0 ${
                index === currentSlide 
                  ? 'bg-teal-300 scale-125' 
                  : 'bg-white/35 hover:bg-white/50'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-12 z-30 hidden md:flex flex-col items-center gap-1.5 text-white/50 text-xs tracking-[0.15em] uppercase">
          <div 
            className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"
            style={{ animation: 'scrollLine 1.8s ease-in-out infinite' }}
          />
          <span>Scroll</span>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white" aria-labelledby="about-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 id="about-heading" className="text-center mb-8 text-teal-600 text-4xl">
              About Q++
            </h2>
            <div className="space-y-6 text-gray-700 text-center">
              <p>
                Q++ (pronounced "Q plus plus") is a registered student organization at the University of Washington's 
                Paul G. Allen School of Computer Science & Engineering. We are dedicated to creating a welcoming, 
                inclusive, and supportive community for LGBTQ+ students and allies in computer science and related fields.
              </p>
              <p>
                Founded on the principles of diversity, equity, and inclusion, Q++ provides a safe space where students 
                can connect, collaborate, and celebrate their identities. Whether you're looking for academic support, 
                professional development, or just a community of like-minded friends, Q++ is here for you.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-6 rounded-lg">
                  <h3 className="mb-3 text-teal-600">Community</h3>
                  <p className="text-gray-700">
                    Build meaningful connections with fellow LGBTQ+ students and allies in the Allen School through 
                    our events! We host social events, game nights, brunches, and study sessions throughout the school year.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-lg">
                  <h3 className="mb-3 text-purple-600">Support</h3>
                  <p className="text-gray-700">
                    Find a supportive network that understands your experiences, offers mentorship, and provides 
                    resources for navigating academia and industry.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-lg">
                  <h3 className="mb-3 text-blue-600">Advocacy</h3>
                  <p className="text-gray-700">
                    Join us in promoting LGBTQ+ visibility and inclusion in tech, hosting educational panels, 
                    and creating positive change in our community.
                  </p>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="mb-4">
                  All are welcome at Q++ events, regardless of major, background, sexual orientation, or gender identity. 
                  We believe in creating an environment where everyone can bring their authentic selves.
                </p>
                <p>
                  Interested in getting involved? Check out our upcoming events or reach out to us through our{' '}
                  <Link to="/contact" className="text-teal-600 hover:text-teal-700 underline">
                    social channels
                  </Link>
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />
    </div>
  );
}