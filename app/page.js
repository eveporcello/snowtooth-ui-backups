import Header from "./Header";

export default async function Home() {
  return (
    <>
      <Header />
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
