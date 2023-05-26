import {initialState} from "./initialState";
import {ADDED, COLORSELECTED, DELETED, MARKtASK} from "./actionTypes";

const nextodoId=(todoListItem)=>{
    const maxId=todoListItem.reduce((maxId,todoListItem)=>Math.max(todoListItem.id,maxId),-1);
    return maxId+1;
}

const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADDED:
            console.log("Addded Using Redux Tool");

            return [
                ...state,
                {
                    id:nextodoId(state),
                    text:action.payload,
                    completed: false,
                    color: ''
                }
            ]
        case DELETED:
           return state.filter((todoItem)=>todoItem.id!==action.payload);
        case COLORSELECTED:
           const {todoId,color}=action.payload;
           return state.map((singleItem)=>{
               if (singleItem.id!==todoId){
                   return singleItem;
               }
               return {
                   ...singleItem,
                   color:color
               }
           });
        case MARKtASK:
            return state.map((todoSingleItem)=>{
                if (todoSingleItem.id!=action.payload){
                    return todoSingleItem;
                }
                return {
                    ...todoSingleItem,
                    completed: !todoSingleItem.completed
                }
            })

        default:
            return state;
    }
}

export default reducer;