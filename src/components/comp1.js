import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Comp1 = () =>{
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.todo.todo)
    const [value, setValue] = useState('')
    const [id, setId] = useState(null)
    const [bin, setBin] = useState(false)
    const [binsta,setBinsta] = useState(true)
    const [tarmacum,setTarmacum] = useState(true)
    

    return(
        <div>
            <input type="text" value={value} onChange={(ev)=> setValue(ev.target.value) }/>
            <button onClick={()=>{
                !id ? value.trim() && (dispatch({
                    type:"add",
                    payload:{
                        id:Math.random(),
                        element:value,
                        deleted:true
                    }
                })) : ( value.trim() &&
                    dispatch({
                        type:'edit',
                        payload:{
                            id:id,
                            element:value,
                            
                        }
                    })
                )
                setValue('')
                setId(null)
            }}>
               {!id ? "Add" : "Edit"}
            </button>
            {
                data.map((val)=>{
                    return (
                        val.deleted && binsta ?(
                        <div key={val.id}>
                            {val.element}
                            <button onClick={()=>{
                                dispatch({
                                    type:'delete',
                                    payload:{
                                        id:val.id,
                                        deleted:val.deleted
                                    }
                                    
                                })
                                // setBin(true)
                                setTarmacum(!tarmacum)
                            }}>Delete</button>
                            <button onClick={()=>{
                                setValue(val.element)
                                setId(val.id)
                            }}
                            >Edit</button>
                        </div>): 
                        (!val.deleted && !binsta && <div>
                            {val.element}
                            <button onClick={()=>{
                                dispatch({
                                    type:'restore',
                                    payload:{
                                        id:val.id,
                                        deleted:val.deleted
                                    }
                                })
                                setTarmacum(!tarmacum)
                            }}>
                                Restore
                            </button>
                            </div>)
                    )
                })
            }
            <button onClick={()=>{
                setBinsta(!binsta)
                
            }} >{binsta ? "Open": "Close"} bin</button>
        </div>
    )
}
export default Comp1