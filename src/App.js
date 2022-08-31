import React from "react"
import './App.css'
import Lampada from "./components/Lampada"

export default function App() {
   
    const aluna = ['Allanis Silva Munarim']
    const Rm = ['94632']
    return(
        <>
        <h1 id="titulo">Checkpoint_01 
            <p>Aluna:{aluna}/ Rm{Rm}</p>
        </h1>

        <Lampada/>


        </>
          
    )
   
}
