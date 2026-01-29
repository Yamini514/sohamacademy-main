import React from "react";
import ftchero from "../assets/Ftc-About/ftchero.png";
import aboutimage from "../assets/Ftc-About/aboutimage.png";
import Ftcgame from "../assets/Ftc-About/Ftcgame.png";

/** ✅ Reusable: cyan bar + amber label (same as HERO) */
function SectionLabel({ children, variant = "light" }) {
  const labelColor = variant === "dark" ? "text-amber-400" : "text-amber-400";
  return (
    <div className="flex items-center  px-3 gap-4">
      <span className="w-2 h-10 rounded-full bg-sky-500" />
      <span
        className={`${labelColor} text-xl font-bold uppercase leading-none tracking-wide`}
      >
        {children}
      </span>
    </div>
  );
}

/** ✅ Reusable: consistent headings */
function SectionHeading({ children, as = "h2", center = false }) {
  const Tag = as;
  return (
    <Tag
      className={[
        "mt-3 text-2xl md:text-3xl font-extrabold leading-tight",
        "text-slate-900",
        center ? "text-center" : "",
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}

/** ✅ Reusable: body text (light/dark variants) */
function BodyText({ children, variant = "light", className = "" }) {
  const base =
    variant === "dark"
      ? "text-white/80 text-lg leading-8"
      : "text-slate-600 text-xl leading-8";
  return <p className={`${base} ${className}`}>{children}</p>;
}

function LightCard({ title, desc }) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <div className="text-base text-slate-600 mt-2 leading-7">{desc}</div>
    </div>
  );
}

export default function FTCAbout() {
  return (
    <main className="bg-white min-h-screen">
      {/* ✅ HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT TEXT */}
            <div className="max-w-xl">
              <SectionLabel>INTERNATIONAL ROBOTICS COMPETITION</SectionLabel>

              <h1 className="mt-2 text-2xl md:text-2xl font-extrabold px-3 text-slate-900 leading-tight">
                First Tech Challenge (FTC)
                <br />
                Competition
              </h1>

              <BodyText className="mt-6 px-3">
                FIRST Tech Challenge (FTC) is an internationally recognized
                robotics competition organized by FIRST® (For Inspiration and
                Recognition of Science and Technology). It is designed for
                school students from Grades 7 to 12 and focuses on developing
                skills in Science, Technology, Engineering, and Mathematics
                (STEM) through hands-on learning.
              </BodyText>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-xl">
                <img
                  src={ftchero}
                  alt="FTC Hero"
                  className="w-full h-[300px] md:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ ABOUT FTC (dark) */}
      <section id="about-ftc" className="bg-[#071A2B] py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-7 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <SectionLabel variant="dark">ABOUT FTC</SectionLabel>

              <BodyText variant="dark" className="mt-2 px-3">
                In FIRST Tech Challenge (FTC), students work in teams to design,
                build, program, and test robots using real-world engineering
                tools such as motors, sensors, control systems, and programming
                platforms.
              </BodyText>

              <BodyText variant="dark" className="mt-5 px-3">
                The program encourages students to apply theoretical knowledge
                to practical challenges, closely simulating real engineering and
                industry environments.
              
                FTC strongly promotes innovation, critical thinking, creativity,
                teamwork, and ethical values, following the principles of
                Gracious Professionalism® and Cooperative Competition.
              </BodyText>
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

      {/* ✅ HOW IT WORKS */}
      <section id="how-it-works" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-sky-500 font-semibold text-lg uppercase tracking-wide">
              How it works
            </div>

            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-amber-400">
              In an FTC Competition, teams…
            </h2>

            <p className="mt-3 text-slate-600 text-lg leading-8">
              Students learn, compete, and grow through a structured robotics
              challenge that mirrors real-world engineering.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="group relative rounded-2xl p-8 bg-white border border-slate-200 transition-all duration-300 hover:border-sky-400 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 w-14 h-14 rounded-xl flex items-center justify-center bg-sky-100 text-2xl group-hover:bg-sky-200 transition">
                  {card.icon}
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-slate-600 group-hover:text-slate-700 transition">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ FTC GAME */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-xl w-full">
              <img
                src={Ftcgame}
                alt="FTC Game"
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="max-w-xl">
              <SectionLabel>FTC GAME (CHANGES EVERY YEAR)</SectionLabel>

              <BodyText className="mt-2 px-3">
                <p className="mt-3 text-slate-600 text-lg leading-8">
                A key feature of the FIRST Tech Challenge is that the game
                changes every year. At the start of each season, FIRST® releases
                a new game challenge with a unique theme, objectives, field
                layout, rules, and scoring system.
                </p>
              </BodyText>


              <BodyText className=" px-3">
               <p className="mt-3 text-slate-600 text-lg leading-8">
                Each game consists of two main phases:
                </p>
              </BodyText>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-lg font-semibold text-slate-900">
                    Autonomous Period
                  </div>
                  <div className="text-base text-slate-600 mt-2 leading-4">
                    Robots operate independently using pre-programmed logic and
                    sensors.
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-lg font-semibold text-slate-900">
                    Driver-Controlled Period
                  </div>
                  <div className="text-base text-slate-600 mt-2 leading-4">
                    Students control the robot using game controllers to score
                    points strategically.
                  </div>
                </div>
              </div>

              <BodyText className="mt-2">
                <p className="mt-3 text-slate-600 text-lg leading-8">
                Because the game changes annually, teams must analyze rules,
                redesign robots, improve programming, and develop new solutions
                each season—fostering adaptability and continuous learning.
                </p>
              </BodyText>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ EDUCATIONAL VALUE */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-10 py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-400">
            Participation in FIRST Tech Challenge helps students IMMENSELY
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
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
