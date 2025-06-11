
import {useState , useRef} from "react";
import Todoitem from "./Todoitem";
const Todo = () => {
    const[todoList,SetTodoList] = useState([]);

    const inputRef = useRef();

    const addTask = () =>{
        const inputText = inputRef.current.value.trim();
        if(inputText===""){
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false, 
        }
        SetTodoList(([...todoList,newTodo]));
        inputRef.current.value = "";

    };

    
    const toggleTask = (id) =>{
        SetTodoList((prev)=>{
            return prev.map((todo=>{
                if(id===todo.id){
                    return {...todo,isComplete:!todo.isComplete}
                }
                return todo;
            }))
        })
    }



    const deletTodo = (id) => {
        SetTodoList((prev)=> {
            return prev.filter((todo=>todo.id !== id ))
        });

    }



    return(
        <div className="w-[30-rem]">
            <h1 className="text-lg my-2 font-medium text-amber-500"> To-do List</h1>
            <div className="flex gap-2">
                <div className="flex-1"><input ref={inputRef} type="text"  className="py-3 px-4 w-full border focus:outline-none focus:border-blue-400" placeholder="Add your Task" /></div>
                <button className="py-3 px-4 bg-blue-600 text-white hover:bg-blue-400 text-sm font-medium rounded-sm border-none" onClick={addTask}>Add Task</button>
            </div>
            <p className="my-3 text-sm text-zinc-400 px-1"> Fill task details</p>
            <div className="w-[30-rem] bg-white px-6 py-4 shadow">
                <div className="space-y-3">
                    <legend className="text-green-600">List of Tasks that need to be completed</legend>
                    {todoList.length===0?(
                        <p className="text-gray-500 text-sm">No task found</p>
                    ):(
                        todoList.map((todo,index)=>{
                        return <Todoitem text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id} toggleTask={toggleTask} deletTodo={deletTodo}/>})
                    )}
                    

                </div>
            </div>
        </div>
    )
}
export default Todo