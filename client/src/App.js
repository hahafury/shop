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

import * as smartphonesService from './api/services/smartphones';

const App = () => {
  const gets = async () => {
    console.log('GET')
    const {data} = await smartphonesService.get();
    console.log(data);
  };

gets()
    return (
        <Router>
            <Header />
              <Wrapper>
                  <Routes>
                      <Route exact path='/' element={<HomePage />} />
                      <Route exact path='/smartphones/:brand' element={<SmartphonesPage />} />
                      <Route exact path='/smartphone/:name' element={<SmartphonePage />} />
                      <Route exact path='/login' element={<LoginPage />} />
                      <Route exact path='/signup' element={<SignupPage/>} />
                  </Routes>
              </Wrapper>
            <Footer/>
        </Router>
    );
};

export default App;
