import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index.tsx";
import Programs from "./pages/Programs.tsx";
import Impact from "./pages/Impact.tsx";
import Work from "./pages/Work.tsx";
import About from "./pages/About.tsx";
import Apply from "./pages/Apply.tsx";
import VirginiaPark from "./pages/VirginiaPark.tsx";
import BuffaloSoldiers from "./pages/BuffaloSoldiers.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "@/components/ScrollToTop.tsx";
import { useEffect } from "react";
import { preloadImages } from "@/lib/imageCache";
import VirginiaCaseStudy from "./pages/VirginiaCaseStudy.tsx";
import PoleBarn from "./pages/PoleBarn.tsx";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    preloadImages(["/images/eiti-black.png", "/images/eiti-white.png"]);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/virginia-park" element={<VirginiaPark />} />
              <Route path="/work/buffalo-soldiers" element={<BuffaloSoldiers />} />
              <Route path="/about" element={<About />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/virginia-park" element={<VirginiaCaseStudy />} />
              <Route path="/pole-barn" element={<PoleBarn />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;