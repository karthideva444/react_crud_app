import React, { useState } from 'react'

const Create = () => {

    const [name,setName] = useState('')

    const handlesubmit = ()=>{
        setName('')
    }
    

  return (
    <div >
        <form action="submit" onSubmit={handlesubmit} >
           <h2 > Customer Add Page</h2>
           <div >
           <div>
                <label>Name : </label>
                <input type='text' placeholder='Enter your name' value={name}/> 
            </div>
            <div>
                <label>email : </label>
                <input type='email' placeholder='Enter your email'/> 
            </div>
            <div>
                <label>Number : </label>
                <input type='text' placeholder='Enter your Number'/> 
            </div>
            <div>
                <label>Address : </label>
                <input type='text' placeholder='Enter your Address'/> 
            </div>
            <div>
                <label>Pincode : </label>
                <input type='text' placeholder='Enter your Pincode'/> 
            </div>
                
                <button onClick={e=>setName(name)} >submit</button>
                <button >add</button>
               
                </div>
                
        </form>
        <h3>name :{name}</h3>
        
    </div>
  )
}

export default Create