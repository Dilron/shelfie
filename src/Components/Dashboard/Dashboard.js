import React, {Component} from 'react'
import Product from '../Product/Product'
import './Dashboard.css'

export default class Dashboard extends Component {
    render (){
        return (
            <div className='dashboard-container'>
                {this.props.inventory.map((ele) => {
                    return <Product
                    key={ele.id}
                    item={ele}
                    removeItem={this.props.removeItem}
                    beginEdit={this.props.beginEdit}/>
                })}
            </div>
        )
    }
}