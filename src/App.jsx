import React, { Component } from 'react'
import FoodBox from './components/FoodBox'
import Search from './components/Search'
import foodData from './foodItems.js'

export default class App extends Component {
    constructor() {
        super()
        this.state = { items: [...foodData.items].slice(0, 4) }
    }

    // when the user tries to search any particular item this function retreives those items
    // and shows user those items
    search = (e) => {
        const foodItem = e.target.value
        this.setState(() => {
            return {
                items: foodData.items.filter(item => {
                    if (item.name.toLowerCase().includes(foodItem.toLowerCase()))
                        return true
                    return false
                }).map(item => item).slice(0, 4)
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <Search search={this.search} />
                <FoodBox {...this.state} />
            </React.Fragment>
        )
    }
}
