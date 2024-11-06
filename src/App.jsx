import AddTask from './components/AddTask/AddTask'
import Greetings from './components/Greetings/Greetings'
import Header from './components/Header/Header'
import ProductDiscoveryOptions from './components/ProductDiscoveryOptions/ProductDiscoveryOptions'
import ProductDiscoveryResults from './components/ProductDiscoveryResults/ProductDiscoveryResults'
import Tasks from './components/Tasks/Tasks'

import "./App.css"
function App() {

  return (
    <>
      <Header />
      <Greetings />
      <ProductDiscoveryOptions />
      <ProductDiscoveryResults />
      <AddTask />
      <Tasks />
    </>
  )
}

export default App
