import Header from "./Header";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: counter } = await supabase
    .from("counter")
    .select();
  return (
    <>
      <Header />
      <p>{JSON.stringify(counter)}</p>
      <div className="bg-hero-image bg-cover bg-center h-screen flex items-center justify-center">
        <div>
          <h1 className="text-7xl font-bold text-white mb-6 bg-slate-600">
            Sink Your Teeth Into Winter
          </h1>
        </div>
      </div>
    </>
  );
}
