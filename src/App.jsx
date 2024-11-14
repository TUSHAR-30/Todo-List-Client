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
import Notification from './assets/Notification/Notification'
import { NotificationProvider } from './Context/NotificationContext'
function App() {

  return (
    <TasksProvider>
      <SearchProvider>
        <NotificationProvider>
          <Notification />
          <SearchContainer />
          <Header />
          <Greetings />
          <ProductDiscoveryOptions />
          <ProductDiscoveryResults />
          <AddTask />
          <Tasks />
        </NotificationProvider>
      </SearchProvider>
    </TasksProvider>
  )
}

export default App
