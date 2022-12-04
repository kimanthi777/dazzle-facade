
//#modules


//@clerk setup
import { 
  ClerkProvider,
  SignedIn,
  SignedOut,
  // UserButton,
  useUser,
  RedirectToSignIn,
 } from '@clerk/clerk-react';
// #hooks
import { useNavigate } from "react-router-dom";

import './App.css';
import Index from './layouts';

// @clerk key
const FRONTEND_KEY = process.env.REACT_APP_CLERK_FRONTEND_API

function App() { 
  const navigate = useNavigate();
  return (
  //  <ClerkProvider frontendApi={FRONTEND_KEY} navigate={(to) => navigate(to)}>
    // {/* <SignedIn> */}
    <Index />
    // {/* </SignedIn> */}
    // <p>Hi</p>
   
    // <SignedOut>
    // <RedirectToSignIn />
    // </SignedOut>
  //  </ClerkProvider>
  );
}

export default App;
