# AGarantia — Design System

> **Simples. Digital. Seguro.**
> Sistema de design da **AGarantia**, fintech/proptech brasileira de **garantia locatícia digital**.
> Toda a interface é em **português do Brasil (PT-BR)**.

---

## 1. Contexto da empresa

A **AGarantia** substitui o **fiador**, a **caução** e o **seguro-fiança** tradicionais por uma **garantia locatícia tokenizada** — um ativo digital (**token AGT**) registrado em blockchain e lastreado em moeda fiduciária, que representa o valor da garantia do contrato de locação.

**Promessa central:** segurança fiduciária real, sem a burocracia do fiador nem o custo do seguro-fiança.
**Diferenciais quantificados:** aprovação em **menos de 60s**, cadastro em **menos de 2 min**, **+R$2 Bi** sob gestão, **inadimplência zero** para a imobiliária, ativo que pode **retornar** ao locatário (cashback/benefícios).

### Quatro públicos
1. **Locatários** (inquilinos) — alugar sem fiador, aprovação instantânea, Clube de Benefícios.
2. **Proprietários** — receber o aluguel sem atrasos, cobertura garantida, segurança jurídica.
3. **Imobiliárias / Construtoras / Holdings** — inadimplência zero, comissão por operação, painel + API.
4. **Prestadores parceiros** — base de clientes qualificada, pagamentos garantidos, gestão 100% digital.

### Produtos representados neste sistema
- **Site institucional / marketing** (`ui_kits/website/`) — Home, Como Funciona, Clientes, Sobre, FAQ, Contatos.
- **App / Dashboard** (`ui_kits/app/`) — área logada (painel do parceiro/locatário com solicitações e carteira).

### Fontes deste design system (não assuma acesso; registradas para referência)
- **Codebase / materiais oficiais (mount):** `Garantia/AGarantia_Materiais/` — logos vetoriais, gradientes, paleta, ícones, mockups, apresentações `.pptx/.pdf`, selos ACATE.
- **Manual da marca:** `Garantia/Manual-da-Marca-AGarantia.md` (v1.0, 18/06/2026) — fonte primária de cores, tipografia, voz.
- **Mídia kit:** `Garantia/Midia-Kit-AGarantia.pdf`.
- **Site de referência:** `agarantia.com.br` (screenshots em `_ref/Site-*.jpeg`).
- **Logos enviados:** `uploads/Logo*.png`, `uploads/Logotipo*.png/.webp`, `uploads/Logo Agarantia Vetor.pdf`.

---

## 2. Content fundamentals (como escrevemos)

**Idioma:** PT-BR sempre. **Voz:** confiante, tecnológica, direta e acessível — uma fintech moderna que descomplica algo historicamente burocrático. Aspiracional ("A Nova Era", "Arquitetando o Futuro") sem arrogância.

- **Pessoa:** falamos com "você" (locatário, proprietário, parceiro) e nos referimos a "nós/nossa". Nunca "usuário" genérico — use o papel: *locatário, proprietário, imobiliária, parceiro*.
- **Frases curtas, ritmo digital.** O estilo `Simples. Digital. Seguro.` (palavras isoladas com ponto) é assinatura.
- **Benefício antes do mecanismo.** Diga o que o cliente ganha; token/blockchain entram como **prova**, não como abertura.
- **Concreto e quantificado:** "aprovação em menos de 60s", "+R$2 Bi sob gestão", "inadimplência zero".
- **CTA sempre claro e verbo-led:** *Solicitar Garantia · Simule agora · Falar com um consultor · Quero ser Parceiro · Verificar Elegibilidade*.
- **Casing:** títulos em Capitalização de Frase (não Title Case). Eyebrows/labels em **CAIXA-ALTA** com letter-spacing. Botões em Capitalização de Frase.
- **Emoji:** ❌ não usar na interface/copy de produto. **Hashtags:** ❌ nunca (preferência do cliente) — usar palavras-chave buscáveis.
- **Glossário:** "garantia locatícia digital/tokenizada" (não "seguro fiança"); "token AGT · ativo digital · on-chain · fiduciário"; "desburocratizar · sem fiador · sem caução"; marca escrita **AGarantia** (institucional) / **agarantia** (logo) — nunca "A Garantia" separado.

