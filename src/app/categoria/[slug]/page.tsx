import Link from "next/link";
import { notFound } from "next/navigation";

const categorias: Record<string, string> = {
  rodoviarios: "RODOVIÁRIOS",
  agricolas: "AGRÍCOLAS",
  construcao: "CONSTRUÇÃO E TERRAPLANAGEM",
  florestais: "FLORESTAIS",
  motores: "MOTORES",
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
        <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
          MANUALMAC • Biblioteca técnica
        </p>

        <h1 className="mt-4 text-3xl font-black md:text-5xl">
          {titulo}
        </h1>

        <p className="mt-4 text-slate-300">
          Consulte a documentação técnica disponível nesta categoria.
        </p>

        {slug === "motores" && (
          <div className="mt-8">
            <input
              type="search"
              placeholder="Pesquisar fabricante, modelo ou código do motor..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none focus:border-orange-400"
            />
          </div>
        )}

        <div className="mt-12 rounded-xl border border-slate-700 bg-slate-900 p-8">
          <p className="text-slate-300">
            A biblioteca desta categoria será organizada aqui.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-block font-bold text-orange-400 hover:text-orange-300"
        >
          ← Voltar à página inicial
        </Link>
      </div>
    </main>
  );
}
