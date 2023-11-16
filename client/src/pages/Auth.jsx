import Login from "../components/AuthForms/Login"
import Signup from "../components/AuthForms/Signup"

const Auth = ({ setUser }) => {

  return (
    <>
        <Signup setUser={setUser} />
        <Login setUser={setUser} />
    </>
  )
}

export default Auth