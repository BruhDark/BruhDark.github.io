import { Button } from "../../resources/button";

export default function BhHome() {
  return (
    <main>
      <div className="bg-layered-waves-pattern bg-no-repeat bg-center bg-cover min-h-screen w-auto">
        <header className="bg-gradient-to-r from-slate-900 to-slate-800 w-auto min-h-16 h-fit">
          <div>
            <div className="pl-5">
              <a href="/">
                <img
                  src="/images/bh-logo.png"
                  alt="Beluga Whale"
                  className="inline-block w-24 h-12"
                />
              </a>

              <Button
                title="Log In"
                href="/bloxlink-helper/auth"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              ></Button>
            </div>
          </div>
        </header>

        <div>
          <h1 className="text-bold text-white">
            The Bloxlink Helper dashboard
          </h1>
        </div>
      </div>
    </main>
  );
}
