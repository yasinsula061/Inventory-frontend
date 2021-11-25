import React from 'react';
import path from './path.js';

const SignUp = React.lazy(() => import('../components/Authentication/SignUp/SignUp'));
const Signin = React.lazy(() => import('../components/Authentication/SignIn/SignIn'));

const route = [
    
    { path: path.signup, exact: true, name: 'Signup', component: SignUp },
    { path: path.signIn, exact: true, name: 'Signin', component: Signin }
];

export default route;