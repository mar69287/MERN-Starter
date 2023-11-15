import { login, signUp } from "../utils/users"


const Home = () => {
  const handleClick = async () => {
    const data = {
      name: 'marco',
      date: '11/15'
    }
    await login(data)
  }

  return (
    <button onClick={handleClick}>
      check backend
    </button>
  )
}

export default Home