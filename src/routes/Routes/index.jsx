import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import { useViews } from '../../views'

const Routes = () => {
  const { useScreens } = useViews()
  const { Inicio } = useScreens()
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Inicio />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export { Routes }
