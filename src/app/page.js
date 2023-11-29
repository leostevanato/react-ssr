import { Suspense } from "react";
import { GithubUser } from "./components/GithubUser";

export default async function Home() {
  return (
    <div className="m-4 p-4">
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="leostevanato" />
        <hr />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="diego3g" />
      </Suspense>
    </div>
  );
}