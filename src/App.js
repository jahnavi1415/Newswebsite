import React,{Component} from "react";


import { BrowserRouter as Router, Route, Link, Routes,NavLink,useNavigate } from 'react-router-dom';
import axios from "axios";
import News from "./component/News";
import Science from './component/Science';
import Health from './component/Health';
import Sports from './component/Sports';
import Entertainment from "./component/Entertainment";
import Business from './component/Business';
import Technology from "./component/Technology";
import Articles from "./component/Articles";
import LoginForm from "./component/loginform";




import { NewsContextProvider } from "./NewsContext";
import { NewsContextsciProvider } from "./NewsContextsci";
import { NewsContextheaProvider } from "./NewsContexthea";
import { NewsContextspoProvider } from "./NewsContextspo";
import { NewsContextentProvider } from "./NewsContextent";
import { NewsContextbusProvider } from "./NewsContextbus";
import { NewsContexttecProvider } from "./NewsContexttec";
import { NewsContextartProvider } from "./NewsContextart";
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import LogoutButton from "./component/LogoutButton";
import Profile from "./component/Profile";


var linkStyle = {
	margin: "1rem",
	textDecoration: "none",
	color: "white",
	
  };


  function App()
{
	const {isLoading}=useAuth0();
	if (isLoading) return <div>Loading...</div>
	

    return (
	
	<div className="App">
      <div className="login">
      <LoginForm/>
	  <LogoutButton/>
	  <Profile/>
	 
	
    </div>

    <ul className="App-header" id="myDiv">
	
     
			<li className="List" >
				<NavLink exact to="/" style={linkStyle} className="main-nav" class="active" activeClassName="main-nav-active">Headlines</NavLink>
			</li>
			<li className="List">
				<NavLink exact to="/Science" style={linkStyle} className="main-nav" activeClassName="main-nav-active">Science</NavLink>
			</li>
      <li className="List">
		<NavLink exact to="/Health" style={linkStyle} className="main-nav" activeClassName="main-nav-active">Health</NavLink>
	</li>
  <li className="List">
				<NavLink exact to="/Sports" style={linkStyle} className="main-nav" activeClassName="main-nav-active">Sports</NavLink>
			</li>
			<li className="List">
		<NavLink exact to="/Entertainment" style={linkStyle} className="main-nav" activeClassName="main-nav-active">Entertainment</NavLink>
	</li>
	<li className="List">
		<NavLink  exact to="/Technology" style={linkStyle} className="main-nav">Technology</NavLink>
	</li>
	<li className="List">
		<NavLink  exact to="/Business" style={linkStyle} className="main-nav">Business</NavLink>
	</li>
	<li class="List">
		<NavLink  exact to="/Articles" style={linkStyle} className="main-nav">Articles</NavLink>
	</li>
			</ul>

		
      <Routes>
	 
        <Route path="/" element={<NewsContextProvider><News/></NewsContextProvider>}/>
          <Route path="/science" element={<NewsContextsciProvider><Science /></NewsContextsciProvider>}/>
          <Route path="/health" element={<NewsContextheaProvider><Health /></NewsContextheaProvider>}/>
          <Route path="/sports" element={<NewsContextspoProvider><Sports /></NewsContextspoProvider>}/>
		  <Route path="/entertainment" element={<NewsContextentProvider><Entertainment /></NewsContextentProvider>}/>
		  <Route path="/technology" element={<NewsContexttecProvider><Technology /></NewsContexttecProvider>}/>
		  <Route path="/business" element={<NewsContextbusProvider><Business /></NewsContextbusProvider>}/>
		  <Route path="/articles" element={<NewsContextartProvider><Articles/></NewsContextartProvider>}/>
	      
			</Routes>
			
  
      </div>
    
	
	
	
  );
  }
  export default App;

  


