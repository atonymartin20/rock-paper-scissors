import React from 'react';
import { BasicOutsideDiv } from '../styledComponents/basic.js';
import ScoreSection from './scoreSection.js';
import Step0 from './step0.js';
import Step1 from './step1.js';
import BottomSection from '../rules/bottomSection.js';

class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userChoiceMade: false,
            userChoseRock: false,
            userChosePaper: false,
            userChoseScissors: false,
            computerChoiceMade: false,
            computerChoseRock: false,
            computerChosePaper: false,
            computerChoseScissors: false,
        }
        console.log(props)
    }

    userChoosesRock = () => {
        this.setState({
            userChoiceMade: !this.state.userChoiceMade,
            userChoseRock: true,
        })
        console.log('rock')
    }

    userChoosesPaper = () => {
        this.setState({
            userChoiceMade: !this.state.userChoiceMade,
            userChosePaper: true,
        })
        console.log('paper')
    }

    userChoosesScissors = () => {
        this.setState({
            userChoiceMade: !this.state.userChoiceMade,
            userChoseScissors: true,
        })
        console.log('scissors')
    }

    render() {
        if(this.state.choicePicked === false) {
            return (
                <BasicOutsideDiv>
                    <ScoreSection score={this.props.score} />
                    <Step0 userChoiceMade={this.state.userChoiceMade} userChoseRock={this.state.userChoseRock} userChosePaper={this.state.userChosePaper} userChoseScissors={this.state.userChoseScissors} userChoosesRock={this.userChoosesRock} userChoosesPaper={this.userChoosesPaper} userChoosesScissors={this.userChoosesScissors} />
                    <BottomSection showBasic={this.props.showBasic} showAdvanced={this.props.showAdvanced} switchMode={this.props.switchMode} />
                </BasicOutsideDiv>
            )
        }
        else if(this.state.computerChoiceMade === false) {
            return (
                <BasicOutsideDiv>
                    <ScoreSection score={this.props.score} />
                    <Step1 userChoiceMade={this.state.userChoiceMade} userChoseRock={this.state.userChoseRock} userChosePaper={this.state.userChosePaper} userChoseScissors={this.state.userChoseScissors} userChoosesRock={this.userChoosesRock} userChoosesPaper={this.userChoosesPaper} userChoosesScissors={this.userChoosesScissors}/>
                    <BottomSection showBasic={this.props.showBasic} showAdvanced={this.props.showAdvanced} switchMode={this.props.switchMode} />
                </BasicOutsideDiv>
            )
        }

        else {
            
        }

    }
}

export default Basic;