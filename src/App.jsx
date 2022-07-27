import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigator from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import UserMessage from './components/UserMessage/UserMessage'

function App() {

  return (
    <>

      <Navigator />

      <AppRoutes />

      <Footer />

      <UserMessage />

    </>
  )
}

export default App
