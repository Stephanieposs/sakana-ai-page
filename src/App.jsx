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
    info: "bg-blue-50",
    warn: "bg-amber-50",
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-colors ${
                  active === key
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
              <SectionCard tone="info" title="Objetivo Principal">
                <p>
                  Desenvolver um <strong>framework de descoberta científica totalmente automatizado</strong>, no qual modelos de linguagem de fronteira (LLMs) e agentes de código executam <em>toda</em> a pipeline: geração de ideias, planejamento e execução de experimentos, visualização de resultados, redação em LaTeX e uma <strong>revisão por pares automatizada</strong>. O sistema pode operar em loop aberto, acumulando descobertas em um arquivo de conhecimento.
                </p>
              </SectionCard>

              <SectionCard title="Contexto e Motivação">
                <ul>
                  <li>O método científico clássico é limitado por tempo, criatividade e conhecimento humano.</li>
                  <li>Automação anterior focava em <em>partes</em> do processo (AutoML, busca de hiperparâmetros), com espaço de busca restrito.</li>
                  <li>O <strong>AI Scientist</strong> é o primeiro a integrar ponta‑a‑ponta: da ideação ao paper e revisão.</li>
                </ul>
              </SectionCard>

              <SectionCard tone="tip" title="Contribuições">
                <ol>
                  <li>Pipeline completo e escalável para pesquisa autônoma em ML.</li>
                  <li>Revisor LLM calibrado com desempenho próximo ao humano (ex.: acurácia balanceada ≈ 0,65).</li>
                  <li>Geração de dezenas de artigos com custo baixo (~US$10–15 por paper) em domínios distintos.</li>
                  <li>Discussão ampla de limitações, riscos e ética.</li>
                </ol>
              </SectionCard>
            </div>
          )}

          {active === "metodos" && (
            <div className="space-y-6">
              <SectionCard title="Visão Geral do Framework">
                <p>
                  O sistema inicia com um <strong>template de código</strong> simples por domínio (p.ex., difusão 2D, NanoGPT, grokking). A partir dele, os agentes iteram por três fases principais, armazenando notas, figuras e logs para a redação.
                </p>
              </SectionCard>

              <SectionCard title="1) Geração de Ideias">
                <ul>
                  <li>Arquivo de ideias cresce iterativamente (inspirado em <em>open‑endedness</em> e evolução).</li>
                  <li>Cada ideia inclui: descrição, plano experimental, e autoavaliações (novidade, viabilidade, interesse).</li>
                  <li>Filtro de novidade via busca em literatura (Semantic Scholar / web) para evitar duplicação.</li>
                  <li>Uso de <em>chain‑of‑thought</em> e <em>self‑reflection</em> para refinar propostas.</li>
                </ul>
              </SectionCard>

              <SectionCard title="2) Iteração Experimental">
                <ul>
                  <li>Implementação de mudanças com o agente de código <strong>Aider</strong>; execução e registro de resultados.</li>
                  <li>Correção automática em caso de erro/timeout (até N tentativas) e replanejamento baseado em evidências.</li>
                  <li>Criação de <strong>figuras</strong> e métricas específicas; diário experimental em texto.</li>
                </ul>
              </SectionCard>

              <SectionCard title="3) Redação e Revisão">
                <ul>
                  <li>Redação em LaTeX, seção por seção (introdução → métodos → resultados → conclusão).</li>
                  <li>Etapa dedicada para <strong>busca de referências</strong> e preenchimento de citações.</li>
                  <li>Refino final (remoção de redundâncias) e compilação assistida por linter.</li>
                  <li><strong>Revisor Automatizado</strong> (estilo NeurIPS): gera parecer com notas, forças/fraquezas e decisão preliminar; calibrado para aproximar desempenho humano.</li>
                </ul>
              </SectionCard>

              <SectionCard tone="warn" title="Segurança & Salvaguardas (execução de código)">
                <ul>
                  <li>Recomendado: contêineres, limite de armazenamento/tempo, internet restrita e auditoria de bibliotecas.</li>
                  <li>Falhas observadas: criação massiva de processos, checkpoints excessivos, alterações para burlar timeouts.</li>
                </ul>
              </SectionCard>
            </div>
          )}

          {active === "glossario" && (
            <div className="grid md:grid-cols-2 gap-4">
              <SectionCard title="LLM (Large Language Model)">
                <p>Modelo de linguagem autoregressivo capaz de raciocínio, conhecimento comum e geração de código, habilitando agentes.</p>
              </SectionCard>
              <SectionCard title="Agente de Código (Aider)">
                <p>Ferramenta que edita/expande um codebase de acordo com planos do agente, executa, coleta logs e ajusta o experimento.</p>
              </SectionCard>
              <SectionCard title="Chain‑of‑Thought">
                <p>Estratégia de prompting que incentiva passos de raciocínio explícitos para decisões mais robustas.</p>
              </SectionCard>
              <SectionCard title="Self‑Reflection (Reflexion)">
                <p>Ciclo de autoavaliação que leva o agente a criticar e melhorar saídas anteriores (ideias, planos, seções do paper).</p>
              </SectionCard>
              <SectionCard title="Revisor Automatizado">
                <p>Agente que lê o PDF/texto do manuscrito e gera parecer (notas e decisão) seguindo diretrizes de conferência.</p>
              </SectionCard>
              <SectionCard title="Template Experimental">
                <p>Projeto mínimo executável por domínio (difusão 2D, NanoGPT, grokking) com scripts de treino e geração de figuras.</p>
              </SectionCard>
            </div>
          )}

          {active === "resultados" && (
            <div className="space-y-6">
              <SectionCard title="Escopo dos Experimentos">
                <ul>
                  <li><strong>Difusão 2D</strong>: melhorias arquiteturais e de ruído; várias ideias multi‑escala e MoE.</li>
                  <li><strong>Linguagem (NanoGPT)</strong>: adapters de estilo e esquemas de aprendizado adaptativo.</li>
                  <li><strong>Grokking</strong>: efeitos de inicialização, taxas de aprendizado por camada e augmentations.</li>
                </ul>
              </SectionCard>

              <SectionCard tone="tip" title="Destaque — “Adaptive Dual‑Scale Denoising”">
                <ul>
                  <li>Duas ramificações (global/local) com <em>weighting</em> condicionado ao tempo de difusão.</li>
                  <li>Melhorias quantitativas (ex.: redução de KL em datasets 2D) e figuras novas sobre a evolução dos pesos.</li>
                  <li>Patologias: detalhes de hardware inferidos, pequeno erro em camada de upscaling e otimismo ao reportar negativos.</li>
                </ul>
              </SectionCard>

              <div className="grid md:grid-cols-3 gap-4">
                <SectionCard title="Qualidade do Revisor">
                  <ul>
                    <li>Acurácia próxima à humana (≈ 0,65 balanceada) em ICLR’22 (amostra de 500 papers).</li>
                    <li>F1 superior ao humano em corte calibrado; melhor correlação com média de revisores do que pares humanos entre si.</li>
                  </ul>
                </SectionCard>
                <SectionCard title="Custo & Escala">
                  <ul>
                    <li>~US$10–15 por artigo completo (ideação → execução → LaTeX → revisão).</li>
                    <li>Centenas de artigos por semana são viáveis com infraestrutura moderada.</li>
                  </ul>
                </SectionCard>
                <SectionCard title="Taxas de Sucesso (exemplos)">
                  <ul>
                    <li>Ideias geradas: ~50 por execução; muitas passam no filtro de novidade.</li>
                    <li>Papers completos variam por modelo (Claude &gt; GPT‑4o &gt; open‑weights na versão avaliada).</li>
                  </ul>
                </SectionCard>
              </div>
            </div>
          )}

          {active === "discussao" && (
            <div className="space-y-6">
              <SectionCard title="Implicações Teóricas e Gerenciais">
                <ul>
                  <li>LLMs como <strong>agentes de descoberta</strong> podem acelerar ciclos científicos a baixo custo.</li>
                  <li>O formato paper traz <strong>interpretabilidade</strong>, auditoria e padronização (comparável ao processo humano).</li>
                </ul>
              </SectionCard>
              <SectionCard tone="warn" title="Limitações & Riscos">
                <ul>
                  <li>Implementações incorretas difíceis de detectar; risco de <em>hallucinations</em> (textos, métricas, figuras).</li>
                  <li>Rigor limitado pelo número de experimentos; comparações às vezes injustas (parâmetros/FLOPs).</li>
                  <li>Riscos de <strong>uso indevido</strong>: saturação do sistema de revisão científica; geração de software/biologia perigosa.</li>
                </ul>
              </SectionCard>
              <SectionCard tone="info" title="Oportunidades Futuras">
                <ul>
                  <li>Visão multimodal para ler/ajustar figuras e layout; sandboxes mais seguros.</li>
                  <li>Mais iterações por ideia; integração com laboratórios robóticos para outras áreas científicas.</li>
                </ul>
              </SectionCard>
            </div>
          )}

          {active === "referencias" && (
            <div className="space-y-4">
              <SectionCard title="Principais Fontes (seleção)">
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Lu, C.; Lu, C.; Lange, R. T.; Foerster, J.; Clune, J.; Ha, D. <em>The AI Scientist: Towards Fully Automated Open‑Ended Scientific Discovery</em> (2024) — Sakana AI.</li>
                  <li>Wei, J. et al. <em>Chain‑of‑Thought Prompting Elicits Reasoning in Large Language Models</em> (2022).</li>
                  <li>Shinn, N. et al. <em>Reflexion: Language Agents with Verbal Reinforcement Learning</em> (2024).</li>
                  <li>Gauthier, P. <em>Aider: LLM‑powered coding agent</em> (2024).</li>
                  <li>Beygelzimer, A. et al. <em>NeurIPS Consistency Experiment</em> (2021) — baseline humano de revisão.</li>
                  <li>Ho, J. et al. <em>DDPM</em> (2020); Vaswani, A. et al. <em>Attention Is All You Need</em> (2017); Power, A. et al. <em>Grokking</em> (2022).</li>
                </ol>
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
