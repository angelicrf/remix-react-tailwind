import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStyles from "./Styles/global.css";
import thisTailwindcss from "../app/tailwind.css";
import { Link } from "@remix-run/react";
export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export let links = () => {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: thisTailwindcss },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ul className='text-xl font-bold flex justify-around mt-10 bg-blue-300 mx-auto h-20 items-center'>
          <li className='hover:underline hover:w-40 hover:rounded-full hover:bg-indigo-300 hover:shadow-lg hover:shadow-indigo-500/50 hover:pl-9'>
            <Link to="/about">About</Link>
          </li>
          <li className='hover:underline hover:w-40 hover:rounded-full hover:bg-indigo-300 hover:shadow-lg hover:shadow-indigo-500/50 hover:pl-14'>
            <Link to="/fetch">Fetch</Link>
          </li>
        </ul>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
