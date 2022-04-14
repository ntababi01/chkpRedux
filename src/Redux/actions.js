import { ADDTASK, COMPLETETODO, EDIT, FILTERTODO, REMOVETASK } from "./actionTypes"

export const addtask=(newtask)=>{
    return {
        type:ADDTASK,
        payload:newtask
        
    }
}
export const edit=(edittask,id)=>{
    return {
        type:EDIT,
        payload:{edittask,id}
    }
}
export const complete=(id)=>{
    return {
        type:COMPLETETODO,
        payload:{id},
    }
}
export const filter=(etat)=>{
    return {
        type:FILTERTODO,
        payload:etat,
    }
}
export const remove=(id)=>{
    return{
        type:REMOVETASK,
        payload:{id},
    }
}