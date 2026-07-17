import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <main className="flex  w-full max-w-3xl flex-col items-center justify-between ">
       <Image src="/background.jpg" alt="background image" width={100} height={20} className="w-full h-full object-cover"></Image>
      </main>
    </div>
  );
}
