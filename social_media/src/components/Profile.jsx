import { useEffect, useState } from 'react';
import users from '../database/users.json'
import { getDatabase, ref, push, set, onValue } from "firebase/database";
const Profile = ({ userid }) => {
    const [userprofile, setUserProfile] = useState([]);
    useEffect(() => {
        const db = getDatabase();
        onValue(ref(db, 'users'), (snapshot) => {
            const data = snapshot.val();
            const values=Object.values(data);
            const keys=Object.keys(data);
           
            for(let i=0;i<keys.length;i++){
                 if(userid===keys[i]){
                    setUserProfile(values[i]);
                 }
            }
        });
    }, [])

    return (
        <>
            Your full name:  {userprofile.fullname}
            <p></p>
            Your username: {userid}
        </>
    )
}
export default Profile;