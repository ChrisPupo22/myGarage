import React, { Component } from 'react'; 

class CarForm extends Component{
    render() {
        return(
            <form className="form-group row ">
            <label htmlFor="make" className="col-sm-2">Make</label>
            <div className="col-sm-10">
                <input type="text" className="form-control-plaintext bg-info"/>
            </div>
        </form>
        )
    }
}

export default CarForm; 