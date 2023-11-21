"use client";
import { SWRConfig } from "swr";

import Footer from "./footer";
import Header from "./header";
import NavBar from "./navbar";
import fetcher from "../util/fetcher";
import SearchBar from "./search-bar";

export default function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SWRConfig
            value={{fetcher: fetcher}}
        >
            <div className=" max-w-md mx-auto">
                <SearchBar />
                <Header />
                <NavBar />
                <main className="flex flex-col bg-slate-600 p-4 mt-4 rounded">
                    {children}
                </main>
                <Footer />
            </div>
        </SWRConfig>
    )
}