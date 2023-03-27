import React from "react";
import Hero from "../components/Hero/Hero";
import Latest from "../components/Latest/Latest";
import Nav from "../components/Nav/Nav";
import Sales from "../components/Sales/Sales";
import Customer from "../components/Customer/Customer";
export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Sales />
      <Latest />
      <Customer />
    </div>
  );
}
