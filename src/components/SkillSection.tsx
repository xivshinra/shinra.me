import {
  SiAdobe,
  SiAffinity,
  SiBlender,
  SiCss3,
  SiFigma,
  SiHostinger,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiOpenai,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiVercel,
} from "react-icons/si";

function SkillSection() {
  return (
    <div className="my-12 md:my-16">
      <h2 className="text-xl font-semibold font-exo2">Outils et compétences</h2>
      <div className="grid grid-cols-10 gap-8 lg:gap-y-16 py-8 lg:py-12 lg:justify-between text-gray-950 dark:text-muted">
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiHtml5
            size={40}
            title="HTML5"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiCss3
            size={40}
            title="CSS3"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiTailwindcss
            size={40}
            title="Tailwind CSS"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiShadcnui
            size={40}
            title="shadcn UI"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiJavascript
            size={40}
            title="JavaScript"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiNodedotjs
            size={40}
            title="Node.js"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiReact
            size={40}
            title="React.js"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiNextdotjs
            size={40}
            title="Next.js"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiVercel
            size={40}
            title="Vercel"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiSupabase
            size={40}
            title="Supabase"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiNetlify
            size={40}
            title="Netlify"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiFigma
            size={40}
            title="Figma"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiAffinity
            size={40}
            title="Affinity"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiAdobe
            size={40}
            title="Adobe"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiBlender
            size={40}
            title="Blender"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiThreedotjs
            size={40}
            title="Three.js"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiOpenai
            size={40}
            title="Open AI"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiPython
            size={40}
            title="Python"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiNotion
            size={40}
            title="Notion"
            className="hover:text-primary"
          />
        </div>
        <div className=" flex justify-center items-center col-span-2 lg:col-span-1">
          <SiHostinger
            size={40}
            title="Hostinger"
            className="hover:text-primary"
          />
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
