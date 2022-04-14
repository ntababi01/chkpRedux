import { ADDTASK, COMPLETETODO, EDIT, FILTERTODO, REMOVETASK } from "./actionTypes";

const initialState = {
  list: [
    {
      name: "java",
      complete: true,
      id: Math.random(),
    },
    {
      name: "python",
      complete: false,
      id: Math.random(),
    },
  ],
  etat:'all'
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case ADDTASK:
          return {...state,list:[...state.list,payload]}
      case EDIT: 
          return {...state,list:state.list.map(
            (elem)=>elem.id=== payload.id? {...elem,name:payload.edittask}:elem
          )} 
      case COMPLETETODO:
        return {...state,list:state.list.map(
          (elem)=>elem.id=== payload.id?{...elem,complete:!elem.complete}:elem
        )}    
        case FILTERTODO:
          return {...state,etat:payload

          }   
          case REMOVETASK:
            return {...state,list:state.list.filter((elem)=>elem.id!==payload.id)

            }
    default:
      return state;
  }
};
export default taskReducer;