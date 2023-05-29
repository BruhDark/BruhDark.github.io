import Head from "next/head";
import { Button } from "../resources/button";
import { SkillsCard } from "../resources/skills-card";

export default function Home() {
  return (
    <main>
      <Head>
        <title>I'm Dark</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="bg-blob-pattern bg-no-repeat bg-center bg-cover flex justify-center h-screen w-auto">
        <div id="main-info" className="flex justify-center items-center">
          <div id="photo" className="flex justify-center">
            <img
              className="rounded-full shadow-3xl w-40 h-40"
              src="https://i.pinimg.com/originals/eb/b5/4d/ebb54d274210dcbd90b6bf52bce46955.gif"
              alt="Profile picture"
            />
          </div>
          <div className="ml-4 grid place-items-center">
            <span className="inline-block h-auto w-auto">
              <h1 className="inline-block text-5xl text-white font-bold">
                I'm Dark
              </h1>
            </span>

            <p className="text-2xl text-slate-200 font-semibold mb-5 text-center">
              Kinda a developer
            </p>
            <span>
              <Button
                title="My skills"
                href="#skills"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              ></Button>
              <Button
                title="About Me"
                href="#about-me"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
              ></Button>
              <Button
                title="My Pronouns"
                href="https://en.pronouns.page/@darkk"
                d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
              ></Button>
              <Button
                title="My Projects"
                href="/projects"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              ></Button>
            </span>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="h-auto w-auto bg-wave-pattern bg-no-repeat bg-center bg-cover place-items-center"
      >
        <h2 className="ml-10 pt-24 text-left text-5xl font-extrabold text-white">
          My Skills
        </h2>
        <p className="text-left ml-10 mt-4 mr-4 w-50 text-lg text-white font-semibold">
          I have joined the developer world back in ~2020 when I first started
          learning Python. Since then I have been improving my skills on Python,
          mainly working with Discord API wrappers to create Discord bots. I
          then started learning other programming languages such as JavaScript,
          HTML and CSS.
        </p>
        <div className="mr-2 mt-5 grid grid-cols-2 gap-4 pb-14 min-h-fit">
          <SkillsCard
            image="/images/group.png"
            title="Community Management"
            description="I have experience managing different communities within Discord. I
              am able to complete tasks and manage human resources to
              subordinate many tasks and achieve more efficiency."
          ></SkillsCard>
          <SkillsCard
            image="images/gears.png"
            title="Frameworks / Programming Languages"
            description="I mainly code on Python, that's the first language I learnt, using Discord libraries. I am also learning Next.js and TailwindCSS for websites."
          ></SkillsCard>
          <SkillsCard
            image="images/gears.png"
            title="MongoDB"
            description="I am able to work with MongoDB, mainly using libraries on Python to create, edit and delete
              documents on different collections."
          ></SkillsCard>
          <SkillsCard
            image="images/megaphone.png"
            title="Customer Service"
            description="Bad or good? I have some customer service experience provided by the support servers I work at on Discord."
          ></SkillsCard>
        </div>

        <div
          id="about-me"
          className="bg-circle-pattern bg-no-repeat bg-center bg-cover w-auto h-auto"
        >
          <h2 className="pt-24 ml-10 text-left text-5xl font-extrabold text-white">
            About Me
          </h2>
          <p className="text-left ml-10 mt-4 w-50 text-lg text-white font-semibold">
            Who you? Who me?
          </p>
          <div className="grid gap-1 gap-y-2 h-screen pb-10 pt-6 place-items-center">
            <div className="border-solid border-2 border-white w-3/4 h-auto rounded p-2 bg-slate-900">
              <h1 className="text-3xl font-sans font-bold text-slate-200 text-center">
                Who am I?
              </h1>
              <p className="text-base text-center text-white">
                Known as Dark on the internet, I am an 18-year-old Information
                Systems Engineering student. From Argentina to the world, I
                started my programming journey around 2020 inspired by a
                Software Engineer which is the owner of the company I work in. I
                like sausage dogs, I have one, actually. I really enjoy coding
                and experimenting with new stuff and hoping to work for lead
                tech companies and travel around the world.
              </p>
            </div>
            <div className="border-solid border-2 border-white w-3/4 h-auto rounded p-2 bg-slate-900">
              <h1 className="text-3xl font-sans font-bold text-slate-200 text-center">
                What do I do?
              </h1>
              <p className="text-base text-center text-white">
                As of now, starting my studies on my university to become a
                proud engineer. I also work for different Discord bot companies
                and enjoy coding as a free-time hobby which has technically
                became my job and passion.
              </p>
            </div>
            <div className="place-items-center border-solid border-2 border-white w-3/4 h-auto rounded p-2 bg-slate-900">
              <h1 className="text-3xl font-sans font-bold text-slate-200 text-center">
                What the dark doin?
              </h1>
              <p className="text-base text-center text-white md:hidden">
                Your device can't embed this due to width issues.
              </p>
              <div className="hidden md:flex justify-around h-auto w-auto pt-3">
                <embed
                  className="w-max h-max"
                  src="https://lanyard.cnrad.dev/api/449245847767482379"
                  type=""
                />
              </div>
            </div>
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
          <div>
            <span>
              <Button
                title="My skills"
                href="#skills"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              ></Button>
              <Button
                title="About Me"
                href="#about-me"
                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
              ></Button>
              <Button
                title="My Pronouns"
                href="https://en.pronouns.page/@darkk"
                d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
              ></Button>
              <Button
                title="My Projects"
                href="/projects"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              ></Button>
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
