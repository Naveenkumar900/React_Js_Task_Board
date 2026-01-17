function TaskCard({task,onDelete,onToggle}){
    return(
        <div className="task-card">
            <span className={task.completed?'done':""}>
                {task.title}
            </span>

            <div className="actions">
               <button onClick={()=>onToggle(task.id)}>
                  {task.completed?"Undo":"Done"}
                </button>
                <button className="delete" onClick={()=>onDelete(task.id)}>
                   Delete

                </button>
            </div>

        </div>
    )
}
export default TaskCard;