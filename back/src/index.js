import {server} from './server'
import './db'

server.start({port: 3100},({port})=>{
    console.log('server on port', port);
})