import { withAuthenticator } from '@aws-amplify/ui-react'
import '../styles/globals.css'

import Amplify from 'aws-amplify'
import amplifyConfig from '../aws-exports'
Amplify.configure(amplifyConfig);

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp;
