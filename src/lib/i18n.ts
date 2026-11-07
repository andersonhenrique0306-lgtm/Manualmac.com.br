export const messages = {
  "pt-BR": { tagline: "Manuais e catálogos técnicos em um só lugar.", search: "Pesquise marca, modelo ou equipamento", catalog: "Catálogo", library: "Minha biblioteca", buy: "Comprar" },
  "en": { tagline: "Technical manuals and catalogs in one place.", search: "Search brand, model or equipment", catalog: "Catalog", library: "My library", buy: "Buy" },
  "es": { tagline: "Manuales y catálogos técnicos en un solo lugar.", search: "Buscar marca, modelo o equipo", catalog: "Catálogo", library: "Mi biblioteca", buy: "Comprar" }
} as const;
export type Locale = keyof typeof messages;
