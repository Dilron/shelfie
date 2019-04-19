import React, {Component} from 'react'
import './Form.css'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: '',
            imgurl: '',
            price: 0,
            placeholder: true,
            editStatus: false,
            editId: 0
        }
    }

    componentDidUpdate(){
        if(this.props.editTarget){
            this.setState({product: this.props.editTarget.name,
                imgurl: this.props.editTarget.img, 
                price: this.props.editTarget.price, 
                editStatus: true, 
                placeholder: false,
                editId: this.props.editTarget.id })
            this.props.endEdit()
        }
    }

    handleImageUrl = (val) => {
        this.setState({imgurl: val})
        var img = new Image();
        img.src = val;
        img.onload = () => this.setState({placeholder: false})
        img.onerror = () => this.setState({placeholder: true})
    }

    handleProduct = (val) => {
        this.setState({product: val})
    }

    handlePrice = (val) => {
        this.setState({price: val})
    }

    handleAdd = () => {
        let newItem = {
            name: this.state.product,
            price: this.state.price,
            img: this.state.imgurl
        }
        this.props.addItem(newItem)
        this.resetFields()
    }

    handleUpdate = () => {
        let newItem = {
            id: this.state.editId,
            name: this.state.product,
            price: this.state.price,
            img: this.state.imgurl
        }
        this.props.updateItem(newItem)
        this.resetFields()
    }

    resetFields = () => {
        this.setState({product: '', price: 0, imgurl: '', placeholder: true})
    }

    render (){
        return (
            <div className='form-container'>
                {this.state.placeholder
                ?
                <img src='https://i.imgur.com/Bty2U3l.png' className='form-image'/>
                :
                <img src={this.state.imgurl} className='form-image' />
                }
                <div className='input-container'>
                    <h1 className='form-element'>Image URL:</h1>
                    <input className='form-element' value={this.state.imgurl} onChange={(e) => this.handleImageUrl(e.target.value)}></input>
                    <h1 className='form-element'>Product</h1>
                    <input className='form-element' value={this.state.product} onChange={(e) => this.handleProduct(e.target.value)}></input>
                    <h1 className='form-element'>Price</h1>
                    <input className='form-element' value={this.state.price} type='number' onChange={(e) => this.handlePrice(e.target.value)}></input>
                </div>
                <div className='form-button-container'>
                    <button onClick={() => this.resetFields()}>Cancel</button>
                    {this.state.editStatus?
                    <button onClick={() => this.handleUpdate()}>Update</button>
                    :
                    <button onClick={() => this.handleAdd()}>Add to Inventory</button>
                    }
                </div>
            </div>
        )
    }
}