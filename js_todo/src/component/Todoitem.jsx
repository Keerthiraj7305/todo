
const Todoitem = ({text, isComplete , id, toggleTask, deletTodo}) => {
    return(
        <div className="flex justify-between items-center">
            <label className={`hover:bg-slate-100 flex-1 p-2 rounded-md gap-2 cursor-pointer select-none ${isComplete?"line-through text-slate-500":""}`} onClick={()=> toggleTask(id)}>{text}</label>
            <div>
                <div className='size-[26px] p-1 hover:bg-red-200 rounded-md' onClick={()=> deletTodo(id)}>
                    <svg className="hover:fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </div>
                
            </div>
        </div>  
    )
}
export default Todoitem