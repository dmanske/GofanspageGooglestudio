
import React, { useState, useEffect, useRef } from 'react';
import { 
  Bus, 
  Users, 
  Wallet, 
  QrCode, 
  MessageSquare, 
  Ticket, 
  ShieldCheck, 
  LayoutDashboard, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  TrendingUp,
  Clock,
  MapPin,
  Database,
  Lock,
  Zap,
  ChevronRight,
  Send,
  Bot,
  X,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Types ---
interface Message {
  role: 'user' | 'bot';
  content: string;
}

// --- AI Chatbot Component ---
const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Olá! Sou o Especialista GoFans. Como posso ajudar você a profissionalizar sua caravana hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', content: userMessage }].map(m => ({
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: `Você é o Especialista GoFans. Sua missão é vender e explicar a plataforma GoFans.
          Dados principais:
          - O que é: Sistema SaaS para caravanas esportivas e agências de turismo.
          - Tecnologia: React, TypeScript, Supabase.
          - Preço: R$ 3.500 (Pagamento ÚNICO, vitalício, sem mensalidades).
          - Estrutura: 13 módulos, 74 tabelas de banco de dados, 44 permissões.
          - Segurança: Supabase com isolamento de dados por cliente (RLS).
          - Funcionalidades: Gestão de viagens, financeiro, QR Code check-in, integração WhatsApp, créditos pré-pagos.
          Seja direto, profissional e entusiasmado. Se o usuário perguntar sobre preço, enfatize que não há mensalidade.`,
          temperature: 0.7,
        }
      });

      const botResponse = response.text || "Desculpe, não consegui processar sua resposta agora.";
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes('failed to fetch') || err.message?.includes('NetworkError')) {
        setError("Erro de conexão: Não foi possível alcançar o servidor de IA. Verifique seu Firewall ou VPN.");
      } else {
        setError("Ocorreu um erro ao processar sua solicitação. Tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-[#111] border border-white/10 w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-[scaleIn_0.2s_ease-out] glow-green">
          {/* Header */}
          <div className="bg-[#1a1a1a] p-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#3ECF8E] rounded-lg flex items-center justify-center">
                <Bot className="text-[#0a0a0a] w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Especialista GoFans</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#3ECF8E] rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-grid">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-[#3ECF8E] text-[#0a0a0a] font-medium' 
                  : 'bg-white/5 text-gray-300 border border-white/10'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-[#3ECF8E] animate-spin" />
                  <span className="text-xs text-gray-500">Digitando...</span>
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-center">
                <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl flex items-center gap-2 text-red-400 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-[#1a1a1a] border-t border-white/5">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Pergunte sobre módulos, preços..."
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-[#3ECF8E]/50 transition-colors"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#3ECF8E] rounded-lg flex items-center justify-center text-[#0a0a0a] hover:scale-105 active:scale-95 disabled:opacity-50 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-600 text-center mt-3">IA baseada em Gemini-3 Flash</p>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#3ECF8E] rounded-full flex items-center justify-center text-[#0a0a0a] shadow-[0_0_30px_rgba(62,207,142,0.4)] hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageSquare className="w-7 h-7 group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold text-white">1</div>
        </button>
      )}
    </div>
  );
};

// --- Other Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#3ECF8E] rounded-lg flex items-center justify-center">
          <TrendingUp className="text-[#0a0a0a] w-6 h-6" />
        </div>
        <span className="text-2xl font-bold tracking-tight">GoFans</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#funcionalidades" className="text-sm font-medium hover:text-[#3ECF8E] transition-colors">Funcionalidades</a>
        <a href="#modulos" className="text-sm font-medium hover:text-[#3ECF8E] transition-colors">Módulos</a>
        <a href="#infra" className="text-sm font-medium hover:text-[#3ECF8E] transition-colors">Infraestrutura</a>
        <a href="#precos" className="text-sm font-medium hover:text-[#3ECF8E] transition-colors">Preços</a>
      </div>
      <button className="bg-[#3ECF8E] hover:bg-[#34b27b] text-[#0a0a0a] px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:scale-105 active:scale-95">
        Começar Agora
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-grid">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#3ECF8E]/10 rounded-full blur-[120px] -z-10"></div>
    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 animate-[fadeIn_1s_ease-out]">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium">
          <span className="flex h-2 w-2 rounded-full bg-[#3ECF8E] animate-pulse"></span>
          Sistema Completo para Caravanas Esportivas
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
          Sua operação na <span className="text-[#3ECF8E]">velocidade</span> do campo.
        </h1>
        <p className="text-gray-400 text-lg lg:text-xl max-w-xl">
          A plataforma SaaS definitiva desenvolvida em React/TS para organizadores de caravanas, agências de turismo e transportadoras de torcidas.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#3ECF8E] hover:bg-[#34b27b] text-[#0a0a0a] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:translate-y-[-2px] flex items-center gap-2">
            Ver Planos <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all">
            Falar com Especialista
          </button>
          <button className="w-full sm:w-auto px-8 py-4 text-gray-400 hover:text-white underline underline-offset-4 transition-colors">
            Documentação
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5">
          <div>
            <div className="text-3xl font-bold text-[#3ECF8E]">74</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">Tabelas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#3ECF8E]">44</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">Permissões</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#3ECF8E]">13</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">Módulos</div>
          </div>
        </div>
      </div>

      <div className="relative group perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#3ECF8E]/20 to-transparent blur-3xl rounded-3xl -z-10 group-hover:scale-110 transition-transform duration-500"></div>
        <div className="rounded-3xl border border-white/10 bg-[#111] p-2 shadow-2xl overflow-hidden relative">
          <img 
            src="https://picsum.photos/seed/footballfans/800/600" 
            alt="Torcedores em movimento" 
            className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent flex items-end p-8">
            <div className="space-y-2">
              <p className="text-2xl font-bold">Gestão Profissional</p>
              <p className="text-sm text-gray-300">Organize torcidas apaixonadas com a precisão de um software de ponta.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3ECF8E]/30 hover:bg-[#3ECF8E]/5 transition-all duration-300 group">
    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#3ECF8E] mb-6 group-hover:scale-110 group-hover:bg-[#3ECF8E]/20 transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const ModulesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const topModules = [
    { title: "Gestão de Viagens", icon: <Bus />, desc: "Controle total de itinerários, múltiplos ônibus e passageiros.", video: "https://picsum.photos/seed/travel/640/360" },
    { title: "Gestão de Clientes", icon: <Users />, desc: "CRM completo com histórico, créditos e reconhecimento facial.", video: "https://picsum.photos/seed/clients/640/360" },
    { title: "Gestão Financeira", icon: <Wallet />, desc: "Receitas, despesas, fluxo de caixa e lucro por viagem.", video: "https://picsum.photos/seed/money/640/360" },
    { title: "QR Code e Check-in", icon: <QrCode />, desc: "Presença digital agilizando o embarque em segundos.", video: "https://picsum.photos/seed/qr/640/360" },
    { title: "Integração WhatsApp", icon: <MessageSquare />, desc: "Comunicação em massa com templates e variáveis.", video: "https://picsum.photos/seed/whatsapp/640/360" },
    { title: "Gestão de Ingressos", icon: <Ticket />, desc: "Venda avulsa e controle de estoque por setor.", video: "https://picsum.photos/seed/tickets/640/360" },
    { title: "Segurança & RLS", icon: <ShieldCheck />, desc: "44 permissões e 74 tabelas protegidas nativamente.", video: "https://picsum.photos/seed/security/640/360" },
  ];

  const allModules = [
    { id: 1, title: "Gestão de Viagens", icon: <Bus />, desc: "O coração do sistema para organizar saídas.", category: "Core" },
    { id: 2, title: "Gestão de Clientes", icon: <Users />, desc: "Base de dados robusta e unificada.", category: "Core" },
    { id: 3, title: "Gestão de Ônibus", icon: <Bus />, desc: "Frota e parceiros bem detalhados.", category: "Frota" },
    { id: 4, title: "Gestão Financeira", icon: <Wallet />, desc: "Visibilidade total do lucro.", category: "Admin" },
    { id: 5, title: "Créditos Pré-Pagos", icon: <Zap />, desc: "Fidelização e carteira digital.", category: "Admin" },
    { id: 6, title: "Gestão de Ingressos", icon: <Ticket />, desc: "Bilhetagem simplificada.", category: "Admin" },
    { id: 7, title: "Integração WhatsApp", icon: <MessageSquare />, desc: "Avisos automáticos e cobranças.", category: "Comms" },
    { id: 8, title: "QR Code Check-in", icon: <QrCode />, desc: "Embarque inteligente.", category: "Field" },
    { id: 9, title: "Gestão de Fornecedores", icon: <MapPin />, desc: "Hospedagem e transporte.", category: "Field" },
    { id: 10, title: "Segurança & Permissões", icon: <Lock />, desc: "Controle granular de acessos.", category: "Auth" },
    { id: 11, title: "Dashboard & BI", icon: <LayoutDashboard />, desc: "Métricas e KPIs essenciais.", category: "Auth" },
  ];

  return (
    <section id="modulos" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold">Potência em cada <span className="text-[#3ECF8E]">Módulo</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Um ecossistema completo de 11 módulos integrados para gerir sua caravana de ponta a ponta.</p>
        </div>

        {/* Top 7 Interactive */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-32">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-[#3ECF8E] uppercase tracking-[0.2em] mb-6">TOP 7 Destaques</h3>
            {topModules.map((m, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-6 rounded-2xl border transition-all flex items-center gap-4 group ${
                  activeTab === idx 
                  ? 'bg-[#3ECF8E]/10 border-[#3ECF8E]/30 text-white' 
                  : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/10 hover:text-white'
                }`}
              >
                <div className={`${activeTab === idx ? 'text-[#3ECF8E]' : 'text-gray-500'} transition-colors`}>{m.icon}</div>
                <div>
                  <div className="font-bold">{m.title}</div>
                  {activeTab === idx && <p className="text-xs mt-1 text-gray-300">{m.desc}</p>}
                </div>
                <ChevronRight className={`ml-auto w-5 h-5 transition-transform ${activeTab === idx ? 'rotate-90 text-[#3ECF8E]' : 'text-gray-600'}`} />
              </button>
            ))}
          </div>
          <div className="lg:col-span-7 sticky top-32">
            <div className="rounded-3xl border border-white/10 bg-[#111] p-2 aspect-video overflow-hidden shadow-2xl glow-green relative">
              <img 
                src={topModules[activeTab].video} 
                alt={topModules[activeTab].title}
                className="w-full h-full object-cover rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-[#3ECF8E] rounded-full flex items-center justify-center text-[#0a0a0a] shadow-2xl animate-pulse">
                  <div className="ml-1 w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-[#0a0a0a] border-b-[10px] border-b-transparent"></div>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8 p-8 bg-white/[0.02] rounded-3xl border border-white/5">
                <div>
                  <p className="text-[#3ECF8E] text-xs font-bold uppercase tracking-widest mb-2">Por que usar?</p>
                  <p className="text-gray-300 text-sm">{topModules[activeTab].desc}</p>
                </div>
                <div>
                  <p className="text-[#3ECF8E] text-xs font-bold uppercase tracking-widest mb-2">Impacto Direto</p>
                  <p className="text-gray-300 text-sm">Redução de tempo em até 80% na execução destas tarefas.</p>
                </div>
            </div>
          </div>
        </div>

        {/* All Modules Grid */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">A Lista Completa</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["Core", "Frota", "Admin", "Comms", "Field", "Auth"].map(cat => (
                <span key={cat} className="px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase font-bold tracking-widest border border-white/10">{cat}</span>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allModules.map(m => (
              <div key={m.id} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3ECF8E]/20 hover:translate-y-[-4px] transition-all">
                <div className="text-[#3ECF8E] mb-4">{m.icon}</div>
                <h4 className="font-bold mb-2">{m.title}</h4>
                <p className="text-xs text-gray-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = () => (
  <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#3ECF8E]/5 rounded-full blur-[150px] -z-10"></div>
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">O Fim das <span className="text-red-500/80 underline decoration-red-500/30">Planilhas</span></h2>
        <p className="text-gray-400">Compare sua operação atual com a eficiência GoFans.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 rounded-3xl bg-red-500/[0.02] border border-red-500/10 space-y-8">
          <div className="inline-flex items-center gap-2 text-red-400 font-bold uppercase tracking-widest text-sm">
            <XCircle className="w-5 h-5" /> Sem GoFans
          </div>
          <ul className="space-y-6">
            {[
              "Planilhas manuais desorganizadas",
              "Mensagens individuais e repetitivas no WhatsApp",
              "Cálculos manuais e erros frequentes",
              "Listas em papel e conferência demorada",
              "Horas perdidas em trabalho braçal"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start text-gray-500 italic">
                <div className="w-5 h-5 mt-1 text-red-500/30">✕</div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-10 rounded-3xl bg-[#3ECF8E]/[0.05] border border-[#3ECF8E]/20 space-y-8 relative">
          <div className="absolute -top-4 -right-4 bg-[#3ECF8E] text-[#0a0a0a] px-4 py-1.5 rounded-full font-bold text-xs transform rotate-12 shadow-xl">80% MAIS RÁPIDO</div>
          <div className="inline-flex items-center gap-2 text-[#3ECF8E] font-bold uppercase tracking-widest text-sm">
            <CheckCircle2 className="w-5 h-5" /> Com GoFans
          </div>
          <ul className="space-y-6">
            {[
              "Sistema centralizado e automatizado",
              "Envio em massa com templates inteligentes",
              "Dashboard financeiro em tempo real",
              "Filtros inteligentes e status online",
              "Minutos para organizar viagens complexas"
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start text-white">
                <div className="w-5 h-5 mt-1 text-[#3ECF8E]">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {[
          { label: "Redução no tempo", value: "80%", icon: <Clock /> },
          { label: "Eficiência na comunicação", value: "5x", icon: <MessageSquare /> },
          { label: "Aumento médio de receita", value: "+15%", icon: <TrendingUp /> },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center p-8 bg-white/[0.02] rounded-2xl border border-white/5">
            <div className="text-[#3ECF8E] mb-4">{stat.icon}</div>
            <div className="text-4xl font-black mb-1">{stat.value}</div>
            <div className="text-gray-500 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SupabaseSection = () => (
  <section id="infra" className="py-24 bg-[#0a0a0a] border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 text-[#3ECF8E] font-bold text-sm uppercase tracking-[0.3em] mb-6">
            <Database className="w-5 h-5" /> Infraestrutura de Elite
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Por que <span className="text-[#3ECF8E]">Supabase?</span></h2>
          <div className="space-y-6 text-gray-400">
            <p>GoFans utiliza o Supabase para garantir que seus dados sejam <strong>únicos, privados e impenetráveis.</strong></p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#3ECF8E]" /> Isolamento Total
                </div>
                <p className="text-sm">Cada cliente tem seu próprio projeto Supabase dedicado.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Lock className="w-4 h-4 text-[#3ECF8E]" /> AES-256
                </div>
                <p className="text-sm">Criptografia de padrão bancário em todas as transações.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Database className="w-4 h-4 text-[#3ECF8E]" /> Propriedade Real
                </div>
                <p className="text-sm">O cliente é dono total dos dados (pode exportar quando quiser).</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Zap className="w-4 h-4 text-[#3ECF8E]" /> RLS Security
                </div>
                <p className="text-sm">74 tabelas protegidas nativamente pelo banco de dados.</p>
              </div>
            </div>
            <p className="text-sm italic pt-6">Oferecemos suporte completo na criação da sua conta Supabase para garantir a melhor performance.</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-[#3ECF8E]/20 blur-[60px] rounded-full"></div>
          <div className="bg-[#111] p-12 rounded-3xl border border-[#3ECF8E]/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <Database className="w-40 h-40" />
            </div>
            <h4 className="text-2xl font-bold mb-6">Backup & Segurança</h4>
            <div className="space-y-4 relative z-10">
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#3ECF8E] w-full animate-[shimmer_2s_infinite]"></div>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden w-2/3">
                <div className="h-full bg-[#3ECF8E] w-full animate-[shimmer_2s_infinite_0.5s]"></div>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden w-1/2">
                <div className="h-full bg-[#3ECF8E] w-full animate-[shimmer_2s_infinite_1s]"></div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Estado da Infra</p>
                <p className="text-sm font-bold text-[#3ECF8E]">100% OPERACIONAL</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-6 bg-[#3ECF8E]/40 rounded-full"></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="precos" className="py-24 bg-[#0a0a0a] relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4 underline decoration-[#3ECF8E]/30 decoration-8 underline-offset-8">Investimento Único</h2>
        <p className="text-gray-400">Sem taxas mensais. Sem letras miúdas. Seu sistema, para sempre.</p>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="p-1 w-full rounded-[40px] bg-gradient-to-b from-[#3ECF8E] to-transparent shadow-2xl glow-green">
          <div className="bg-[#111] rounded-[38px] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10"></div>
            
            <div className="relative z-10">
              <div className="bg-[#3ECF8E]/10 text-[#3ECF8E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-8">Licença Vitalícia</div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl text-gray-400 font-bold">R$</span>
                <span className="text-7xl font-black text-white">3.500</span>
              </div>
              <p className="text-gray-400 mb-10">Pagamento único para transformar sua empresa de turismo esportivo.</p>
              
              <ul className="space-y-4 text-left mb-10 text-sm">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#3ECF8E]" /> 13 Módulos Completos</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#3ECF8E]" /> 74 Tabelas de Banco de Dados</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#3ECF8E]" /> 44 Permissões Granulares</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#3ECF8E]" /> Instalação e Configuração Inicial</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#3ECF8E]" /> Suporte na Conta Supabase</li>
              </ul>

              <button className="w-full bg-[#3ECF8E] hover:bg-[#34b27b] text-[#0a0a0a] py-5 rounded-2xl font-black text-xl transition-all shadow-xl hover:scale-105 active:scale-95 mb-6">
                QUERO O MINHA LICENÇA
              </button>
              <p className="text-xs text-gray-500">Transação segura via Pix ou Cartão em até 12x.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-[#0a0a0a]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#3ECF8E] rounded-lg flex items-center justify-center">
              <TrendingUp className="text-[#0a0a0a] w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">GoFans</span>
          </div>
          <p className="text-gray-400 max-w-sm">
            O software líder em gestão de torcidas organizadas no Brasil. 
            Desenvolvido com tecnologia de ponta para quem vive a paixão pelo esporte.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold">Plataforma</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#funcionalidades" className="hover:text-[#3ECF8E]">Funcionalidades</a></li>
            <li><a href="#modulos" className="hover:text-[#3ECF8E]">Módulos</a></li>
            <li><a href="#infra" className="hover:text-[#3ECF8E]">Segurança</a></li>
            <li><a href="#precos" className="hover:text-[#3ECF8E]">Precificação</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold">Social</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#3ECF8E]">Instagram</a></li>
            <li><a href="#" className="hover:text-[#3ECF8E]">YouTube</a></li>
            <li><a href="#" className="hover:text-[#3ECF8E]">WhatsApp</a></li>
            <li><a href="#" className="hover:text-[#3ECF8E]">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <p>© 2024 GoFans. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        
        <section id="funcionalidades" className="py-24 max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold">O Que é <span className="text-[#3ECF8E]">GoFans?</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Um sistema de gestão de ponta a ponta (SaaS) desenhado especificamente para o caos organizado das caravanas de futebol.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Bus />} 
              title="Organização Centralizada" 
              description="Esqueça as 10 planilhas diferentes. Tudo o que você precisa em uma única tela intuitiva." 
            />
            <FeatureCard 
              icon={<MessageSquare />} 
              title="Comunicação Escalável" 
              description="Avise centenas de passageiros em segundos via WhatsApp integrado com modelos profissionais." 
            />
            <FeatureCard 
              icon={<TrendingUp />} 
              title="Escalabilidade Real" 
              description="Aumente sua capacidade de organizar viagens em 3x sem precisar contratar mais pessoas." 
            />
            <FeatureCard 
              icon={<ShieldCheck />} 
              title="Dados Protegidos" 
              description="Seus dados financeiros e de clientes são ativos valiosos. Nós os tratamos com nível bancário." 
            />
            <FeatureCard 
              icon={<Users />} 
              title="Fidelização Garantida" 
              description="Mantenha um CRM de torcedores apaixonados e gere recorrência com créditos pré-pagos." 
            />
            <FeatureCard 
              icon={<QrCode />} 
              title="Check-in Sem Fricção" 
              description="O embarque é o momento mais crítico. Use QR Codes para eliminar filas e erros de conferência." 
            />
          </div>
        </section>

        <ModulesSection />
        <ComparisonSection />
        <SupabaseSection />
        <PricingSection />

        {/* Final CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#3ECF8E]/10 to-transparent"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black leading-tight italic uppercase tracking-tighter">
              PRONTO PARA TRANSFORMAR <br /> <span className="text-[#3ECF8E]">SUA OPERAÇÃO?</span>
            </h2>
            <p className="text-xl text-gray-400">Junte-se a dezenas de organizadores que já profissionalizaram suas caravanas com o GoFans.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-[#3ECF8E] hover:bg-[#34b27b] text-[#0a0a0a] px-12 py-5 rounded-2xl font-black text-2xl transition-all shadow-[0_0_50px_rgba(62,207,142,0.4)] hover:scale-105">
                ADQUIRIR AGORA
              </button>
            </div>
          </div>
        </section>
      </main>
      <AIChatBot />
      <Footer />
    </div>
  );
}
