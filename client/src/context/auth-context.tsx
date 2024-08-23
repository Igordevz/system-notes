"use client";
import { createContext, useEffect, useState, type ReactNode } from "react";
import type { IChildren } from "./children-type";
import { instance } from "@/service/api";
import { useToast } from "@/components/ui/use-toast"

export const AuthContextApi = createContext({});
export default function AuthContextProvider({ children }: IChildren) {
  const { toast } = useToast()

  const [user, setUser] = useState<null | any>(null);

  async function RegisterUser({name, password, email}:any) {
    const data = await instance.post("/api/user", {
      name,
      password,
      email,
    })
    .then((data) => {
      console.log(data?.data);
    })
    .catch((error) => {
      toast({
        title: "Não foi possível criar esse usuário.",
        description: error?.response?.data,
      })
    })
  }

  return <AuthContextApi.Provider value={{RegisterUser}}>{children}</AuthContextApi.Provider>;
}
