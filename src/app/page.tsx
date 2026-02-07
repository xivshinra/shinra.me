// IMPORTS
import FancyText from "@/components/home/FancyText";
import { FaqSection } from "@/components/home/FaqSection";
import HelloWorld from "@/contents/hello-world.mdx";

// COMPONENT
export default function Home() {
  return (
    <>
      <header className="lg:py-4 mt-8 space-y-8">
        <div className="flex justify-center relative">
          <img
            src="/assets/avatar.jpg"
            alt="Avatar"
            width={130}
            height={130}
            className="rounded-l-full rounded-tr-full drop-shadow-lg shadow-lg shadow-fuchsia-400/50"
            draggable="false"
          />
        </div>

        <FancyText />
      </header>
      <article className="prose max-w-none py-8 lg:prose-h1:text-3xl prose-h1:font-bold prose-h2:text-xl prose-h2:text-bold prose-h2:font-exo2 dark:prose-invert prose-headings:font-exo2 prose-p:leading-8">
        <HelloWorld />
      </article>
      <FaqSection />
    </>
  );
}
