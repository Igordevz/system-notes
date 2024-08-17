import CardsModals from "@/components/modals/cards";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="h-[30vh]"></header>
      <main className="flex h-[70vh] w-full flex-col relative">
        <div className="flex items-center flex-col">
          <h1 className="text-8xl">Create New notes</h1>
          <p>Create notes creative in interation participants</p>
          <div className="my-4 flex flex-row gap-4">
            <Button variant={"default"}>Participar</Button>
            <Button variant={"outline"}>Ser Contribuidor</Button>
          </div>
        </div>
        <CardsModals />
      </main>
    </main>
  );
}
