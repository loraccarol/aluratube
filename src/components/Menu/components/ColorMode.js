import React, { createContext, useState } from 'react';

export const ColorModeContext = createContext({
    mode: "",
    setMode: () => {alert("vc precisa me configurar primeiro")}
});

export default function ColorModeProvider(props) {

    const [mode, setMode] = useState(props.initialMode);    

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}