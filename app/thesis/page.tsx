"use client";

import { useEffect } from "react";

const THESIS_FILE = "/MSc_Thesis_Florian_van_der_Dussen_21_4_2026.pdf";
const THESIS_TITLE = "Sensing the Streets — Development of a mobile Low-Cost Air Quality Network for Groningen";

export default function ThesisDownload() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = THESIS_FILE;
    link.download = "MSc_Thesis_Florian_van_der_Dussen.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section className="max-container padding-container flex flex-col items-center justify-center min-h-[70vh] py-20 gap-4 text-center">
      <h1 className="bold-40 lg:bold-64">MSc Thesis</h1>
      <h2 className="bold-20 text-gray-400">Florian van der Dussen</h2>
      <p className="regular-16 text-gray-500 max-w-xl">{THESIS_TITLE}</p>
      <p className="regular-14 text-gray-400 mt-4">
        Your download should start automatically.{" "}
        <a href={THESIS_FILE} download="MSc_Thesis_Florian_van_der_Dussen.pdf" className="underline hover:text-gray-200">
          Click here
        </a>{" "}
        if it does not.
      </p>
    </section>
  );
}
