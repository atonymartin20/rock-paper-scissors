import React from 'react';
import { AdvancedOutsideDiv } from '../styledComponents/advanced.js';
import ScoreSection from './scoreSection.js';
import Step0 from './step0.js';
import Step1 from './step1.js';
import Step2 from './step2.js';
import Step3 from './step3.js';
import BottomSection from '../rules/bottomSection.js';

class Advanced extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userChoiceMade: false,
            userChoseRock: false,
            userChosePaper: false,
            userChoseScissors: false,
            userChoseSpock: false,
            userChoseLizard: false,
            computerChoiceMade: false,
            computerChoseRock: false,
            computerChosePaper: false,
            computerChoseScissors: false,
            computerChoseSpock: false,
            computerChoseLizard: false,
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

    userChoosesSpock = () => {
        this.setState({
            userChoiceMade: !this.state.userChoiceMade,
            userChoseSpock: true,
        })
        setTimeout(this.computerChooses, 2000);
    }

    userChoosesLizard = () => {
        this.setState({
            userChoiceMade: !this.state.userChoiceMade,
            userChoseLizard: true,
        })
        setTimeout(this.computerChooses, 2000);
    }

    computerChooses = () => {
        let random = Math.random();
        if(random <= .20) {
            this.setState({
                computerChoiceMade: true,
                computerChoseRock: true,
            })
        }

        else if(random > .20 && random <= .40) {
            this.setState({
                computerChoiceMade: true,
                computerChosePaper: true,
            })
        }

        else if(random > .40 && random <= .60) {
            this.setState({
                computerChoiceMade: true,
                computerChoseScissors: true,
            })
        }

        else if(random > .60 && random <= .80) {
            this.setState({
                computerChoiceMade: true,
                computerChoseSpock: true,
            })
        }

        else {
            this.setState({
                computerChoiceMade: true,
                computerChoseLizard: true,
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
                this.props.advancedLoss();
            }

            else if(this.state.computerChoseScissors === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'win'
                })
                this.props.advancedWin();
            }

            else if(this.state.computerChoseSpock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'loss',
                })
                this.props.advancedLoss();
            }

            else {
                this.setState({
                    showResult: true,
                    gameResult: 'win',
                })
                this.props.advancedWin();
            }
        }

        else if(this.state.userChosePaper === true) {
            if(this.state.computerChoseRock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'win'
                })
                this.props.advancedWin();
            }

            else if(this.state.computerChosePaper === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'draw'
                })
            }

            else if(this.state.computerChoseScissors === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'loss'
                })
                this.props.advancedLoss();
            }

            else if(this.state.computerChoseSpock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'win',
                })
                this.props.advancedWin();
            }

            else {
                this.setState({
                    showResult: true,
                    gameResult: 'loss',
                })
                this.props.advancedLoss(); 
            }
        }

        else if(this.state.userChoseScissors === true) {
            if(this.state.computerChoseRock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'loss'
                })
                this.props.advancedLoss();
            }

            else if(this.state.computerChosePaper === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'win'
                })
                this.props.advancedWin();
            }

            else if(this.state.computerChoseScissors === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'draw'
                })
            }

            else if(this.state.computerChoseSpock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'loss',
                })
                this.props.advancedLoss();
            }

            else {
                this.setState({
                    showResult: true,
                    gameResult: 'win',
                })
                this.props.advancedWin();
            }
        }

        else if(this.state.userChoseSpock === true) {
            if(this.state.computerChoseRock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'win',
                })
                this.props.advancedWin();
            }

            else if(this.state.computerChosePaper === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'loss',
                })
                this.props.advancedLoss();
            }

            else if(this.state.computerChoseScissors === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'win',
                })
                this.props.advancedWin();
            }

            else if(this.state.computerChoseSpock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'draw'
                })
            }

            else {
                this.setState({
                    showResult: true,
                    gameResult: 'loss',
                })
                this.props.advancedLoss(); 
            }
        }

        else {
            if(this.state.computerChoseRock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'loss',
                })
                this.props.advancedLoss();
            }

            else if(this.state.computerChosePaper === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'win',
                })
                this.props.advancedWin();
            }

            else if(this.state.computerChoseScissors === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'loss',
                })
                this.props.advancedLoss();
            }

            else if(this.state.computerChoseSpock === true) {
                this.setState({
                    showResult: true,
                    gameResult: 'win',
                })
                this.props.advancedWin();
            }

            else {
                this.setState({
                    showResult: true,
                    gameResult: 'draw'
                })
            }
        }
    }

    playAgain = () => {
        this.setState({
            userChoiceMade: false,
            userChoseRock: false,
            userChosePaper: false,
            userChoseScissors: false,
            userChoseSpock: false,
            userChoseLizard: false,
            computerChoiceMade: false,
            computerChoseRock: false,
            computerChosePaper: false,
            computerChoseScissors: false,
            computerChoseSpock: false,
            computerChoseLizard: false,
            showResult: false,
            gameResult: '',
        })
    }

    render() {
        if(this.state.userChoiceMade === false) {
            return (
                <AdvancedOutsideDiv>
                    <ScoreSection score={this.props.score} />
                    <Step0 userChoiceMade={this.state.userChoiceMade} userChoseRock={this.state.userChoseRock} userChosePaper={this.state.userChosePaper} userChoseScissors={this.state.userChoseScissors} userChoseSpock={this.state.userChoseSpock} userChoseLizard={this.state.userChoseLizard} userChoosesRock={this.userChoosesRock} userChoosesPaper={this.userChoosesPaper} userChoosesScissors={this.userChoosesScissors} userChoosesSpock={this.userChoosesSpock} userChoosesLizard={this.userChoosesLizard} />
                    <BottomSection showBasic={this.props.showBasic} showAdvanced={this.props.showAdvanced} switchMode={this.props.switchMode} showBasicRules={this.props.showBasicRules} showAdvancedRules={this.props.showAdvancedRules} showBasicRulesModal={this.props.showBasicRulesModal} showAdvancedRulesModal={this.props.showAdvancedRulesModal} closeRules={this.props.closeRules}/>
                </AdvancedOutsideDiv>
            )
        }
        else if(this.state.computerChoiceMade === false) {
            return (
                <AdvancedOutsideDiv>
                    <ScoreSection score={this.props.score} />
                    <Step1 userChoiceMade={this.state.userChoiceMade} userChoseRock={this.state.userChoseRock} userChosePaper={this.state.userChosePaper} userChoseScissors={this.state.userChoseScissors} userChoseSpock={this.state.userChoseSpock} userChoseLizard={this.state.userChoseLizard} />
                    <BottomSection showBasic={this.props.showBasic} showAdvanced={this.props.showAdvanced} switchMode={this.props.switchMode} showBasicRules={this.props.showBasicRules} showAdvancedRules={this.props.showAdvancedRules} showBasicRulesModal={this.props.showBasicRulesModal} showAdvancedRulesModal={this.props.showAdvancedRulesModal} closeRules={this.props.closeRules}/>
                </AdvancedOutsideDiv>
            )
        }

        else if(this.state.computerChoiceMade === true && this.state.showResult === false) {
            return (
                <AdvancedOutsideDiv>
                    <ScoreSection score={this.props.score} />
                    <Step2 userChoiceMade={this.state.userChoiceMade} userChoseRock={this.state.userChoseRock} userChosePaper={this.state.userChosePaper} userChoseScissors={this.state.userChoseScissors} userChoseSpock={this.state.userChoseSpock} userChoseLizard={this.state.userChoseLizard} computerChoseRock={this.state.computerChoseRock} computerChosePaper={this.state.computerChosePaper} computerChoseScissors={this.state.computerChoseScissors} computerChoseSpock={this.state.computerChoseSpock} computerChoseLizard={this.state.computerChoseLizard} />
                    <BottomSection showBasic={this.props.showBasic} showAdvanced={this.props.showAdvanced} switchMode={this.props.switchMode} showBasicRules={this.props.showBasicRules} showAdvancedRules={this.props.showAdvancedRules} showBasicRulesModal={this.props.showBasicRulesModal} showAdvancedRulesModal={this.props.showAdvancedRulesModal} closeRules={this.props.closeRules}/>
                </AdvancedOutsideDiv>
            )
        }

        else {
            return (
                <AdvancedOutsideDiv>
                    <ScoreSection score={this.props.score} />
                    <Step3 userChoiceMade={this.state.userChoiceMade} userChoseRock={this.state.userChoseRock} userChosePaper={this.state.userChosePaper} userChoseScissors={this.state.userChoseScissors} userChoseSpock={this.state.userChoseSpock} userChoseLizard={this.state.userChoseLizard} computerChoseRock={this.state.computerChoseRock} computerChosePaper={this.state.computerChosePaper} computerChoseScissors={this.state.computerChoseScissors} computerChoseSpock={this.state.computerChoseSpock} computerChoseLizard={this.state.computerChoseLizard} gameResult={this.state.gameResult} playAgain={this.playAgain} />
                    <BottomSection showBasic={this.props.showBasic} showAdvanced={this.props.showAdvanced} switchMode={this.props.switchMode} showBasicRules={this.props.showBasicRules} showAdvancedRules={this.props.showAdvancedRules} showBasicRulesModal={this.props.showBasicRulesModal} showAdvancedRulesModal={this.props.showAdvancedRulesModal} closeRules={this.props.closeRules}/>
                </AdvancedOutsideDiv>
            )
        }
    }
}

export default Advanced;