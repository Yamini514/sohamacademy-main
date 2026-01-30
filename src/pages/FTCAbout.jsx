import React from "react";
import Container from "../components/layout/Container";
import { FtcEyebrow, FtcHeading, FTC_SIDE_PX } from "../components/ftc/FtcSection";
import ftchero from "../assets/Ftc-About/ftchero.png";
import aboutimage from "../assets/Ftc-About/aboutimage.png";
import Ftcgame from "../assets/Ftc-About/Ftcgame.png";

// Reusable label with cyan bar and amber text
function SectionLabel({ children, variant = "light" }) {
  const labelColor = "text-amber-400";
  const barColor = variant === "dark" ? "bg-sky-400" : "bg-sky-500";
  return (
    <div className="flex items-center gap-3">
      <span className={`w-1.5 h-8 sm:h-9 rounded-full ${barColor}`} />
      <span className={`${labelColor} text-xs sm:text-sm font-bold uppercase tracking-[0.2em]`}>
        {children}
      </span>
    </div>
  );
}

// Reusable body text
function BodyText({ children, variant = "light", className = "", as = "p" }) {
  const Tag = as;
  const base =
    variant === "dark"
      ? "text-white/85 text-base sm:text-lg leading-relaxed"
      : "text-slate-700 text-base sm:text-lg leading-relaxed";
  return <Tag className={`${base} ${className}`}>{children}</Tag>;
}

function LightCard({ title, desc }) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
      <div className="text-base sm:text-lg font-semibold text-slate-900">{title}</div>
      <div className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
        {desc}
      </div>
    </div>
  );
}

export default function FTCAbout() {
  return (
    <main className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-white py-12 md:py-16">
        <Container className={FTC_SIDE_PX}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT TEXT */}
            <div className="max-w-xl">
              <SectionLabel>INTERNATIONAL ROBOTICS COMPETITION</SectionLabel>

              <h1 className="mt-4 font-bold text-2xl">
                First Tech Challenge (FTC)
                <br />
                Competition
              </h1>

              <BodyText className="mt-5">
                FIRST Tech Challenge (FTC) is an internationally recognized robotics
                competition organized by FIRST (For Inspiration and Recognition of
                Science and Technology). It is designed for school students from
                Grades 7 to 12 and focuses on developing skills in Science,
                Technology, Engineering, and Mathematics (STEM) through hands-on
                learning.
              </BodyText>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-xl">
                <img
                  src={ftchero}
                  alt="FTC Hero"
                  className="w-full h-[280px] sm:h-[320px] md:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT FTC (dark) */}
      <section id="about-ftc" className="bg-[#071A2B] py-12 md:py-16">
        <Container className={FTC_SIDE_PX}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <FtcHeading
                titleClassName="text-white"
                barClassName="bg-sky-400"
                subtitleClassName="text-white/70"
              >
                About FTC
              </FtcHeading>

              <BodyText variant="dark">
                In FIRST Tech Challenge (FTC), students work in teams to design,
                build, program, and test robots using real-world engineering tools
                such as motors, sensors, control systems, and programming
                platforms.
              </BodyText>

              <BodyText variant="dark" className="mt-4">
                The program encourages students to apply theoretical knowledge to
                practical challenges, closely simulating real engineering and
                industry environments. FTC strongly promotes innovation, critical
                thinking, creativity, teamwork, and ethical values, following the
                principles of Gracious Professionalism and Cooperative Competition.
              </BodyText>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-xl">
                <img
                  src={aboutimage}
                  alt="FTC students working on robot"
                  className="w-full h-[320px] md:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-12 md:py-16 bg-white">
        <Container className={FTC_SIDE_PX}>
          <div className="max-w-3xl">
            <FtcEyebrow>How it works</FtcEyebrow>
            <FtcHeading>In an FTC Competition, teams...</FtcHeading>
            <BodyText>
              Students learn, compete, and grow through a structured robotics
              challenge that mirrors real-world engineering.
            </BodyText>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "R",
                title: "Compete in robot matches",
                desc: "Teams build and compete with robots on a standardized game field.",
              },
              {
                icon: "A",
                title: "Autonomous and Driver-Controlled",
                desc: "Robots perform tasks in both autonomous and driver-controlled modes.",
              },
              {
                icon: "J",
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

                <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 group-hover:text-slate-700 transition">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FTC GAME */}
      <section className="bg-white py-12 md:py-16">
        <Container className={FTC_SIDE_PX}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-xl w-full">
              <img
                src={Ftcgame}
                alt="FTC Game"
                className="w-full h-[420px] md:h-[520px] object-cover"
                loading="lazy"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="max-w-xl">
              <FtcHeading>FTC Game (Changes Every Year)</FtcHeading>

              <BodyText>
                A key feature of the FIRST Tech Challenge is that the game changes
                every year. At the start of each season, FIRST releases a new game
                challenge with a unique theme, objectives, field layout, rules,
                and scoring system.
              </BodyText>

              <BodyText className="mt-4">Each game consists of two main phases:</BodyText>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-base sm:text-lg font-semibold text-slate-900">
                    Autonomous Period
                  </div>
                  <div className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                    Robots operate independently using pre-programmed logic and
                    sensors.
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-base sm:text-lg font-semibold text-slate-900">
                    Driver-Controlled Period
                  </div>
                  <div className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                    Students control the robot using game controllers to score
                    points strategically.
                  </div>
                </div>
              </div>

              <BodyText className="mt-4">
                Because the game changes annually, teams must analyze rules,
                redesign robots, improve programming, and develop new solutions
                each season-fostering adaptability and continuous learning.
              </BodyText>
            </div>
          </div>
        </Container>
      </section>

      {/* EDUCATIONAL VALUE */}
      <section className="bg-white py-12 md:py-16">
        <Container className={FTC_SIDE_PX}>
          <FtcHeading>
            Participation in FIRST Tech Challenge helps students immensely
          </FtcHeading>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <LightCard
              title="Innovation and Critical Thinking"
              desc="Students learn to solve complex problems through design-thinking and iteration."
            />
            <LightCard
              title="Teamwork and Leadership"
              desc="Build strong communication, collaboration, and leadership skills."
            />
            <LightCard
              title="STEM Career Foundation"
              desc="Hands-on exposure to robotics, engineering, and programming builds career readiness."
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
