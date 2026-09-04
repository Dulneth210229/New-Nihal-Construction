import { useEffect } from "react";
import { smoothScrollTo } from "../lib/lenis";

interface PageMeta {
  title: string;
  description?: string;
}

function setMetaTag(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title;
    if (description) {
      setMetaTag("description", description);
      setMetaTag("og:description", description, true);
    }
    setMetaTag("og:title", title, true);
    smoothScrollTo(0, { immediate: true });
  }, [title, description]);
}
