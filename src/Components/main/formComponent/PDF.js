import React from 'react';
import StepsIcon from './StepsIcon';
import StepTitle from './StepTitle';
import PdfIcon from '../../../img/PdfIcon.svg';
import DownloadFileIcon from '../../../img/DownloadFileIcon.svg'
import DownloadFileIcon2 from '../../../img/DownloadFileIcon2.svg';

export class PDF extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            AllPdf:"",
            arr:["Ամբողջական","Անհատական թերթիկ","Ապրանքի ապառիկ վաճառքի պայմանագիր","Հանրային ծառայությունների համարանիշ","Հանրային ծառայությունների համարանիշ","Հանրային ծառայությունների համարանիշ"]
        }
    }

  continue =(e) => {
      this.props.nextStep();
  };

  render() {
    return (
        <div>
            <StepsIcon
                activeStep={this.props.activeStep}
            />

            <StepTitle
                StepTitle={"Պայմանագրեր"}
            />

            <div className="row PdfCont align-center">
                <div className="column small-8">
                    <a  href={this.state.AllPdf} className="DownloadAll"  download>
                        <img src={DownloadFileIcon2} alt="DownloadFileIcon2"/>
                        բեռնել Բոլորը
                    </a>
                </div>
                    {this.state.arr.map((item, idx) => (
                        <div className="column small-8"  key={idx}>
                            <a href={item}  className="PdfWrapp flex-container align-middle align-justify" download>
                                <div className="">
                                    <img src={PdfIcon} alt={PdfIcon}/> {idx+1}.{item}
                                </div>
                                <div className="">
                                    <img src={DownloadFileIcon} alt={DownloadFileIcon}/>
                                </div>
                            </a>
                        </div>
                        ))
                    }
            </div>
        </div>
    );
  }
}



export default PDF;
