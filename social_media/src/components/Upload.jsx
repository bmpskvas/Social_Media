import { useState } from "react";
import { getDatabase, ref, push, set,onValue } from "firebase/database";
import axios from 'axios';
function Upload() {
    const username=localStorage.getItem('user');
    const [form,setForm]=useState({
        title:"",
        content:"",
        username: username,
    })
    function handle(e){
        const tmp={...form};
        tmp[e.target.name]=e.target.value;
        setForm(tmp);
     
    }
   async function submit(){
    //     try{
    //          const db = getDatabase();
    //     const postListRef = ref(db, 'posts/'+username);
    //     const newPostRef = push(postListRef);
    //     set(newPostRef, form);
    //  }      
    //  catch(error){
    //     console.log(error);
    //  }
    const res =await axios.post('http://localhost:8000/post/addpost', form);
    console.log(res);
        }
    return (
        <>
            <center>
                <div className="login-form">
                    <h1 className="heading">Upload Your Post</h1>
                    <div className="fields">
                        <input type="text" placeholder="title"  onChange={(e)=>handle(e)}  name="title" />
                        <p></p>
                        <input type="text" placeholder="content"  onChange={(e)=>handle(e)}  name="content" />
                        <p></p>
                        <button onClick={submit} >upload</button>
                    </div>
                </div>
            </center>
        </>
    )
}
export default Upload;