import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store"


export const LoginPage = () => {

  const authStatus = useAuthStore( state => state.status);
  const user = useAuthStore( state => state.user);

  const login = useAuthStore (state => state.login);
  const logout = useAuthStore (state => state.logout);

  useEffect(() => {
    setTimeout(() => {
      logout();
    },1500);

  },[])

  if (authStatus === 'checking') {
    return <h3>LOADING....</h3>
  }
  return (
    <> 
    
    <h3>Login page</h3>

    {
      (authStatus === 'authenticated')
    ? <div>Authentificado como : {JSON.stringify(user,null,2)}</div>
    : <div>NO AUTENTICADO</div>
  
  }

  {
  (authStatus === 'authenticated')
  ? (
  <button onClick={logout}>logout</button>

  )
  : (
    <button onClick={ () =>login ('dukito@gmail.com','123')}>Entrar</button>
  )
  }

    
    
    </>
  )
}


