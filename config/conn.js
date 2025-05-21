import mongoose  from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

 
const Connection = async () =>{

    try {
          
        const connect = await  mongoose.connect(process.env.MONGODB_URI);
        if(connect){
            console.log('connection is successfull');

        }else{
                console.log('connection error');
        }
        
    } catch (error) {
        console.error('error', error);
        
    }
}


export default Connection