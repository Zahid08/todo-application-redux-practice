import TodoItem from "./TodoItem";
import {useDispatch, useSelector} from "react-redux";

export default function TodoList(){
    const todoItemList=useSelector((state)=>state.todosFromRootReducer);

    console.log(todoItemList);


    return(
        <div
            className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {
                todoItemList.map((todoItem)=>(
                    <TodoItem singleToDo={todoItem} key={todoItem.id}/>
                ))
            }

        </div>
    );
}