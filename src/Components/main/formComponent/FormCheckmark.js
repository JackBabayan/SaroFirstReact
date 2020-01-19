import React from 'react';

class FormCheckmark extends React.Component {
    render(){
        return(
            <div className="formCheck">
                <label>
                    {this.props.CheckmarkTitle}
                </label>
                <div>
                    {this.props.CheckmarkItem.map( (x,y) => {
                        
                            if(x==0){
                                return(
                                    <div className="form-check" key={y}> 
                                        {this.props.CheckmarkLeble[y]}

                                        <input defaultChecked
                                            type={this.props.CheckmarkType}      
                                            value={this.props.CheckmarkValue[y]}   
                                            name={this.props.CheckmarkName}      
                                            onChange={this.props.handleChange} 
                                        />
                                        <span className="checkmark"></span>
                                        { console.log(y)}
                                    </div>
                                )
                            }else{
                                return(
                                    <div className="form-check" key={y}>
                                        {this.props.CheckmarkLeble[y]}                
                                        <input 
                                            type={this.props.CheckmarkType}      
                                            value={this.props.CheckmarkValue[y]}     
                                            name={this.props.CheckmarkName}      
                                            onChange={this.props.handleChange} 
                                        />
                                        <span className="checkmark"></span>
                                    </div>
                                )
                            
                        }
                    })
                    }
                </div>
            </div>
        )
    }
}


export default FormCheckmark;