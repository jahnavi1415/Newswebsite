import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import twitter from './twitter.png';
import fb from './fb.png';
import mail from './mail.png';
import youtube from './youtube.png';
import insta from './insta2.png';
import { BrowserRouter } from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';
import Title from './component/Title';

const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const clientId =process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
 <Auth0Provider domain={domain}
 clientId={clientId}
 redirectUri={window.location.origin}>
  <BrowserRouter>
  

   <div className="Title">
    <Title/>
    </div>

    
    <br/>
    
    
     <div className="icons" align="right">
      <a href=" https://twitter.com/twentyyyfour7" target="_blank"> <img src={twitter} width="50" height="50" ></img></a>
      <a href=" https://www.facebook.com/247-News-110367461478386" target="_blank"> <img src={fb} width="50" height="50"></img></a>
      <a href=" mailto:twentyyyfour7@gmail.com" target="_blank"> <img src={mail} width="50" height="50" ></img></a>
      <a href=" https://www.instagram.com/invites/contact/?i=1ckgucj4fy8ik&utm_content=navarbq" target="_blank"> <img src={insta} width="50" height="50" ></img></a>
      <a href=" https://www.youtube.com/channel/UCYUk-7YHeDhvDwesy7a1orQ/featured" target="_blank"> <img src={youtube} width="50" height="50" ></img></a> 
      <br/>
      
       </div>
      <div className="login" align="left">
      <script src="loginform.js">
</script></div>
       <br/>
    <App />

    </BrowserRouter>,
    </Auth0Provider>,
  document.getElementById('root')
);
