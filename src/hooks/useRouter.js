import { useEffect, useState, useCallback } from "react";

// Minimal hash-based router — safe on GitHub Pages, no dep.
// Routes: "/", "/projects/:slug", "/blog/:slug"

const parseHash = () => {
  const raw = (window.location.hash || "#/").replace(/^#/, "") || "/";
  return raw;
};

export const useRouter = () => {
  const [path, setPath] = useState(parseHash);

  useEffect(() => {
    const onHash = () => setPath(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = useCallback((to) => {
    if (!to.startsWith("/")) to = "/" + to;
    window.location.hash = "#" + to;
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, []);

  const match = (pattern) => {
    // "/projects/:slug"
    const pParts = pattern.split("/").filter(Boolean);
    const uParts = path.split("/").filter(Boolean);
    if (pParts.length !== uParts.length) return null;
    const params = {};
    for (let i = 0; i < pParts.length; i++) {
      if (pParts[i].startsWith(":")) params[pParts[i].slice(1)] = uParts[i];
      else if (pParts[i] !== uParts[i]) return null;
    }
    return params;
  };

  return { path, navigate, match };
};
