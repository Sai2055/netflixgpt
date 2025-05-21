
import { Provider } from 'react-redux'
import Login from './Components/Login'
import appStore from './Utility.js/appStore'

function App() {
  
  return (
    <Provider store = {appStore}>
        <Login/>
    </Provider>
  
  )
}

export default App
