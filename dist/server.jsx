"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the 'express' module
const express_1 = __importDefault(require("express"));
// Create an Express application
const app = (0, express_1.default)();
// Specify the port number for the server
const port = 3001;
// Define a route for the root path ('/')
app.get('/', (req, res) => {
    //Send a response to the client
    res.send('Hello, TypeScript + Node.js + Express Hello Diany!');
});
//Version of test api form mysql
/*app.get('/',(req: any,res: { send: (arg0: string) => void; })=>{
    res.send('Hello this is my first project');
});
*/
app.listen(port, () => {
    console.log(`Server is running on Hello http://localhost:${port}`);
});
