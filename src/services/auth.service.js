import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

export const login=async (userData)=>{
    try{
    const token="this is server side provide token! need to get this using API."
    cookies.set('auth-token', token, { path: '/',httpOnly:true });
    cookies.set('user', userData.name, { path: '/' });
    return true
    }catch (error) {
        console.log("On Catch ", error)
        return false
    }
    
}