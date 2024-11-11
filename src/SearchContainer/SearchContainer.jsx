import React, { useContext } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import "./SearchContainer.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SearchContext from '../Context/SearchContext';

function SearchContainer() {
    const { isSearchIconClicked, setIsSearchIconClicked } = useContext(SearchContext)

    if (isSearchIconClicked) {
        useGSAP(() => {
            gsap.to(".anothersearchicon", {
                display: 'none'
            })
            gsap.to(".searchsystem", {
                transform: "scale(1)",
                display: 'block',
                y:-100,
                delay: 0.6
            })
        }, [isSearchIconClicked])
    }
    if(!isSearchIconClicked){
        useGSAP(() => {
            gsap.to(".anothersearchicon", {
                display: 'block'
            })
            gsap.to(".searchsystem", {
                transform: "scale(0)",
                display: 'none',
            })
        }, [isSearchIconClicked])
    }


    return (
        <div className='searchcontainer'>
            <div className="anothersearchicon">
                <IoSearchSharp size={23} />
            </div>
            <div className='searchsystem'>
                <div className="searchplace">
                    <input type="search" />
                    <IoSearchSharp size={23} />
                </div>
                <div className="searchresults">
                        Hello
                </div>
            </div>
        </div>
    )
}

export default SearchContainer