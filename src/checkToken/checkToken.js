import {delUser} from  '../components/auth/userSlice.js'


export const checkToken = (time,dispatch) => {            
    const saveDate = new Date(time);
    const currentTime = new Date(); 
    
    const elapsedTime = currentTime - saveDate;         
    
    if (elapsedTime >= 3600000) {                  
        localStorage.setItem('USER',null)        
        dispatch(delUser)        
        return true
    }
    
    return false    
}