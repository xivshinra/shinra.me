import type { MDXComponents } from "mdx/types";
import DemoCta from "@/components/mdx-components/DemoCta";

const components: MDXComponents = {
  DemoCta,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
