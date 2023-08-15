// // Router.js
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import MemberPage from './MemberPage';
// import TrainerPage from './TrainerPage';
// import AdminPage from './AdminPage';
// import LoginPage from './LoginPage';

// const AppRouter = () => {
//   const isAuthenticated = true; // Check authentication status here

//   return (
//     <Router>
//       <Switch>
//         <Route path="/login" component={LoginPage} />
//         <PrivateRoute path="/member" component={MemberPage} isAuthenticated={isAuthenticated} role="member" />
//         <PrivateRoute path="/trainer" component={TrainerPage} isAuthenticated={isAuthenticated} role="trainer" />
//         <PrivateRoute path="/admin" component={AdminPage} isAuthenticated={isAuthenticated} role="admin" />
//         <Redirect to="/login" />
//       </Switch>
//     </Router>
//   );
// };

// const PrivateRoute = ({ component: Component, isAuthenticated, role, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated && role === props.match.path.substr(1)
//           ? <Component {...props} />
//           : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default AppRouter;
