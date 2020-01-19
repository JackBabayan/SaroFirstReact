import React from 'react';




const  CustSelectBox = props =>{

    const List = props.AllSelectVal;

    function DropDown(e) {

        e.currentTarget.classList.toggle("active");
        e.currentTarget.nextSibling.classList.toggle("select-hide");
    }


    function SelectDiv(e) {
        let l = e.currentTarget.textContent
        e.currentTarget.parentNode.previousElementSibling.innerHTML = l ;
        e.currentTarget.parentNode.previousElementSibling.classList.toggle("active");
        e.currentTarget.parentNode.classList.toggle("select-hide");
        props.handleChange({target:{name:props.nameSel,value:l}});
    }

    if(props.SelectedNone == 1){
        document.getElementById(props.nameSel).innerHTML =  List[0];
    }
    let otherFormatInfo;
    let SubTitle;

    if(props.otherFormat !== null){
        otherFormatInfo =  <div className="otherFormatVal">{props.otherFormat}</div>
    }

    if(props.SubTitle !== null){
        SubTitle =  <div className="formItemSubTitle"><span>{props.SubInfo}</span></div>
    }
 
        return(
            <div>
                <div className="formItem">
                    <label> {props.SelectTitle} </label>
                    <div className="inputWrapp custom-select flex-container align-middle">
                        
                        <div id={props.nameSel} className = "select-selected" onClick={DropDown}>{List[0]}</div>
                        <div className = "select-items select-hide">
                            {List.map( (x,y) => {
                                return(
                                    <div  key={y.toString()} onClick={SelectDiv}> 
                                        {x}
                                    </div>
                                )
                            })}
                        </div>
                        {otherFormatInfo}

                    </div>
                    {SubTitle}
                </div>
            </div>
        
        )

    }

    

export default CustSelectBox;