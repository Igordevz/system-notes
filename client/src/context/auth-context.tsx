"use client"
import { createContext, useEffect, useState, type ReactNode } from "react";
import type { IChildren } from "./children-type";
import { instance } from "@/service/api";
import axios from "axios";

export const ContextApi =  createContext({})

export default function AuthContextProvider({children}:IChildren){
  useEffect(() => {
    async function GetApi(){
      const api = await instance.get('/');
      console.log(api);
    }
    GetApi();
  },[])
  return (
    <ContextApi.Provider value={{}} >
        {children}
    </ContextApi.Provider>
  )
}