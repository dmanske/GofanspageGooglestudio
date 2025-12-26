import { 
  Bus, Users, CreditCard, Ticket, MessageSquare, QrCode, 
  Shield, LayoutDashboard, Building, Wallet, TrendingUp
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ModuleFeature {
  title: string;
  description: string;
}

export interface Module {
  id: string;
  slug: string;
  emoji: string;
  title: string;
  tag: string;
  tagColor: string;
  borderColor: string;
  bgColor: string;
  description: string;
  icon: LucideIcon;
  features: ModuleFeature[];
}

export const modules: Module[] = [
  {
    id: "viagens",
    slug: "gestao-viagens",
    emoji: "🚌",
    title: "Gestão de Viagens",
    tag: "Módulo Principal",
    tagColor: "bg-blue-500/20 text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    description: "Controle completo de todas as suas viagens e caravanas. Gerencie passageiros, ônibus, pagamentos e muito mais.",
    icon: Bus,
    features: [
      { title: "Cadastro de Viagens", description: "Crie viagens com data, destino, adversário, valor, capacidade e todas as informações necessárias." },
      { title: "Agrupamento de Passageiros", description: "Agrupe passageiros que viajam juntos (famílias, amigos). Se trocar de ônibus, todos vão juntos." },
      { title: "Múltiplos Ônibus", description: "Adicione quantos ônibus precisar. Controle a capacidade e ocupação de cada um separadamente." },
      { title: "Troca de Ônibus", description: "Mova passageiros entre ônibus com facilidade. O sistema mantém grupos unidos automaticamente." },
      { title: "Controle de Ocupação", description: "Visualize em tempo real quantos lugares estão ocupados e disponíveis em cada ônibus." },
      { title: "Status da Viagem", description: "Acompanhe o status: Aberta (vendendo), Fechada (lotada), Em Andamento ou Concluída." },
      { title: "Setores do Estádio", description: "Configure setores com preços diferentes. Cada passageiro pode escolher seu setor preferido." },
      { title: "Passeios Opcionais", description: "Adicione passeios extras à viagem (city tour, visita ao estádio) com valores adicionais." },
      { title: "Cidades de Embarque", description: "Configure múltiplos pontos de embarque. Cada passageiro escolhe onde vai embarcar." },
      { title: "Parcelamento Flexível", description: "Configure se a viagem aceita parcelamento, quantas parcelas e datas de vencimento." },
      { title: "Links por Ônibus", description: "Gere links únicos para cada ônibus. Passageiros acessam informações específicas." },
      { title: "Relatórios da Viagem", description: "Relatórios completos: lista de passageiros, financeiro, ocupação, pagamentos pendentes." }
    ]
  },
  {
    id: "clientes",
    slug: "clientes",
    emoji: "👥",
    title: "Gestão de Clientes",
    tag: "CRM Completo",
    tagColor: "bg-green-500/20 text-green-400",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/5",
    description: "Mantenha um cadastro completo de todos os seus clientes. Histórico de viagens, créditos, pagamentos e comunicação.",
    icon: Users,
    features: [
      { title: "Cadastro Completo", description: "Nome, CPF, telefone, email, cidade, data de nascimento e foto do cliente." },
      { title: "Cadastro Público", description: "Link para o cliente se cadastrar sozinho. Você só aprova e ele já está no sistema." },
      { title: "Busca Inteligente", description: "Encontre clientes por nome, CPF, telefone, cidade ou qualquer informação." },
      { title: "Histórico de Viagens", description: "Veja todas as viagens que o cliente já fez, valores pagos e status de cada uma." },
      { title: "Saldo de Créditos", description: "Visualize o saldo de créditos pré-pagos do cliente e histórico de uso." },
      { title: "WhatsApp Direto", description: "Clique no telefone e abra conversa no WhatsApp automaticamente." },
      { title: "Aniversariantes", description: "Identifique clientes que fazem aniversário para ações de relacionamento." },
      { title: "Reconhecimento Facial", description: "Cadastre foto do cliente para identificação rápida na lista de presença." }
    ]
  },
  {
    id: "onibus",
    slug: "onibus",
    emoji: "🚍",
    title: "Gestão de Ônibus",
    tag: "Frota Completa",
    tagColor: "bg-orange-500/20 text-orange-400",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/5",
    description: "Cadastre e gerencie toda a sua frota de ônibus. Controle capacidade, empresas parceiras e disponibilidade.",
    icon: Bus,
    features: [
      { title: "Cadastro de Veículos", description: "Cadastre ônibus com identificação, tipo (executivo, leito, convencional), empresa e capacidade." },
      { title: "Empresas Parceiras", description: "Organize ônibus por empresa. Filtre e encontre veículos de cada parceiro." },
      { title: "Capacidade Real", description: "Defina a capacidade real de cada ônibus. O sistema controla para não ultrapassar." },
      { title: "Galeria de Fotos", description: "Adicione fotos do ônibus para mostrar aos clientes a qualidade do veículo." },
      { title: "Informações de WiFi", description: "Cadastre nome da rede e senha do WiFi. Passageiros acessam pelo app." },
      { title: "Estatísticas de Uso", description: "Veja quantas viagens cada ônibus já fez e taxa de ocupação média." }
    ]
  },
  {
    id: "financeiro",
    slug: "financeiro",
    emoji: "💰",
    title: "Gestão Financeira",
    tag: "Controle Total",
    tagColor: "bg-purple-500/20 text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    description: "Controle financeiro completo do seu negócio. Receitas, despesas, contas a pagar, fluxo de caixa e relatórios.",
    icon: TrendingUp,
    features: [
      { title: "Receitas por Viagem", description: "Acompanhe quanto cada viagem está gerando. Veja pagos, pendentes e total esperado." },
      { title: "Despesas por Viagem", description: "Registre todas as despesas: combustível, pedágio, alimentação, hospedagem, etc." },
      { title: "Formas de Pagamento", description: "Registre pagamentos em dinheiro, PIX, cartão, transferência ou crédito pré-pago." },
      { title: "Fluxo de Caixa", description: "Visualize entradas e saídas por período. Gráficos e relatórios detalhados." },
      { title: "Contas a Pagar", description: "Controle contas a pagar com vencimento, status e alertas de atraso." },
      { title: "Contas a Receber", description: "Veja todos os valores pendentes de recebimento e quem deve." },
      { title: "Histórico de Pagamentos", description: "Registro completo de todos os pagamentos recebidos com data, valor e forma." },
      { title: "Lucro por Viagem", description: "Calcule automaticamente o lucro de cada viagem (receitas - despesas)." },
      { title: "Alertas de Pendências", description: "Receba alertas de pagamentos atrasados e parcelas vencidas." },
      { title: "Relatórios Financeiros", description: "Relatórios por período, por viagem, por cliente. Exporte em PDF ou Excel." }
    ]
  },
  {
    id: "creditos",
    slug: "creditos",
    emoji: "💳",
    title: "Créditos Pré-Pagos",
    tag: "Fidelização",
    tagColor: "bg-teal-500/20 text-teal-400",
    borderColor: "border-teal-500/30",
    bgColor: "bg-teal-500/5",
    description: "Sistema de créditos pré-pagos para fidelizar clientes. O cliente deposita um valor e usa nas viagens.",
    icon: CreditCard,
    features: [
      { title: "Depósito de Créditos", description: "Cliente deposita valor e ganha créditos na carteira digital para usar nas viagens." },
      { title: "Uso nas Viagens", description: "Na hora de pagar a viagem, o cliente pode usar o saldo total ou parcialmente." },
      { title: "Histórico Completo", description: "Veja todo o histórico: depósitos, usos, em qual viagem usou e saldo atual." },
      { title: "Saldo em Tempo Real", description: "Cliente e administrador veem o saldo atualizado instantaneamente." },
      { title: "Vinculação Automática", description: "Ao adicionar passageiro com crédito, o sistema sugere usar o saldo disponível." },
      { title: "Relatório de Créditos", description: "Veja total de créditos no sistema, por cliente, utilizados e disponíveis." }
    ]
  },
  {
    id: "ingressos",
    slug: "ingressos",
    emoji: "🎫",
    title: "Gestão de Ingressos",
    tag: "Venda Avulsa",
    tagColor: "bg-red-500/20 text-red-400",
    borderColor: "border-red-500/30",
    bgColor: "bg-red-500/5",
    description: "Venda ingressos de jogos independente das viagens. Para clientes que vão por conta própria.",
    icon: Ticket,
    features: [
      { title: "Jogos Independentes", description: "Cadastre jogos para venda de ingressos avulsos, sem precisar criar viagem." },
      { title: "Setores e Preços", description: "Configure setores do estádio com preços diferentes para cada jogo." },
      { title: "Venda por Cliente", description: "Registre qual cliente comprou, setor escolhido e status do pagamento." },
      { title: "Controle de Estoque", description: "Defina quantidade de ingressos disponíveis por setor e controle vendas." },
      { title: "Financeiro Separado", description: "Receitas de ingressos aparecem separadas no financeiro para melhor controle." },
      { title: "Relatório de Vendas", description: "Relatório completo de ingressos vendidos por jogo, setor e cliente." }
    ]
  },
  {
    id: "whatsapp",
    slug: "whatsapp",
    emoji: "💬",
    title: "Integração WhatsApp",
    tag: "Comunicação",
    tagColor: "bg-green-500/20 text-green-400",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/5",
    description: "Comunique-se com seus clientes de forma eficiente. Envie mensagens em massa e use templates personalizados.",
    icon: MessageSquare,
    features: [
      { title: "Envio em Massa", description: "Envie mensagens para todos os passageiros de uma viagem de uma só vez." },
      { title: "Templates Personalizados", description: "Crie templates de mensagens com variáveis: nome, valor, data, ônibus, etc." },
      { title: "Links de Cadastro", description: "Gere links personalizados para clientes se cadastrarem via WhatsApp." },
      { title: "Categorias de Mensagens", description: "Organize templates por categoria: cobrança, confirmação, informativo, etc." },
      { title: "Filtros de Envio", description: "Envie apenas para: pagamentos, pendentes, de um ônibus específico, de uma cidade." },
      { title: "Histórico de Envios", description: "Veja histórico de mensagens enviadas, para quem e quando." }
    ]
  },
  {
    id: "qrcode",
    slug: "qrcode",
    emoji: "📱",
    title: "QR Code e Check-in",
    tag: "Check-in Digital",
    tagColor: "bg-indigo-500/20 text-indigo-400",
    borderColor: "border-indigo-500/30",
    bgColor: "bg-indigo-500/5",
    description: "Sistema completo de check-in por QR Code. Cada passageiro recebe seu código único para confirmar presença.",
    icon: QrCode,
    features: [
      { title: "QR Code Individual", description: "Cada passageiro recebe um QR Code único que pode baixar ou compartilhar." },
      { title: "Scanner de Presença", description: "Use a câmera do celular para escanear e confirmar presença instantaneamente." },
      { title: "Confirmação Automática", description: "Ao escanear, o sistema marca presença e registra horário de embarque." },
      { title: "Lista de Presença", description: "Visualize em tempo real quem já embarcou e quem está faltando." },
      { title: "Presença por Ônibus", description: "Veja a lista de presença separada por ônibus para melhor controle." },
      { title: "Link Público", description: "Gere link público para o motorista ou auxiliar fazer o check-in sem login." },
      { title: "Horário de Embarque", description: "Registra automaticamente o horário que cada passageiro embarcou." },
      { title: "Estatísticas", description: "Veja porcentagem de presentes, ausentes e pendentes em tempo real." }
    ]
  },
  {
    id: "fornecedores",
    slug: "fornecedores",
    emoji: "🏢",
    title: "Gestão de Fornecedores",
    tag: "Parceiros",
    tagColor: "bg-pink-500/20 text-pink-400",
    borderColor: "border-pink-500/30",
    bgColor: "bg-pink-500/5",
    description: "Cadastre e gerencie todos os seus fornecedores e parceiros de negócio. Empresas de ônibus, hotéis, restaurantes.",
    icon: Building,
    features: [
      { title: "Cadastro Completo", description: "Nome, CNPJ, endereço, telefone, email e pessoa de contato." },
      { title: "Categorias", description: "Organize por tipo: transporte, hospedagem, alimentação, ingressos, etc." },
      { title: "Histórico Financeiro", description: "Veja quanto já pagou para cada fornecedor e valores pendentes." },
      { title: "Contato Rápido", description: "Acesse telefone e WhatsApp do fornecedor com um clique." }
    ]
  },
  {
    id: "seguranca",
    slug: "seguranca",
    emoji: "🔒",
    title: "Configurações",
    tag: "Controle de Acesso",
    tagColor: "bg-red-500/20 text-red-400",
    borderColor: "border-red-500/30",
    bgColor: "bg-red-500/5",
    description: "Sistema robusto de segurança com controle granular de permissões. Defina exatamente o que cada usuário pode fazer.",
    icon: Shield,
    features: [
      { title: "Hierarquia de Usuários", description: "4 níveis: Desenvolvedor (você), Proprietário (cliente), Administrador e Funcionário." },
      { title: "Permissões Granulares", description: "44 permissões configuráveis. Defina o que cada funcionário pode ver, criar, editar ou deletar." },
      { title: "Categorias de Permissões", description: "11 categorias organizadas: Clientes, Viagens, Financeiro, Créditos, Ônibus, Ingressos, etc." },
      { title: "Proteção de Dados", description: "74 tabelas protegidas com Row Level Security. Dados seguros no banco." },
      { title: "Menus Protegidos", description: "Funcionário só vê os menus que tem permissão. Interface limpa e segura." },
      { title: "Ações Protegidas", description: "Botões de editar e excluir só aparecem para quem tem permissão." },
      { title: "Usuários Protegidos", description: "Desenvolvedor e Proprietário não podem ser deletados ou rebaixados." },
      { title: "Auditoria", description: "Registro de quem fez o quê e quando para rastreabilidade." }
    ]
  },
  {
    id: "dashboard",
    slug: "dashboard",
    emoji: "📊",
    title: "Dashboard e Relatórios",
    tag: "Visão Geral",
    tagColor: "bg-blue-500/20 text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    description: "Painel completo com visão geral do seu negócio. Gráficos, estatísticas e indicadores em tempo real.",
    icon: LayoutDashboard,
    features: [
      { title: "Estatísticas Gerais", description: "Total de clientes, viagens, receita do mês e ocupação média." },
      { title: "Próximas Viagens", description: "Veja as próximas viagens com ocupação e valores pendentes." },
      { title: "Pagamentos Pendentes", description: "Lista de clientes com pagamentos em aberto para cobrança." },
      { title: "Gráficos Interativos", description: "Gráficos de ocupação, receitas, clientes por cidade e mais." },
      { title: "Performance", description: "Indicadores de crescimento comparando com períodos anteriores." },
      { title: "Atividades Recentes", description: "Veja as últimas ações: cadastros, pagamentos, viagens criadas." }
    ]
  }
];

// Top 7 módulos para a seção de vídeos
export const top7Modules = [
  "viagens",
  "clientes", 
  "financeiro",
  "qrcode",
  "whatsapp",
  "ingressos",
  "seguranca"
];

export const getTop7ModulesData = () => {
  return top7Modules.map(id => modules.find(m => m.id === id)).filter(Boolean) as Module[];
};
