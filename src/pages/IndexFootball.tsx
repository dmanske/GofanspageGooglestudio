import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { WhatIsGoFansFootball } from "@/components/football/WhatIsGoFansFootball";
import { AllModulesSectionFootball } from "@/components/football/AllModulesSectionFootball";
import { Top7VideosSectionFootball } from "@/components/football/Top7VideosSectionFootball";
import { SupabaseSectionFootball } from "@/components/football/SupabaseSectionFootball";
import { ComparisonFootball } from "@/components/football/ComparisonFootball";
import { PricingFootball } from "@/components/football/PricingFootball";
import { CTAFootball } from "@/components/football/CTAFootball";
import { ScreenshotsGalleryFootball } from "@/components/football/ScreenshotsGalleryFootball";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useSmartNavigation } from "@/hooks/useSmartNavigation";
import { ChevronDown, ArrowRight, Check, Trophy, Instagram } from "lucide-react";
import heroFansCelebration from "@/assets/football/hero-fans-celebration.png";

const HeroFootball = () => {
  const { navigateToSection } = useSmartNavigation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFansCelebration}
          alt="Torcedores celebrando"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="flex justify-center">
          <div className="max-w-3xl text-center animate-fade-in bg-slate-950/70 backdrop-blur-sm p-6 md:p-10 rounded-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-6 md:mb-8">
              <Trophy className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
              <span className="text-blue-400 font-medium text-xs md:text-sm">Sistema #1 para Caravanas Esportivas</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
              <span className="text-slate-200 font-normal">A plataforma nº1 para</span><br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">gestão de caravanas</span><br />
              <span className="text-white">esportivas</span>
            </h1>

            <p className="text-base md:text-lg text-slate-200 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto drop-shadow-md">
              Organize viagens, passageiros, ingressos e pagamentos com um só sistema — simples, visual e rápido.
            </p>

            {/* Features list */}
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 md:mb-10 text-sm md:text-base">
              {["Banco de dados seguro", "44 permissões", "WhatsApp integrado", "Relatórios em tempo real"].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-white drop-shadow-md">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Button onClick={() => navigateToSection('what-is')} variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white font-semibold text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl">
                O que é GoFans?
              </Button>
              <Button onClick={() => navigateToSection('top-videos')} className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-xl shadow-blue-600/20">
                Ver TOP 7 Módulos <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>

            {/* Instagram Link */}
            <a 
              href="https://instagram.com/gofansoficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@gofansoficial</span>
            </a>
          </div>
        </div>

        <button onClick={() => navigateToSection('what-is')} className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-white transition-colors">
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </section>
  );
};

const IndexFootball = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <div id="hero"><HeroFootball /></div>
      <div id="what-is"><WhatIsGoFansFootball /></div>
      <div id="screenshots"><ScreenshotsGalleryFootball /></div>
      <div id="modules"><AllModulesSectionFootball /></div>
      <div id="videos"><Top7VideosSectionFootball /></div>
      <div id="supabase"><SupabaseSectionFootball /></div>
      <ComparisonFootball />
      <div id="pricing"><PricingFootball /></div>
      <div id="cta"><CTAFootball /></div>
      <Footer />
    </div>
  );
};

export default IndexFootball;