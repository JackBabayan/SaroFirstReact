import React from 'react';
import StepsIcon from './StepsIcon';
import InputComp from './InputComp';
import FormCheckmark from './FormCheckmark';
import StepTitle from './StepTitle';
import DropDown from './DropDown';
import CustSelectBox from './CustomSelect/CustSelectBox';
import Min from '../../../img/min.svg';
import Max from '../../../img//max.svg';

class SecondStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LimitProvided: "",
            time: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            Years:0,
            SelectedNone:0,
            rows: [],
            Email:"",
            telephone1:"",
            telephone2:"",
            allCloneRes:0
        }

      
    }

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value,
            SelectedNone: 0,
        });
        console.log({ [e.target.name]: e.target.value })
    };

    totalCostChange = (idx) => (e) => {

        const { name, value } = e.target;

        const rows = [...this.state.rows];

        rows[idx][name] = value;
        
        this.setState({
          rows
        });

        let res = 0;
        for(let x =0 ;x < rows.length; x++){
            let indexVal = rows[x]["Cost"];
            indexVal = parseInt(indexVal) 
            res+= indexVal
        }

        this.setState({
            allCloneRes:res
        })

    }

    ClonHandleChange = (idx) => (e) => {
        const { name, value } = e.target;

        const rows = [...this.state.rows];

        rows[idx][name] = value;
        
        this.setState({
          rows
        });

    };

    nextStep =(e)=> {
        e.preventDefault();
        this.props.nextStep(true)
    };

    cancel=(e)=> {
        e.preventDefault();
        this.setState({
            LimitProvided:"",
            Years: 0,
            SelectedNone: 1,
            rows: [],
            allCloneRes:0
        });
        this.myFormRef.reset();
        console.log(this.state)
    };
    

    handleAddRow = () => {

          let array = this.state.rows;

          array.push({ id: array.length + 1 , ProductName:"", Cost:0 , Quantity:"" });

          this.setState({ rows: array });

          console.log(this.state.rows)
    };


    handleRemoveSpecificRow = (idx) => () => {
        let someArray = this.state.rows;

        someArray.splice(idx, 1);

        this.setState({ rows: someArray });
        
        let row = this.state.rows
        let res = 0;
        for(let x =0 ;x < row.length; x++){
            let indexVal = row[x]["Cost"];
            indexVal = parseInt(indexVal) 
            res+= indexVal
        }

        this.setState({
            allCloneRes:res
        })
    }


    render() {
        console.log(this.state.rows)

        return (
            <form className="formWrapp" onSubmit={this.onSubmit} ref={(el) => this.myFormRef = el}>
                <div>
                    <StepsIcon
                        activeStep={this.props.activeStep}
                    />

                    <StepTitle
                        StepTitle={"Արդյունք"}
                    />

                    <div className="row">
                        <div className="column small-6">
                            <InputComp
                                otherFormat={"դրամ"}
                                handleChange={this.handleChange}
                                InputTitle={"Տրամադրվող սահմանաչափ "}
                                InputType={"number"}
                                InputName={"LimitProvided"}
                                DefoltVal={this.state.LimitProvided}
                            />
                        </div>

                        <div className="column small-6">
                            <CustSelectBox 
                                nameSel={"Years"}  
                                handleChange={this.handleChange} 
                                AllSelectVal = {this.state.time}
                                SelectedNone = {this.state.SelectedNone}
                                SubInfo = {null} 
                                SelectTitle = {"ժամկետ"} 
                                otherFormat={"դրամ"}
                            />
                        </div>
                        
                        <div className="column small-12">
                            <div className="TotalLoanAmount">
                                <div className="flex-container align-middle align-justify">
                                    <div className="TotalLoanAmountTitle">
                                        Ամսական վճարում
                                    </div>
                                    <div className="TotalLoanAmountRes">
                                        {this.state.LimitProvided} դրամ
                                    </div>
                                </div>
                                <div className="flex-container align-middle align-justify">
                                    <div className="TotalLoanAmountTitle">
                                        Տոկոսադրույք
                                    </div>
                                    <div className="TotalLoanAmountRes">
                                        0%
                                    </div>
                                </div>
                                <div className="flex-container align-middle align-justify">
                                    <div className="TotalLoanAmountTitle">
                                        Տարեկան փաստացի Տոկոսադրույք
                                    </div>
                                    <div className="TotalLoanAmountRes">
                                        23.4%
                                    </div>
                                </div>
                                <div className="flex-container align-middle align-justify">
                                    <div className="TotalLoanAmountTitle">
                                        Ամսական սպասարկում
                                    </div>
                                    <div className="TotalLoanAmountRes">
                                        1% հաշվարկված վարկի ամբողջական գումարից
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column small-12" >
                            {this.state.rows.map((item, idx) => (
                                <ClonedBlock className="row"   key={idx}>
                                    <div className="column small-4">
                                        <InputComp
                                            handleChange={this.ClonHandleChange(idx)}
                                            InputTitle={"Տրամադրվող ապրանքի անվանումը"}
                                            InputType={"text"}
                                            InputName={"ProductName"}
                                            value={this.state.rows[idx].ProductName}
                                        />
                                    </div>
                                    <div className="column small-4">
                                        <InputComp
                                            handleChange={this.totalCostChange(idx)}
                                            InputTitle={"Արժեք"}
                                            InputType={"number"}
                                            InputName={"Cost"}
                                            value={this.state.rows[idx].Cost}
                                        />
                                    </div>
                                    <div className="column small-3">
                                        <InputComp
                                            handleChange={this.ClonHandleChange(idx)}
                                            InputTitle={"Քանակ (հատ)"}
                                            InputType={"nimber"}
                                            InputName={"Quantity"}
                                            value={this.state.rows[idx].Quantity}
                                        />
                                    </div>
                                    <div className="column small-1 flex-container align-middle align-right">
                                        <div className="AddDellBtn  flex-container align-middle align-center" onClick={this.handleRemoveSpecificRow(idx)}>
                                            <img src={Min} alt={Min}/> 
                                        </div>
                                    </div>
                                </ClonedBlock>
                                ))
                                }
                            <div className="ProductCulc">
                                Ընդհանուր գումար - <span>{this.state.allCloneRes}</span> դրամ
                            </div>
                        </div>
                                
                        <div className="column small-12">
                            <div className="AddBtnWrapp flex-container align-middle">
                                <div className="AddDellBtn  flex-container align-middle align-center" onClick={this.handleAddRow}>
                                    <img src={Max} alt={Max}/> 
                                </div>
                                Ավելացնել ապրանք
                            </div>
                        </div>

                        <div className="column small-12">
                            <div className="row">
                                <div className="column small-4">
                                    <InputComp
                                        handleChange={this.handleChange}
                                        InputTitle={"Տրամադրվող ապրանքի անվանումը"}
                                        InputType={"text"}
                                      
                                    />
                                </div>
                                <div className="column small-4">
                                    <InputComp
                                        handleChange={this.handleChange}
                                        InputTitle={"Արժեք"}
                                        InputType={"number"}
                                      
                                    />
                                </div>
                                <div className="column small-4">
                                    <CustSelectBox 
                                        nameSel={"Period"}  
                                        handleChange={this.handleChange} 
                                        AllSelectVal = {this.state.time}
                                        SelectedNone = {this.state.SelectedNone}
                                        SubInfo = {null} 
                                        SelectTitle = {"Ժամկետ (ամիս) *"} 
                                        otherFormat={null}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="column small-12 main information ">

                        </div>

                        <div className="column small-12">
                            <div className="row">
                                <div className="column small-4">
                                    <InputComp
                                         otherFormat={null}
                                        handleChange={this.handleChange}
                                        InputTitle={"Հեռ 1 *"}
                                        InputType={"number"}
                                        InputName={"telephone1"}
                                        DefoltVal={this.state.telephone1}
                                    />
                                </div>
                                <div className="column small-4">
                                    <InputComp
                                         otherFormat={null}
                                        handleChange={this.handleChange}
                                        InputTitle={"Հեռ 2 *"}
                                        InputType={"number"}
                                        InputName={"telephone2"}
                                        DefoltVal={this.state.telephone2}
                                    />
                                </div>
                                <div className="column small-4">
                                    <InputComp
                                         otherFormat={null}
                                        handleChange={this.handleChange}
                                        InputTitle={"Էլ.․հասցե *"}
                                        InputType={"e-mail"}
                                        InputName={"Email"}
                                        DefoltVal={this.state.LimitProvided}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="column small-12">
                            <div className="row">
                                <div className="column small-3">
                                    <FormCheckmark
                                        CheckmarkTitle={"փաստացի բնակչության հասցե"}
                                        CheckmarkItem={[1]}
                                        CheckmarkLeble={["Համընկնում"]}
                                        CheckmarkType={"checkbox"}
                                        CheckmarkName={"Match"}
                                        handleChange={this.handleChange}
                                        CheckmarkValue={["Համընկնում"]}
                                    />
                                </div>
                                <div className="column small-9">
                                    <InputComp
                                        otherFormat={null}
                                        handleChange={this.handleChange}
                                        InputTitle={null}
                                        InputType={"text"}
                                        InputName={"MatchText"}
                                        DefoltVal={this.state.LimitProvided}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="column small-12">
                            <DropDown/>
                        </div>

                        <div className="column small-12">
                            <div className="flex-container align-justify">
                                <button type="button" className="btn cancel" onClick={this.cancel}>
                                    չեղարկել
                                </button>
                                
                                <button type="button" className="btn orange" onClick={this.nextStep}>
                                    չեղարկել
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        )
    }
}

class ClonedBlock extends React.Component{
    render(){
        return(
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}


export default SecondStep;

