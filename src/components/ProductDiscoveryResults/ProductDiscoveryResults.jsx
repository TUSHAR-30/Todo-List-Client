import React, { useContext } from 'react'
import { convertDateFormat } from "../../utils.js"
import "./ProductDiscoveryResults.css"
import TasksContext from '../../TasksContext'
function ProductDiscoveryResults() {
  const { selectedFilter, setSelectedFilter, filterStartDate, filterEndDate } = useContext(TasksContext)
  return (
    <div className='productdiscovery-results'>
      <div className='main-productdiscovery-results'>
        <h2>{selectedFilter}</h2>
      </div>
      <div className='date-productdiscovery-results'>
        {filterStartDate ? `${convertDateFormat(filterStartDate)} - ` : filterStartDate}
        {filterEndDate ? convertDateFormat(filterEndDate) : filterEndDate}
      </div>
    </div>
  )
}

export default ProductDiscoveryResults