import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Topic = React.lazy(() => import('./views/Topic/Topic'));
const Login = React.lazy(() => import('./views/Pages/Login'));
const User = React.lazy(() => import('./views/User/Forms/Forms'));
const CreateCourse = React.lazy(() => import('./views/CreateCourse/Course'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/topic', name: 'Topic', component: Topic },
  { path:'/login', name: 'Login', component: Login},
  { path: '/create', name: 'User', component: User},
  { path: '/createCourse', name: 'CreateCourse', component: CreateCourse},
  
];

export default routes;
