import React from 'react';
import FirstStep from './formComponent/FirstStep';
import SecondStep from './formComponent/SecondStep';
import PDF from './formComponent/PDF';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            formRez:{},
            redirectToReferrer: false,
        }
    }

    // Proceed to next step
    nextStep = (e) => {
        let step = this.state.step;
        this.setState({
            step: step + 1,
        });
        this.props.logState(true);
    };



    render() {

        const step = this.state.step;

        switch (step) {
            case 0:
                return (
                    <FirstStep
                        activeStep={this.state.step}
                        nextStep={this.nextStep}
                    />
                );
            case 1:
                return (
                    <SecondStep 
                        activeStep={this.state.step}
                        nextStep={this.nextStep} 
                    />
                );
            case 2:
                return (
                    <PDF 
                     activeStep={this.state.step}
                     nextStep={this.nextStep} 
                     />
                );
        }

    }
}

export default Main;