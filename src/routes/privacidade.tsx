import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/site/Shell";
import { WHATSAPP_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade — duo life Studio" },
      { name: "description", content: "Como a duo life Studio trata informações de visitantes do site." },
      { property: "og:title", content: "Política de privacidade — duo life Studio" },
      { property: "og:description", content: "Como a duo life Studio trata informações de visitantes do site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-3xl font-semibold sm:text-4xl">Política de privacidade</h1>
        <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
          <p>Este site é informativo. Não possui formulários e não coleta dados pessoais diretamente.</p>
          <p>Ao clicar em um botão de contato, você é direcionado ao WhatsApp, serviço de terceiros com política de privacidade própria. As informações que você decidir compartilhar na conversa são usadas apenas para responder ao seu contato.</p>
          <p>Recomendamos não enviar informações de saúde sensíveis antes de conversar com a equipe.</p>
          <p>Dúvidas sobre esta política podem ser enviadas pelo WhatsApp {WHATSAPP_DISPLAY}.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
