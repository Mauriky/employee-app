import Employee from "../../models/Employee";
import User from "../../models/User";

const Query ={
    ping(){
        return "pong!"
    },

    employees:async()=>{
        return await Employee.find()
    }, 

    findUser:async(root, args)=> {
        const {name} = args  
        const {password} = args
        const data = await User.findOne({name})
        if(data.name == name && data.password == password)
            return data      
        else
            return null
    } 
} 
  
export default Query;   