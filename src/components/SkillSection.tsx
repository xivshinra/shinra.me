import {
  SiAffinity,
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiVercel,
} from "react-icons/si";

function SkillSection() {
  return (
    <div className="grid grid-cols-7 gap-8 lg:gap-y-16 my-8 lg:py-8 lg:justify-between text-gray-950 dark:text-muted">
      <SiHtml5
        size={40}
        title="HTML5"
        className="hover:text-primary"
      />
      <SiCss3
        size={40}
        title="CSS3"
        className="hover:text-primary"
      />
      <SiTailwindcss
        size={40}
        title="Tailwind CSS"
        className="hover:text-primary"
      />
      <SiShadcnui
        size={40}
        title="shadcn UI"
        className="hover:text-primary"
      />
      <SiJavascript
        size={40}
        title="JavaScript"
        className="hover:text-primary"
      />
      <SiNodedotjs
        size={40}
        title="Node.js"
        className="hover:text-primary"
      />
      <SiReact
        size={40}
        title="React.js"
        className="hover:text-primary"
      />
      <SiNextdotjs
        size={40}
        title="Next.js"
        className="hover:text-primary"
      />
      <SiVercel
        size={40}
        title="Vercel"
        className="hover:text-primary"
      />
      <SiSupabase
        size={40}
        title="Supabase"
        className="hover:text-primary"
      />
      <SiNetlify
        size={40}
        title="Netlify"
        className="hover:text-primary"
      />
      <SiFigma
        size={40}
        title="Figma"
        className="hover:text-primary"
      />
      <SiAffinity
        size={40}
        title="Affinity"
        className="hover:text-primary"
      />
      <SiThreedotjs
        size={40}
        title="Three.js"
        className="hover:text-primary"
      />
    </div>
  );
}

export default SkillSection;
