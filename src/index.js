import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { MessageProviderWrapper } from './contexts/userMessage.context'
import { AuthProviderWrapper } from './contexts/auth.context'
import { CartProviderWrapper } from './contexts/cart.context'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <MessageProviderWrapper>
        <AuthProviderWrapper>
          <CartProviderWrapper>
            <App />
          </CartProviderWrapper>
        </AuthProviderWrapper>
      </MessageProviderWrapper>
    </Router>
  </React.StrictMode>
)