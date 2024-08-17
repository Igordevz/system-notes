import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function SingUp() {
  return (
    <main className="flex flex-col w-full h-screen items-center justify-center">
      <div className="md:w-[370px] w-5/6">
        <h1 className="w-full md:text-3xl text-xl font-bold gratuita">
          Crie sua conta
        </h1>
      </div>
      <form className="flex flex-col p-4 gap-2 md:w-[400px] w-5/6">
        <Label htmlFor="name">Nome completo</Label>
        <Input type="name" name="name" placeholder="Seu nome completo" />
        <p className="text-muted-foreground text-sm mb-2"> </p>
        <hr />
        <br />
        <Label htmlFor="email">E-mail</Label>
        <Input type="email" name="email" placeholder="seuemail@exemplo.com" />
        <p className="text-muted-foreground text-sm mb-2">
          Utilize um e-mail válido para acessar o sistema.
        </p>
        <Label htmlFor="password">Senha</Label>
        <Input type="password" name="password" placeholder="**********" />
        <p className="text-muted-foreground text-sm mb-2">
          A senha deve ter no mínimo 8 caracteres.
        </p>
        <div className="flex items-center space-x-2 mb-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Aceito os termos e condições
          </label>
        </div>
        <Button type="submit">Cadastrar</Button>
        <Link href="/login" className="w-full underline text-center">
          Já tem uma conta? Faça login
        </Link>
      </form>
    </main>
  );
}
