import React from 'react';

class InputComp extends React.Component {
    render(){
        return(
            <div className="formItem">
                <label>
                   {this.props.InputTitle}
                </label>
                <div className="inputWrapp flex-container align-middle">
                    <input 
                        type={this.props.InputType} 
                        name={this.props.InputName} 
                        onChange={this.props.handleChange}  
                        defaultValue={this.props.DefoltVal}
                        value={this.props.value}
                    />
                    <span className="otherFormatVal">
                        {this.props.otherFormat}
                    </span>
                </div>
            </div>
        )
    }
}

export default InputComp;