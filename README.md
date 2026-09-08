# DASKOR — Website V1

Next.js 16.3.4, App Router, TypeScript e Tailwind CSS 4. Manrope variável alojada localmente. Páginas geradas estaticamente; apenas navegação mobile, Hero e formulário usam componentes de cliente.

## Desenvolvimento

`npm install`, `npm run dev`. Verificações: `npm run lint`, `npm run typecheck`, `npm run build`. O resultado estático fica em `out/`.

## Direção e arquitetura

Entrada escura, escala tipográfica e planos angulares inspirados na linguagem do lettering. O scroll aproxima os fragmentos de um alinhamento e conduz à apresentação editorial das cinco áreas. Introdução clara; projeto em tom neutro; execução no terreno em fundo escuro; encerramento azul. CSS mobile-first, com expansão aos 600 e 1000 px.

Movimento: CSS transforms alimentados por um único requestAnimationFrame e listener passivo de scroll. Sem biblioteca de animação: quatro planos não justificam outra dependência. Sem bloqueio do scroll; com reduced motion a geometria fica estática. Os restantes conteúdos não dependem de JavaScript para serem lidos. Accordion de áreas e briefing usam details/summary; o menu usa dialog nativo, com foco contido, Escape e devolução do foco.

- `src/content/site.ts`: contactos confirmados, navegação e áreas.
- `src/content/projects.ts`: modelo reutilizável e distinção real/conceptual.
- `src/components/`: navegação, movimento, formulário e secções.
- `src/app/`: páginas, layout, metadata, robots e sitemap.
- `public/brand/`: versões oficiais exportadas sem alteração do lettering.
- `public/images/`: fotografias reais otimizadas, sem cortes nem retoques.

O requisito explícito de Next.js foi preservado em vez de substituir a stack pelo starter vinext de Sites. Exportação estática compatível com alojamento Sites.

## Proveniência e conteúdo

Logótipo: `daskor_solutions_logoV4.pdf`, quatro páginas confirmadas visualmente: colorido/claro, colorido/escuro, preto/claro, branco/escuro. Os ficheiros WebP são rasterizações das versões oficiais, recortando apenas margens vazias. A versão negativa com cores é utilizada no cabeçalho sobre preto. O favicon mantém a versão branca oficial.

Fotografias: autocarro_depois.jpg, IMG_20260709_011003.jpg e IMG-20260705-WA0018.jpeg, fornecidas na pasta triagem. Participação na aplicação/montagem confirmada pelo utilizador nesta tarefa. São experiência profissional anterior: não atribuir design, produção ou relação comercial à DASKOR. Todos os originais foram preservados.

Johnny Cutz: intervenção limitada aos factos do briefing. TODO: adicionar imagens reais do website, preçário e aplicação; adicionar processo e resultado apenas com evidência. O painel atual é um placeholder textual, não um mockup nem o logótipo Johnny Cutz. Não existem métricas, testemunhos ou clientes inventados.

## Contacto

Email, telefone e WhatsApp confirmados pelo utilizador. Formulário com validação nativa e mini-briefing opcional. Nesta entrega prepara um `mailto:`; não transmite dados para um servidor nem simula envio. O visitante confirma o envio na sua aplicação. WhatsApp e telefone são alternativas diretas. TODO para envio direto: escolher/configurar um serviço de receção e respetivas condições de tratamento de dados. Não existem tracking nem cookies de marketing.

## Publicação

Sites é usado para revisão privada. Canonical e sitemap apontam para o domínio oficial pretendido, daskor.pt. Antes de publicação nesse domínio: substituir os placeholders do case study, configurar envio direto se pretendido e verificar a informação legal aplicável com dados fornecidos pela DASKOR. Não foram inventados NIF, morada ou textos legais.

Versão Next.js verificada no registo npm; política de suporte: https://nextjs.org/support-policy.

