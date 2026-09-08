export type Project = {
  title: string;
  slug: string;
  category: string[];
  services: string[];
  description: string;
  heroImage: string | null;
  gallery: string[];
  challenge: string;
  approach: string;
  result: string | null;
  projectType: "real" | "conceptual";
  url?: string;
};
export const projects: Project[] = [
  {
    title: "Johnny Cutz Studio",
    slug: "johnny-cutz-studio",
    category: ["Digital", "Espaço"],
    services: [
      "Desenvolvimento do website",
      "Design do preçário",
      "Aplicação do logótipo na montra/persianas superiores",
      "Decoração de elementos e mobiliário com vinil preto",
    ],
    description: "Uma presença que liga o website ao espaço físico.",
    heroImage: null,
    gallery: [],
    challenge:
      "Dar continuidade à identidade existente nos pontos de contacto digitais e físicos do estúdio.",
    approach:
      "Website com experiência de marcação, serviços e preços. Design do preçário e aplicação de elementos gráficos no espaço, a partir do logótipo fornecido pelo cliente.",
    result: null,
    projectType: "real",
    url: "https://www.johnnycutz-studio.com",
  },
  {
    title: "Paleta Notável",
    slug: "paleta-notavel",
    category: ["Digital"],
    services: ["Desenvolvimento do website"],
    description: "Uma presença digital para uma marca de publicidade com personalidade cromática.",
    heroImage: "/web-projects/paleta-notavel-home.jpg",
    gallery: ["/web-projects/paleta-notavel-home.jpg"],
    challenge: "Criar um espaço digital claro, expressivo e fácil de explorar.",
    approach: "Estrutura de apresentação, navegação por áreas e uma direção visual construída a partir das cores da marca.",
    result: null,
    projectType: "real",
    url: "https://www.paleta-notavel.pt",
  },
];
