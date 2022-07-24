import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { MessageProviderWrapper } from './contexts/userMessage.context'
import { AuthProviderWrapper } from './contexts/auth.context'
import { CartProviderWrapper } from './contexts/cart.context'
import { FavoritesProviderWrapper } from './contexts/favorites.context';
import { GameProviderWrapper } from './contexts/game.context';


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  <React.StrictMode>
    <Router>
      <MessageProviderWrapper>
        <AuthProviderWrapper>
          <CartProviderWrapper>
            <FavoritesProviderWrapper>
              <GameProviderWrapper>
                <App />
              </GameProviderWrapper>
            </FavoritesProviderWrapper>
          </CartProviderWrapper>
        </AuthProviderWrapper>
      </MessageProviderWrapper>
    </Router>
  </React.StrictMode>
)