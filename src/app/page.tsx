const products = [
  { title: "Manual de serviço — Caminhão", kind: "Manual de serviço", category: "Caminhões", price: 89.90, language: "Português" },
  { title: "Catálogo de peças — Trator", kind: "Catálogo de peças", category: "Agrícolas", price: 69.90, language: "Inglês" },
  { title: "Manual técnico — Escavadeira", kind: "Manual técnico", category: "Construção", price: 99.90, language: "Espanhol" },
  { title: "Diagrama elétrico — Máquina", kind: "Diagrama elétrico", category: "Elétricos", price: 59.90, language: "Português" },
];

const money = (n: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="text-2xl font-black tracking-wide">MANUAL<span className="text-orange-400">MAC</span></a>
        <nav className="flex gap-4 text-sm text-slate-300">
          <a href="#catalogo" className="hover:text-orange-300">Catálogo</a>
          <a href="/login" className="hover:text-orange-300">Entrar</a>
          <a href="/biblioteca" className="hover:text-orange-300">Minha biblioteca</a>
        </nav>
      </header>

      <section className="border-y border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-orange-300">Biblioteca técnica digital</p>
          <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">Informação e conhecimento para manter equipamentos em operação.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">Conteúdo tecnico especializado em revisões, manutenção e reparação de equipamentos pesados dos setores rodoviário, construção, agrícola e florestal  .</p>
          <form action="#catalogo" className="mt-8 flex max-w-2xl gap-2 rounded-xl bg-white p-2">
            <input aria-label="Pesquisar" name="q" placeholder="Pesquise marca, modelo ou equipamento" className="min-w-0 flex-1 px-3 text-slate-900 outline-none" />
            <button className="rounded-lg bg-orange-400 px-5 py-3 font-bold text-slate-950">Pesquisar</button>
          </form>
          <p className="mt-4 text-xs text-slate-400">Interface preparada para português, inglês e espanhol · Valores em reais (R$)</p>
        </div>
      </section>

    <section className="bg-slate-950 border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Explore nossa biblioteca
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Encontre a documentação por categoria
            </h2>
            <p className="mt-3 text-slate-300">
              Informação técnica para diferentes setores e equipamentos.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🚛",
                title: "RODOVIÁRIOS",
                slug:"rodoviarios" ,
                description: "Caminhões e veículos pesados."
              },
              {
                icon: "🚜",
                slug:"agricolas",
                title: "AGRÍCOLAS",
                description: "Tratores e máquinas agrícolas."
              },
              {
                icon: "🏗️",
                slug:"construção",
                title: "CONSTRUÇÃO E TERRAPLANAGEM",
                description: "Escavadeiras, retroescavadeiras e pás-carregadeiras."
              },
              {
                icon: "🌲",
                title: "FLORESTAIS",
                slug:"florestais",
                description: "Tratores florestais, máquinas de colheita e equipamentos de apoio."
              },
              { 
                icon: " MOTOR",
                title: "MOTORES",
                slug: "motores" ,
                description: "documentação tecnica e pesquisa de motores",
                },
            ].map((item) => (
              <a
                key={item.title}
                href={"/categoria/"+item.slug}
                className="rounded-xl border border-slate-700 bg-slate-900 p-6 transition hover:border-orange-400"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 text-lg font-black text-orange-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.description}
                  </p>
                </a>
              
            ))}
          </div>
        </div>
      </section>
      <section id="catalog
      o" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div><p className="text-sm text-orange-300">DOCUMENTAÇÃO DIGITAL</p><h2 className="mt-1 text-3xl font-bold">Manuais em destaque</h2></div>
          <span className="text-sm text-slate-400">Vitrine demonstrativa</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.title} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
              <div className="mb-5 flex h-32 items-center justify-center rounded-xl bg-slate-800 text-5xl">📘</div>
              <p className="text-xs font-semibold uppercase tracking-wide text-orange-300">{p.category} · {p.kind}</p>
              <h3 className="mt-2 min-h-12 font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-400">Idioma: {p.language}</p>
              <p className="mt-4 text-xl font-black">{money(p.price)}</p>
              <a href="/produto/exemplo" className="mt-4 block rounded-lg bg-orange-400 px-4 py-3 text-center font-bold text-slate-950">Ver detalhes</a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-4 rounded-2xl border border-slate-700 bg-slate-900 p-6 md:grid-cols-3">
          <div><p className="font-bold">Compra digital</p><p className="mt-1 text-sm text-slate-400">Acesso após confirmação do pagamento.</p></div>
          <div><p className="font-bold">Leitura online</p><p className="mt-1 text-sm text-slate-400">Consulte seus documentos dentro da plataforma.</p></div>
          <div><p className="font-bold">Download</p><p className="mt-1 text-sm text-slate-400">Baixe os arquivos que você comprou.</p></div>
        </div>
      </section>
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">MANUALMAC · Biblioteca técnica digital</footer>
    </main>
  );
}
