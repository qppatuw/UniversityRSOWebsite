import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { galleryImages } from "../data/events";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
      aria-label="Previous image"
    >
      <ChevronLeft className="w-6 h-6 text-teal-600" aria-hidden="true" />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
      aria-label="Next image"
    >
      <ChevronRight className="w-6 h-6 text-teal-600" aria-hidden="true" />
    </button>
  );
}

export function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-800" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        <h2 id="gallery-heading" className="text-center mb-12 text-teal-500 text-4xl">
          Meet Our Team
        </h2>
        <div className="gallery-slider" role="region" aria-label="Image carousel of past events">
          <Slider {...settings}>
            {galleryImages.map((image) => (
              <div key={image.id} className="px-2">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <div className="aspect-[4/3] bg-gray-200">
                    {image.url ? (
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200" />
                    )}
                  </div>
                  <div className="p-4 bg-white text-center">
                    <p className="text-gray-900 font-semibold text-lg mb-1">{image.name}</p>
                    <p className="text-teal-600 font-medium text-sm mb-2">{image.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{image.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}