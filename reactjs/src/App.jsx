import { BrowserRouter, Routes, Route } from 'react-router'

import './App.css'
import { Page1 } from './pages/page1'
import { Page2 } from './pages/page2'
import { Page4 } from './pages/page4'


function App () {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page1/>} />
      <Route path='/page1' element={<Page1/>} />
      <Route path='/page2' element={<Page2/>} />
      <Route path='/page4' element={<Page4/>} />
    </Routes>
  </BrowserRouter>

  {/* <Provider store={store}>
        ...
  </Provider> */}
  </>
  )
}
export default App