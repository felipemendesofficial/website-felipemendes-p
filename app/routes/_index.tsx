import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/componentes/footer";
import { Header } from "~/componentes/header";
import { Main } from "~/componentes/main";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
