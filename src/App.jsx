import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, ListChecks, Lightbulb, LineChart, MessageSquareText, Link as LinkIcon } from "lucide-react";

// Minimal tab system (no external UI libs needed)
const tabs = [
  { key: "intro", label: "Introdução", icon: BookOpen },
  { key: "metodos", label: "Métodos", icon: FlaskConical },
  { key: "glossario", label: "Glossário", icon: ListChecks },
  { key: "resultados", label: "Resultados", icon: LineChart },
  { key: "discussao", label: "Discussão", icon: MessageSquareText },
  { key: "referencias", label: "Referências", icon: LinkIcon },
];

const SectionCard = ({ title, children, tone = "default" }) => {
  const tones = {
    default: "bg-white",
    blue: "bg-blue-50",
    green: "bg-green-50",
    yellow: "bg-yellow-50",
    red: "bg-red-50",
    pink: "bg-pink-50",
    purple: "bg-purple-50",
    orange: "bg-orange-50",
    amber: "bg-amber-50",
    tip: "bg-violet-50",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`rounded-2xl shadow-sm border border-zinc-200 ${tones[tone]} p-5`}
    >
      {title && <h3 className="text-xl font-semibold mb-3 text-zinc-900">{title}</h3>}
      <div className="prose prose-zinc max-w-none leading-relaxed">{children}</div>
    </motion.div>
  );
};

