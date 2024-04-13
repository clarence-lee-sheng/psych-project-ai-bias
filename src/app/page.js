"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex h-screen w-full flex-col items-center justify-between">
      <div className="w-full h-full items-center font-mono text-sm lg:flex">
        <div className="flex flex-col justify-center items-center w-full h-full] bg-cover">
        <div className="text-xl mb-4">Introduction to Psychology 02.218</div>

        <div className="border border-black px-2 py-1 bg-white opacity-60 text-xl cursor-pointer shadow-xl mb-8 hover:bg-purple-300" onClick={()=> router.push("/iat")}>
          Start Test
        </div>
        </div>

      </div>
    </main>
  );
}
