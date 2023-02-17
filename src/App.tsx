import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <Container className='my-4'>
      <Routes>

        <Route path='/' element={<h1>home</h1>} />
        <Route path='/new' element={<h1>new</h1>} />
        <Route path='/:id'>
          <Route index element={<h1>show</h1>} />
          <Route path='/edit' element={<h1>edit</h1>} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

    </Container>

  )
}

export default App
