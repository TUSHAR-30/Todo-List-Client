import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import "./ProductDiscoveryOptions.css"
import FilterContainer from '../../assets/FilterContainer/FilterContainer';
import SortContainer from '../../assets/SortContainer/SortContainer';
function ProductDiscoveryOptions() {
  return (
    <div className='productDiscovery-options'>
        <div>
          <FilterContainer />
          <SortContainer />
        </div>
        <div className='searchbar'><IoSearchSharp size={30}/></div>
    </div>
  )
}

export default ProductDiscoveryOptions