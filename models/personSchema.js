import mongoose from "mongoose";

const myPerson = mongoose.Schema;

const personSchema = new myPerson(
    {

        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
    
        },
        favouriteFoods:{
            type:[String],
        },
        
        
    }
    
                
)



 const Person = mongoose.model("Person", personSchema)


 export default Person
