import { useState } from "react";
import { modules, Module } from "@/data/modulesData";
import { Check, ArrowRight, Building2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import tacticalBoardBg from "@/assets/football/tactical-board.jpg";

const categories = [
  {
    id: "operacional",
    title: "Operacional",
    emoji: "⚙️",
    color: "text-blue-400",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/20",
    modules: ["viagens", "clientes", "onibus", "qrcode", "fornecedores"]
  },
  {
    id: "financeiro",
    title: "Financeiro",
    emoji: "💰",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/5",
    borderColor: "border-emerald-500/20",
    modules: ["financeiro", "creditos", "ingressos"]
  },
  {
    id: "comunicacao",
    title: "Comunicação",
    emoji: "💬",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/5",
    borderColor: "border-cyan-500/20",
    modules: ["whatsapp"]
  },
  {
    id: "sistema",
    title: "Sistema",
    emoji: "🔧",
    color: "text-violet-400",
    bgColor: "bg-violet-500/5",
    borderColor: "border-violet-500/20",
    modules: ["seguranca", "dashboard"]
  }
];

export const AllModulesSectionFootball = () => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const getModulesByCategory = (categoryModuleIds: string[]) => {
    return categoryModuleIds.map(id => modules.find(m => m.id === id)).filter(Boolean);
  };

  return (
    <section id="all-modules" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${tacticalBoardBg})`,
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
            <Building2 className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Plataforma Completa</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            11 Módulos <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Integrados</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Arquitetura modular projetada para escalar com sua operação
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-5xl mx-auto">
          <Accordion type="multiple" defaultValue={["operacional"]} className="space-y-4">
            {categories.map((category) => {
              const categoryModules = getModulesByCategory(category.modules);
              
              return (
                <AccordionItem 
                  key={category.id} 
                  value={category.id}
                  className={`border ${category.borderColor} rounded-2xl overflow-hidden ${category.bgColor} backdrop-blur-sm`}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${category.bgColor} border ${category.borderColor} flex items-center justify-center`}>
                        <span className="text-xl">{category.emoji}</span>
                      </div>
                      <div className="text-left">
                        <h3 className={`text-lg font-semibold ${category.color}`}>
                          {category.title}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {categoryModules.length} módulo{categoryModules.length > 1 ? 's' : ''} disponível{categoryModules.length > 1 ? 'is' : ''}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categoryModules.map((module) => {
                        if (!module) return null;
                        
                        return (
                          <div
                            key={module.id}
                            onClick={() => setSelectedModule(module)}
                            className="group relative p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-800/50"
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <span className="text-xl">{module.emoji}</span>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-white text-sm">
                                  {module.title}
                                </h4>
                                <span className="inline-block text-xs px-2 py-0.5 rounded-full mt-1 bg-slate-700/50 text-slate-400">
                                  {module.tag}
                                </span>
                              </div>
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-2">
                              {module.description}
                            </p>
                            <div className="mt-3 flex items-center text-xs text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                              <span>Ver detalhes</span>
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "74", label: "Tabelas" },
            { value: "44", label: "Permissões" },
            { value: "11", label: "Módulos" },
            { value: "100%", label: "Responsivo" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedModule} onOpenChange={(open) => !open && setSelectedModule(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50">
          {selectedModule && (
            <>
              <DialogHeader className="pb-4 border-b border-slate-700/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <span className="text-3xl">{selectedModule.emoji}</span>
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-semibold text-white">
                      {selectedModule.title}
                    </DialogTitle>
                    <span className="inline-block text-sm px-3 py-1 rounded-full mt-2 bg-slate-700/50 text-slate-400">
                      {selectedModule.tag}
                    </span>
                  </div>
                </div>
              </DialogHeader>

              <div className="py-4">
                <p className="text-slate-400 mb-6 leading-relaxed">{selectedModule.description}</p>

                <h4 className="text-lg font-semibold text-white mb-4">
                  Recursos ({selectedModule.features.length})
                </h4>
                <div className="space-y-3">
                  {selectedModule.features.map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/20 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <span className="font-medium text-white">{feature.title}</span>
                        {feature.description && (
                          <p className="text-sm text-slate-500 mt-1">{feature.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};