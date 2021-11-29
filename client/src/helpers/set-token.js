import CONSTANTS from '../constants';

const setToken = (token) => {
    window.localStorage.setItem(CONSTANTS.TOKEN, JSON.stringify(token));
};

export default setToken;