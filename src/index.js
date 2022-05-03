import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './MUI/NavBar'
import { createRoot } from 'react-dom/client';
import SideBar from './MUI/SideBar'
import EmployeeDataGrid from './MUI/EmployeeDataGrid'
import Login from './MUI/Login'
import {ApolloProvider , ApolloClient, InMemoryCache} from '@apollo/react-hooks'
import { useState } from 'react';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:3100/'
})


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const token = 1


root.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
  { token? <><SideBar/><NavBar/> </>: ""}
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/employee" element={<EmployeeDataGrid/>}/>
    </Routes>
  </BrowserRouter>
  </ApolloProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
