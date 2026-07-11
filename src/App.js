import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { useRouter } from "./hooks/useRouter";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { ContactModal } from "./components/modals/ContactModal";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { BlogDetail } from "./pages/BlogDetail";

const Router = () => {
  const { navigate, match } = useRouter();
  const [contactOpen, setContactOpen] = useState(false);

  const openProject = (p) => navigate(`/projects/${p.slug}`);
  const openBlog = (b) => navigate(`/writing/${b.slug}`);
  const openHome = () => navigate("/");
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  const projectMatch = match("/projects/:slug");
  const blogMatch = match("/writing/:slug");

  return (
    <div className="min-h-screen bg-ink-950 text-ink-100">
      <Nav onHome={openHome} onOpenContact={openContact} />
      <main>
        {projectMatch ? (
          <ProjectDetail
            slug={projectMatch.slug}
            onBack={openHome}
            onOpenProject={openProject}
          />
        ) : blogMatch ? (
          <BlogDetail
            slug={blogMatch.slug}
            onBack={openHome}
            onOpenBlog={openBlog}
          />
        ) : (
          <Home
            onOpenProject={openProject}
            onOpenBlog={openBlog}
            onOpenContact={openContact}
          />
        )}
      </main>
      <Footer onOpenContact={openContact} />
      <ContactModal isOpen={contactOpen} onClose={closeContact} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
