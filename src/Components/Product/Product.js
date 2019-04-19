import React, {Component} from 'react'
import './Product.css'

export default class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            placeholder: true
        }
    }

    componentDidMount(){
        let val = this.props.item.img
        let img = new Image();
        img.src = val;
        img.onload = () => this.setState({placeholder: false})
        img.onerror = () => this.setState({placeholder: true})
    }

    render (){
        return (
            <div className='product-container'>
                {this.state.placeholder ?
                <img className='product-image' 
                src='https://i.imgur.com/Bty2U3l.png' 
                alt='no image provided' />
                :
                <img className='product-image' 
                src={this.props.item.img} 
                alt={`${this.props.item.name}`} />
                }
                <div className='product-info'>
                    <span>{this.props.item.name} <br/>${this.props.item.price}</span>
                    <div className='product-button-container'>
                        <button onClick={() => this.props.removeItem(this.props.item.id)}>Delete</button>
                        <button>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}