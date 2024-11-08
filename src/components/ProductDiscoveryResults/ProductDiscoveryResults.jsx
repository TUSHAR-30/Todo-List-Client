import React, { useContext } from 'react'
import "./ProductDiscoveryResults.css"
import TasksContext from '../../TasksContext'
function ProductDiscoveryResults() {
  const { selectedFilter,setSelectedFilter }=useContext(TasksContext)
  return (
    <div className='productdiscovery-results'>
      <div className='main-productdiscovery-results'>     
      <h2>{selectedFilter}</h2>
      </div>
      <div className='date-productdiscovery-results'>
        03 July 2023 - 06 September 2024
      </div>
    </div>
  )
}

export default ProductDiscoveryResults