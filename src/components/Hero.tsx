import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useSmartNavigation } from "@/hooks/useSmartNavigation";
import heroImage from "@/assets/hero-bg.jpg";


export const Hero = () => {
  const { navigateToSection } = useSmartNavigation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Stats Banner */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-xl px-4 py-3 text-center">
              <span className="text-2xl md:text-3xl font-bold text-primary">74</span>
              <span className="text-muted-foreground ml-2 text-sm">Tabelas</span>
            </div>
            <div className="bg-card/60 backdrop-blur-sm border border-secondary/30 rounded-xl px-4 py-3 text-center">
              <span className="text-2xl md:text-3xl font-bold text-secondary">44</span>
              <span className="text-muted-foreground ml-2 text-sm">Permissões</span>
            </div>
            <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-xl px-4 py-3 text-center">
              <span className="text-2xl md:text-3xl font-bold text-primary">13</span>
              <span className="text-muted-foreground ml-2 text-sm">Módulos</span>
            </div>
          </div>
          
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-primary font-semibold">🏆 Plataforma Nº1 em Gestão de Caravanas</span>
          </div>
          
          <h1 className="text-foreground drop-shadow-lg font-bebas text-6xl md:text-8xl tracking-wide leading-tight">
            A plataforma nº1 para gestão de caravanas esportivas
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Organize viagens, passageiros, ingressos e pagamentos com um só sistema — 
            <span className="text-primary font-semibold"> simples, visual e rápido.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={() => navigateToSection('top-videos')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 text-lg px-8 py-6 animate-glow-pulse font-bold"
            >
              ⭐ Ver TOP 7 Módulos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigateToSection('what-is')}
              className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 text-lg px-8 py-6"
            >
              O que é GoFans?
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigateToSection('cta')}
              className="border-2 border-secondary/30 hover:border-secondary hover:bg-secondary/10 text-lg px-8 py-6"
            >
              📅 Agendar Demonstração
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => navigateToSection('what-is')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float cursor-pointer hover:text-primary transition-colors"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};
