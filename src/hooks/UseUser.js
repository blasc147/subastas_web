import {useCallback, useContext, useState} from 'react'
import Context from '../components/Context/UserContext'

export default function useUser () {
  const {jwt, setJWT} = useContext(Context);
  const {code, setCode} = useContext(Context);
  const {name, setName} = useContext(Context);
  //const [state, setState] = useState({ loading: false, error: false });

  //aca con este servicio vamos a guardar el token cuando lo obtenga desde el login
  const login = useCallback((token, name, code) => {
        window.sessionStorage.setItem('mitoken', token);
        window.sessionStorage.setItem('name', name);
        window.sessionStorage.setItem('code', code);
        setJWT(token);
        setCode(code);
        setName(name);
      
  }, [setJWT, setName, setCode])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('mitoken');
    window.sessionStorage.removeItem('code');
    window.sessionStorage.removeItem('name');
    setJWT(null);
    setCode(null);
    setName(null)
  }, [setName, setName, setCode])

  return {
    isLogged: Boolean(jwt),
    //isLoginLoading: state.loading,
   // hasLoginError: state.error,
    login,
    logout,
    code,
    name,
    jwt
  }
} 