
import Link from "next/link";
import { notFound } from "next/navigation";
import CatalogoRodoviarios from "./CatalogoRodoviarios";

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
          Encontre manuais, catálogos de peças e documentação técnica
          para equipamentos e veículos.
        </p>

        {slug === "rodoviarios" ? (
          <CatalogoRodoviarios />
        ) : (
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
