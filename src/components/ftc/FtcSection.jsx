import React from "react";
import Container from "../layout/Container";

export const FTC_SIDE_PX = "px-12 sm:px-12 md:px-10 lg:px-11 xl:px-11";

export function FtcEyebrow({ children, className = "", center = false }) {
  return (
    <div
      className={[
        center ? "text-center" : "",
        "text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-sky-500",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function FtcHeading({
  children,
  as = "h2",
  className = "",
  subtitle,
  subtitleClassName = "",
  titleClassName = "",
  barClassName = "",
}) {
  const Tag = as;
  return (
    <div className={["mb-6", className].join(" ")}>
      <div className="flex items-center gap-3 mt-2">
        <span
          aria-hidden="true"
          className={["w-1.5 h-12 rounded bg-sky-500", barClassName].join(" ")}
        />
        <Tag
          className={[
            "text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-slate-900",
            titleClassName,
          ].join(" ")}
        >
          {children}
        </Tag>
      </div>
      {subtitle && (
        <p
          className={[
            "mt-1 md:mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-[var(--color-text-secondary,#6b7280)]",
            subtitleClassName,
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function FtcText({
  children,
  className = "",
  tone = "light",
  size = "base",
  as = "p",
}) {
  const Tag = as;
  const toneClass = tone === "dark" ? "text-white/85" : "text-slate-700";
  const sizeClass =
    size === "lg"
      ? "text-lg sm:text-xl leading-relaxed"
      : "text-base sm:text-lg leading-relaxed";

  return (
    <Tag className={[toneClass, sizeClass, className].join(" ")}>
      {children}
    </Tag>
  );
}

export default function FtcSection({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  containerClassName = "",
}) {
  return (
    <section className={["py-10 md:py-14", className].join(" ")}>
      <Container className={[FTC_SIDE_PX, containerClassName].join(" ")}>
        {eyebrow && <FtcEyebrow>{eyebrow}</FtcEyebrow>}
        {title && <FtcHeading subtitle={subtitle}>{title}</FtcHeading>}
        {children}
      </Container>
    </section>
  );
}
