import { useEffect, useState } from "react";
import { fetchTasks } from "../services/taskApi";
function Dashbaord(){
    const[tasks,setTasks]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    useEffect(()=>{
        loadTasks();
    },[]);

    async function loadTasks(){
        try{
            const todos=await fetchTasks();
            setTasks(todos.slice(0,10));
        }catch(err){
            setError("Unable to load tasks")
        }finally{
            setLoading(false);
        }

    }
    return(
        <div className="app-container">
            <h1>Task Management System</h1>
            <p>Manage your task efficiently</p>

            {loading && <p>Loading Tasks...</p>}
            {error&& <p>Error:{error}</p>}
            {!loading && !error &&(
                <ul>
                     {tasks.map((task)=>(
                        <li key={task.id}>
                           {task.title} {task.completed?"Done":"Not Done"}

                        </li>
                     ))}
                </ul>
            )}
        </div>
    )
}
export default Dashbaord;