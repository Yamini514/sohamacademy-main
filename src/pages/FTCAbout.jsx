import React from "react";
import SectionHeader from "../components/SectionHeader";

import ftchero from "../assets/Ftc-About/ftchero.png"
import aboutimage from "../assets/Ftc-About/aboutimage.png"
import Ftcgame from "../assets/Ftc-About/Ftcgame.png"

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-white">
        {value}
      </div>
      <div className="text-xs md:text-sm text-white/70 mt-1">{label}</div>
    </div>
  );
}

function HowCard({ title, desc }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition">
      <div className="font-bold text-white">{title}</div>
      <div className="text-sm text-white/70 mt-2 leading-relaxed">{desc}</div>
    </div>
  );
}

function LightCard({ title, desc }) {
  return (
    <div className="rounded-xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
      <div className="font-bold text-gray-900">{title}</div>
      <div className="text-sm text-gray-600 mt-2 leading-relaxed">{desc}</div>
    </div>
  );
}

export default function FTCAbout() {
  return (
    <main className="bg-white min-h-screen">
      {/* ✅ HERO (dark like your live site) */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-00">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT TEXT */}
            <div className="max-w-xl">
              {/* Cyan bar + label (perfectly aligned) */}
              <div className="flex items-center gap-4">
                <span className="w-2 h-10 rounded-full bg-sky-500" />
                <span className="text-amber-400 text-xl font-bold District uppercase leading-none">
                  INTERNATIONAL ROBOTICS COMPETITION
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                First Tech Challenge (FTC)
                <br />
                Competition
              </h1>

              {/* Paragraph */}
              <p className="mt-6 text-slate-600 text-lg leading-8">
                FIRST Tech Challenge (FTC) is an internationally recognized
                robotics competition organized by FIRST® (For Inspiration and
                Recognition of Science and Technology). It is designed for
                school students from Grades 7 to 12 and focuses on developing
                skills in Science, Technology, Engineering, and Mathematics
                (STEM) through hands-on learning.
              </p>

              {/* Button */}
              <div className="mt-8">
                <a
                  href="#about-ftc"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-400 transition"
                >
                  Know More
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-xl">
                <img
                  src={ftchero}
                  alt="FTC Hero"
                  className="w-full h-[320px] md:h-[380px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ✅ ABOUT FTC */}
<section
  id="about-ftc"
  className="bg-[#071A2B] py-16"
>
  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        {/* Label — SAME as HERO */}
        <div className="flex items-center gap-4">
          <span className="w-2 h-10 rounded-full bg-sky-500" />
          <span className="text-amber-400 text-xl font-bold uppercase leading-none">
            ABOUT FTC
          </span>
        </div>

        {/* Text — balanced for dark background */}
        <p className="mt-8 text-white/80 text-base md:text-lg leading-7">
          In FIRST Tech Challenge (FTC), students work in teams to design,
          build, program, and test robots using real-world engineering tools
          such as motors, sensors, control systems, and programming platforms.
        </p>

        <p className="mt-5 text-white/80 text-base md:text-lg leading-7">
          The program encourages students to apply theoretical knowledge to
          practical challenges, closely simulating real engineering and
          industry environments.
        </p>

        <p className="mt-5 text-white/80 text-base md:text-lg leading-7">
          FTC strongly promotes innovation, critical thinking, creativity,
          teamwork, and ethical values, following the principles of
          Gracious Professionalism® and Cooperative Competition.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-xl">
          <img
            src={aboutimage}
            alt="FTC students working on robot"
            className="w-full h-[360px] object-cover"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  </div>
</section>



 `    {/* ✅ HOW IT WORKS */}
<section
  id="how-it-works"
  className="relative py-5 lg:py-2 bg-white"
>
  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">
      <div className="text-sky-500 font-semibold text-2xl sm:text-xl  uppercase">
        How it works
      </div>
      <h2 className="mt-3 text-xl md:text-2xl font-bold text-amber-400">
        In an FTC Competition, teams…
      </h2>
      <p className="mt-3 text-slate-600 text-sm md:text-base">
        Students learn, compete, and grow through a structured robotics
        challenge that mirrors real-world engineering.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: "🤖",
          title: "Compete in robot matches",
          desc: "Teams build and compete with robots on a standardized game field.",
        },
        {
          icon: "⚙️",
          title: "Autonomous & Driver-Controlled",
          desc: "Robots perform tasks in both autonomous and driver-controlled modes.",
        },
        {
          icon: "💡",
          title: "Judged beyond matches",
          desc: "Teams are evaluated on design, innovation, documentation, and teamwork.",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="
            group relative rounded-2xl p-8
            bg-white border border-slate-200
            transition-all duration-300
            hover:border-sky-400
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          {/* Icon */}
          <div
            className="
              mb-6 w-14 h-14 rounded-xl
              flex items-center justify-center
              bg-sky-100 text-2xl
              group-hover:bg-sky-200
              transition
            "
          >
            {card.icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-slate-900">
            {card.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ✅ FTC GAME section (image left + text right like your website) */}
      {/* ✅ FTC GAME section (light UI like your 2nd section — TEXT UNCHANGED) */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-00">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* LEFT IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-xl w-full">
              <img
                src={Ftcgame}
                alt="FTC Game"
                className="w-full h-[500px] md:h-[500px] object-cover"
                loading="lazy"
              />
            </div>

            {/* RIGHT TEXT */}
            <div>
              {/* Cyan bar + title (same style as 2nd section) */}
              <div className="flex items-start gap-5">
                <div>
                  <div className="text-amber-400 text-xl font-bold District uppercase">
                    FTC GAME (CHANGES EVERY YEAR)
                  </div>
                </div>
              </div>
              {/* Paragraphs (TEXT UNCHANGED) */}
              <p className=" text-slate-600 text-lg leading-1.4">
                A key feature of the FIRST Tech Challenge is that the game
                changes every year. At the start of each season, FIRST® releases
                a new game challenge with a unique theme, objectives, field
                layout, rules, and scoring system.
              </p>

              <p className="mt-2 text-slate-600 text-lg leading-8">
                Each game consists of two main phases:
              </p>

              {/* Cards (light UI) */}
              <div className="mt-3 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="font-semibold text-slate-900">
                    Autonomous Period
                  </div>
                  <div className="text-base text-slate-600 mt-2 leading-7">
                    Robots operate independently using pre-programmed logic and
                    sensors.
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="font-semibold text-slate-900">
                    Driver-Controlled Period
                  </div>
                  <div className="text-base text-slate-600 mt-2 leading-7">
                    Students control the robot using game controllers to score
                    points strategically.
                  </div>
                </div>
              </div>

              <p className="mt-6 text-slate-600 text-lg leading-8">
                Because the game changes annually, teams must analyze rules,
                redesign robots, improve programming, and develop new solutions
                each season—fostering adaptability and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ EDUCATIONAL VALUE (light cards section) */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-00">
          <h2 className="text-xl md:text-2xl font-bold  text-center text-amber-400">
            Participation in FIRST Tech Challenge helps students IMMENSELY
          </h2>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            <LightCard
              title="Innovation & Critical Thinking"
              desc="Students learn to solve complex problems through design-thinking and iteration."
            />
            <LightCard
              title="Teamwork & Leadership"
              desc="Build strong communication, collaboration, and leadership skills."
            />
            <LightCard
              title="STEM Career Foundation"
              desc="Hands-on exposure to robotics, engineering, and programming builds career readiness."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
