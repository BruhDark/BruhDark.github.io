import { Button } from "../resources/button";
import Head from "next/head";

export default function Projects() {
  return (
    <main>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 w-auto h-14">
        <div>
          <div className="pl-5">
            <a href="/">
              <img
                src="../images/beluga.png"
                alt="Beluga Whale"
                className="inline-block w-12 h-12"
              />
            </a>
          </div>
        </div>
      </header>
      <div className="bg-layered-peaks-pattern bg-no-repeat bg-cover h-full md:h-screen w-auto">
        <h2 className="pt-24 ml-10 text-left text-5xl font-extrabold text-white">
          My Projects
        </h2>
        <p className="text-left ml-10 mr-4 mt-4 w-50 text-lg text-white font-semibold">
          Some of the projects I (actually) work in. Most of them are personal
          or volunteer projects due to I am no professional (yet) and don't have
          too much knowledge to create complex projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center ml-10 mr-10 mt-5 pb-14">
          <div className="h-auto w-15 bg-gradient-to-r from-slate-800 to-slate-700 rounded shadow-xl p-4">
            <span>
              <svg
                className="h-5 w-5 align-bottom"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
              >
                <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              <h3 className="text-3xl text-white font-bold">Bloxlink Helper</h3>
            </span>
            <p className="text-base text-white font-semibold">
              Bloxlink Helper is a tags Discord bot with other automations such
              as a FAQ system, tickets, translations and others. This was my
              first real project I volunteered created to actually be used by
              users. I am responsible to maintain the code and I always keep
              improving the code while getting more knowledge.
            </p>
            <a
              className="float-right"
              href="https://github.com/BruhDark/Bloxlink-Helper"
              target="_blank"
              rel="noreferrer"
              title="Go to project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="inline-block w-6 h-6"
              >
                <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </a>
          </div>

          <div className="h-auto w-15 bg-gradient-to-r from-slate-800 to-slate-700 rounded shadow-xl p-4">
            <span>
              <svg
                className="h-5 w-5 align-bottom"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
              >
                <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              <h3 className="text-3xl text-white font-bold">My Website</h3>
            </span>
            <p className="text-base text-white font-semibold">
              This is my first website with the knowledge of a course and
              experementing with frameworks to make it look cooler. This website
              has no JS functions but I am looking forward experimenting with
              them and possibly create a minimalist dashboard for Bloxlink
              Helper to make it easier to manage tags and other stuff.
            </p>

            <a
              className="float-right"
              href="https://github.com/BruhDark/BruhDark.github.io"
              target="_blank"
              rel="noreferrer"
              title="Go to project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="inline-block w-6 h-6"
              >
                <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </a>
          </div>

          <div className="h-auto w-15 bg-gradient-to-r from-slate-800 to-slate-700 rounded shadow-xl p-4">
            <span>
              <svg
                className="h-5 w-5 align-bottom"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
              >
                <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
              <h3 className="text-3xl text-white font-bold">Oknos</h3>
            </span>
            <p className="text-base text-white font-semibold">
              Oknos was my first test bot that I created using Py-Cord. It
              allowed me to experiment how the library worked and to start
              gaining knowledge on Object Orientated Programming, asynchronus in
              Python and other interesting stuff. I don't work anymore on it due
              to Bloxlink Helper having my full attention.
            </p>

            <a
              className="float-right"
              href="https://github.com/BruhDark/Oknos"
              target="_blank"
              rel="noreferrer"
              title="Go to project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="inline-block w-6 h-6"
              >
                <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 w-auto h-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center w-auto h-screen md:h-auto">
          <div className="">
            <h1 className="text-white text-3xl text-center font-bold">
              ¿Should we work together?
            </h1>
          </div>
          <div className="">
            <div className="flex justify-around gap-5 place-items-canter place-content-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="inline-block w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a
                  className="text-base text-white font-semibold text-center"
                  href="mailto:darkpxint@gmail.com"
                >
                  darkpxint@gmail.com
                </a>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="inline-block w-6 h-6"
                >
                  <path d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" />
                </svg>
                <a
                  className="text-base text-white font-semibold text-center"
                  href="https://discord.com/users/449245847767482379"
                  target="_blank"
                >
                  dark#8901
                </a>
              </div>
            </div>
          </div>
          <span>
            <Button
              title="Home"
              href="/"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            ></Button>
            <Button
              title="My skills"
              href="/#skills"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            ></Button>
            <Button
              title="About Me"
              href="/#about-me"
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
            ></Button>
            <Button
              title="My Pronouns"
              href="https://en.pronouns.page/@darkk"
              d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
            ></Button>
          </span>
        </div>
      </footer>
    </main>
  );
}
