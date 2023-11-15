import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <div 
      style={{
        backgroundColor: '#333',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 3,
        height:'70px',
        padding: '0 15px',
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Link to={'/'} >
        Home
      </Link>
      <Link to={'/Auth'} >
        Auth
      </Link>
    </div>
  )
}

export default Nav