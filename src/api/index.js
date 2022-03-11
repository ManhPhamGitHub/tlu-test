import axios from 'axios'

export const getItem = ()=> {
    return axios({ // axios 
    method:'GET',
    url:'http://localhost:3002'
})}

export const uploadFile = async (data)=> {
    return await fetch('http://localhost:3002',{method:"POST",body:data.file})    
}


//return await fetch('http://localhost:3002',{method:"POST",body:data.file})
