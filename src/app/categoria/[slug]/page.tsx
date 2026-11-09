
import Link from "next/link";
import { notFound } from "next/navigation";

const categorias: Record<string, string> = {
  rodoviarios: "RODOVIÁRIOS",
  agricolas: "AGRÍCOLAS",
  construcao: "CONSTRUÇÃO E TERRAPLANAGEM",
  florestais: "FLORESTAIS",
  motores: "MOTORES",
};

const marcasRodoviarias = [
  "Volvo",
  "Scania",
  "Mercedes-Benz",
  "Volkswagen Caminhões",
];

const documentosRodoviarios: Record<
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

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const titulo = categorias[slug];

  if (!titulo) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/"
          className="font-bold text-orange-400 hover:text-orange-300"
        >
          ← MANUALMAC
        </Link>

        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-orange-400">
          Biblioteca técnica
        </p>

        <h1 className="mt-4 text-3xl font-black md:text-5xl">
          {titulo}
        </h1>

        <p className="mt-4 text-slate-300">
          Selecione uma marca para visualizar os documentos técnicos disponíveis.
        </p>

        {slug === "rodoviarios" && (
          <section className="mt-10 space-y-4">

            {marcasRodoviarias.map((marca) => {
              const documentos = documentosRodoviarios[marca] || [];

              return (
                <details
                  key={marca}
                  className="group overflow-hidden rounded-xl border border-slate-700 bg-slate-900"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-bold hover:bg-slate-800">
                    <span className="text-lg">{marca}</span>

                    <span className="text-xl text-orange-400 group-open:rotate-180">
                      ▼
                    </span>
                  </summary>

                  <div className="border-t border-slate-700 p-5">
                    {documentos.length > 0 ? (
                      <div className="space-y-4">
                        {documentos.map((documento, index) => (
                          <article
                            key={index}
                            className="rounded-lg border border-slate-700 bg-slate-950 p-5"
                          >
                            <p className="text-sm font-bold text-orange-400">
                              {marca} • {documento.modelo}
                            </p>

                            <h3 className="mt-2 text-lg font-bold">
                              {documento.titulo}
                            </h3>

                            <p className="mt-3 text-sm text-slate-400">
                              {documento.tipo} • {documento.formato} •{" "}
                              {documento.paginas} páginas
                            </p>

                            <p className="mt-4 text-2xl font-black">
                              {documento.preco}
                            </p>

                            <span className="mt-3 inline-block rounded-md bg-slate-800 px-3 py-2 text-sm text-slate-300">
                              {documento.status}
                            </span>
                          </article>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-400">
                        Estamos organizando os documentos desta marca.
                        Em breve teremos novidades.
                      </p>
                    )}
                  </div>
                </details>
              );
            })}

          </section>
        )}

        {slug !== "rodoviarios" && (
          <div className="mt-10 rounded-xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-slate-300">
              Estamos organizando os documentos desta categoria.
            </p>
          </div>
        )}

        <Link
          href="/"
          className="mt-10 inline-block font-bold text-orange-400 hover:text-orange-300"
        >
          ← Voltar à página inicial
        </Link>

      </div>
    </main>
  );
}
