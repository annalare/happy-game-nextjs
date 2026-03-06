import Link from "next/link";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32 dark:bg-blend-darken bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6 animate-fadeIn">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold leading-tight">
              Descubra a primeira comunidade feita para{" "}
              <span className="dark:text-primary-green-base">gamers</span>
            </h1>
            <p className="text-lg dark:text-neutral-400 text-neutral-600">
              Conecte-se com outros jogadores, compartilhe suas conquistas,
              reviva os melhores momentos e descubra novas aventuras em uma
              comunidade feita para quem ama gamers.
            </p>
            <Link href="/login">
              <Button size="large" className="px-8">
                <Rocket className="h-5 w-5" />
                Acesse
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-fadeIn">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src="/img/sonic.png"
                alt="Mario, Minecraft, Sonic"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
