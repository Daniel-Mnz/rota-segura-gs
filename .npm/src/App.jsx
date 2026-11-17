
import Header from "./components/layout/Header";

export default function App() {
  return (
    <>
      <Header />

      <main
        id="inicio"
        className="grid min-h-[calc(100dvh-73px)] place-items-center bg-background text-foreground"
      >
        <h1 className="text-3xl font-bold">
          Rota <span className="text-primary">Segura</span>
        </h1>
      </main>
    </>
  );
}
