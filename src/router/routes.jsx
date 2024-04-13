import {createBrowserRouter} from "react-router-dom"

import App from "../App"
import PaginaInicial from "../pages/PaginaInicial"
import PaginaCadastroTrilha from "../pages/PaginaCadastroTrilha"
import PaginaListaTrilhas from "../pages/PaginaListaTrilhas"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PaginaInicial />
      },
      {
        path: "/cadastro-trilha",
        element: <PaginaCadastroTrilha />
      },
      {
        path: "/lista-trilhas",
        element: <PaginaListaTrilhas />
      },
    ]
  }
])

export default routes