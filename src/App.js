import {onAuthStateChanged } from "firebase/auth";
import React, {useState} from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import { authentication } from './firebase-config';


function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true)
  onAuthStateChanged(authentication, user => {
    if(user){
      return setIsUserSignedIn(true);
    }
    setIsUserSignedIn(false);
  });
  if(isUserSignedIn === true){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    )
  }else{
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    )
  }
    
}
export default App;