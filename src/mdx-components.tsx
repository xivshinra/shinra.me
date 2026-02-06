import type { MDXComponents } from "mdx/types";
import DemoCta from "@/components/mdx-components/DemoCta";
import FancyText from "@/components/mdx-components/FancyText";

const components: MDXComponents = {
  DemoCta,
  FancyText,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
