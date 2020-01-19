import React from 'react';
import CustSelectBox from './CustomSelect/CustSelectBox';
import StepsIcon from './StepsIcon';
import FormCheckmark from './FormCheckmark';
import InputComp from './InputComp';
import StepTitle from './StepTitle';

class FirstStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            IdentificationDocument:"",
            SeriesNumber: "",
            PublicServiceNumber: "",
            Credit:"",
            AllSelectVal:["Կանանց միամսյակին նվիրված","«Ասուս» ՍՊԸ1","«Ասուս» ՍՊԸ2","«Ասուս»ՍՊԸ3"],
            signature:[false,"btn undefinefed"],
            SelectedNone:0,
        };
    }

    nextStep =(e)=> {
        if(e) e.preventDefault();

        if(this.state.SeriesNumber.length !== 0){
            this.props.nextStep(true)
        }
        else{
            alert("заполни обязательные поля ввода")
        }
    };
    
    cancel=(e)=> {
        e.preventDefault();
        this.myFormRef.reset();
        this.setState({
            IdentificationDocument:"",
            SeriesNumber: "",
            PublicServiceNumber: "",
            Credit:"",
            SelectedNone: 1,
            signature:[false,"btn undefinefed"],
        });
        console.log(this.state)
    };



    handleChange=(e)=>{
        this.setState({ 
            [e.target.name]: e.target.value ,
            SelectedNone: 0,
        });
        console.log({[e.target.name]: e.target.value })
    };

    signatureChange=(e)=>{
        let signaturePosition=this.state.signature[0];
        if( signaturePosition){
            this.setState({ 
                signature:[false,"btn undefinefed"],
            });
            console.log(this.state.signature+"1")
        }
        else{
            this.setState({ 
                signature:[true,"btn orange"],
            });
            console.log(this.state.signature+"2")
        }
    }



    render(){


        return(
            <form className="formWrapp" onSubmit={this.onSubmit} ref={(el) => this.myFormRef = el}>
                <div>
                    <StepsIcon activeStep={this.props.activeStep}/>
                    <StepTitle  StepTitle={" Վարկի դիմում"} StepSubTitle={"* նշանը ունեցող դաշտերը ենթակա են "} SubTitleBold={"պարտադիր լրացման"}/>
                    <FormCheckmark
                        CheckmarkTitle={"1. ԱՆձը հաստատող փաստաթուղթ"}
                        CheckmarkItem={[1,2]}
                        CheckmarkLeble={["Անձնագիր","Նույնականացման քարտ"]}
                        CheckmarkType={"radio"}
                        CheckmarkName={"IdentificationDocument"}
                        handleChange={this.handleChange}
                        CheckmarkValue={["Անձնագիր","Նույնականացման քարտ"]}
                    />
                    
                    <InputComp 
                        handleChange = {this.handleChange} 
                        InputTitle = {"2. Սերիան և համարը *"} 
                        InputType={"number"} 
                        InputName={"SeriesNumber"}  
                        DefoltVal={this.state.SeriesNumber }
                    />
                    
                    <InputComp 
                        handleChange = {this.handleChange} 
                        InputTitle = {"3. Հանրային ծառայությունների համարանիշ"} 
                        InputType={"number"} InputName={"PublicServiceNumber"}  
                        DefoltVal={this.state.PublicServiceNumber }
                    />

                    <CustSelectBox 
                        nameSel={"Credit"}  
                        handleChange={this.handleChange} 
                        AllSelectVal = {this.state.AllSelectVal}
                        SubInfo = {" Տոկոսադրույք -0% \n Ամսական սպասարկում -1% հաշվարկված վարկի ամբողջական գումարից"} 
                        SelectTitle = {"4. Վարկատեսակ"} 
                        otherFormat={"դրամ"}
                        SelectedNone = {this.state.SelectedNone}
                    />
                   
                
                    <div className="flex-container align-justify">
                        <button type="button" className="btn cancel" onClick={this.cancel}>
                            չեղարկել
                        </button>
                        <div className="flex-container align-right align-middle"> 
                            <FormCheckmark
                                CheckmarkTitle={""}
                                CheckmarkItem={[1]}
                                CheckmarkLeble={[" Ստորագրել են "]}
                                CheckmarkType={"checkbox"}
                                CheckmarkName={"signature"}
                                handleChange={this.signatureChange}
                                CheckmarkValue={["signature"]}
                            />

                            <button type="button"  className={this.state.signature[1]} onClick={this.nextStep}>
                                ՇԱՐՈՒՆԱԿԵԼ
                            </button>

                        </div>
                       
                    </div>
                </div>
            </form>
        )
    }
}



export default FirstStep;