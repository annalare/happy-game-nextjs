"use client";

import { Suspense } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { H1, Paragraph } from "@/components/ui/Typography";
import { Mail } from "lucide-react";

function LoginForm() {
  return (
    <div className="min-h-screen bg-color-background text-neutral-950 dark:text-neutral-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <H1 className="text-neutral-950 dark:text-white">
            Bem-vindo de volta!
          </H1>
          <Paragraph className="text-neutral-600 dark:text-neutral-300">
            Entre na sua conta e continue explorando a comunidade gamer.
          </Paragraph>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/feed" })}
            className="w-full text-neutral-950 font-medium h-12 text-base"
          >
            <Mail className="h-5 w-5" />
            Continuar com Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-color-background text-neutral-950 dark:text-neutral-50 flex items-center justify-center">
          <Paragraph>Carregando...</Paragraph>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
