"use client";

import * as React from "react";

const words = [
  "frontend developer",
  "React builder",
  "Next.js enjoyer",
  "UI designer",
  "Supabase tinkerer",
];

export default function FancyText() {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
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
    <h1 className="text-center text-3xl font-semibold">
      I am a{" "}
      <span className="text-primary">
        {text}
        <span className="ml-1 animate-blink">|</span>
      </span>
    </h1>
  );
}
