import clienteAxios from './axios';

// traernos el token del middleware auth via headers
const tokenAuth = token => {
    if(token) {
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;