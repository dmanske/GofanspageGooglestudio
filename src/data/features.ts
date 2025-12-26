import { 
  LayoutDashboard, 
  Bus, 
  Users, 
  DollarSign, 
  UserCircle, 
  Ticket, 
  TruckIcon, 
  CreditCard, 
  MessageCircle, 
  FileText, 
  ClipboardCheck, 
  Settings 
} from "lucide-react";

export interface Feature {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: any;
  category: 'operacional' | 'financeiro' | 'comunicacao' | 'configuracao';
  isFeatured: boolean;
  badge?: string;
  audiences: ('turismo' | 'torcidas' | 'transportadoras')[];
  benefits: ('tempo' | 'receita' | 'controle' | 'automacao')[];
  videoUrl?: string;
  mockupImages: string[];
  screenshots?: string[];
  tourSteps?: {
    step: number;
    title: string;
    description: string;
    screenshot?: string;
  }[];
  beforeAfter?: {
    aspect: string;
    before: string;
    after: string;
  }[];
  subFeatures: {
    icon: any;
    title: string;
    description: string;
  }[];
  realBenefits: {
    stat: string;
    description: string;
  }[];
  howItWorks: {
    step: number;
    title: string;
    description: string;
  }[];
  relatedModules: string[];
}

export const features: Feature[] = [
  {
    id: "dashboard",
    slug: "dashboard-analytics",
    title: "Dashboard & Analytics",
    shortDescription: "Visão geral completa em tempo real com métricas de clientes, viagens, receitas e ônibus",
    fullDescription: "Dashboard executivo com métricas em tempo real, gráficos interativos de performance, indicadores financeiros e análise detalhada por categoria.",
    icon: LayoutDashboard,
    category: "financeiro",
    isFeatured: false,
    audiences: ["turismo", "torcidas", "transportadoras"],
    benefits: ["controle", "automacao"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/src/assets/dashboard-mockup.jpg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: LayoutDashboard,
        title: "Visão em Tempo Real",
        description: "Acompanhe todas as métricas importantes instantaneamente"
      },
      {
        icon: FileText,
        title: "Gráficos Interativos",
        description: "Análise visual de performance e tendências"
      },
      {
        icon: DollarSign,
        title: "Indicadores Financeiros",
        description: "Receita mensal, lucro líquido e margem em destaque"
      },
      {
        icon: ClipboardCheck,
        title: "Timeline de Atividades",
        description: "Acompanhe as últimas ações no sistema"
      },
      {
        icon: FileText,
        title: "Breakdown de Receitas",
        description: "Análise detalhada por categoria de receita"
      },
      {
        icon: Bus,
        title: "Próximas Viagens",
        description: "Visualização das caravanas programadas"
      }
    ],
    realBenefits: [
      {
        stat: "100%",
        description: "Visibilidade das operações"
      },
      {
        stat: "5 minutos",
        description: "Para identificar problemas"
      },
      {
        stat: "Real-time",
        description: "Dados sempre atualizados"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Acesse o Dashboard",
        description: "Todas as informações importantes em uma única tela"
      },
      {
        step: 2,
        title: "Filtre por Período",
        description: "Selecione o intervalo de tempo desejado"
      },
      {
        step: 3,
        title: "Analise os Dados",
        description: "Gráficos interativos mostram tendências e insights"
      },
      {
        step: 4,
        title: "Exporte Relatórios",
        description: "Gere documentos profissionais com um clique"
      }
    ],
    relatedModules: ["financeiro", "relatorios", "viagens"]
  },
  {
    id: "viagens",
    slug: "gestao-viagens",
    title: "Gestão Completa de Viagens",
    shortDescription: "Sistema completo para organizar caravanas com múltiplos ônibus, passeios integrados e pagamentos flexíveis",
    fullDescription: "Gerencie viagens do início ao fim: cadastro de jogos, múltiplos ônibus, passeios opcionais, sistema de setores e modalidades de pagamento personalizáveis.",
    icon: Bus,
    category: "operacional",
    isFeatured: true,
    badge: "Carro-chefe",
    audiences: ["turismo", "torcidas"],
    benefits: ["tempo", "controle", "automacao"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: Bus,
        title: "Cadastro Rápido",
        description: "Formulário inteligente com autopreenchimento de dados"
      },
      {
        icon: TruckIcon,
        title: "Múltiplos Ônibus",
        description: "Adicione quantos veículos precisar por viagem"
      },
      {
        icon: Ticket,
        title: "Passeios Integrados",
        description: "Pontos turísticos com cobrança automática"
      },
      {
        icon: Settings,
        title: "Sistema de Setores",
        description: "Configure preços por setor de estádio"
      },
      {
        icon: CreditCard,
        title: "Pagamentos Flexíveis",
        description: "Livre, parcelado ou obrigatório"
      },
      {
        icon: LayoutDashboard,
        title: "Logos Automáticos",
        description: "Reconhecimento de times brasileiros"
      }
    ],
    realBenefits: [
      {
        stat: "80%",
        description: "Menos tempo organizando viagens"
      },
      {
        stat: "Zero",
        description: "Erros de capacidade"
      },
      {
        stat: "100%",
        description: "Passeios rastreados"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Criar Nova Viagem",
        description: "Um clique para iniciar o cadastro completo"
      },
      {
        step: 2,
        title: "Sistema Sugere Configuração",
        description: "Ônibus e valores são sugeridos automaticamente"
      },
      {
        step: 3,
        title: "Adicionar Passageiros",
        description: "Drag & drop para organizar por ônibus"
      },
      {
        step: 4,
        title: "Cálculo Automático",
        description: "Sistema calcula receitas e ocupação em tempo real"
      }
    ],
    relatedModules: ["passageiros", "frota", "financeiro"]
  },
  {
    id: "passageiros",
    slug: "controle-passageiros",
    title: "Controle de Passageiros",
    shortDescription: "Cadastro individual, grupos familiares, descontos automáticos e realocação flexível entre ônibus",
    fullDescription: "Sistema completo de gestão de passageiros com cadastro rápido, organização por grupos, descontos automáticos, troca entre ônibus e controle de pagamento detalhado.",
    icon: Users,
    category: "operacional",
    isFeatured: true,
    badge: "Carro-chefe",
    audiences: ["turismo", "torcidas", "transportadoras"],
    benefits: ["tempo", "controle", "automacao"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/src/assets/passengers-mockup.jpg",
      "/src/assets/dashboard-mockup.jpg",
      "/placeholder.svg"
    ],
    tourSteps: [
      {
        step: 1,
        title: "Adicionar Novo Passageiro",
        description: "Clique no botão 'Novo Passageiro' e preencha apenas nome e telefone. O sistema salva automaticamente.",
        screenshot: "/placeholder.svg"
      },
      {
        step: 2,
        title: "Alocar no Ônibus",
        description: "Arraste o passageiro para o ônibus desejado. O sistema calcula ocupação em tempo real.",
        screenshot: "/placeholder.svg"
      },
      {
        step: 3,
        title: "Aplicar Desconto Automático",
        description: "Se houver regras de desconto configuradas, o sistema aplica automaticamente ao adicionar o passageiro.",
        screenshot: "/placeholder.svg"
      },
      {
        step: 4,
        title: "Acompanhar Pagamento",
        description: "Visualize status de pagamento com cores: verde (pago), amarelo (parcial), vermelho (pendente).",
        screenshot: "/placeholder.svg"
      }
    ],
    beforeAfter: [
      {
        aspect: "Cadastro de Passageiros",
        before: "Planilhas manuais, dados duplicados, informações desorganizadas",
        after: "Sistema centralizado, busca rápida, histórico completo de cada cliente"
      },
      {
        aspect: "Controle de Ocupação",
        before: "Contagem manual, erros de capacidade, overbooking frequente",
        after: "Cálculo automático, alertas de lotação, impossível exceder capacidade"
      },
      {
        aspect: "Gestão de Grupos",
        before: "Famílias separadas, descontos calculados na mão, retrabalho constante",
        after: "Grupos vinculados automaticamente, descontos aplicados na hora"
      },
      {
        aspect: "Realocação entre Ônibus",
        before: "Refazer tudo, recalcular valores, risco de perder informações",
        after: "Drag & drop simples, valores mantidos, mudança em segundos"
      },
      {
        aspect: "Tempo de Organização",
        before: "2-3 horas por viagem organizando planilhas e conferindo dados",
        after: "15 minutos para organizar tudo, sistema faz cálculos automaticamente"
      }
    ],
    subFeatures: [
      {
        icon: Users,
        title: "Cadastro Rápido",
        description: "Apenas nome e telefone para começar"
      },
      {
        icon: UserCircle,
        title: "Grupos Familiares",
        description: "Vincule passageiros relacionados automaticamente"
      },
      {
        icon: DollarSign,
        title: "Descontos Automáticos",
        description: "Regras configuráveis aplicadas na hora"
      },
      {
        icon: Bus,
        title: "Realocação de Ônibus",
        description: "Drag & drop entre veículos sem complicação"
      },
      {
        icon: FileText,
        title: "Busca Inteligente",
        description: "Encontre por qualquer campo rapidamente"
      },
      {
        icon: ClipboardCheck,
        title: "Histórico Completo",
        description: "Todas as viagens anteriores do cliente"
      }
    ],
    realBenefits: [
      {
        stat: "5x",
        description: "Mais rápido que planilhas"
      },
      {
        stat: "Zero",
        description: "Passageiros perdidos"
      },
      {
        stat: "100%",
        description: "Histórico para fidelização"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Adicionar Passageiro",
        description: "Formulário simplificado para cadastro rápido"
      },
      {
        step: 2,
        title: "Alocar no Ônibus",
        description: "Arraste para o veículo desejado"
      },
      {
        step: 3,
        title: "Aplicar Desconto",
        description: "Sistema calcula automaticamente se aplicável"
      },
      {
        step: 4,
        title: "Acompanhar Status",
        description: "Visualize pagamento e presença em tempo real"
      }
    ],
    relatedModules: ["viagens", "clientes", "presenca"]
  },
  {
    id: "financeiro",
    slug: "financeiro-completo",
    title: "Sistema Financeiro Completo",
    shortDescription: "Controle de receitas, despesas operacionais, margem de lucro e fluxo de caixa em tempo real",
    fullDescription: "Dashboard financeiro completo com receitas detalhadas, controle de despesas, cálculo automático de margem de lucro por viagem e análise de performance.",
    icon: DollarSign,
    category: "financeiro",
    isFeatured: false,
    audiences: ["turismo", "torcidas", "transportadoras"],
    benefits: ["receita", "controle"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: LayoutDashboard,
        title: "Dashboard Financeiro",
        description: "Visão consolidada de todas as operações"
      },
      {
        icon: DollarSign,
        title: "Controle de Despesas",
        description: "Categorias personalizáveis para organização"
      },
      {
        icon: FileText,
        title: "Margem por Viagem",
        description: "Cálculo automático de rentabilidade"
      },
      {
        icon: CreditCard,
        title: "Contas a Receber",
        description: "Pendências de clientes organizadas"
      },
      {
        icon: ClipboardCheck,
        title: "Contas a Pagar",
        description: "Gestão de fornecedores e despesas"
      },
      {
        icon: FileText,
        title: "Análise de Lucratividade",
        description: "Comparativo entre viagens e períodos"
      }
    ],
    realBenefits: [
      {
        stat: "15%",
        description: "Aumento médio de margem"
      },
      {
        stat: "100%",
        description: "Visibilidade de despesas"
      },
      {
        stat: "Real-time",
        description: "Fluxo de caixa atualizado"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Receitas Automáticas",
        description: "Cada venda já é contabilizada"
      },
      {
        step: 2,
        title: "Registrar Despesas",
        description: "Adicione custos operacionais facilmente"
      },
      {
        step: 3,
        title: "Margem Calculada",
        description: "Sistema mostra lucro em tempo real"
      },
      {
        step: 4,
        title: "Gerar Relatórios",
        description: "Exporte análises para tomada de decisão"
      }
    ],
    relatedModules: ["dashboard", "viagens", "relatorios"]
  },
  {
    id: "clientes",
    slug: "gestao-clientes",
    title: "Gestão de Clientes",
    shortDescription: "Cadastro completo, histórico de viagens, reconhecimento facial e comunicação integrada",
    fullDescription: "Sistema completo de CRM com perfil detalhado de clientes, histórico de participações, cadastro facial para segurança e integração direta com WhatsApp.",
    icon: UserCircle,
    category: "operacional",
    isFeatured: false,
    audiences: ["turismo", "torcidas"],
    benefits: ["controle", "automacao"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: UserCircle,
        title: "Perfil Completo",
        description: "Todas as informações centralizadas"
      },
      {
        icon: FileText,
        title: "Histórico de Viagens",
        description: "Timeline visual de participações"
      },
      {
        icon: Users,
        title: "Reconhecimento Facial",
        description: "Upload de foto para segurança"
      },
      {
        icon: MessageCircle,
        title: "Comunicação Rápida",
        description: "WhatsApp integrado direto do perfil"
      },
      {
        icon: LayoutDashboard,
        title: "Análise de Frequência",
        description: "Quantas viagens por período"
      },
      {
        icon: FileText,
        title: "Filtros Avançados",
        description: "Segmentação inteligente de clientes"
      }
    ],
    realBenefits: [
      {
        stat: "3x",
        description: "Mais rápido encontrar clientes"
      },
      {
        stat: "100%",
        description: "Histórico preservado"
      },
      {
        stat: "1 clique",
        description: "Para contatar via WhatsApp"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Buscar Cliente",
        description: "Por nome, telefone, CPF ou cidade"
      },
      {
        step: 2,
        title: "Ver Perfil Completo",
        description: "Dados pessoais e histórico de viagens"
      },
      {
        step: 3,
        title: "Enviar Mensagem",
        description: "WhatsApp integrado para comunicação rápida"
      },
      {
        step: 4,
        title: "Exportar Segmentação",
        description: "Liste clientes por critérios específicos"
      }
    ],
    relatedModules: ["passageiros", "whatsapp", "creditos"]
  },
  {
    id: "ingressos",
    slug: "sistema-ingressos",
    title: "Sistema de Ingressos para Jogos",
    shortDescription: "Cadastro de qualquer jogo, controle de setores e margem de lucro automática",
    fullDescription: "Gestão completa de ingressos de jogos separada das viagens, com controle por setor, cálculo de margem e relatórios de vendas detalhados por partida.",
    icon: Ticket,
    category: "financeiro",
    isFeatured: false,
    audiences: ["turismo", "torcidas"],
    benefits: ["receita", "controle"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: Ticket,
        title: "Cadastro de Jogos",
        description: "Partidas para venda de ingressos"
      },
      {
        icon: LayoutDashboard,
        title: "Setores e Preços",
        description: "Configuração flexível por localização"
      },
      {
        icon: ClipboardCheck,
        title: "Controle de Estoque",
        description: "Quantidade disponível por setor"
      },
      {
        icon: DollarSign,
        title: "Margem Automática",
        description: "Lucro calculado por ingresso"
      },
      {
        icon: FileText,
        title: "Relatórios de Venda",
        description: "Performance detalhada por jogo"
      },
      {
        icon: Bus,
        title: "Integração com Viagens",
        description: "Opcionalmente vincule a caravanas"
      }
    ],
    realBenefits: [
      {
        stat: "20%",
        description: "Receita adicional média"
      },
      {
        stat: "Zero",
        description: "Ingressos perdidos"
      },
      {
        stat: "Automático",
        description: "Cálculo de margem"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Cadastrar Jogo",
        description: "Data, horário, estádio e adversário"
      },
      {
        step: 2,
        title: "Configurar Setores",
        description: "Preços e quantidade por setor"
      },
      {
        step: 3,
        title: "Vender Ingresso",
        description: "Associar a cliente e registrar pagamento"
      },
      {
        step: 4,
        title: "Gerar Relatório",
        description: "Análise de vendas e margem por jogo"
      }
    ],
    relatedModules: ["financeiro", "clientes", "relatorios"]
  },
  {
    id: "fornecedores",
    slug: "cadastro-fornecedores",
    title: "Cadastro de Fornecedores",
    shortDescription: "Gestão completa de fornecedores com histórico de serviços, controle de pagamentos e documentos",
    fullDescription: "Sistema de gestão de fornecedores e parceiros com cadastro detalhado, histórico de serviços prestados, controle de contas a pagar e armazenamento de contratos.",
    icon: TruckIcon,
    category: "financeiro",
    isFeatured: false,
    audiences: ["turismo", "torcidas", "transportadoras"],
    benefits: ["controle", "tempo"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: UserCircle,
        title: "Cadastro Completo",
        description: "Dados fiscais, contato e categoria de serviço"
      },
      {
        icon: FileText,
        title: "Histórico de Serviços",
        description: "Todos os trabalhos realizados registrados"
      },
      {
        icon: DollarSign,
        title: "Contas a Pagar",
        description: "Integração com financeiro automática"
      },
      {
        icon: ClipboardCheck,
        title: "Avaliação de Performance",
        description: "Notas e comentários por serviço"
      },
      {
        icon: TruckIcon,
        title: "Categorias Personalizadas",
        description: "Transporte, hospedagem, alimentação, etc."
      },
      {
        icon: FileText,
        title: "Contratos e Documentos",
        description: "Upload e armazenamento centralizado"
      }
    ],
    realBenefits: [
      {
        stat: "100%",
        description: "Fornecedores organizados"
      },
      {
        stat: "Automático",
        description: "Lançamento financeiro"
      },
      {
        stat: "Histórico",
        description: "Completo de transações"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Cadastrar Fornecedor",
        description: "Dados fiscais, contato e categoria de serviço"
      },
      {
        step: 2,
        title: "Registrar Serviço",
        description: "Vincular a viagem ou despesa avulsa"
      },
      {
        step: 3,
        title: "Gerar Conta a Pagar",
        description: "Integração automática com financeiro"
      },
      {
        step: 4,
        title: "Avaliar Performance",
        description: "Notas e comentários para decisões futuras"
      }
    ],
    relatedModules: ["financeiro", "frota", "viagens"]
  },
  {
    id: "frota",
    slug: "gestao-frota",
    title: "Gestão de Frota",
    shortDescription: "Cadastro de ônibus, capacidades dinâmicas, empresas parceiras e controle de disponibilidade",
    fullDescription: "Sistema completo de gestão de veículos com características visuais, estatísticas de uso e controle de disponibilidade.",
    icon: TruckIcon,
    category: "operacional",
    isFeatured: false,
    audiences: ["turismo", "transportadoras"],
    benefits: ["controle", "tempo"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: TruckIcon,
        title: "Cadastro de Veículos",
        description: "Informações completas de cada ônibus"
      },
      {
        icon: Users,
        title: "Capacidade Dinâmica",
        description: "Com lugares extras configuráveis"
      },
      {
        icon: FileText,
        title: "Empresas Parceiras",
        description: "Gestão de fornecedores de transporte"
      },
      {
        icon: LayoutDashboard,
        title: "Histórico de Viagens",
        description: "Uso e performance por veículo"
      },
      {
        icon: Settings,
        title: "Status de Disponibilidade",
        description: "Manutenção ou disponível"
      },
      {
        icon: DollarSign,
        title: "Custos por Veículo",
        description: "Rastreamento de despesas"
      }
    ],
    realBenefits: [
      {
        stat: "100%",
        description: "Controle de capacidade"
      },
      {
        stat: "Automático",
        description: "Cálculo de lotação"
      },
      {
        stat: "Histórico",
        description: "Completo de uso"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Cadastrar Ônibus",
        description: "Modelo, capacidade e empresa"
      },
      {
        step: 2,
        title: "Configurar Características",
        description: "Cores, imagens e identificação"
      },
      {
        step: 3,
        title: "Usar em Viagens",
        description: "Sistema controla ocupação automaticamente"
      },
      {
        step: 4,
        title: "Analisar Performance",
        description: "Estatísticas de uso e custos"
      }
    ],
    relatedModules: ["viagens", "financeiro"]
  },
  {
    id: "creditos",
    slug: "sistema-creditos",
    title: "Sistema de Créditos",
    shortDescription: "Carteira digital por cliente com uso automático em novas viagens e histórico completo",
    fullDescription: "Gestão de créditos flexível com múltiplas origens (cancelamentos, devoluções, bônus), uso automático e relatórios executivos.",
    icon: CreditCard,
    category: "financeiro",
    isFeatured: false,
    audiences: ["turismo", "torcidas"],
    benefits: ["receita", "automacao"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: CreditCard,
        title: "Adicionar Crédito",
        description: "Manual ou automático por regras"
      },
      {
        icon: DollarSign,
        title: "Uso Automático",
        description: "Desconto aplicado na próxima compra"
      },
      {
        icon: FileText,
        title: "Histórico de Créditos",
        description: "Todas as transações registradas"
      },
      {
        icon: LayoutDashboard,
        title: "Relatórios Gerenciais",
        description: "Total de créditos em circulação"
      },
      {
        icon: MessageCircle,
        title: "Notificações",
        description: "Avisar cliente sobre saldo disponível"
      },
      {
        icon: Settings,
        title: "Expiração Configurável",
        description: "Opcional por regra de negócio"
      }
    ],
    realBenefits: [
      {
        stat: "30%",
        description: "Redução de reembolsos"
      },
      {
        stat: "Automático",
        description: "Uso em novas compras"
      },
      {
        stat: "100%",
        description: "Rastreabilidade"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Gerar Crédito",
        description: "Por cancelamento, devolução ou bônus"
      },
      {
        step: 2,
        title: "Notificar Cliente",
        description: "WhatsApp automático com saldo"
      },
      {
        step: 3,
        title: "Cliente Compra Nova Viagem",
        description: "Sistema aplica crédito automaticamente"
      },
      {
        step: 4,
        title: "Registrar Uso",
        description: "Histórico completo de transações"
      }
    ],
    relatedModules: ["clientes", "financeiro", "whatsapp"]
  },
  {
    id: "whatsapp",
    slug: "integracao-whatsapp",
    title: "Integração WhatsApp Multi-API",
    shortDescription: "Envio em massa com Z-API ou Evolution API, templates personalizados, links de cadastro e QR Codes de presença",
    fullDescription: "Sistema completo de comunicação via WhatsApp compatível com Z-API e Evolution API, incluindo envios em massa, templates com variáveis dinâmicas, envio de QR Codes de presença e geração de links de cadastro público.",
    icon: MessageCircle,
    category: "comunicacao",
    isFeatured: false,
    audiences: ["turismo", "torcidas"],
    benefits: ["tempo", "automacao"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/src/assets/whatsapp-mockup.jpg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: Settings,
        title: "Configuração Z-API",
        description: "Integração nativa com Z-API"
      },
      {
        icon: Settings,
        title: "Configuração Evolution API",
        description: "Suporte completo para Evolution API"
      },
      {
        icon: MessageCircle,
        title: "Mensagens em Massa",
        description: "Para viagem completa ou grupos"
      },
      {
        icon: FileText,
        title: "Templates Prontos",
        description: "Confirmação, lembrete, cobrança"
      },
      {
        icon: ClipboardCheck,
        title: "Envio de QR Codes",
        description: "Código de presença enviado automaticamente"
      },
      {
        icon: Users,
        title: "Geração de Links",
        description: "Cadastro público automático"
      },
      {
        icon: UserCircle,
        title: "WhatsApp Direto",
        description: "Clique e converse pelo perfil"
      },
      {
        icon: ClipboardCheck,
        title: "Histórico de Envios",
        description: "Rastreamento de mensagens"
      }
    ],
    realBenefits: [
      {
        stat: "2 APIs",
        description: "Z-API e Evolution API suportadas"
      },
      {
        stat: "QR Code",
        description: "Presença enviada automaticamente"
      },
      {
        stat: "Templates",
        description: "Prontos para usar"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Configurar API",
        description: "Z-API ou Evolution API no sistema"
      },
      {
        step: 2,
        title: "Selecionar Template",
        description: "Escolha entre modelos prontos ou crie"
      },
      {
        step: 3,
        title: "Adicionar QR Codes ou Links",
        description: "Sistema adiciona automaticamente"
      },
      {
        step: 4,
        title: "Enviar e Acompanhar",
        description: "Envio para grupos e verificação de histórico"
      }
    ],
    relatedModules: ["clientes", "passageiros", "presenca"]
  },
  {
    id: "relatorios",
    slug: "sistema-relatorios",
    title: "Sistema de Relatórios",
    shortDescription: "Relatórios de viagem, ingressos, presença com exportação PDF e filtros avançados",
    fullDescription: "Sistema completo de relatórios com lista de passageiros, controle financeiro, presença e exportação profissional em PDF.",
    icon: FileText,
    category: "configuracao",
    isFeatured: false,
    audiences: ["turismo", "torcidas", "transportadoras"],
    benefits: ["controle", "tempo"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: Users,
        title: "Relatório de Passageiros",
        description: "Lista completa por viagem"
      },
      {
        icon: DollarSign,
        title: "Relatório Financeiro",
        description: "Receitas e despesas detalhadas"
      },
      {
        icon: ClipboardCheck,
        title: "Relatório de Presença",
        description: "Quem embarcou vs. quem faltou"
      },
      {
        icon: Ticket,
        title: "Relatório de Ingressos",
        description: "Vendas por jogo e setor"
      },
      {
        icon: Settings,
        title: "Filtros Customizados",
        description: "Por qualquer campo ou critério"
      },
      {
        icon: FileText,
        title: "Exportação Múltipla",
        description: "PDF, Excel, CSV"
      }
    ],
    realBenefits: [
      {
        stat: "1 minuto",
        description: "Para gerar relatório completo"
      },
      {
        stat: "PDF",
        description: "Profissional e personalizado"
      },
      {
        stat: "Ilimitados",
        description: "Filtros e combinações"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Escolher Tipo",
        description: "Passageiros, financeiro, presença, etc."
      },
      {
        step: 2,
        title: "Aplicar Filtros",
        description: "Por viagem, período, status"
      },
      {
        step: 3,
        title: "Pré-visualizar",
        description: "Ver dados antes de exportar"
      },
      {
        step: 4,
        title: "Exportar",
        description: "PDF profissional ou planilha"
      }
    ],
    relatedModules: ["dashboard", "financeiro", "viagens"]
  },
  {
    id: "presenca",
    slug: "lista-presenca",
    title: "Lista de Presença Digital com Código de Barras",
    shortDescription: "Check-in via QR Code enviado por WhatsApp, verificação de hora de embarque pelo celular e relatórios de presença",
    fullDescription: "Sistema de presença digital com geração de QR Code único por passageiro, envio automatizado via WhatsApp, verificação de embarque por leitura de código de barras pelo celular registrando hora exata, e relatórios completos de comparecimento.",
    icon: ClipboardCheck,
    category: "operacional",
    isFeatured: false,
    audiences: ["turismo", "torcidas", "transportadoras"],
    benefits: ["tempo", "controle", "automacao"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: MessageCircle,
        title: "Link Público",
        description: "Compartilhar por WhatsApp facilmente"
      },
      {
        icon: ClipboardCheck,
        title: "Check-in Simples",
        description: "Nome e confirmar presença"
      },
      {
        icon: MessageCircle,
        title: "Código de Barras via WhatsApp",
        description: "QR Code único enviado automaticamente"
      },
      {
        icon: ClipboardCheck,
        title: "Verificação de Hora",
        description: "Leitura de código registra hora exata de embarque"
      },
      {
        icon: Users,
        title: "Leitura por Celular",
        description: "Scanner de QR Code pelo celular do responsável"
      },
      {
        icon: FileText,
        title: "Relatório de Presença",
        description: "Lista de quem embarcou e horário"
      },
      {
        icon: Bus,
        title: "Histórico por Cliente",
        description: "Presença em viagens anteriores"
      }
    ],
    realBenefits: [
      {
        stat: "100%",
        description: "Digital sem papel"
      },
      {
        stat: "Hora Registrada",
        description: "Momento exato do embarque"
      },
      {
        stat: "WhatsApp",
        description: "Código enviado automaticamente"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Gerar QR Code",
        description: "Sistema gera código único por passageiro"
      },
      {
        step: 2,
        title: "Enviar via WhatsApp",
        description: "QR Code enviado automaticamente"
      },
      {
        step: 3,
        title: "Escanear no Embarque",
        description: "Responsável escaneia código pelo celular"
      },
      {
        step: 4,
        title: "Registrar Hora",
        description: "Sistema salva presença e hora exata do embarque"
      }
    ],
    relatedModules: ["passageiros", "whatsapp", "relatorios"]
  },
  {
    id: "configuracoes",
    slug: "configuracoes",
    title: "Configurações & Personalização",
    shortDescription: "Time principal, logos, cidades de embarque, setores e gestão de usuários",
    fullDescription: "Personalize completamente o sistema com logos, cores do time, cidades de embarque, setores por estádio e gestão de acessos.",
    icon: Settings,
    category: "configuracao",
    isFeatured: false,
    audiences: ["turismo", "torcidas", "transportadoras"],
    benefits: ["controle", "automacao"],
    mockupImages: ["/placeholder.svg"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    subFeatures: [
      {
        icon: Settings,
        title: "Personalização Visual",
        description: "Logos, cores e identidade"
      },
      {
        icon: Bus,
        title: "Cidades de Embarque",
        description: "Múltiplas opções configuráveis"
      },
      {
        icon: Ticket,
        title: "Setores Customizados",
        description: "Por estádio e competição"
      },
      {
        icon: Users,
        title: "Links Públicos",
        description: "Cadastro automatizado de clientes"
      },
      {
        icon: UserCircle,
        title: "Gestão de Usuários",
        description: "Permissões e acessos"
      },
      {
        icon: FileText,
        title: "Backup e Segurança",
        description: "Dados protegidos e criptografados"
      }
    ],
    realBenefits: [
      {
        stat: "100%",
        description: "Personalizado para sua marca"
      },
      {
        stat: "Ilimitados",
        description: "Usuários e permissões"
      },
      {
        stat: "Seguro",
        description: "Backup automático diário"
      }
    ],
    howItWorks: [
      {
        step: 1,
        title: "Configurar Identidade",
        description: "Upload de logo e cores do time"
      },
      {
        step: 2,
        title: "Adicionar Cidades",
        description: "Locais de embarque personalizados"
      },
      {
        step: 3,
        title: "Criar Usuários",
        description: "Equipe com acessos específicos"
      },
      {
        step: 4,
        title: "Gerar Links Públicos",
        description: "Para captação automatizada"
      }
    ],
    relatedModules: ["clientes", "viagens", "dashboard"]
  }
];

export const categories = {
  all: "Todas",
  operacional: "Operacional",
  financeiro: "Financeiro",
  comunicacao: "Comunicação",
  configuracao: "Configuração"
};

export const audiences = {
  all: "Todos",
  turismo: "Empresas de Turismo",
  torcidas: "Torcidas Organizadas",
  transportadoras: "Transportadoras"
};

export const benefits = {
  all: "Todos",
  tempo: "Redução de Tempo",
  receita: "Aumento de Receita",
  controle: "Controle Financeiro",
  automacao: "Automação"
};
