"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Hero() {
  const [state, handleSubmit] = useForm("xwkjnqen");

  return (
    <div className="bg-cover bg-no-repeat bg-hero flex justify-center items-center text-white flex-col md:flex-row p-4">
      <div className="max-w-screen-md text-center">
        <h1 className="m-4">
          Rolety | Żaluzje | Plisy | Bramy garażowe | Markizy | Moskitiery
        </h1>

        <h2 className="m-4">
          Profesjonalizm w każdym calu: Montaż, Serwis i Naprawy.
        </h2>
        <p className="text-1xl text-yellow-300 m-2">
          DORADZTWO, WYCENA I POMIAR !!! GRATIS !!!
        </p>
      </div>
      <div className="bg-transparentWhite  border-primary border p-4 flex flex-col rounded-lg">
        <h2 className="mb-4">
          Zostaw nam wiadomość a my sie z toba skontaktujemy
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name">Imię:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-md mb-4"
          />
          <label htmlFor="phone">Numer Telefonu:</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            className="rounded-md mb-4"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-md mb-4"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message">Napisz nam czego potrzebujesz:</label>
          <textarea
            id="message"
            name="message"
            className="rounded-md mb-4"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="bg-secondary rounded-md p-2 uppercase font-bold text-primary hover:bg-primary hover:text-white transition-all m-4 w-full"
            disabled={state.submitting}
          >
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
}
