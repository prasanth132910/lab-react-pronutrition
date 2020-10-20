import React, { Component } from 'react'
import Calories from './Calories'
import FoodItem from './FoodItem'


export default class FoodBox extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        // state holds all the ietms selected by user
        this.state = {}
        this.deleteItem = this.deleteItem.bind(this)
    }


    //when user clicks on add button beside the fooditem 
    // then this functions identifies that item and add that item to state
    getValue = (e) => {
        const count = parseInt(document.querySelector(`.${e.target.name}`).value)
        if (count) {
            const cal = parseInt(document.querySelector(`#${e.target.name}`).innerHTML)
            this.setState({ [e.target.name]: [count, count * cal] })
        }
    }

    // when use click on cross button it deletes the item from state
    deleteItem(e) {
        let name = e.target.name
        this.setState(prevState => {
            delete prevState[name]
            return { ...prevState }
        })

    }

    // function renders the item and its caloris by grabbing the items from state
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

    // on the basis of items selected by user function calculates the total calories
    // by calculation sum of all selected items
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
            /*
            * box -> renders top 4 list of items for user to select
            * calories -> renders the item and its calories by grabbing state
            *              which holds all the itesm selected by user 
            */
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

