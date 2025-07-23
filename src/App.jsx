import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <ProtectedRoute> <Layout /> </ProtectedRoute> } />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
