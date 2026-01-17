import { useState } from "react";
function TaskForm({onAdd}){
    const[title, setTitle]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        if(!title.trim())return

        onAdd({
            id:Date.now(),
            title,
            completed:false,
        })

        setTitle("");
    }

    return(
         <form className="task-form" onSubmit={handleSubmit}>
           <input type='text' placeholder="Add a new task ..." value={title} onChange={(e)=>setTitle(e.target.value)}/>

           <button type="submit">Add</button>

         </form>
    )
}
export default TaskForm;