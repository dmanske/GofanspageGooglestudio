import { X, Check, ArrowRight, AlertTriangle } from "lucide-react";
import stadiumFieldBg from "@/assets/football/stadium-field.jpg";

const comparisons = [
  {
    aspect: "Organização de Dados",
    before: "Planilhas manuais desorganizadas",
    after: "Sistema centralizado e automatizado"
  },
  {
    aspect: "Comunicação",
    before: "Mensagens individuais no WhatsApp",
    after: "Envio em massa com templates"
  },
  {
    aspect: "Controle Financeiro",
    before: "Cálculos manuais e erros frequentes",
    after: "Dashboard com dados em tempo real"
  },
  {
    aspect: "Gestão de Passageiros",
    before: "Listas em papel e conferência manual",
    after: "Filtros inteligentes e status online"
  },
  {
    aspect: "Tempo de Organização",
    before: "Horas de trabalho manual",
    after: "Minutos com automação"
  },
];

export const ComparisonFootball = () => {
  return (
    <section id="comparison" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${stadiumFieldBg})`,
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
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
            <ArrowRight className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm">Comparativo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-red-400">Antes</span> vs <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Depois</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Veja a transformação que o sistema traz para sua operação de caravanas
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before Column */}
            <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400">ANTES</h3>
                  <p className="text-red-300/60 text-sm">Sem o GoFans</p>
                </div>
              </div>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="border-b border-red-500/10 pb-4">
                    <div className="font-medium text-red-300/60 text-sm mb-1 uppercase tracking-wider">
                      {item.aspect}
                    </div>
                    <div className="text-slate-300 flex items-start gap-2">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      {item.before}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After Column */}
            <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm shadow-[0_0_40px_rgba(59,130,246,0.1)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">DEPOIS</h3>
                  <p className="text-blue-300/60 text-sm">Com o GoFans</p>
                </div>
              </div>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="border-b border-blue-500/10 pb-4">
                    <div className="font-medium text-blue-300/60 text-sm mb-1 uppercase tracking-wider">
                      {item.aspect}
                    </div>
                    <div className="text-white font-medium flex items-start gap-2">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      {item.after}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center mb-6">
              <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">Resultados</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">80%</div>
                <div className="text-slate-400">Redução no tempo de organização</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">5x</div>
                <div className="text-slate-400">Mais eficiência na comunicação</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">15%</div>
                <div className="text-slate-400">Aumento médio de receita</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};