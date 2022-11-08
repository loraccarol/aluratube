import { CSSReset } from "../components/CSSReset";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";
import config from "../../config.json";
import { useState } from "react";

export default function HomePage(){

    const [valorDoFiltro, setValorDoFiltro] = useState("");

    return (
        <>
            <CSSReset/>
            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} favorites={config.favorites} />
            </div>
        </>
    )
}