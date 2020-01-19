


import React from 'react';

class StepTitle extends React.Component {
    render(){
        return(
            <div className="formTop textCenter">
                <h1>
                    {this.props.StepTitle}
                </h1>
                <div className="subTitle">
                   {this.props.StepSubTitle}<span>{this.props.SubTitleBold}</span>
                </div>
            </div>
        )
    }
}

export default StepTitle;