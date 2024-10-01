
// Import the 'express' module
import express,{ Request, Response }  from 'express';

import {User,getUser} from './db'
import { Json } from 'sequelize/types/utils';

// Create an Express application
const app=express();
// Specify the port number for the server
const port =7000;

app.get('/api',(req:Request,res:Response)=>{
    res.json({
        success:1,
        message: 'This is rest Api working'
    });
}
);

// Define a route for the root path ('/')

app.get('/',(req:Request,res:Response)=>{
    //Send a response to the client
    res.send('Hello, TypeScript + Node.js + Express Hello Diany!')
})

//Version of test api form mysql
/*app.get('/',(req: any,res: { send: (arg0: string) => void; })=>{
    res.send('Hello this is my first project');
});
*/


app.listen(port,()=>{
    console.log(`Server is running on  http://localhost:${port}`);
});