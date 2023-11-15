import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <div 
      style={{
        backgroundColor: '#333',
        position: "fixed",
        top: 0,
        left: 0,
        width: '100%',
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
    </div>
  )
}

export default Nav