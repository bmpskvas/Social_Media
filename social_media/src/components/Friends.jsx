import { useEffect } from "react";

const Friends=()=>{
    const uid=localStorage.getItem('user');
    useEffect(()=>{
        if(uid===null){
            window.location.href='/'
         }
    },[])
    return (
        <>
        hello doston
        </>
    )
}
export default Friends;