**Exemplos de headline (regra das duas cores — palavra-chave em verde):**
> Garantia Locatícia Tokenizada: A Nova Era da **Confiança.**
> Soluções que transformam o **mercado imobiliário.**
> Chega de fiador e **burocracia.**
> Simples. Digital. **Seguro.**

---

## 3. Visual foundations

### Cores
Sistema em 3 camadas + regra **60/30/10** (60% neutros · 30% primárias · 10% acentos).
- **Primárias:** Verde Garantia `#7AB829` (marca, cadeado, CTAs) · Navy `#15314F` (títulos, texto, institucional).
- **Secundárias digitais:** Verde Vibrante `#00D65C` (highlights neon) · Petróleo `#003844` (seções dark, rodapé) · Teal `#0D7682` (gradiente, detalhes).
- **Apoio:** Âmbar `#F5B400` — uso pontual (estrelas, avisos), nunca dominante.
- **Neutros:** Branco · Off-white `#F4F7F6` (fundo de página) · Cinza claro `#E3E8E9` (bordas) · Cinza médio `#8FA0A2` (texto auxiliar) · Grafite `#2A3B45` (corpo).
- **Contraste:** texto sobre verde → navy; texto sobre petróleo/navy → branco. Verde Vibrante nunca como texto pequeno sobre branco.

### Tipografia
- **Display/Títulos:** **Poppins** (600/700) — headlines, números grandes. Letter-spacing levemente negativo (-0.02em), line-height apertado (1.05–1.15).
- **Corpo:** **Inter** (400/500) — parágrafos, UI, line-height 1.6.
- **Assinatura:** títulos em **duas cores** (navy/branco + palavra-chave em verde).
- **Eyebrow:** Inter SemiBold 11px, CAIXA-ALTA, letter-spacing 0.14em, verde.

### Backgrounds & gradientes
- Fundo de página **off-white** `#F4F7F6` (não branco puro) — respiro.
- **Gradiente assinatura** (vertical Branco→Teal→Verde) em heros/capas; ativo gráfico mais forte da marca.
- Heros claros usam um **brilho verde radial** sutil no canto superior-esquerdo (`--gradient-hero-light`) sobre off-white.
- **Seções escuras** em Petróleo/Teal (`--gradient-dark`) para rodapé, CTAs institucionais e blocos de profundidade.
- **Motivo de "+"**: pequenos sinais de mais verdes, baixa opacidade, espalhados nos heros.
- **Cadeado** ampliado como **marca d'água** (~8–12% de opacidade) sobre fundos petróleo/verde.
- Imagens: fotografia de **imóveis/arquitetura** real, luz natural, tons quentes de madeira + verdes — clean e premium. (Use placeholders/`<image-slot>`; não gerar.)

### Forma / UI
- **Cantos bem arredondados:** botões em **pílula** (999px); cards 14–24px (`md` 14 · `lg` 18 · `xl` 24).
- **Cards:** fundo branco, borda sutil (`--border-soft`), sombra suave (`--shadow-card`); variantes soft (verde pálido), dark (petróleo), brand (verde sólido), teal, glass (vidro sobre escuro).
- **Sombras leves**; CTAs verdes ganham **glow verde** (`--shadow-brand`).
- **Bordas:** 1–1.5px, cinza claro; sobre escuro use `rgba(255,255,255,.12)`.
- **Transparência/blur:** cartões de vidro (`--surface-glass` + blur 14px) só sobre seções escuras.

