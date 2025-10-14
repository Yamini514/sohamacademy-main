import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

/**
 * Testimonials carousel
 * - autoplay with pause on hover/focus
 * - next/prev controls and dots
 * - supports keyboard navigation (Left/Right/Escape)
 */
export default function Testimonials({
  className = "",
  autoPlay = true,
  delay = 5000,
}) {
  const testimonials = [
    {
      quote:
        `"Even I gained a lot by being a part of the program. Our Government school has been remarkably advancing technology in electronics, robotics and automation experience. Their hands-on approach is incredibly innovative bringing to me the kids to practice using sensors and electronic components."`,
      name: "M. Soma Lecture",
      meta: "District Officer, Warangal Rural",
      rating: 5,
    },
    {
      quote:
        `"The program improved our students' logical thinking and teamwork. The hands-on projects helped them apply theory in a fun way."`,
      name: "R. Kavitha",
      meta: "Principal, Sunrise High School",
      rating: 5,
    },
    {
      quote:
        `"Excellent mentorship and support for schools. The robotics club keeps students engaged after class hours."`,
      name: "S. Ramesh",
      meta: "Coordinator, Green Valley School",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoPlay);
  const timerRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    function keyHandler(e) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setPlaying(false);
    }
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!playing) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, delay);
    return () => clearInterval(timerRef.current);
  }, [playing, delay, testimonials.length]);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      ref={rootRef}
      className={`py-12 bg-white ${className}`}
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(autoPlay)}
      onFocus={() => setPlaying(false)}
      onBlur={() => setPlaying(autoPlay)}
      aria-label="Testimonials"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-center text-sky-500 font-semibold tracking-wide">TESTIMONIALS</h3>
        <div className="relative mt-6">
          {/* Card */}
          <div className="rounded-lg border border-gray-100 bg-white shadow-sm p-8 text-center">
            <div className="flex justify-center mb-3">
              <div className="flex gap-1">
                {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
            </div>

            <blockquote className="text-gray-700 italic text-lg md:text-xl max-w-[85%] mx-auto mb-6 leading-relaxed">
              {testimonials[index].quote}
            </blockquote>

            <div className="text-sm font-semibold text-gray-900">{testimonials[index].name}</div>
            <div className="text-sm text-gray-400">{testimonials[index].meta}</div>
          </div>

          {/* Nav buttons */}
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === index ? "bg-sky-500" : "bg-sky-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
