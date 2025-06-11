
import { Provider } from 'react-redux'
import Login from './Components/Login'
import appStore from './Utility.js/appStore'
import Body from './Components/Body'
import Browse from './Components/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const RouterSetUp = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path:"/",
        element: <Login/>
      },
      {
        path: "/browse",
        element: <Browse/>
      }
    ]
  }])
  return (
    <Provider store={appStore}>
      <RouterProvider router={RouterSetUp} />
    </Provider>
  );
}

export default App
