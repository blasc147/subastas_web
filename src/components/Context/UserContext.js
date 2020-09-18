import React, {useState} from 'react'
//import { useEffect } from 'react'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('mitoken'))
  const [code, setCode] = useState(() => window.sessionStorage.getItem('code'))
  const [name, setName] = useState(() => window.sessionStorage.getItem('name'))


  return <Context.Provider value={{jwt,setJWT, code, setCode, name, setName}}>
    {children}
  </Context.Provider>
}

export default Context