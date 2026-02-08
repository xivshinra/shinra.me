"use client";

import { useState, useEffect } from "react";

const words = [
  "Identité visuelle",
  "Site internet",
  "Application mobile",
  "Hébergement",
  "Automatisation IA",
  "Espace de gestion",
];

export default function FancyText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];

    let timeout: NodeJS.Timeout;

    if (!deleting && text === word) {
      // pause fin d'écriture
      timeout = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      // mot suivant
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const speed = deleting ? 40 : 80;

    timeout = setTimeout(() => {
      setText((prev) =>
        deleting
          ? word.slice(0, prev.length - 1)
          : word.slice(0, prev.length + 1),
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <h1 className="text-center text-2xl leading-16 font-exo2 font-bold">
      Réalisons vos objectifs
      <span className="text-primary block mt-4 lg:text-3xl">
        {text}
        <span className="ml-1 animate-blink">|</span>
      </span>
    </h1>
  );
}
