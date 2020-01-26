import React from 'react';
import "./form.style.css";

const Form = props =>{
    return(
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadweather}>
            <div className="row">
                <div className="col-md3 offset-md-2">
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="city"/>
                </div>
                <div className="col-md3">
                    <input type="text" className="form-control" name="country" autoComplete="off" placeholder="country"/>
                </div>
                <div className="col-md3 mt-md-0 text-md-left">
                    <button className="btn-warning">Get weather</button>
                </div>
            </div>
            </form>
        </div>
    )
}

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">Por favor, digite a cidade e o país</div>
    );
}
export default Form;