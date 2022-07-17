import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigator from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>

      <Navigator />
      
      <AppRoutes />
      <HomePage />

      <Footer />

    </>
  )
}

export default App
