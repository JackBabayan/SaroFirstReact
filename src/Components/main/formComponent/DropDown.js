
import React from 'react';



class DropDown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activDropWrap:"CustomerInformationWrapp",
            DropDownState:false,
        }
    }

    DropDown=(e)=>{
        let act = this.state.DropDownState;
        if(act === false){
            this.setState({
                activDropWrap:"CustomerInformationWrapp active",
                DropDownState:true,
            })
        }
        else{
            this.setState({
                activDropWrap:"CustomerInformationWrapp",
                DropDownState:false,
            })
        }
    };

    render(){

        let DropBlock;
        if(this.state.DropDownState){
            DropBlock =<Drop/>
        }
        return(
            <div className={this.state.activDropWrap}>
                <div className="CustomerInformationTitle"  onClick={this.DropDown}>
                    Հաճախորդի տվյալները                   
                </div>
                {DropBlock}                               
            </div>
        )
    }
}



class Drop extends React.Component{
    render(){
        return(
            <div className="CustomerInformationDropp">
                <div className="CustomerInformationItem flex-container align-justify">
                    <div>
                        Անուն
                    </div>
                    <div>
                        Արմեն
                    </div>               
                </div>  
                <div className="CustomerInformationItem flex-container align-justify">
                    <div>
                        Ազգանուն
                    </div>
                    <div>
                        Մուրադյան
                    </div>               
                </div>  
                <div className="CustomerInformationItem flex-container align-justify">
                    <div>
                        Հայրանուն
                    </div>
                    <div>
                        Արթուրի
                    </div>               
                </div>  
                <div className="CustomerInformationItem flex-container align-justify">
                    <div>
                        Անձը հաստատող փաստաթուղթ
                    </div>
                    <div>
                        AS0357787
                    </div>               
                </div>  
                <div className="CustomerInformationItem flex-container align-justify">
                    <div>
                        Հանրային ծառայությունների համարանիշ
                    </div>
                    <div>
                        7505560425
                    </div>               
                </div>  
                <div className="CustomerInformationItem flex-container align-justify">
                    <div>
                        Գրանցման հասցե
                    </div>
                    <div>
                        Երևան Արաբկիր Փափազյան փ. 12 շ 20
                    </div>               
                </div>                           
            </div>
        )
    }
}


export default DropDown;
