import React from 'react';
import { BasicOutsideDiv } from '../styledComponents/basic.js';
import ScoreSection from './scoreSection.js';
import Step0 from './step0.js';
import Step1 from './step1.js';
import Step2 from './step2.js';
import Step3 from './step3.js';
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
            showResult: false,
            gameResult: '',
        }
    }

    userChoosesRock = () => {
        this.setState({
            userChoiceMade: !this.state.userChoiceMade,
            userChoseRock: true,
        })
        setTimeout(this.computerChooses, 2000);
    }

    userChoosesPaper = () => {
        this.setState({
            userChoiceMade: !this.state.userChoiceMade,
            userChosePaper: true,
        })
        setTimeout(this.computerChooses, 2000);

    }

    userChoosesScissors = () => {
        this.setState({
            userChoiceMade: !this.state.userChoiceMade,
            userChoseScissors: true,
        })
        setTimeout(this.computerChooses, 2000);
    }

    computerChooses = () => {
        let random = Math.random();
        if(random <= .333) {
            this.setState({
                computerChoiceMade: true,
                computerChoseRock: true,
            })
        }

        else if(random > .333 && random < .667) {
            this.setState({
                computerChoiceMade: true,
                computerChosePaper: true,
            })
        }

        else {
            this.setState({
                computerChoiceMade: true,
                computerChoseScissors: true,
            })
        }
        setTimeout(this.checkResult, 2000);
    }

    checkResult = () => {
        if(this.state.userChoseRock === true) {
            if(this.state.computerChoseRock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'draw'
                })
            }

            else if(this.state.computerChosePaper === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'loss'
                })
                this.props.basicLoss();
            }

            else {
                this.setState({
                    showResult: true,
                    gameResult: 'win'
                })
                this.props.basicWin();
            }
        }

        else if(this.state.userChosePaper === true) {
            if(this.state.computerChoseRock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'win'
                })
                this.props.basicWin();
            }

            else if(this.state.computerChosePaper === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'draw'
                })
            }

            else {
                this.setState({
                    showResult: true,
                    gameResult: 'loss'
                })
                this.props.basicLoss();
            }
        }

        else if(this.state.userChoseScissors === true) {
            if(this.state.computerChoseRock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'loss'
                })
                this.props.basicLoss();
            }

            else if(this.state.computerChosePaper === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'win'
                })
                this.props.basicWin();
            }

            else {
                this.setState({
                    showResult: true,
                    gameResult: 'draw'
                })
            }
        }

        else {
            console.log('The process failed somewhere.')
        }
    }

    playAgain = () => {
        this.setState({
            userChoiceMade: false,
            userChoseRock: false,
            userChosePaper: false,
            userChoseScissors: false,
            computerChoiceMade: false,
            computerChoseRock: false,
            computerChosePaper: false,
            computerChoseScissors: false,
            showResult: false,
            gameResult: '',
        })
    }

    render() {
        if(this.state.userChoiceMade === false) {
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

        else if(this.state.computerChoiceMade === true && this.state.showResult === false) {
            return (
                <BasicOutsideDiv>
                    <ScoreSection score={this.props.score} />
                    <Step2 userChoiceMade={this.state.userChoiceMade} userChoseRock={this.state.userChoseRock} userChosePaper={this.state.userChosePaper} userChoseScissors={this.state.userChoseScissors} userChoosesRock={this.userChoosesRock} userChoosesPaper={this.userChoosesPaper} userChoosesScissors={this.userChoosesScissors} computerChoseRock={this.state.computerChoseRock} computerChosePaper={this.state.computerChosePaper} computerChoseScissors={this.state.computerChoseScissors} />
                    <BottomSection showBasic={this.props.showBasic} showAdvanced={this.props.showAdvanced} switchMode={this.props.switchMode} />
                </BasicOutsideDiv>
            )
        }

        else {
            return (
                <BasicOutsideDiv>
                    <ScoreSection score={this.props.score} />
                    <Step3 userChoiceMade={this.state.userChoiceMade} userChoseRock={this.state.userChoseRock} userChosePaper={this.state.userChosePaper} userChoseScissors={this.state.userChoseScissors} userChoosesRock={this.userChoosesRock} userChoosesPaper={this.userChoosesPaper} userChoosesScissors={this.userChoosesScissors} computerChoseRock={this.state.computerChoseRock} computerChosePaper={this.state.computerChosePaper} computerChoseScissors={this.state.computerChoseScissors} gameResult={this.state.gameResult} playAgain={this.playAgain} />
                    <BottomSection showBasic={this.props.showBasic} showAdvanced={this.props.showAdvanced} switchMode={this.props.switchMode} />
                </BasicOutsideDiv>
            )
        }

    }
}

export default Basic;