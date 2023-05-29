import Head from "next/head";

export default function NotFound() {
  return (
    <main>
      <Head>
        <title>404</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="h-screen w-screen bg-layered-waves-pattern bg-no-repeat bg-cover pt-28 text-center content-center">
        <div className="m-auto h-auto">
          <h1 className="m-2 text-center text-5xl font-extrabold text-white">
            404
          </h1>
          <h2 className="mb-3 text-center text-3xl font-bold text-white">
            ¿Are we in the correct place?
          </h2>
          <span>
            <a
              className="mt-5 bg-gradient-to-br from-slate-800 to-red-800 rounded shadow-2xl font-bold text-white px-2 py-2 hover:p-2.5 transition-all"
              href="/"
            >
              Go Home
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
