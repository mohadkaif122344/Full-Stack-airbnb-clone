import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Authcontext from './context/Authcontext.jsx'
import ListingContext from './context/ListingContext.jsx'
import BookingContext from './context/BookingContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Authcontext>
    <ListingContext>
      <BookingContext>
    <App />
      </BookingContext>
    </ListingContext>
  </Authcontext>
  </BrowserRouter>
)
