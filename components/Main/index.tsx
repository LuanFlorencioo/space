import Art from "./Art";

export default function Main() {
  return (
    <main className="w-full px-4">
      <div className="w-full max-w-[1200px] mx-auto py-20 flex flex-col items-center gap-10 md:flex-row md:justify-center md:flex-wrap">
        <h1 className="w-full max-w-[500px] font-bold text-5xl text-text text-center">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Earth</span>
        </h1>

        <Art />
      </div>
    </main>
  )
}
