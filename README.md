**Sakana AI Page (Demo)**

Projeto React + Vite que demonstra uma página informativa com abas sobre o trabalho “The AI Scientist” (Sakana AI, 2024). A interface usa Tailwind CSS (v4), animações com Framer Motion e ícones do Lucide.

**Stack**
- **Vite + React**: app SPA com HMR.
- **Tailwind v4**: utilitários de estilo via `@import "tailwindcss"`.
- **Tipografia**: plugin `@tailwindcss/typography` para classes `prose`.
- **Framer Motion**: transições sutis.
- **Lucide React**: ícones.

**Pré‑Requisitos**
- **Node.js**: 18+ (LTS recomendado).
- **npm**: 9+.

**Rodando O Projeto**
- **Instalar dependências**: `npm install`
- **Ambiente de desenvolvimento**: `npm run dev`
  - Abra a URL indicada no terminal (ex.: `http://localhost:5173`).

**Build E Preview**
- **Build para produção**: `npm run build`
- **Preview local do build**: `npm run preview`

**Estrutura Principal**
- `index.html`: ponto de entrada do Vite.
- `src/main.jsx`: monta a aplicação e importa `./index.css`.
- `src/App.jsx`: conteúdo da página (abas, cards, textos).
- `src/index.css`: habilita Tailwind e o plugin de tipografia.
- `postcss.config.js`: carrega `tailwindcss` e `autoprefixer`.
- `tailwind.config.js`: padrão (opcional no Tailwind v4).

**Como Editar O Conteúdo**
- Ajuste textos, seções e abas em `src/App.jsx`.
- Use utilitários do Tailwind diretamente em `className`.

**Referência**
- @article{lu2024aiscientist,
  title={The {AI} {S}cientist: Towards Fully Automated Open-Ended Scientific Discovery},
  author={Lu, Chris and Lu, Cong and Lange, Robert Tjarko and Foerster, Jakob and Clune, Jeff and Ha, David},
  journal={arXiv preprint arXiv:2408.06292},
  year={2024}
}
