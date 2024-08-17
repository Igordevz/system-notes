import { Card, CardContent, CardTitle } from "../ui/card";

export default function CardsModals(){
  return (
    <div className="border w-full h-[50%] bg-purple-300 flex items-center justify-around absolute bottom-10 rounded-full">

        <h2 className="text-6xl">Use services shared</h2>

     
        <Card className="flex  bg-purple-400 border-none items-center justify-center p-6 hover:rounded-3xl gap-4 hover:opacity-40 transition-all cursor-pointer">
          <div className="h-2 w-2 bg-purple-600 rounded-full" ></div>
          <h2 >Create Motions 💅</h2>
        </Card>
        <Card className="flex  bg-purple-400 border-none items-center justify-center p-6 hover:rounded-3xl gap-4 hover:opacity-40 transition-all cursor-pointer">
          <div className="h-2 w-2 bg-purple-600 rounded-full" ></div>
          <h2 >Create Motions 📚</h2>
        </Card>
   

    </div>
  )
}