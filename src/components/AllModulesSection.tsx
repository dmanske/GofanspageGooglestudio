import { useState } from "react";
import { modules, Module } from "@/data/modulesData";
import { Check, X } from "lucide-react";
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

// Categorias de módulos
const categories = [
  {
    id: "operacional",
    title: "Operacional",
    emoji: "⚙️",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    modules: ["viagens", "clientes", "onibus", "qrcode", "fornecedores"]
  },
  {
    id: "financeiro",
    title: "Financeiro",
    emoji: "💰",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    modules: ["financeiro", "creditos", "ingressos"]
  },
  {
    id: "comunicacao",
    title: "Comunicação",
    emoji: "💬",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    modules: ["whatsapp"]
  },
  {
    id: "sistema",
    title: "Sistema",
    emoji: "🔧",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    modules: ["seguranca", "dashboard"]
  }
];

export const AllModulesSection = () => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  const getModulesByCategory = (categoryModuleIds: string[]) => {
    return categoryModuleIds.map(id => modules.find(m => m.id === id)).filter(Boolean);
  };

  return (
    <section id="all-modules" className="py-24 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-medium text-sm">Sistema Completo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            11 Módulos <span className="text-primary">Integrados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organizados em 4 categorias para gestão completa de caravanas
          </p>
        </div>

        {/* Accordion por Categoria */}
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
                      <span className="text-2xl">{category.emoji}</span>
                      <div className="text-left">
                        <h3 className={`text-xl font-bold ${category.color}`}>
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {categoryModules.length} módulo{categoryModules.length > 1 ? 's' : ''}
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
                            className="group relative p-4 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:scale-[1.02]"
                          >
                            {/* Header do Card */}
                            <div className="flex items-start gap-3 mb-2">
                              <span className="text-2xl">{module.emoji}</span>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-foreground text-sm leading-tight">
                                  {module.title}
                                </h4>
                                <span className={`inline-block text-xs px-2 py-0.5 rounded-full mt-1 ${module.tagColor}`}>
                                  {module.tag}
                                </span>
                              </div>
                            </div>

                            {/* Descrição curta */}
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {module.description}
                            </p>

                            {/* Indicador de clique */}
                            <div className="mt-3 text-xs text-primary/70 font-medium group-hover:text-primary transition-colors">
                              Clique para ver detalhes →
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

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "74", label: "Tabelas Protegidas" },
            { value: "44", label: "Permissões" },
            { value: "11", label: "Módulos" },
            { value: "100%", label: "Responsivo" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-card/50 border border-border/30">
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes do Módulo */}
      <Dialog open={!!selectedModule} onOpenChange={(open) => !open && setSelectedModule(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedModule && (
            <>
              <DialogHeader className="pb-4 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{selectedModule.emoji}</span>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-foreground">
                      {selectedModule.title}
                    </DialogTitle>
                    <span className={`inline-block text-sm px-3 py-1 rounded-full mt-2 ${selectedModule.tagColor}`}>
                      {selectedModule.tag}
                    </span>
                  </div>
                </div>
              </DialogHeader>

              <div className="py-4">
                {/* Descrição */}
                <p className="text-muted-foreground mb-6">
                  {selectedModule.description}
                </p>

                {/* Todas as Funcionalidades */}
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Funcionalidades ({selectedModule.features.length})
                </h4>
                <div className="space-y-3">
                  {selectedModule.features.map((feature, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border/30 hover:border-primary/30 transition-colors"
                    >
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">{feature.title}</span>
                        {feature.description && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {feature.description}
                          </p>
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
