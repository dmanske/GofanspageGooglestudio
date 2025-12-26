import { useState } from "react";
import { getTop7ModulesData } from "@/data/modulesData";
import { Play, Check, ChevronRight, Trophy } from "lucide-react";
import celebrationBg from "@/assets/football/celebration.jpg";

export const Top7VideosSectionFootball = () => {
  const top7 = getTop7ModulesData();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedModule = top7[selectedIndex];

  return (
    <section id="top-videos" className="py-24 overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${celebrationBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950/95"></div>
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Os 7 Módulos Principais</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            TOP 7 <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">em Ação</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Explore os módulos que fazem a diferença na gestão de caravanas
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Lista de Módulos */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-6 shadow-2xl sticky top-24">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
                  Módulos Principais
                </h3>
                <div className="space-y-3">
                  {top7.map((module, index) => (
                    <button
                      key={module.id}
                      onClick={() => setSelectedIndex(index)}
                      className={`group w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-500 ${
                        selectedIndex === index
                          ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-600/20 scale-[1.02]"
                          : "bg-slate-800/30 hover:bg-slate-800/50 text-white hover:shadow-lg border border-slate-700/50"
                      }`}
                    >
                      <div className={`relative flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        selectedIndex === index
                          ? "bg-white/20 text-white"
                          : "bg-blue-500/10 text-blue-400"
                      }`}>
                        {index + 1}
                      </div>
                      
                      <div className="relative flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xl flex-shrink-0">{module.emoji}</span>
                          <span className="font-medium text-sm leading-tight">{module.title}</span>
                        </div>
                        <span className={`text-xs mt-1 block transition-colors ${
                          selectedIndex === index ? "text-white/70" : "text-slate-500"
                        }`}>
                          {module.tag}
                        </span>
                      </div>
                      
                      <ChevronRight className={`relative w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                        selectedIndex === index 
                          ? "text-white/80 translate-x-1" 
                          : "text-slate-500 group-hover:text-white group-hover:translate-x-1"
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Player e Conteúdo */}
            <div className="lg:col-span-8 space-y-6">
              {/* Video Player */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-40 animate-pulse scale-150" />
                      <button className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl shadow-blue-500/40">
                        <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                      </button>
                    </div>
                    <p className="mt-8 text-slate-400 text-sm font-medium">
                      🎬 Vídeo em breve: <span className="text-blue-400 font-semibold">{selectedModule.title}</span>
                    </p>
                  </div>

                  {/* Module Badge */}
                  <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 shadow-lg">
                    <span className="text-lg">{selectedModule.emoji}</span>
                    <span className="text-sm font-medium text-slate-300">{selectedModule.tag}</span>
                  </div>
                </div>
              </div>

              {/* Resumo do Módulo */}
              <div className="relative p-8 rounded-3xl border border-slate-700/50 overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl">
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg border border-slate-700/50">
                      <span className="text-4xl">{selectedModule.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <h3 className="text-2xl font-bold text-white">{selectedModule.title}</h3>
                        <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-700/50 text-slate-400">
                          {selectedModule.tag}
                        </span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">
                        {selectedModule.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedModule.features.slice(0, 6).map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/20 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-blue-400" />
                        </div>
                        <span className="text-sm text-slate-300 leading-relaxed">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                  
                  {selectedModule.features.length > 6 && (
                    <div className="mt-6 text-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
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