import http from '../interceptor';

export const loginRequest = loginData => http.post('/login', loginData);
export const signUpRequest = signupData => http.post('/signup', signupData);
export const refreshToken = refreshToken => http.post(`/refreshToken`, refreshToken);