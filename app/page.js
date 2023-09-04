"use client"
import React, { useState } from 'react'

const page = () => {
const [title, settitle] = useState("");
const [desc, setdesc] = useState("");

// we are taking this beacuse our task and it's description will stored in array.
const [mainTask, setMainTask] = useState([])

const submithandler = (e) => {
// preventDefault is use to resist the reloading of the page.
e.preventDefault(e);
// getting the value of out input field 
// console.log(title);
// console.log(desc);

// here we are saving previous tasks.
setMainTask([...mainTask,{title,desc}]);
// emptying the input field after submiting the form
settitle("");
setdesc("");

console.log(mainTask);
}


// function to delete the list
const deletehandler=(i)=>{
let copyTask = [...mainTask];
copyTask.splice(i,1);
setMainTask(copyTask);
}

let renderTask = <h3>No Task</h3>;

// checking if there is any input or not
if(mainTask.length>0)
// har baar to data aarha hai woh t hai aur i index ko represent krta hai
renderTask= mainTask.map((t,i)=>{
{
  return(
    <>
    {/*  key gives a unique identification to the code */}
    <li key={i}>
    <div className='flex justify-between mb-5 w-2/3 items-center'>
    <h5 className='text-2xl font-semibold'>{t.title}</h5>
    <h6 className='font-semibold text-xl'>{t.desc}</h6>
    <button onClick={()=>deletehandler(i)} 
    className='bg-red-400 text-white border-rounded font-bold p-4'>delete</button>
    </div>
    </li>
    </>
  )
}
}
)
return (
<>
  <h1 className='bg-black text-white p-5 text-5xl font-bold text-center' >
    Anupam's Todo List</h1>
  <form onSubmit={submithandler}>
    <input type="text" className='text-2xl
     border-zinc-800 
      border-2
      m-5 
      px-4
      py-4
      outline-none'
      placeholder='Enter the task here'
      value={title}
      onChange={(e) => {
        // geting the value of title and storing in settitle
        settitle(e.target.value)

      }}
required
    />
    <input type="text" className='text-2xl
     border-zinc-800 
      border-2
      m-5 
      px-4
      py-4
      outline-none'
      placeholder='Enter the description here'
      value={desc}
      onChange={(e) => {
        setdesc(e.target.value);
      }}
      required
    />
    <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded'> Add</button>
  </form>
  <hr />
  <div className='p-8 bg-slate-200'>
    <ul>{renderTask}</ul>
    
  </div>
</>
)
}

export default page