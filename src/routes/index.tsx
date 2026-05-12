import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SignatureSection } from "@/components/SignatureSection";
import { FullMenu } from "@/components/FullMenu";
import { Footer } from "@/components/Footer";
import { signatureDishes, signatureDrinks, signatureDesserts } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ALBERTO — Crafted for Craving" },
      {
        name: "description",
        content:
          "ALBERTO is a modern luxury kitchen — bold flame-grilled burgers, velvet drinks and golden desserts. Crafted for craving.",
      },
      { property: "og:title", content: "ALBERTO — Crafted for Craving" },
      { property: "og:description", content: "Bold Flavor. Elegant Experience." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SignatureSection
          id="dishes"
          eyebrow="Signature Dishes"
          title="The Flame-Forged Classics"
          subtitle="Patties seared over open fire, dough stretched by hand, sauces simmered low and slow."
          featured={signatureDishes.featured}
          items={signatureDishes.items}
        />
        <SignatureSection
          id="drinks"
          eyebrow="Signature Drinks"
          title="Velvet Pours & Bright Sips"
          subtitle="Cold-pressed fruit, hand-cracked ice, garden herbs — every glass is its own little sunset."
          featured={signatureDrinks.featured}
          items={signatureDrinks.items}
          reverse
          tone="maroon"
        />
        <SignatureSection
          id="desserts"
          eyebrow="Signature Desserts"
          title="The Sweet Finale"
          subtitle="Molten centers, silky creams and golden crusts. The kind of ending you taste twice."
          featured={signatureDesserts.featured}
          items={signatureDesserts.items}
          tone="warm"
        />
        <FullMenu />
      </main>
      <Footer />
    </div>
  );
}
