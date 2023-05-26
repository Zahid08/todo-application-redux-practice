import {ADDED, CLEARCOMPLETEtASK, COLORSELECTED, COMPLETEALLTASK, DELETED, MARKtASK} from "./actionTypes";

/**
 * This functions take input from input field. Once user hit click this one will be call
 * and pass to dispatch
 * @return void
 */
export const added=(InputText)=>{
    return {
        type:ADDED,
        payload:InputText,
    }
}

/**
 * Color Selected
 * @return void
 */
export const markDown=(todId)=>{
    return {
        type:MARKtASK,
        payload:todId,
    }
}

/**
 * Deleted To Do Item From list
 * @return void
 */
export const deleteToDo=(todId)=>{
    return {
        type:DELETED,
        payload:todId,
    }
}

/**
 * Complete All Task
 * @return void
 */
export const completeAllTask=()=>{
    return {
        type:COMPLETEALLTASK,
    }
}

/**
 * Clear Complete Task
 * @return void
 */
export const clearAllCompleteTask=()=>{
    return {
        type:CLEARCOMPLETEtASK,
    }
}

export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color,
        },
    };
};