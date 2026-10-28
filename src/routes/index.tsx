import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Activity, HeartPulse, ChevronDown } from "lucide-react";
import { Header, Footer, WhatsButton } from "@/components/site/Shell";
import { ADDRESS, MAPS_URL } from "@/lib/site";
import equipe from "@/assets/equipe.jpg.asset.json";
import fisio from "@/assets/fisio.jpg.asset.json";
import salaPrincipal from "@/assets/sala-principal.jpg.asset.json";
import salaReformer from "@/assets/sala-reformer.jpg.asset.json";
import paredeLogo from "@/assets/parede-logo.jpg.asset.json";
import aparelhos from "@/assets/aparelhos.jpg.asset.json";
import espaldar from "@/assets/espaldar.jpg.asset.json";

const TITLE = "duo life Studio — Fisioterapia e Pilates em Caeté/MG";
const DESC =
  "Fisioterapia e Pilates em Caeté/MG. Movimento com propósito, com cuidado em cada etapa. Fale com a duo life Studio pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "duo life Studio",
          telephone: "+5531997733217",
          medicalSpecialty: ["PhysicalTherapy"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Três Marias, 102 — Vila das Flores",
            addressLocality: "Caeté",
            addressRegion: "MG",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const TEAM = [
  {
    name: "Denis Ricardo",
    role: "Educação Física",
    facts: ["Formado em Educação Física", "Mais de cinco anos de experiência na área"],
    bio: [
      "Denis Ricardo é profissional formado em Educação Física, com mais de cinco anos de experiência na área. Ao longo de sua trajetória, construiu uma base de conhecimento por meio de sua formação e da experiência adquirida no exercício profissional.",
      "Sua atuação está relacionada ao conhecimento do movimento corporal e à importância da atividade física para a saúde e o bem-estar. Na duo life Studio, sua formação e experiência integram a proposta do estúdio de valorizar o movimento e incentivar hábitos voltados à qualidade de vida.",
      "Com uma trajetória que reúne formação acadêmica e experiência prática, Denis faz parte da equipe da duo life Studio, contribuindo para o conceito da marca: movimento com propósito.",
    ],
  },
  {
    name: "Enrique Rocha",
    role: "Fisioterapeuta",
    facts: ["Fisioterapeuta formado há três anos", "Cursos preparatórios em Quiropraxia e Pilates"],
    bio: [
      "Enrique Rocha é fisioterapeuta, formado há três anos, e possui formação complementar por meio de cursos preparatórios em Quiropraxia e Pilates. Sua trajetória profissional reúne conhecimentos da Fisioterapia e o interesse pelo aprimoramento de técnicas relacionadas ao cuidado corporal e ao movimento.",
      "Sua formação complementar amplia seus conhecimentos nessas áreas, que se relacionam com diferentes abordagens de cuidado e atenção às necessidades individuais. Na duo life Studio, Enrique integra uma equipe dedicada à Fisioterapia, ao Pilates e à promoção da saúde e do bem-estar.",
      "Comprometido com sua trajetória profissional, Enrique valoriza os conhecimentos adquiridos em sua formação e em seus cursos, integrando a proposta da duo life Studio de oferecer um atendimento profissional e atento a cada pessoa.",
    ],
  },
];

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{children}</p>;
}

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 -z-10 h-[70%] bg-secondary/70" aria-hidden />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.05fr_1fr] md:pb-24 md:pt-16">
            <div className="animate-rise">
              <Eyebrow>Fisioterapia · Pilates · Caeté/MG</Eyebrow>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
                Movimento com propósito. <span className="text-primary">Cuidado em cada etapa.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Na duo life Studio, a Fisioterapia e o Pilates fazem parte de uma proposta de cuidado voltada ao movimento, à saúde e ao bem-estar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsButton>Consulte nossos serviços pelo WhatsApp</WhatsButton>
                <a href="#estrutura" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/30 px-6 text-sm font-semibold text-primary transition-colors hover:bg-background">
                  Conheça nosso espaço <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative animate-rise [animation-delay:150ms]">
              <img src={salaPrincipal.url} alt="Sala de Pilates da duo life Studio com aparelhos e o letreiro da marca" fetchPriority="high" className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_60%] shadow-soft" />
              <div className="absolute -bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-background p-4 shadow-soft sm:left-auto sm:w-72">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-primary"><MapPin className="h-5 w-5" /></span>
                <p className="min-w-0 text-sm"><span className="font-semibold">Vila das Flores</span><br /><span className="text-muted-foreground">Caeté — MG</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <img src={paredeLogo.url} alt="Parede do estúdio com o letreiro da duo life Studio" loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_40%] md:order-none" />
          <div>
            <Eyebrow>Sobre nós</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">Um espaço dedicado ao movimento e ao cuidado.</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A duo life Studio reúne Fisioterapia e Pilates em um só lugar, em Caeté. Nossa proposta parte de uma ideia simples: o movimento, feito com atenção, é parte essencial da saúde e da qualidade de vida.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Atuamos nas áreas de Fisioterapia, Pilates, Saúde e Performance, com um atendimento próximo e atento a cada pessoa.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Fisioterapia", "Pilates", "Saúde", "Performance"].map((a) => (
                <div key={a} className="rounded-2xl border border-border px-4 py-3 text-sm font-medium">{a}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Eyebrow>Serviços</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold text-navy sm:text-4xl">Fisioterapia e Pilates, com cuidado em cada etapa.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                { t: "Fisioterapia", d: "Cuidado voltado ao corpo e ao movimento, com atenção às necessidades de cada pessoa.", img: fisio.url, Icon: HeartPulse, alt: "Sessão de fisioterapia com alongamento de perna" },
                { t: "Pilates", d: "Exercícios em aparelhos para trabalhar o movimento de forma orientada, em um estúdio equipado.", img: aparelhos.url, Icon: Activity, alt: "Aparelhos de Pilates da duo life Studio" },
              ].map(({ t, d, img, Icon, alt }) => (
                <article key={t} className="overflow-hidden rounded-[1.75rem] bg-card shadow-soft">
                  <img src={img} alt={alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                  <div className="p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-4 text-2xl font-semibold">{t}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start gap-5 rounded-[1.75rem] border border-primary/20 bg-background p-7 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">Quer saber quais serviços oferecemos?</h3>
                <p className="mt-1 text-muted-foreground">Entre em contato com a duo life Studio para conhecer os atendimentos e esclarecer suas dúvidas.</p>
              </div>
              <WhatsButton className="shrink-0">Consultar serviços pelo WhatsApp</WhatsButton>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section id="equipe" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid items-end gap-10 md:grid-cols-[1fr_1.1fr]">
            <div>
              <Eyebrow>Nossa equipe</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">Quem cuida do seu movimento.</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">Conheça os profissionais da duo life Studio.</p>
            </div>
            <img src={equipe.url} alt="Denis Ricardo e Enrique Rocha, equipe da duo life Studio" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover object-[50%_30%] shadow-soft" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {TEAM.map((p) => (
              <article key={p.name} className="flex flex-col rounded-[1.75rem] border border-border bg-card p-7">
                <p className="text-sm font-semibold text-primary">{p.role}</p>
                <h3 className="mt-1 text-2xl font-semibold">{p.name}</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.facts.map((f) => (
                    <li key={f} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{f}</li>
                  ))}
                </ul>
                <p className="mt-5 leading-relaxed text-muted-foreground">{p.bio[0]}</p>
                <details className="group mt-3">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-primary">
                    <span className="group-open:hidden">Ler biografia completa</span>
                    <span className="hidden group-open:inline">Mostrar menos</span>
                  </summary>
                  {p.bio.slice(1).map((b) => (
                    <p key={b.slice(0, 20)} className="mt-3 leading-relaxed text-muted-foreground">{b}</p>
                  ))}
                </details>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <WhatsButton variant="outline">Converse com a nossa equipe</WhatsButton>
          </div>
        </section>

        {/* Estrutura */}
        <section id="estrutura" className="bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Eyebrow>Nossa estrutura</Eyebrow>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold text-navy sm:text-4xl">Conheça o espaço antes de nos visitar.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
              <img src={salaReformer.url} alt="Visão geral do estúdio com reformer, esteira e espaldar" loading="lazy" className="aspect-[4/5] h-full w-full rounded-[1.75rem] object-cover object-[50%_65%] md:col-span-2 md:row-span-2 md:aspect-auto" />
              <img src={espaldar.url} alt="Espaldar com bolas, faixas elásticas e acessórios de treino" loading="lazy" className="aspect-square w-full rounded-[1.75rem] object-cover object-[30%_45%]" />
              <div className="flex flex-col justify-between rounded-[1.75rem] bg-primary p-7 text-primary-foreground">
                <p className="text-lg font-medium leading-snug">Aparelhos de Pilates, ambiente iluminado e um espaço pensado para o movimento.</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline">
                  <MapPin className="h-4 w-4" /> Ver no mapa
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-20 md:py-28">
          <div className="mx-auto max-w-4xl rounded-[2.25rem] bg-secondary px-6 py-14 text-center sm:px-12">
            <h2 className="text-3xl font-semibold text-navy sm:text-4xl">Vamos conversar sobre o seu próximo passo?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Entre em contato com a duo life Studio para conhecer os serviços, consultar os horários disponíveis e obter mais informações sobre os atendimentos.
            </p>
            <WhatsButton className="mt-8">Falar com a duo life Studio</WhatsButton>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
          <div className="grid gap-6 rounded-[1.75rem] border border-border p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <Eyebrow>Localização e contato</Eyebrow>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Venha nos conhecer</h2>
              <p className="mt-3 flex gap-2 text-muted-foreground"><MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />{ADDRESS}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/30 px-6 text-sm font-semibold text-primary hover:bg-secondary">
                <MapPin className="h-4 w-4" /> Abrir no mapa
              </a>
              <WhatsButton>Chamar no WhatsApp</WhatsButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhats />
    </>
  );
}

function FloatingWhats() {
  return (
    <div className="fixed bottom-5 right-5 z-40 sm:hidden">
      <WhatsButton className="h-14 w-14 rounded-full p-0 [&>svg]:h-6 [&>svg]:w-6"><span className="sr-only">Falar no WhatsApp</span></WhatsButton>
    </div>
  );
}

