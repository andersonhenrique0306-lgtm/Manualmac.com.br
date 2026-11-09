
"use client";

import { useState } from "react";

const marcas = [
  "Volvo",
  "Scania",
  "Mercedes-Benz",
  "Volkswagen Caminhões",
];

const documentos: Record<
  string,
  {
    titulo: string;
    modelo: string;
    tipo: string;
    formato: string;
    paginas: number;
    preco: string;
    status: string;
  }[]
> = {
  Volvo: [
    {
      titulo: "Diagrama Elétrico Completo Volvo FH4",
      modelo: "FH4",
      tipo: "Diagrama elétrico",
      formato: "PDF",
      paginas: 304,
      preco: "R$ 15,00",
      status: "Em preparação",
    },
  ],
  Scania: [],
  "Mercedes-Benz": [],
  "Volkswagen Caminhões": [],
};

function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function CatalogoRodoviarios() {
  const [pesquisa, setPesquisa] = useState("");
  const [marcaAberta, setMarcaAberta] = useState("");

  const termo = normalizar(pesquisa.trim());

  const marcasFiltradas = marcas.filter((marca) => {
    const documentosDaMarca = documentos[marca] || [];

    const encontrouNaMarca = normalizar(marca).includes(termo);

    const encontrouDocumento = documentosDaMarca.some((doc) =>
      normalizar(
        `${doc.titulo} ${doc.modelo} ${doc.tipo} ${doc.formato}`
      ).includes(termo)
    );

    return !termo || encontrouNaMarca || encontrouDocumento;
  });

  return (
    <section className="mt-10">

      <label className="mb-3 block font-bold">
        Pesquisar documentos
      </label>

      <input
        type="search"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Digite marca, modelo ou tipo de documento..."
        className="mb-8 w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-orange-400"
      />

      <div className="space-y-4">

        {marcasFiltradas.map((marca) => {
          const lista = documentos[marca] || [];

          const documentosFiltrados = lista.filter((doc) => {
            const corresponde =
              normalizar(
                `${doc.titulo} ${doc.modelo} ${doc.tipo} ${doc.formato}`
              ).includes(termo);

            return !termo || normalizar(marca).includes(termo) || corresponde;
          });

          const aberta =
            termo.length > 0
              ? true
              : marcaAberta === marca;

          return (
            <details
              key={marca}
              open={aberta}
              onToggle={(e) => {
                if (!termo && e.currentTarget.open) {
                  setMarcaAberta(marca);
                }
              }}
              className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900"
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between p-5 font-bold hover:bg-slate-800"
              >
                <span className="text-lg">{marca}</span>
                <span className="text-xl text-orange-400">▼</span>
              </summary>

              <div className="border-t border-slate-700 p-5">

                {documentosFiltrados.length > 0 ? (
                  <div className="space-y-4">
                    {documentosFiltrados.map((doc, index) => (
                      <article
                        key={index}
                        className="rounded-lg border border-slate-700 bg-slate-950 p-5"
                      >
                        <p className="text-sm font-bold text-orange-400">
                          {marca} • {doc.modelo}
                        </p>

                        <h3 className="mt-2 text-lg font-bold">
                          {doc.titulo}
                        </h3>

                        <p className="mt-3 text-sm text-slate-400">
                          {doc.tipo} • {doc.formato} • {doc.paginas} páginas
                        </p>

                        <p className="mt-4 text-2xl font-black">
                          {doc.preco}
                        </p>

                        <span className="mt-3 inline-block rounded-md bg-slate-800 px-3 py-2 text-sm text-slate-300">
                          {doc.status}
                        </span>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-400">
                    Ainda não temos documentos cadastrados para esta marca.
                  </p>
                )}

              </div>
            </details>
          );
        })}

        {marcasFiltradas.length === 0 && (
          <p className="rounded-xl border border-slate-700 bg-slate-900 p-6 text-slate-300">
            Nenhum documento encontrado. Tente pesquisar por outro modelo ou marca.
          </p>
        )}

      </div>
    </section>
  );
}
