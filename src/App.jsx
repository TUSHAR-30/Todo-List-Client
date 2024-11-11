import AddTask from './components/AddTask/AddTask'
import Greetings from './components/Greetings/Greetings'
import Header from './components/Header/Header'
import ProductDiscoveryOptions from './components/ProductDiscoveryOptions/ProductDiscoveryOptions'
import ProductDiscoveryResults from './components/ProductDiscoveryResults/ProductDiscoveryResults'
import Tasks from './components/Tasks/Tasks'

import { TasksProvider } from './Context/TasksContext';
import "./App.css"
import SearchContainer from './SearchContainer/SearchContainer'
import { SearchProvider } from './Context/SearchContext'
function App() {

  return (
    <TasksProvider>
      <SearchProvider>
        <SearchContainer />
        <Header />
        <Greetings />
        <ProductDiscoveryOptions />
        <ProductDiscoveryResults />
        <AddTask />
        <Tasks />
      </SearchProvider>
    </TasksProvider>
  )
}

export default App
