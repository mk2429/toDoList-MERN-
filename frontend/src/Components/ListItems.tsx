import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

type allTaskArrayType = {
    allTaskArray: string[];
    onDelete: () => void
}
export const ListItems = (props: allTaskArrayType) => {

    async function deleteTask(task: string) {
        try {
            const response = await fetch("https://todolistmern.onrender.com/api/deleteTask", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ task: task })
            });
            const data = await response.json();
            props.onDelete()
        } catch (error) {
            throw new Error("Error adding task");
        }

    }

    type makeListItemType = {
        item: string;
        index: number
    }
    function toggleLineThrough(itemid: string) {
        const element = document.getElementById(itemid);
        if (element) {
            if (element.style.textDecoration === "none") {
                element.style.textDecoration = "line-through"
            }
            else {
                element.style.textDecoration = "none"
            }
        }

    }
    function getRandomRGB() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    function mouseEnterLiDiv(itemDivId: string) {
        const element = document.getElementById(itemDivId)
        if (element) {
            element.style.background = getRandomRGB()

        }

    }
    function mouseLeaveLiDiv(itemDivId: string) {
        const element = document.getElementById(itemDivId)
        if (element) {
            element.style.background = "#d9dff8"
        }

    }
    function makeListItem({ item, index }: makeListItemType) {
        const itemId = `item${index}`
        const itemDivId = `div${index}`
        return (
            <div className="lidiv">
                <div className="liItem" style={{ background: "#d9dff8" ,display:"flex",alignItems:'center'}} id={itemDivId} onMouseEnter={() => mouseEnterLiDiv(itemDivId)} onMouseLeave={() => mouseLeaveLiDiv(itemDivId)}><div key={index} id={itemId} style={{ color: "black", width: "80%", wordWrap: "break-word" }} onClick={() => toggleLineThrough(itemId)}>{item}</div> <IconButton aria-label="delete" onClick={() => deleteTask(item)}>
                    <DeleteIcon style={{ color: "purple" }} />
                </IconButton>
                </div>
            </div>
        )
    }

    return <div className="allTaskDiv">
{props.allTaskArray.length===0? <h6 style={{ textAlign: "center", marginTop: "30px", color: "grey" }}>No Task Added !</h6>:null}
        {props.allTaskArray.map((item, index) => makeListItem({ item, index }))}

    </div>
}