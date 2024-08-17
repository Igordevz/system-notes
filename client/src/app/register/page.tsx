"use client";
import { ModeToggle } from "@/components/modals-application/mode-toggle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export default function SingUp() {
  const userFormSchema = z.object({
    name: z.string().min(3, "Nome Inválido").max(50),
    email: z.string().email("Email inválido"),
    password: z.string().min(8, "Sua senha deve conter 8 caracteres"),
  });
  type createTypeUser = z.infer<typeof userFormSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createTypeUser>({
    resolver: zodResolver(userFormSchema),
  });

  async function createUser(data: any) {
    console.log(data);
  }
  return (
    <main className="flex flex-col w-full h-screen items-center justify-center">
      <ModeToggle />
      <div className="md:w-[370px] w-5/6">
        <h1 className="w-full md:text-3xl text-xl font-bold gratuita">
          Crie sua conta
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(createUser)}
        className="flex flex-col p-4 gap-2 md:w-[400px] w-5/6"
      >
        <Label htmlFor="name">Nome completo</Label>
        <Input
          type="name"
          id="name"
          placeholder="Seu nome completo"
          {...register("name")}
        />
        <p className="text-muted-foreground text-sm mb-2"> </p>
        <span className="text-red-500 text-[12px]">
          {errors?.name?.message}
        </span>
        <hr />
        <br />
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          id="email"
          placeholder="seuemail@exemplo.com"
          {...register("email")}
        />
        <p className="text-muted-foreground text-sm mb-2">
          Utilize um e-mail válido para acessar o sistema.
        </p>
        <span className="text-red-500 text-[12px]">
          {errors?.email?.message}
        </span>
        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          placeholder="**********"
          {...register("password")}
        />
        <p className="text-muted-foreground text-sm mb-2">
          A senha deve ter no mínimo 8 caracteres.
        </p>
        <span className="text-red-500 text-[12px]">
          {errors?.password?.message}
        </span>
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
