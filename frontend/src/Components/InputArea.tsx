import { useState, ChangeEvent } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';

type InputAreaProps = {
    onClose: () => void,
}


export const InputArea = (props: InputAreaProps) => {
    const [inputItem, setInputItem] = useState("");
    const [showStatus, setShowStatus] = useState(false);

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setInputItem(event.target.value);
    }
    async function handleClick() {
        try {
            const response = await fetch("https://todolistmern.onrender.com/api/addTask", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ task: inputItem })
            });
            setInputItem("")
            setShowStatus(true)

            const data = await response.json();
        } catch (error) {
            throw new Error("Error adding task");
        }

    }
    function handleClose(){
        props.onClose()
        setShowStatus(false)
    }
    return (<>
    {showStatus ? <div className="alert alert-info d-flex justify-content-between " style={{ height: "55px", position: "fixed", top: "0px" }}>
                    <p><strong>YAY!</strong>  Your Task Has Been Successfully Curated!.</p>
                    <CloseIcon onClick={()=>setShowStatus(false)} />
                </div> : null}
        <div className="inputAreaContainer">
            <CancelIcon style={{ position: "absolute", top: "15px", right: "15px", color: "red" }} onClick={handleClose} />
            <h2 >Enter New Task !</h2>
            <div className="writingArea" >
                <textarea placeholder='Enter Your Task Here' onChange={handleChange} value={inputItem}></textarea>
                <Fab variant="extended" color="primary" onClick={() => handleClick()}>
                    <AddIcon sx={{ mr: 1 }} />
                    Add New Task
                </Fab>
            </div>
        </div>
        </>
    )
}