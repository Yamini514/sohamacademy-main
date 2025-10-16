import React from "react";
import SectionHeader from "../components/SectionHeader";
import FadeUp from "./FadeUp";

import history1 from "../assets/h1.png";
import history2 from "../assets/h2.png";
// import history3 from "../assets/h3.png";

const historyContent = {
  title: "History",
  heading: (
    <>
      Started with the aim to bring the knowledge of{" "}
      <span className="text-[var(--color-highlight,#F4B83A)]">Robotics</span>{" "}
      to the schools
    </>
  ),
  paragraphs: [
    `Back in 2016, when technology was largely very complex, we created a program — Robotics In Academics — that aimed to bring hands-on robotics and STEM learning to students in government and private schools. The program started as a small initiative in Telangana under Bharat NITI Aayog and quickly expanded after its early success.`,
    `As teachers and mentors, we saw the enthusiasm in children to learn design, build, and programming. This motivated us to create a structured, replicable curriculum supported by workshops and teacher training sessions.`,
    `Over time, Soham Academy reached dozens of districts, making robotics accessible even in rural schools. Our history is built on a belief that innovation belongs to everyone — and that technology should inspire creativity at the school level.`,
  ],
  images: [history1, history2],
};

const HistoryTextBlock = ({ heading, paragraphs }) => (
  <FadeUp>
    <article className="">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-heading,#1E293B)]">
        {heading}
      </h2>
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className="text-[var(--color-text,#475569)] leading-relaxed"
        >
          {para}
        </p>
      ))}
    </article>
  </FadeUp>
);

const HistoryImages = ({ images }) => (
  <FadeUp>
    <div className="flex flex-col gap-4">
      {images.map((src, i) => (
        <figure
          key={i}
          className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500"
        >
          <img
            src={src}
            alt={`History image ${i + 1}`}
            className="w-full h-40 object-cover md:h-56 lg:h-50 transform hover:scale-105 transition-transform duration-700 ease-out"
          />
        </figure>
      ))}
    </div>
  </FadeUp>
);
export default function HistorySection() {
  const { title, heading, paragraphs, images } = historyContent;

  return (
    <section
      id="history"
      className=" bg-white  mt-4"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={title} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-start">
          <HistoryTextBlock className="ml-4 "heading={heading} paragraphs={paragraphs} />
          <HistoryImages images={images} />
        </div>
      </div>
    </section>
  );
}
