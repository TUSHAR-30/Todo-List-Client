import AddTask from './components/AddTask/AddTask'
import Greetings from './components/Greetings/Greetings'
import Header from './components/Header/Header'
import ProductDiscoveryOptions from './components/ProductDiscoveryOptions/ProductDiscoveryOptions'
import ProductDiscoveryResults from './components/ProductDiscoveryResults/ProductDiscoveryResults'
import Tasks from './components/Tasks/Tasks'
import SearchContainer from './SearchContainer/SearchContainer'
import Notification from './assets/Notification/Notification'

import { TasksProvider } from './Context/TasksContext';
import { SearchProvider } from './Context/SearchContext'
import { NotificationProvider } from './Context/NotificationContext'
import "./App.css"

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
