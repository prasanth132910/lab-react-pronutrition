import React, { Component } from 'react'
import Calories from './Calories'
import FoodItem from './FoodItem'


export default class FoodBox extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {}
        this.deleteItem = this.deleteItem.bind(this)
    }

    getValue = (e) => {
        const count = parseInt(document.querySelector(`.${e.target.name}`).value)
        if (count) {
            const cal = parseInt(document.querySelector(`#${e.target.name}`).innerHTML)
            this.setState({ [e.target.name]: [count, count * cal] })
        }
    }

    deleteItem(e) {
        let name = e.target.name
        this.setState(prevState => {
            delete prevState[name]
            return { ...prevState }
        })

    }

    getCalories = () => {
        let calorieItems = []
        let count = 1
        for (let item in this.state) {

            const calItem = {
                name: item,
                count: this.state[item][0],
                calories: this.state[item][1]
            }
            calorieItems.push(<Calories key={count++} {...calItem} delete={this.deleteItem} />
            )
        }

        return calorieItems
    }

    getTotalCaloriesCount = () => {

        let count = 0
        for (let item in this.state) {

            count = count + this.state[item][1]
        }

        return count
    }

    render() {
        let calorieItems = []
        let totalCalories = "0"

        if (this.state) {
            calorieItems = this.getCalories()
            totalCalories = this.getTotalCaloriesCount()
        }

        return (
            <div className="food-container" >
                <div className="box">
                    {this.props.items.map(item => <FoodItem key={item.id} item={item} getValue={this.getValue} />)}
                </div>

                <div className="calories">
                    <p className="total-calories" style={{ marginLeft: "50px", marginBottom: "20px" }}>
                        Today's Food {totalCalories} cal
                    </p>
                    {calorieItems}
                </div>
            </div>
        )
    }
}

