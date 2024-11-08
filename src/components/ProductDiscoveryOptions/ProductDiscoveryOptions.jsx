import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import "./ProductDiscoveryOptions.css"
import FilterContainer from '../../assets/FilterContainer/FilterContainer';
import SortBy from '../../assets/SortBy/SortBy';
function ProductDiscoveryOptions() {
  return (
    <div className='productDiscovery-options'>
        <div>
          <FilterContainer />
          <SortBy />
        </div>
        <div className='searchbar'><IoSearchSharp size={30}/></div>
    </div>
  )
}

export default ProductDiscoveryOptions