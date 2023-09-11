// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../../context/authContext';
// import NewHome from '../../pages/newHome';
// import Chat from '../../pages/chat';

// const PrivateRoute = ({ element, ...rest }) => {
//   const { user } = useContext(AuthContext);

//   return user ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/register" />
//   );
// };

// // Other imports and components...

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/newhome" element={<PrivateRoute element={<NewHome />} />} />
//         <Route path="/chat" element={<PrivateRoute element={<Chat />} />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;