
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import config from "../config.json";
import { useState } from "react";

export default function HomePage(){

    const [valorDoFiltro, setValorDoFiltro] = useState("");

    return (
        <>
            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} favorites={config.favorites} />
            </div>
        </>
    )
}