import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Comics } from './pages/Comics'
import { QueryClient, QueryClientProvider } from 'react-query'
import { defaultTheme } from './theme/theme'
import DefaultLayout from './layout/DefaultLayout/DefaultLayout'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { WatchlistProvider } from './context/Watchlist'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <WatchlistProvider>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </BrowserRouter>
      </WatchlistProvider>
    </ChakraProvider>
  )
}

export default App
