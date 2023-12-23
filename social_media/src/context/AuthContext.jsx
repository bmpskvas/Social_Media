import { Children, createContext } from "react";

const AuthContext = createContext();
//publically state avl krane k liye har component ko
export default AuthContext;
export const AuthProvider =({children}) =>{
    const uid=localStorage.getItem('user');
    const contextData={
        auth: uid
    };
   return (
    <AuthContext.Provider value={contextData}>
     {children}
    </AuthContext.Provider>
   )
}