import './App.module.sass';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/app/header';
import Wrapper from './components/app/wrapper';
import Footer from './components/app/footer/index.js';

import HomePage from './pages/home';
import SmartphonesPage from './pages/smartphones';
import SmartphonePage from './pages/smartphone';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import ShoppingCartPage from './pages/shopping-cart';
import MyProfile from './pages/my-profile';

const App = () => {
    return (
        <Router>
            <Header />
            <Wrapper>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact  path='/smartphones/:brand' element={<SmartphonesPage />} />
                    <Route exact path='/smartphone/:smartphoneId' element={<SmartphonePage />} />
                    <Route exact path='/shopping-cart' element={<ShoppingCartPage />} />
                    <Route exact path='/login' element={<LoginPage />} />
                    <Route exact path='/signup' element={<SignupPage />} />
                    <Route exact path='/my-profile' element={<MyProfile />} />
                    <Route exact path='/my-profile/orders' element={<MyProfile />} />
                    <Route exact path='/my-profile/profile' element={<MyProfile />} />
                </Routes>
            </Wrapper>
            <Footer />
        </Router>
    );
};

export default App;
