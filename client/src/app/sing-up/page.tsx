import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <main className='flex flex-col w-full h-screen items-center justify-center'>
      <div className='md:w-[370px] w-5/6'>
        <h1 className='w-full md:text-3xl text-xl font-bold gratuita'>Criar sua conta </h1>
      </div>
      <form className='flex flex-col p-4 gap-2 md:w-[400px] w-5/6'>
        <Label htmlFor='name'>Digite seu nome completo</Label>
        <Input type='name' name='name' placeholder='Nome completo' />
        <p className='text-muted-foreground text-sm  mb-2'> </p>
      <hr />
      <br />
        <Label htmlFor='email'>Digite seu Email</Label>
        <Input type='email' name='email' placeholder='example@example.com' />
        <p className='text-muted-foreground text-sm  mb-2'>Utilize um email válido para realizar login em nosso sistema. </p>
        <Label htmlFor='password'>Digite sua senha</Label>
        <Input type='password' name='password'placeholder='**********' />
        <p className='text-muted-foreground text-sm  mb-2'>Sua senha deve conter no mínimo 8 digitos </p>

        <Button type='submit'>Cadastrar</Button>
        <Link href='/login' className='w-full underline text-center'>Você já possui uma conta?</Link>
      </form>
    </main>
  )
}
