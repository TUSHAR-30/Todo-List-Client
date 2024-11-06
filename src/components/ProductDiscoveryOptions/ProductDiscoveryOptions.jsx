import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import "./ProductDiscoveryOptions.css"
function ProductDiscoveryOptions() {
  return (
    <div className='productDiscovery-options'>
        <div>
            <button>Filter by</button>
            <button>Sort by</button>
        </div>
        <div className='searchbar'><IoSearchSharp size={30}/></div>
    </div>
  )
}

export default ProductDiscoveryOptions