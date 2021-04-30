import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

const LoginPage = () => <AmplifySignOut />

export default withAuthenticator(LoginPage);