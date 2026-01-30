// src/pages/FTC2023_24.jsx
import React from "react";
import Container from "../components/layout/Container";
import { FtcHeading, FtcText, FTC_SIDE_PX } from "../components/ftc/FtcSection";

export default function FTC2023_24() {
  return (
    <main className="bg-white min-h-screen">
      <section className="pt-10 pb-12">
        <Container className={FTC_SIDE_PX}>
          <FtcHeading as="h1">FTC 2023-24</FtcHeading>
          <FtcText>Content coming soon.</FtcText>
        </Container>
      </section>
    </main>
  );
}
