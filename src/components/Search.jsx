import React from 'react'

export default function Search(props) {
    return (
        <div className="search">
            <p>Search</p>
            <input type="text" className="search-food" onChange={props.search} />

        </div>
    )
}
