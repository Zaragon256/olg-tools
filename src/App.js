// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';
import { useLocation } from 'react-router-dom';

function App() {

    const location = useLocation();

    return (
        <div className='centerdiv'>
            <Header location={location} />
            <AppRoutes />
            <Footer />
        </div>
    );
}

export default App;
