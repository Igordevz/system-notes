import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <main className="flex flex-col w-full h-screen items-center justify-center">
      <div className="md:w-[370px] w-5/6">
        <h1 className="w-full md:text-3xl text-xl font-bold gratuita">
          Faça seu login
        </h1>
      </div>
      <form className="flex flex-col p-4 gap-2 md:w-[400px] w-5/6">
        <Label htmlFor="email">E-mail</Label>
        <Input type="email" name="email" placeholder="seuemail@exemplo.com" />
        <p className="text-muted-foreground text-sm mb-2">
          Utilize um e-mail cadastrado para acessar o sistema.
        </p>
        <Label htmlFor="password">Senha</Label>
        <Input type="password" name="password" placeholder="**********" />
  
        <Button type="submit">Entrar</Button>
        <Link href="/register" className="w-full underline text-center">
          Ainda não tem uma conta? Cadastre-se
        </Link>
      </form>
    </main>
  );
}
