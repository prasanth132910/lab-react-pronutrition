import React from 'react'

export default function FoodItem(props) {
    return (
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    {/* Image Url of item */}
                    <img src={props.item.image} alt="" className="foodImage" />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                        {/* Food Name and its calories */}
                        <strong>{props.item.name}</strong> <br />
                        <small><span id={props.item.name}>{props.item.cal}</span> cal</small>
                    </p>
                </div>
            </div>
            <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                        {/* Input for choosing numerical value */}
                        <input className={props.item.name} type="number" min="1" />
                    </div>
                    <div className="control" onClick={props.getValue} name={props.item.name}>
                        <button className="button is-info" name={props.item.name}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}
