import React from "react";
import Hero from "../components/Hero/Hero";
import Latest from "../components/Latest/Latest";
import Nav from "../components/Nav/Nav";
import Sales from "../components/Sales/Sales";
export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Sales />
      <Latest />
    </div>
  );
}
