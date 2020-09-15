import {useCallback, useContext, useState} from 'react'
import Context from '../components/Context/UserContext'

export default function useUser () {
  const {jwt, setJWT} = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  //aca con este servicio vamos a guardar el token cuando lo obtenga desde el login
  const login = useCallback((token) => {
        window.sessionStorage.setItem('mitoken', token);
        setJWT(token);
      
  }, [setJWT])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('mitoken')
    setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    //isLoginLoading: state.loading,
   // hasLoginError: state.error,
    login,
    logout
  }
} 