import { useState } from "react";
import { getTop7ModulesData } from "@/data/modulesData";
import { Play, Check, ChevronRight, Sparkles } from "lucide-react";

export const Top7VideosSection = () => {
  const top7 = getTop7ModulesData();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedModule = top7[selectedIndex];

  return (
    <section id="top-videos" className="py-24 bg-gradient-to-b from-background via-card/50 to-background overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-semibold text-sm">Demonstrações Interativas</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Top 7 <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">em Ação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore os módulos principais e veja como transformam a gestão de excursões
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Lista de Módulos - Design Moderno */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-card/80 to-card/40 rounded-3xl border border-border/50 p-6 backdrop-blur-xl shadow-2xl shadow-black/5 sticky top-24">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full" />
                  Módulos Principais
                </h3>
                <div className="space-y-3">
                  {top7.map((module, index) => (
                    <button
                      key={module.id}
                      onClick={() => setSelectedIndex(index)}
                      className={`group w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-500 relative overflow-hidden ${
                        selectedIndex === index
                          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-xl shadow-primary/25 scale-[1.02]"
                          : "bg-background/60 hover:bg-background/80 text-foreground hover:shadow-lg hover:scale-[1.01]"
                      }`}
                    >
                      {/* Glow effect for selected */}
                      {selectedIndex === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
                      )}
                      
                      <div className={`relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        selectedIndex === index
                          ? "bg-white/20 text-white"
                          : "bg-primary/10 text-primary group-hover:bg-primary/20"
                      }`}>
                        {index + 1}
                      </div>
                      
                      <div className="relative flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xl flex-shrink-0">{module.emoji}</span>
                          <span className="font-semibold text-sm leading-tight">{module.title}</span>
                        </div>
                        <span className={`text-xs mt-1 block transition-colors ${
                          selectedIndex === index ? "text-white/70" : "text-muted-foreground"
                        }`}>
                          {module.tag}
                        </span>
                      </div>
                      
                      <ChevronRight className={`relative w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                        selectedIndex === index 
                          ? "text-white/80 translate-x-1" 
                          : "text-muted-foreground/50 group-hover:text-foreground group-hover:translate-x-1"
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Player e Conteúdo - Design Premium */}
            <div className="lg:col-span-8 space-y-6">
              {/* Video Player com Efeitos */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-card via-background to-card border border-border/50 shadow-2xl">
                  {/* Placeholder com Design Moderno */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-card/50 to-background/50 backdrop-blur-sm">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse scale-150" />
                      <button className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl shadow-primary/40 group/play">
                        <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover/play:opacity-100 transition-opacity" />
                        <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                      </button>
                    </div>
                    <p className="mt-8 text-muted-foreground text-sm font-medium">
                      Vídeo em breve: <span className="text-foreground">{selectedModule.title}</span>
                    </p>
                  </div>

                  {/* Module Badge */}
                  <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-md border border-border/50 shadow-lg">
                    <span className="text-lg">{selectedModule.emoji}</span>
                    <span className="text-sm font-semibold text-foreground">{selectedModule.tag}</span>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-5 right-5 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>
              </div>

              {/* Resumo do Módulo - Card Premium */}
              <div className={`relative p-8 rounded-3xl border-2 ${selectedModule.borderColor} overflow-hidden transition-all duration-500`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${selectedModule.bgColor} opacity-50`} />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/20 to-background/40" />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg border border-border/30">
                      <span className="text-4xl">{selectedModule.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <h3 className="text-2xl font-bold text-foreground">{selectedModule.title}</h3>
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${selectedModule.tagColor} shadow-sm`}>
                          {selectedModule.tag}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedModule.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedModule.features.slice(0, 6).map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30 hover:bg-background/70 transition-colors group/feature"
                      >
                        <div className="w-6 h-6 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feature:bg-secondary/30 transition-colors">
                          <Check className="w-3.5 h-3.5 text-secondary" />
                        </div>
                        <span className="text-sm text-foreground/80 leading-relaxed">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                  
                  {selectedModule.features.length > 6 && (
                    <div className="mt-6 text-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                        <Sparkles className="w-4 h-4" />
                        + {selectedModule.features.length - 6} funcionalidades neste módulo
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
