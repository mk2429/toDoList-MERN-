import React, { useState, useEffect } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { InputArea } from "./InputArea";
import { ListItems } from "./ListItems";
import Typewriter from "typewriter-effect";
type homeProp = {
    userName?: string
}
export const Home = (props: homeProp) => {
    const [inputArea, setInputArea] = useState(false);
    const [allTaskArray, setAllTaskArray] = useState([])
    async function showTask() {
        try {
            const response = await fetch("http://localhost:5000/api/showTask", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            setAllTaskArray(data)
            console.log(allTaskArray)
        } catch (error) {
            throw new Error("Error adding task");
        }

    }
    useEffect(() => {
        showTask()
    }, []);
    function handleCloseInputArea() {
        showTask()
        setInputArea(false)
    }
    return (
        <div className="homeContainer" style={{ position: "relative" }}>
            <h1 style={{ textAlign: "center", marginTop: "30px", color: "#d9dff8" }}>To Do List</h1>
            <div className="typeWriter">
                <Typewriter
                    options={{
                        delay: 40,
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hey Buddy! 😀")
                            .pauseFor(500)
                            .deleteAll()
                            .typeString("Streamline your day. Achieve more. 🚀")
                            .pauseFor(500)
                            .deleteAll()
                            .typeString("You Can Cut. ❌")
                            .typeString(" You Can Delete. 🗑️")
                            .start();
                    }}
                /></div>
            <h1>{props.userName}</h1>
            {inputArea ? <InputArea onClose={handleCloseInputArea} /> : null}
            {!inputArea ? <Fab color="secondary" size="small" aria-label="add" onClick={() => setInputArea(true)} style={{ position: "absolute", bottom: "15px", right: "15px" }}>
                <AddIcon />
            </Fab> : null}
            <ListItems allTaskArray={allTaskArray} onDelete={showTask} />

        </div>
    )
}