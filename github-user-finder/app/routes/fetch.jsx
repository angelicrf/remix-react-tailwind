import { Outlet } from "@remix-run/react";
import {useLoaderData} from '@remix-run/react';

import { getMembers } from "../githubInfo";

export let loader = async () => {
    return getMembers('microsoft');
}
export default function Fetch() {
  let members = useLoaderData();

return (
    <div>
        <div>
        <h1 className="text-xl text-red-500 my-5">Hello Fetch</h1>
        </div>
        <div>
            <div className="columns-1 md:columns-2 lg:columns-xl">
               {members.map(member => (
                <div key={member.login} className="flex flex-col w-full border-solid border-2 border-blue-400 rounded-lg px-2 py-2 my-0.5">
                    <img src={member.avatar_url} className="w-10 h-10 rounded-full" />
                    <h3 className="text-1xl font-semibold">User: {member.login}</h3>
                    <a href={member.html_url}>Github Profile: {member.html_url}</a>
                </div>
                ))}
            </div>
        </div>
        <Outlet />
    </div>
  );
}
