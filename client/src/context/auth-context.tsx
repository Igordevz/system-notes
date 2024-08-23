"use client"
import { createContext, useState, type ReactNode } from "react";
import type { IChildren } from "./children-type";

export const ContextApi =  createContext({})

export default function AuthContextProvider({children}:IChildren){

  const [ ] = useState();

  async function AuthRegister(){
    
  }

  async function GetApi(){
    
  }
  return (
    <ContextApi.Provider value={{}} >
        {children}
    </ContextApi.Provider>
  )
}