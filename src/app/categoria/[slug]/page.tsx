
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

const documentosRodoviarios = [
  {
    id: "volvo-fh4",
    marca: "Volvo",
    modelo: "FH4",
    titulo: "Diagrama Elétrico Completo Volvo FH4",
    tipo: "Diagrama elétrico",
    formato: "PDF",
    paginas: 304,
    preco: "R$ 15,00",
    disponivel: false,
  },
];

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

        <Link href="/" className="text-sm font-bold text-orange-400">
          ← MANUALMAC
        </Link>

        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-orange-400">
          Biblioteca técnica
        </p>

        <h1 className="mt-4 text-3xl font-black md:text-5xl">
          {titulo}
        </h1>

        <p className="mt-4 text-slate-300">
          Encontre manuais, catálogos de peças e documentação técnica
          para equipamentos e veículos.
        </p>

        {slug === "rodoviarios" && (
          <>
            <h2 className="mt-12 text-xl font-bold">
              Fabricantes
            </h2>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {marcasRodoviarias.map((marca) => (
                <div
                  key={marca}
                  className="rounded-xl border border-slate-700 bg-slate-900 p-5"
                >
                  <h3 className="font-bold text-white">{marca}</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Documentação técnica e manuais
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-xl font-bold">
              Documentos disponíveis no catálogo
            </h2>

            <div className="mt-5 space-y-4">
              {documentosRodoviarios.map((documento) => (
                <article
                  key={documento.id}
                  className="rounded-xl border border-slate-700 bg-slate-900 p-6"
                >
                  <p className="text-sm font-bold text-orange-400">
                    {documento.marca} • {documento.modelo}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {documento.titulo}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400">
                    {documento.tipo} • {documento.formato} •{" "}
                    {documento.paginas} páginas
                  </p>

                  <p className="mt-5 text-2xl font-black">
                    {documento.preco}
                  </p>

                  <span className="mt-4 inline-block rounded-lg bg-slate-800 px-4 py-3 text-sm text-slate-300">
                    {documento.disponivel
                      ? "Disponível para compra"
                      : "Cadastro em preparação"}
                  </span>
                </article>
              ))}
            </div>
          </>
        )}

        {slug !== "rodoviarios" && (
          <div className="mt-12 rounded-xl border border-slate-700 bg-slate-900 p-8">
            <p className="text-slate-300">
              Estamos organizando o catálogo de documentos desta categoria.
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
