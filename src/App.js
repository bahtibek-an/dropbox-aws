import React from "react";
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Router from "./Router";
Amplify.configure(awsExports);

const App = () => {

  return (
    <Router/>
  )
}

export default withAuthenticator(App);