function Header() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white p-8 md:p-10 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery.</h1>
          <p className="mt-1 text-sm text-zinc-400">Autores: Lu, Chris and Lu, Cong and Lange, Robert Tjarko and Foerster, Jakob and Clune, Jeff and Ha, David.</p>
          <a href="https://arxiv.org/abs/2408.06292">[Artigo: arXiv preprint arXiv:2408.06292 - ano 2024]</a>
        </div>
        <div className="shrink-0">
          <div className="bg-white/10 rounded-2xl px-4 py-3 text-sm">
            <div className="font-medium">Uso de Multiagentes e LLMs</div>
            <div className="text-zinc-300">Ideação → Experimentos → Manuscrito → Revisão</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SakanaAISite() {
  const [active, setActive] = React.useState("intro");
  const ActiveIcon = tabs.find(t => t.key === active)?.icon ?? BookOpen;
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800">
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 space-y-6">
        <Header />

        {/* Tabs */}
        <div className="sticky top-0 z-10 bg-zinc-50/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-50/60 rounded-2xl border border-zinc-200">
          <div className="flex flex-wrap gap-1 p-2">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors ${active === key
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-700 hover:bg-zinc-100"
                  }`}
                aria-pressed={active === key}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Section */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          {active === "intro" && (
            <div className="space-y-6">
              <SectionCard tone="blue" title="Objetivo Principal">
                <p>Desenvolver um framework de descoberta científica totalmente automatizado, em que modelos de linguagem de fronteira (LLMs) e agentes de código realizam toda a pipeline:</p>
                <ul>
                  <li>geração de ideias de pesquisa,</li>
                  <li>planejamento e execução de experimentos,</li>
                  <li>visualização dos resultados,</li>
                  <li>escrita de artigos científicos em LaTeX,</li>
                  <li>revisão automática por pares.</li>
                </ul>
                <p>O sistema pode operar em loop aberto, acumulando descobertas em um arquivo de conhecimento, de forma análoga ao processo científico humano.</p>
              </SectionCard>

              <SectionCard title="Contexto e Motivação">
                <p>O método científico tradicional, apesar de revolucionário, é limitado por tempo, criatividade e conhecimento humano.</p>
                <p>Tentativas anteriores de automação focaram apenas em partes isoladas do processo científico, como AutoML, busca de hiperparâmetros e descoberta de algoritmos, sempre em espaços de busca restritos.</p>
                <p>Avanços recentes em modelos fundacionais mostraram utilidade em auxiliar cientistas (brainstorming, redação, programação), mas ainda não havia um sistema ponta a ponta que realizasse a pesquisa completa.</p>
                <p>O AI Scientist surge como a primeira abordagem que integra todas as etapas do ciclo científico — da ideação à revisão — com potencial para acelerar a ciência, democratizar a pesquisa e transformar poder computacional em inovação científica contínua e acessível.</p>
              </SectionCard>

              <SectionCard tone="purple" title="Contribuições">
                <ol>
                  <li>Pipeline ponta a ponta para pesquisa autônoma em ML: ideação, execução experimental, redação e revisão automatizada.</li>
                  <li>Agente revisor LLM calibrado com desempenho próximo ao humano em avaliação de artigos (ex.: acurácia balanceada ≈ 0,65 vs. 0,66 de humanos).</li>
                  <li>Capacidade de gerar dezenas a centenas de artigos em domínios distintos (difusão, linguagem, grokking) com custo baixo (~US$10–15 por paper).</li>
                  <li>Demonstração de casos concretos em modelagem por difusão, modelagem de linguagem e dinâmica de aprendizagem.</li>
                  <li>Discussão aprofundada de limitações, riscos e implicações éticas, como vieses, falhas experimentais, possibilidade de uso malicioso e impactos no ecossistema científico.</li>
                </ol>
              </SectionCard>
            </div>
          )}

          {active === "metodos" && (
            <div className="space-y-6">
              <SectionCard title="Ciclo completo do The AI Scientist (9 etapas)">
                <p>Pipeline de ponta a ponta para gerar um paper de forma autônoma. Em cada etapa abaixo, indicamos se há um <strong>Agente</strong> (LLM/agentic) dedicado ou se é uma fase automatizada do sistema.</p>
              </SectionCard>

              <SectionCard title="1) Ideação">
                <p><strong>Agente:</strong> <span>Sim — Agente de Ideação (LLM)</span></p>
                <ul>
                  <li><strong>O que faz:</strong> propõe hipóteses/direções de pesquisa e esboça planos experimentais.</li>
                  <li><strong>Técnicas:</strong> chain-of-thought, self-reflection e geração iterativa de ideias com pontuações (interessância, viabilidade, novidade).</li>
                  <li><strong>Entradas:</strong> tema amplo + template de código/LaTeX seed.</li>
                  <li><strong>Saídas:</strong> ideias estruturadas (JSON/texto) com plano de teste e critérios de avaliação.</li>
                  <li><strong>Riscos comuns:</strong> redundância entre ideias, otimismo excessivo nas pontuações, escopo amplo demais.</li>
                </ul>
              </SectionCard>

              <SectionCard title="2) Planejamento de Experimentos">
                <p><strong>Agente:</strong> <span>Sim — Planner (LLM)</span></p>
                <ul>
                  <li><strong>O que faz:</strong> transforma a ideia em um plano executável (número de rodadas, varreduras de hiperparâmetros, métricas e baselines).</li>
                  <li><strong>Entradas:</strong> ideia selecionada + resultados/base pré-existentes.</li>
                  <li><strong>Saídas:</strong> lista de runs, configurações e critérios de sucesso/falha.</li>
                  <li><strong>Integrações:</strong> prepara o terreno para o Agente de Código implementar mudanças.</li>
                  <li><strong>Riscos comuns:</strong> plano pouco realista (tempo/compute), falta de controles/ablação.</li>
                </ul>
              </SectionCard>

              <SectionCard title="3) Geração &amp; Edição de Código">
                <p><strong>Agente:</strong> <span>Sim — Agente de Código (ex.: Aider)</span></p>
                <ul>
                  <li><strong>O que faz:</strong> edita o template (modelos, perdas, métricas, datasets), implementa a ideia e registra um “diário experimental”.</li>
                  <li><strong>Loop de robustez:</strong> a cada erro de execução/timeout, o agente corrige e reitera (várias tentativas).</li>
                  <li><strong>Saídas:</strong> diffs de código, scripts prontos para rodar e notas de experimentação.</li>
                  <li><strong>Riscos comuns:</strong> bugs silenciosos, violações de protocolo experimental, dependências não previstas.</li>
                </ul>
              </SectionCard>

              <SectionCard title="4) Execução de Experimentos">
                <p><strong>Agente:</strong> <span>Não — Orquestração/automação de execução</span></p>
                <ul>
                  <li><strong>O que faz:</strong> roda os comandos padronizados de treino/avaliação, coleta logs e artefatos.</li>
                  <li><strong>Integrações:</strong> em caso de falha, retorna mensagens/tracebacks para o Agente de Código.</li>
                  <li><strong>Saídas:</strong> métricas (loss/val), checkpoints, logs e artefatos intermediários.</li>
                  <li><strong>Riscos comuns:</strong> estouro de tempo/armazenamento, baixa utilização de GPU, sementes não controladas.</li>
                </ul>
              </SectionCard>

              <SectionCard title="5) Visualização &amp; Organização de Resultados">
                <p><strong>Agente:</strong> <span>Sim — Agente de Visualização (via Agente de Código)</span></p>
                <ul>
                  <li><strong>O que faz:</strong> edita <code>plot.py</code>, gera figuras/tabelas e descreve cada plot no “notes.txt”.</li>
                  <li><strong>Saídas:</strong> PNG/PDF de figuras, tabelas resumidas, descrição do conteúdo de cada visualização.</li>
                  <li><strong>Boas práticas:</strong> rotular execuções, legibilidade de eixos/legendas, comparação justa com baseline.</li>
                  <li><strong>Riscos comuns:</strong> gráficos ilegíveis, labels incorretos, seleção enviesada de resultados.</li>
                </ul>
              </SectionCard>

              <SectionCard title="6) Redação do Manuscrito (LaTeX)">
                <p><strong>Agente:</strong> <span>Sim — Agente Redator (LLM, via Aider)</span></p>
                <ul>
                  <li><strong>O que faz:</strong> preenche a estrutura LaTeX seção a seção (introdução, método, setup, resultados, conclusão).</li>
                  <li><strong>Fontes:</strong> usa apenas resultados observados (figuras/tabelas/logs) e referências validadas.</li>
                  <li><strong>Refino:</strong> auto-revisão por seção para reduzir redundância e melhorar clareza.</li>
                  <li><strong>Saídas:</strong> <code>.tex</code> completo + <code>.bib</code> com citações corretas.</li>
                  <li><strong>Riscos comuns:</strong> referências cruzadas quebradas, excesso de verbosidade, omissão de ablações.</li>
                </ul>
              </SectionCard>

              <SectionCard title="7) Compilação &amp; Checagens">
                <p><strong>Agente:</strong> <span>Parcial — Compilador/Linter (não agente) + Agente Redator corrige</span></p>
                <ul>
                  <li><strong>O que faz:</strong> compila o LaTeX, captura erros/warnings e devolve ao Agente Redator para correção automática.</li>
                  <li><strong>Saídas:</strong> PDF final compilado, log de compilação e ajustes aplicados.</li>
                  <li><strong>Riscos comuns:</strong> paths inválidos, figuras fora da margem, pacotes ausentes.</li>
                </ul>
              </SectionCard>

              <SectionCard title="8) Revisão Automática por Pares">
                <p><strong>Agente:</strong> <span>Sim — Agente Revisor (LLM)</span></p>
                <ul>
                  <li><strong>O que faz:</strong> avalia segundo diretrizes (p.ex., NeurIPS/ICLR), emite notas (soundness, apresentação, contribuição, overall, confiança) e decisão preliminar.</li>
                  <li><strong>Técnicas:</strong> self-reflection, few-shot, ensembling/meta-review para robustez; possibilidade de calibração por limiar.</li>
                  <li><strong>Saídas:</strong> parecer estruturado com forças, fraquezas, questões e recomendações.</li>
                  <li><strong>Uso:</strong> feedback alimenta nova rodada de ajustes no paper/experimentos.</li>
                </ul>
              </SectionCard>

              <SectionCard title="9) Arquivamento &amp; Loop Aberto">
                <p><strong>Agente:</strong> <span>Não — Sistema/Arquivo de Conhecimento</span></p>
                <ul>
                  <li><strong>O que faz:</strong> armazena paper, código, resultados e pareceres para reutilização e iteração futura.</li>
                  <li><strong>Loop:</strong> melhores ideias/insights são reaproveitados para gerar novas hipóteses (ciclo contínuo).</li>
                  <li><strong>Saídas:</strong> acervo versionado (papers, figuras, logs, prompts, configs) para auditoria/reprodutibilidade.</li>
                  <li><strong>Riscos comuns:</strong> rastreabilidade incompleta de versões, metadados pobres, dificuldade de reuso.</li>
                </ul>
              </SectionCard>
            </div>
          )}

          {active === "glossario" && (
            <div className="grid md:grid-cols-2 gap-4">
              <SectionCard title="LLM (Large Language Model)">
                <p>Modelo de linguagem autoregressivo capaz de raciocínio, conhecimento comum e geração de código, habilitando agentes.</p>
              </SectionCard>

              <SectionCard title="Chain-of-Thought">
                <p>Estratégia de prompting que incentiva passos de raciocínio explícitos para decisões mais robustas. O modelo escreve seu raciocínio em etapas intermediárias, o que ajuda a gerar ideias de pesquisa mais claras e consistentes.</p>
              </SectionCard>

              <SectionCard title="Self-Reflection (Reflexion)">
                <p>Ciclo de autoavaliação em que o agente critica e melhora saídas anteriores (ideias, planos, seções do paper). Esse mecanismo reduz redundância, melhora clareza e permite ajustes mais precisos durante o processo.</p>
              </SectionCard>

              <SectionCard title="Few-Shot Prompting">
                <p>Técnica de fornecer exemplos curtos no prompt para guiar o comportamento do LLM. No contexto do AI Scientist, ajuda o revisor automático a se alinhar melhor com padrões de conferências como NeurIPS/ICLR.</p>
              </SectionCard>

              <SectionCard title="Review Ensembling">
                <p>Método em que múltiplas instâncias de revisão (de um mesmo artigo) são geradas e depois combinadas. Isso reduz variância e aumenta a robustez das notas e comentários do revisor automatizado.</p>
              </SectionCard>

              <SectionCard title="Meta-Review (Area Chair Simulation)">
                <p>Passo adicional em que o sistema gera uma revisão consolidada, atuando como se fosse um “Area Chair” humano. Resume os pareceres anteriores e decide de forma mais calibrada.</p>
              </SectionCard>

              <SectionCard title="Agente de Código - Aider">
                <p>Agente de código baseado em LLM capaz de editar repositórios inteiros. Implementa novas ideias, corrige erros, gera figuras e mantém um “diário experimental” com notas para cada execução.</p>
              </SectionCard>

              <SectionCard title="Balanced Accuracy (Acurácia Balanceada)">
                <p>Métrica usada para avaliar o revisor automático. Calcula a média entre sensibilidade (true positive rate) e especificidade (true negative rate), sendo mais justa em bases desbalanceadas.</p>
              </SectionCard>

              <SectionCard title="Open-Ended Discovery">
                <p>Abordagem em que o sistema continua gerando ideias e papers sem um objetivo fechado. Busca explorar criativamente novos caminhos de pesquisa, de forma semelhante à comunidade científica humana.</p>
              </SectionCard>

            </div>
          )}

          {active === "resultados" && (
            <div className="space-y-6">
              <SectionCard tone="info" title="Produção de Papers Automatizados">
                <p>
                  O <strong>AI Scientist</strong> foi capaz de gerar dezenas de artigos completos em diferentes domínios de pesquisa em ML, incluindo:
                </p>
                <ul>
                  <li><em>Modelagem por Difusão</em> (avaliação de arquiteturas e treinamento de difusores);</li>
                  <li><em>Modelagem de Linguagem</em> (experimentos sobre perplexidade, predição e escalabilidade);</li>
                  <li><em>Grokking</em> (dinâmica de aprendizado em redes treinadas em tarefas sintéticas).</li>
                </ul>
                <p>
                  O custo médio por artigo foi de aproximadamente <strong>US$10–15</strong>, demonstrando eficiência computacional e financeira.
                </p>
              </SectionCard>

              <SectionCard tone="tip" title="Avaliação do Revisor Automático">
                <p>
                  O <strong>Agente Revisor LLM</strong> foi calibrado e comparado com revisores humanos de conferências como ICLR.
                  O desempenho obtido em termos de <em>acurácia balanceada</em> foi:
                </p>
                <ul>
                  <li>LLM Revisor: ≈ 0,65</li>
                  <li>Revisores humanos: ≈ 0,66</li>
                </ul>
                <p>
                  Esse resultado sugere que o sistema pode fornecer avaliações de qualidade quase equivalente à revisão por pares humana, em escala muito maior.
                </p>
              </SectionCard>

              <SectionCard title="Visualização dos Resultados">
                <p>
                  O pipeline gera figuras e tabelas automaticamente (curvas de treino, gráficos de comparação, tabelas de métricas).
                  Essas visualizações são integradas ao LaTeX do artigo e descritas em texto, garantindo clareza na comunicação científica.
                </p>
                <ul>
                  <li>Gráficos de aprendizado ao longo do tempo;</li>
                  <li>Comparações entre baseline e modelo proposto;</li>
                  <li>Tabelas de métricas quantitativas.</li>
                </ul>
              </SectionCard>

              <SectionCard tone="success" title="Performance e Escalabilidade">
                <p>
                  O sistema demonstrou ser capaz de manter o ciclo <em>end-to-end</em> de forma confiável em diferentes temas, mostrando:
                </p>
                <ul>
                  <li>Capacidade de <strong>escala horizontal</strong>, produzindo múltiplos papers em paralelo;</li>
                  <li><strong>Baixo custo computacional</strong> por execução, comparado com métodos manuais de pesquisa;</li>
                  <li><strong>Reprodutibilidade</strong>, já que todos os códigos, resultados e revisões são armazenados no arquivo de conhecimento.</li>
                </ul>
              </SectionCard>

              <SectionCard tone="warning" title="Principais Achados">
                <p>
                  A análise das execuções revelou que:
                </p>
                <ul>
                  <li>O método é eficaz em propor <strong>ideias novas e testáveis</strong> em ciência de dados e ML.</li>
                  <li>A revisão automatizada pode servir como <strong>filtro inicial de qualidade</strong> antes da submissão humana.</li>
                  <li>A integração ponta a ponta reduz drasticamente o tempo entre <em>hipótese → experimento → paper</em>.</li>
                </ul>
              </SectionCard>

            </div>
          )}

          {active === "discussao" && (
            <div className="space-y-6">
              <SectionCard tone="info" title="Implicações Teóricas e Científicas">
                <ul>
                  <li>LLMs atuando como agentes de descoberta podem <strong>acelerar o ciclo científico</strong> com baixo custo e alta escala.</li>
                  <li>O formato <em>paper</em> automatizado garante <strong>interpretabilidade, auditabilidade e padronização</strong>, comparável ao processo humano tradicional.</li>
                  <li>O <strong>arquivo de conhecimento</strong> possibilita ciência cumulativa e exploratória, reforçando a ideia de <em>open-ended discovery</em>.</li>
                </ul>
              </SectionCard>

              <SectionCard tone="warning" title="Limitações & Riscos">
                <ul>
                  <li><strong>Implementações incorretas</strong> podem ser difíceis de detectar, mesmo com execução repetida de experimentos.</li>
                  <li>Risco de <strong>hallucinations</strong> em textos, métricas ou figuras, levando a conclusões enganosas.</li>
                  <li>O rigor é limitado pelo número de experimentos possíveis em orçamento restrito, resultando em <strong>comparações por vezes injustas</strong> (parâmetros, FLOPs, datasets).</li>
                  <li><strong>Uso indevido</strong> pode saturar o sistema de revisão científica com papers artificiais ou gerar resultados perigosos (em biologia ou software sensível).</li>
                  <li>Questões éticas incluem <strong>viés nos LLMs</strong>, atribuição de autoria e impacto no ecossistema acadêmico.</li>
                </ul>
              </SectionCard>

              <SectionCard tone="tip" title="Oportunidades Futuras">
                <ul>
                  <li>Explorar <strong>visão multimodal</strong> para interpretar e ajustar figuras, tabelas e layout de artigos.</li>
                  <li>Desenvolver <strong>sandboxes mais seguros</strong> para execução de código, garantindo confiabilidade e mitigando riscos de segurança.</li>
                  <li>Permitir <strong>mais iterações por ideia</strong>, aprimorando a seleção de hipóteses promissoras.</li>
                  <li>Integração com <strong>laboratórios robóticos</strong> e experimentação em áreas além do ML (ciências naturais, engenharia, biologia).</li>
                  <li>Maior conexão entre <strong>revisão automática e revisão humana</strong>, criando pipelines híbridos mais robustos.</li>
                </ul>
              </SectionCard>

            </div>
          )}

          {active === "referencias" && (
            <div className="space-y-4">
              <SectionCard title="Principais Fontes (seleção)">
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Lu, C.; Lu, C.; Lange, R. T.; Foerster, J.; Clune, J.; Ha, D. <em>The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery</em> (2024) — Sakana AI.</li>
                  <li>Wei, J. et al. <em>Chain-of-Thought Prompting Elicits Reasoning in Large Language Models</em> (2022).</li>
                  <li>Shinn, N. et al. <em>Reflexion: Language Agents with Verbal Reinforcement Learning</em> (2024).</li>
                  <li>Gauthier, P. <em>Aider: LLM-powered coding agent</em> (2024).</li>
                  <li>Beygelzimer, A. et al. <em>NeurIPS Consistency Experiment</em> (2021) — baseline humano de revisão.</li>
                  <li>Ho, J. et al. <em>DDPM</em> (2020); Vaswani, A. et al. <em>Attention Is All You Need</em> (2017); Power, A. et al. <em>Grokking</em> (2022).</li>
                </ol>
              </SectionCard>
              <SectionCard tone="info" title="Datasets & Templates Utilizados">
                <p>
                  O <strong>AI Scientist</strong> utiliza uma série de <em>templates</em> de código e datasets como ponto de partida para cada domínio de pesquisa. Esses recursos funcionam como seeds mínimos que o agente modifica e expande durante o ciclo de pesquisa.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Modelagem por Difusão</strong>: template baseado em <em>DDPM</em> (Ho et al., 2020), usado para estudar arquiteturas de difusão e escalabilidade de modelos generativos.
                  </li>
                  <li>
                    <strong>Modelagem de Linguagem</strong>: código inicial com Transformer (<em>Attention Is All You Need</em>, Vaswani et al., 2017), permitindo experimentos de predição de tokens, perplexidade e variação de hiperparâmetros.
                  </li>
                  <li>
                    <strong>Grokking</strong>: template baseado em tarefas sintéticas (<em>Grokking</em>, Power et al., 2022), explorando a dinâmica de aprendizado e generalização tardia em redes neurais.
                  </li>
                </ul>
              </SectionCard>
              <SectionCard tone="tip" title="Repositório & Código">
                <p>
                  Projeto original e papers gerados estão disponíveis publicamente no <a href="https://github.com/SakanaAI/AI-Scientist?tab=readme-ov-file#template-resources">GitHub do Sakana AI</a> (AI‑Scientist).
                </p>
              </SectionCard>
            </div>
          )}
        </motion.div>

        {/* Footer */}
        <div className="text-center text-sm text-zinc-500 py-8">
          <div className="inline-flex items-center gap-2">
            <ActiveIcon size={16} />
            <span>Conteúdo resumido e traduzido livremente do trabalho do Sakana AI (2024).</span>
          </div>
        </div>
      </div>
    </div>
  );
}
