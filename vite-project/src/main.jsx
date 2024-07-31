import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {ChakraProvider} from '@chakra-ui/react'
import Header from './Components/Header/Header'

import {theme} from './theme/theme.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <Header></Header>
  </ChakraProvider>
)
