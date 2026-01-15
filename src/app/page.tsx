// IMPORTS
import HelloWorld from "@/contents/hello-world.mdx";

// COMPONENT
export default function Home() {
  return (
    <>
      <article className="prose max-w-none py-8 prose-h1:text-4xl prose-h1:font-bold prose-h2:text-xl prose-h2:text-bold dark:prose-invert">
        <HelloWorld />
      </article>
    </>
  );
}
