"use client";
import { createContext, useEffect, useState, type ReactNode } from "react";
import type { IChildren } from "./children-type";
import { instance } from "@/service/api";
import { useToast } from "@/components/ui/use-toast"
import Cookies from "js-cookie"
import { usePathname, useRouter } from "next/navigation";
export const AuthContextApi = createContext({});
export default function AuthContextProvider({ children }: IChildren) {
  const { toast } = useToast()
  const pathName = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<null | any>(null);

  useEffect(() => {
   async function GetInfoProfile(){
    const token =  Cookies.get('jwt');
    const data = await instance.post('/api/user/profile', {
      token: token
    })
    if(data) {
      setUser(data?.data)
     }
   }
  
   GetInfoProfile();
  }, [setUser])

   function RouterMoveUser(){
    if(user?.email){
      if (pathName === "/login" || pathName == "/register") {
        router.push("/");
      }
    }
  }
  RouterMoveUser();

  async function RegisterUser({name, password, email}:any) {
    const data = await instance.post("/api/user", {
      name,
      password,
      email,
    })
    .then((data) => {
      console.log(data?.data);
      Cookies.set('jwt', data?.data?.token, {expires: 7})
      location.reload();
    })
    .catch((error) => {
      toast({
        title: "Não foi possível criar esse usuário.",
        description: error?.response?.data || Date.now(),
      })
    })
  }

  return <AuthContextApi.Provider value={{RegisterUser}}>{children}</AuthContextApi.Provider>;
}
