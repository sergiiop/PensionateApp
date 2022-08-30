import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<h1>Inicio</h1>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export { Routes }
