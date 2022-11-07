import { CSSReset } from "../components/CSSReset";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";
import config from "../../config.json";

export default function HomePage(){

    return (
        <>
            <CSSReset/>
            <div>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    )
}