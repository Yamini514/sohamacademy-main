import React from "react";
import SectionHeader from "../components/SectionHeader";

// ✅ reuse your existing images (same location like your current FTC.jsx)
import ftc1 from "../assets/FTC.png";
import ftc2 from "../assets/ftc2.png";
import ftc3 from "../assets/ftc3.png";

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
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT TEXT */}
            <div>
              {/* Cyan bar + title */}
              <div className="flex items-start gap-5">
                <div className="w-2 h-10 rounded-full bg-sky-500 mt-2" />

                <div>
                  <div className="text-amber-400 text-xl font-bold tracking-wide uppercase">
                    INTERNATIONAL ROBOTICS COMPETITION
                  </div>
                </div>
              </div>

              {/* Heading (DATA SAME) */}
              <h1 className="mt-10 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                First Tech Challenge (FTC)
                <br />
                Competition
              </h1>

              {/* Paragraph (DATA SAME) */}
              <p className="mt-6 text-slate-600 text-lg leading-8">
                FIRST Tech Challenge (FTC) is an internationally recognized
                robotics competition organized by FIRST® (For Inspiration and
                Recognition of Science and Technology). It is designed for
                school students from Grades 7 to 12 and focuses on developing
                skills in Science, Technology, Engineering, and Mathematics
                (STEM) through hands-on learning.
              </p>

              {/* Button (same data, style updated) */}
              <div className="mt-8">
                <a
                  href="#about-ftc"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-sky-500 text-white font-semibold hover:bg-sky-400 transition"
                >
                  Know More
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE (UNCHANGED) */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-xl">
                <img
                  src={ftc1}
                  alt="FTC Hero"
                  className="w-full h-[320px] md:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ ABOUT FTC (light section) */}
      <section id="about-ftc" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT text */}
          <div>
            {/* Section label */}
            <div className="flex items-start gap-5">
              <div className="w-2 h-12 rounded-full bg-sky-500 mt-1" />

              <div className="text-amber-400 text-2xl font-extrabold tracking-wide uppercase">
                ABOUT FTC
              </div>
            </div>

            {/* Paragraphs (DATA UNCHANGED) */}
            <p className="mt-8 text-slate-600 text-lg leading-8">
              In FTC, students work in teams to design, build, program, and test
              robots using real-world engineering tools such as motors, sensors,
              control systems, and programming platforms. The program encourages
              students to apply theoretical knowledge to practical challenges,
              closely simulating real engineering and industry environments.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-8">
              FTC strongly promotes innovation, critical thinking, creativity,
              teamwork, and ethical values, following the principles of Gracious
              Professionalism® and Cooperative Competition.
            </p>
          </div>

          {/* RIGHT image (POSITION UNCHANGED) */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-xl">
              <img
                src={ftc2}
                alt="FTC About"
                className="w-full h-[340px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ HOW IT WORKS (dark cards like your site section) */}
      <section id="how-it-works" className="py-16">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center">
      <div className="text-center text-sky-500 font-semibold text-xl sm:text-3xl md:text-4xl tracking-wide mb-8">
        HOW IT WORKS
      </div>
      <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-amber-400">
        In an FTC Competition, teams...
      </h2>
    </div>

    {/* Cards */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* CARD 1 */}
      <div
        className="
          group cursor-pointer rounded-xl 
          p-8
          border border-white/10
          transition-all duration-300
          hover:border-sky-400
          hover:shadow-[0_0_0_1px_rgba(56,189,248,0.6),0_0_30px_rgba(56,189,248,0.15)]
        "
      >
        <div className="
          mb-5 w-14 h-14 rounded-lg
          flex items-center justify-center
          bg-white/5 text-sky-400
          group-hover:bg-sky-400/10
          group-hover:text-sky-300
          transition
        ">
          🤖
        </div>
        <div className="mt-2 text-sm text-gray-200 group-hover:text-white transition">
          Compete in robot matches on a standardized game field.
        </div>
      </div>

      {/* CARD 2 */}
      <div
        className="
          group cursor-pointer rounded-xl 
          p-8
          border border-white/10
          transition-all duration-300
          hover:border-sky-400
          hover:shadow-[0_0_0_1px_rgba(56,189,248,0.6),0_0_30px_rgba(56,189,248,0.15)]
        "
      >
        <div className="
          mb-5 w-14 h-14 rounded-lg
          flex items-center justify-center
          bg-white/5 text-sky-400
          group-hover:bg-sky-400/10
          group-hover:text-sky-300
          transition
        ">
          ⚙️
        </div>

        <div className="text-gray-200 font-semibold group-hover:text-sky-300 transition">
          Autonomous + Driver-Controlled
        </div>

        <div className="mt-2 text-sm text-white/70 group-hover:text-white transition">
          Demonstrate performance in autonomous and driver-controlled modes.
        </div>
      </div>

      {/* CARD 3 */}
      <div
        className="
          group cursor-pointer rounded-xl 
          p-8
          border border-white/10
          transition-all duration-300
          hover:border-sky-400
          hover:shadow-[0_0_0_1px_rgba(56,189,248,0.6),0_0_30px_rgba(56,189,248,0.15)]
        "
      >
        <div className="
          mb-5 w-14 h-14 rounded-lg
          flex items-center justify-center
          bg-white/5 text-sky-400
          group-hover:bg-sky-400/10
          group-hover:text-sky-300
          transition
        ">
          💡
        </div>

        <div className="text-gray-200 font-semibold group-hover:text-sky-300 transition">
          Judged beyond matches
        </div>

        <div className="mt-2 text-sm text-white/70 group-hover:text-white transition">
          Evaluated on robot design, programming, engineering documentation,
          innovation, and teamwork.
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ✅ FTC GAME section (image left + text right like your website) */}
      {/* ✅ FTC GAME section (light UI like your 2nd section — TEXT UNCHANGED) */}
<section className="bg-white">
  <div className="max-w-7xl mx-auto px-3 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* LEFT IMAGE */}
      <div className="rounded-2xl overflow-hidden shadow-xl w-full">
        <img
          src={ftc3}
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
            <div className="text-amber-400 text-xl font-bold tracking-wide uppercase">
              FTC GAME (CHANGES EVERY YEAR)
            </div>
          </div>
        </div>
        {/* Paragraphs (TEXT UNCHANGED) */}
        <p className="mt-6 text-slate-600 text-lg leading-8">
          A key feature of the FIRST Tech Challenge is that the game changes
          every year. At the start of each season, FIRST® releases a new
          game challenge with a unique theme, objectives, field layout,
          rules, and scoring system.
        </p>

        <p className="mt-2 text-slate-600 text-lg leading-8">
          Each game consists of two main phases:
        </p>

        {/* Cards (light UI) */}
        <div className="mt-6 space-y-4">
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
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold  text-center">
            Participation in FIRST Tech Challenge helps students IMMENSELY
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
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
