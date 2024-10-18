import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addtodoo,deletetodoo,statustodoo } from './todooSlice'
import { useRef } from 'react'

function Todolistr(){
    
    var tRef=useRef()

        React.useEffect(()=>{
        tRef.current.focus();
    },[])

    const {todoos}=useSelector(state=>state.todoos)
    // console.log(x)

    const dispatch=useDispatch()

    return(
         <div className='d-flex justify-content-center m-5 '  >
            <div>

            </div>
        <div className='bg-dark overflow-auto border border rounded' style={{width:"600px",height:"500px"}}>
            <h1 className='text-center text-white m-2'>Todo List</h1>
            <div className='d-flex justify-content-center m-2'>
                {/* <div></div> */}
            <input type="text" id="d1" ref={tRef} className='align-center border border-light rounded bg-dark text-white' style={{width:"400px",height:"40px"}} placeholder='type...'/>&nbsp;
            <button className='btn btn-danger' onClick={()=>{dispatch(addtodoo(document.getElementById('d1').value))}}>Add Todo</button>
            </div>
            {
                todoos.map((x,i)=>{
                    return <div className='d-flex justify-content-center'>
                       <div className='d-flex border border-warning rounded  p-1 justify-content-around m-2 ' style={x.status?{color:"red",width:"470px",height:"40px"}:{color:"white",width:"470px",height:"40px"}} ><h5>{x.title}</h5>
                       <div className='btn-group btn-group-sm'  role="group" aria-label="Small button group">
                       <button className='btn btn-outline-danger' onClick={()=>{dispatch(deletetodoo(i))}}><i class="bi bi-x-circle"></i></button>
                       <button className='btn btn-outline-success' onClick={()=>{dispatch(statustodoo(i))}}>{x.status?"Undo":"Done"}</button>
                       </div>
                       </div>
                       
                        
                        
                        
                    </div>  
                })
            }
        </div>
        </div>
    )
}
export default Todolistr