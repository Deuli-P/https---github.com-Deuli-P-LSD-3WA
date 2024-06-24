"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <section className="w-[90%] mb-32">
      <h2 className="uppercase text-[35px] mt-10">Se connecter</h2>

        <form
          action=""
          className="flex flex-col mt-10 mb-30 p-10 rounded-xl bg-foreground-light"
        >
          <label htmlFor="email">Email *</label>
          <input
            required
            placeholder="Votre email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[50px] mt-2 mb-10 pl-4 rounded-xl bg-white"
          />

          <label htmlFor="email">Mot de passe *</label>
          <input
            required
            placeholder="Votre mot de passe"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[50px] mt-2 mb-10 pl-4 rounded-xl bg-white"
          />
          <button
            className="w-fit mx-auto py-4 px-8 bg-primary-light text-texte-light text-fontTitle rounded-xl"
            type="submit"
          >
            Connexion
          </button>
        </form>

        <p className="text-center mt-20">Pas encore de compte ? </p>
        <p className="text-center text-purple font-black">
          <Link href="/enregistrement">Vous pouvez en créer un.</Link>
        </p>
      </section>
    </>
  );
}
