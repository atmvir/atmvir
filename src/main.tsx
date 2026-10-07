import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SkillPage } from "./pages/SkillPage";
import { Blog, BlogPost } from "./pages/Blog";
import "./styles.css";

function App() {
  const [, refresh] = useState(0);
  useEffect(() => { const fn = () => refresh(x => x + 1); window.addEventListener("popstate", fn); return () => window.removeEventListener("popstate", fn); }, []);
  return <BrowserRouter><Routes><Route element={<Layout/>}><Route path="/" element={<Home/>}/><Route path="/ai-engineering" element={<SkillPage slug="ai-engineering"/>}/><Route path="/full-stack" element={<SkillPage slug="full-stack"/>}/><Route path="/cybersecurity" element={<SkillPage slug="cybersecurity"/>}/><Route path="/automation" element={<SkillPage slug="automation"/>}/><Route path="/blog" element={<Blog/>}/><Route path="/blog/:slug" element={<BlogRoute/>}/><Route path="*" element={<Home/>}/></Route></Routes></BrowserRouter>;
}
function BlogRoute() {
  const slug = window.location.pathname.split("/").pop() || "";
  return <BlogPost slug={slug}/>;
}
ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);