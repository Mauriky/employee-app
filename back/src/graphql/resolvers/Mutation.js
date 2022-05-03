import Employee from "../../models/Employee";
import User from "../../models/User";

const Mutation = {
    
    createEmployee: async (_,{name,lastName, email, nationality,phone,civilStatus,birthday})=>{
        const newEmployee = new Employee({name,lastName, email, nationality,phone,civilStatus,birthday});
        return await newEmployee.save();
    },
    createUser: async (_,{name,password})=>{
        const newUser = new User({name,password});
        return await newUser.save();
    }
}; 

export default Mutation;