
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
import Text from '@core/components/Common/Text/Text'

// @clerk key
const FRONTEND_KEY = process.env.REACT_APP_CLERK_FRONTEND_API

function App() {

  const navigate = useNavigate();

  return (
    <>
      {/* <ClerkProvider frontendApi={FRONTEND_KEY} navigate={(to) => navigate(to)}> */}
      {/* <SignedIn />
      <SignedOut>
      <RedirectToSignIn />
      </SignedOut> */}

      <Index />
      <Text as='label' htmlFor='header' className='text-2xl text-indigo-500 flex justify-center items-center'>Hello</Text>

      {/* </ClerkProvider> */}
    </>
  );
}

export default App;