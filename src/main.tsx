import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SkillPage } from "./pages/SkillPage";
import { Blog, BlogPost } from "./pages/Blog";
import "./styles.css";

function BlogRoute() {
  const { slug = "" } = useParams();
  return <BlogPost slug={slug} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ai-engineering" element={<SkillPage slug="ai-engineering" />} />
          <Route path="/full-stack" element={<SkillPage slug="full-stack" />} />
          <Route path="/cybersecurity" element={<SkillPage slug="cybersecurity" />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogRoute />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);
