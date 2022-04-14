import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTak = () => {
    const list =useSelector((state)=>
    state.list
    
    )
    const etat= useSelector((state)=>state.etat)
  return (
    <div>
      {
        etat==='complete'?list.filter((elem)=>elem.complete===true)
    .map((e,k)=>
      <Task e={e} key={k}/>)
      :etat==='nocomplete'?list.filter((elem)=>elem.complete===false)
      .map((e,k)=>
        <Task e={e} key={k}/>)
        :list.map((e,k)=>
        <Task e={e} key={k}/>)
      }

    </div>
  )
}

export default ListTak