import * as React from 'react';
import Lock from '@mui/icons-material/Lock'
import { Button, Card, TextField, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';
import gql from 'graphql-tag'
import { useLazyQuery } from '@apollo/client';

const GET_USER = gql`
   query FindUser($nameToSearch:String!,$passwordToSearch:String!){
        findUser(name:$nameToSearch, password:$passwordToSearch) {
            name
            password
        }
   }
`;


export default function SimplePaper() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [getUser,result] = useLazyQuery(GET_USER);

  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 350,
    margin: "20px auto "
  }

  const handleInputChangeUser=(e)=>{
    setUsername({username: e.target.value});
  };
  const handleInputChangePass=(e)=>{
    setPassword({password: e.target.value});
  };


  const verify =() =>{
    
    if(username&&password){
      getUser({variables:{nameToSearch:username.username,passwordToSearch:password.password}})
      
        if(username.username == result.data.findUser.name&& password.password == result.data.findUser.password){
          navigate('/home')
        }
      }
    }
  

  return (
    <Card  elevation={10} style={paperStyle} >
      <Grid align='center'>
        <Avatar style={{background:'#1bbd7e'}}>
          <Lock />
        </Avatar>
        <h2>Sign in</h2>
      </Grid>
      <TextField sx={{m:1 ,ml:0}} label ='Username' onChange={handleInputChangeUser} placeholder='Enter Username' fullWidth required/>
      <TextField sx={{m:1 ,ml:0}} label ='Password' onChange={handleInputChangePass} placeholder='Enter Password' type='password' fullWidth required/>
      <FormControlLabel
        control={<Checkbox name='checkedB'/>}
        label="Remember me"
      />
      <Button sx={{mt:5,mb:2}} type='submit' color = 'primary' variant='contained' fullWidth onClick={()=>verify()}>Sign in</Button>
      <Typography>
          <Link href="#">
            Forgot password?
          </Link>
      </Typography>
      <Typography>Do you have an account ?
          <Link href="#">
            Sign Up?
          </Link>
      </Typography>
   
    </Card>
  );
}
