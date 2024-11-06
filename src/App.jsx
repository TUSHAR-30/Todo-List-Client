import AddTask from './components/AddTask/AddTask'
import Greetings from './components/Greetings/Greetings'
import Header from './components/Header/Header'
import ProductDiscoveryOptions from './components/ProductDiscoveryOptions/ProductDiscoveryOptions'
import ProductDiscoveryResults from './components/ProductDiscoveryResults/ProductDiscoveryResults'
import Tasks from './components/Tasks/Tasks'

import { TasksProvider } from './TasksContext';
import "./App.css"
function App() {

  return (
    <TasksProvider>
      <Header />
      <Greetings />
      <ProductDiscoveryOptions />
      <ProductDiscoveryResults />
      <AddTask />
      <Tasks />
    </TasksProvider>
  )
}

export default App
