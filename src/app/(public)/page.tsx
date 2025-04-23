"use client";

import {
  getUsersProfile,
  GetUsersProfile200,
  postSessionsPassword,
} from "@/http/orval/api";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState<GetUsersProfile200>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = postSessionsPassword({
      email: email,
      password: password,
    })
      .then(({ access_token }) => {
        document.cookie = `access_token=${access_token}; path=/; max-age=86400; secure; samesite=strict`;
      })
      .then(() => {
        const result = getUsersProfile().then((response) => {
          console.log(response);

          setData(response);
        });
      });
  };

  return (
    <main className="flex flex-col items-center gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium">
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Entrar
        </button>
      </form>

      <div>{JSON.stringify(data, null, 2)}</div>
    </main>
  );
}
