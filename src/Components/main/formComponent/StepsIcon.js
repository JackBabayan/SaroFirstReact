import React from 'react';


class StepsIcon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quantity:3
            }
    }
    render(){
        let itemNumber =[];
        for(let i=1;i<=this.state.quantity;i++){
            if(this.props.activeStep > i){
                itemNumber.push(<StepQuantity key ={i} res={''} activClass={"quantityStepsItem LastStep"}/>)
            }
            else if(this.props.activeStep === i ){
                itemNumber.push(<StepQuantity key ={i} res={i} activClass={"quantityStepsItem active"}/>)
            }
            else{
                itemNumber.push(<StepQuantity key ={i} res={i} activClass={"quantityStepsItem"}/>)
            }
        }
        return(
            <div className="StapIconWrapp">
              {itemNumber}
            </div>
        )
    }
}

class StepQuantity extends React.Component{
    render(){
        return(
            <div className={this.props.activClass}>
                {this.props.res}
            </div>
        )
        
    }
}

export default StepsIcon; 
