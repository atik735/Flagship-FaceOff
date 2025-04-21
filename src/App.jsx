import { Outlet } from 'react-router'
import './App.css'

function App() {

  return (
    <>

      <h1 className='text-2xl font-bold'>Navbar</h1>
      <Outlet />
    <h1 className='text-2xl font-bold'>Footer</h1>
    </>
  )
}

export default App