### Animação & estados
- **Easing:** `--ease-out` cubic-bezier(0.16,1,0.3,1); durações 140/220/360ms.
- **Hover:** cards sobem (`translateY(-4px)`); botões clareiam (brightness 1.05).
- **Press:** botões encolhem (`scale(0.97)`).
- **Foco:** anel verde `0 0 0 4px var(--focus-ring)`.
- Sem bounces exagerados; movimento sóbrio e "fintech". Respeite `prefers-reduced-motion`.

---

## 4. Iconografia

- **Estilo:** ícones **lineares (outline), cantos arredondados, traço uniforme** (~2px), monocromáticos — verde sobre claro, branco/verde sobre escuro. Quase sempre dentro de um **IconChip** (chip circular ou quadrado-arredondado).
- **Biblioteca recomendada:** **Lucide** (CDN) — casa com o estilo outline-rounded do site. Alternativas equivalentes: Phosphor, Tabler. Padronize a espessura em 2px.
  - CDN usado nas cards/kits: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`.
  - **Substituição sinalizada:** o site original tem ícones PNG verdes próprios (`Icons.png`, `Icons02.png`, `Icons03.png` em `_ref/`), mas não há um icon-font/SVG sprite exportável na pasta. Adotamos **Lucide** como equivalente fiel. → *Se vocês tiverem o conjunto de ícones em SVG, eu troco para os oficiais.*
- **Emoji / unicode como ícone:** ❌ não usar.
- **Símbolo da marca:** o **cadeado** (`assets/logo-cadeado.png`) — favicon, ícone de app, selo, marca d'água. É também a letra "a" de *agarantia*.

---

## 5. Index / manifesto da raiz

| Caminho | O que é |
|---|---|
| `styles.css` | **Entry point** — só `@import`s de tokens + fontes. Consumidores linkam este arquivo. |
| `tokens/colors.css` | Paleta + aliases semânticos (`--text-strong`, `--surface-card`, `--action-bg`…). |
| `tokens/typography.css` | Famílias, pesos, escala, helpers (`.ag-eyebrow`, `.ag-display`, `.ag-key`). |
| `tokens/spacing.css` | Espaçamento base-4, raios, larguras de layout. |
| `tokens/effects.css` | Sombras, gradientes, blur, easing/transições. |
| `tokens/fonts.css` | Poppins + Inter via Google Fonts. |
| `assets/` | Logos (color/branca/compacta/cadeado), favicon, gradientes, avatar. |
| `guidelines/*.card.html` | Specimen cards (Colors, Type, Spacing, Brand) da aba Design System. |
| `components/core/` | **Button**, **Badge**, **IconChip**. |
| `components/surfaces/` | **Card**, **FeatureCard**, **StatCard**, **Accordion**. |
| `components/forms/` | **Input**, **SegmentedTabs**, **CheckList**. |
| `ui_kits/website/` | Recriação do site institucional (Home + seções). |
| `ui_kits/app/` | Recriação do app/dashboard logado. |
| `SKILL.md` | Manifesto Agent-Skill (para uso em Claude Code). |
| `_ref/` | Screenshots do site originais (referência visual). |

### Componentes (namespace `AGarantiaDesignSystem_9885ce`)
`Button · Badge · IconChip · Card · FeatureCard · StatCard · Accordion · Input · SegmentedTabs · CheckList`
Em HTML de card/kit: `const { Button, Card } = window.AGarantiaDesignSystem_9885ce;` após `<script src=".../_ds_bundle.js">`.

---

## 6. Notas & itens em aberto
- **Fontes:** o manual não trazia arquivos de fonte embutidos. Adotamos **Poppins (títulos) + Inter (corpo)** — fonte oficial recomendada e gratuita. O lettering do **logo** é peça travada (não redigitar); equivalentes próximos seriam Baloo 2 / Fredoka. → *Confirmar se há fonte de marca proprietária.*
- **Ícones:** substituição por **Lucide** (ver §4). → *Enviar SVGs oficiais para travar.*
- **Imagens:** não há banco de fotos genéricas exportável; UI kits usam blocos/placeholders no lugar das fotos de imóveis. → *Enviar fotos aprovadas se quiser fidelidade total.*
