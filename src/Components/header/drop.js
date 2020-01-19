import React from 'react';
import '../../allStyle/header.scss';


class Dropp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activDrop:"partner-drop-wrapp",
            menu:["«Ասուս» ՍՊԸ","«Ասուս» ՍՊԸ","«Ասուս» ՍՊԸ","«Ասուս»ՍՊԸ"],
            DropDownState:false,
        }
    }


    DropDown=(e)=>{
        e.preventDefault();
        let act = this.state.DropDownState;
        if(act === false){
            this.setState({
                activDrop:"partner-drop-wrapp active",
                DropDownState:true,
            })
        }
        else{
            this.setState({
                activDrop:"partner-drop-wrapp",
                DropDownState:false,
            })
        }
    };


    render(){

        let Dropp;
        if(this.state.DropDownState){
            Dropp =<DropDown menu={this.state.menu}/>
        }
        return(
            <div className={this.state.activDrop}>
                <div className="partner-select-res" onClick={this.DropDown}>
                    {this.state.menu[0]}
                </div>
                {Dropp}
            </div>
        )
    }
}


class DropDown extends React.Component{
    render(){
        return(
            <div className="partner-drop-down">
                {this.props.menu.map(function(x,y){ // funkciya "map" prinimaet "function" v kachestve argymenta a on yje prinimaet 3 argymenta - 1) value 2)index 3)arrey mojno bilo napisat i lineynyu funcciu(arrrew function - map((value,index ,arrey)=>))
                return(
                    <div key={y}>
                        <a href={"/" + x.trim().replace(" ","-")}>
                            {x}
                        </a>
                    </div>
                )
                })}
            </div>
        )
    }
}



export default Dropp;