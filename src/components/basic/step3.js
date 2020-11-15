import React from 'react';
import { BasicStep3Div, BasicStep3PlayerSide, BasicStep3ComputerSide, PlayerHeader2, ComputerHeader3, LargePaperDiv, LargePaperButton, LargeScissorsDiv, LargeScissorsButton, LargeRockDiv, LargeRockButton, LargeRockImg, LargeScissorsImg, LargePaperImg, BasicStep3MiddleDiv, BasicStep3MiddleHeader, BasicStep3Button, WinningPaperDiv, WinningRockDiv, WinningScissorsDiv } from '../styledComponents/basic.js';
import PaperImg from '../../images/icon-paper.svg';
import ScissorsImg from '../../images/icon-scissors.svg';
import RockImg from '../../images/icon-rock.svg';

class Step3 extends React.Component {
    render() {
        if(this.props.userChoseRock === true) {
            if(this.props.computerChoseRock === true) {
                return (
                    <BasicStep3Div>
                        <BasicStep3PlayerSide>
                            <PlayerHeader2>
                                YOU PICKED
                            </PlayerHeader2>
                            <LargeRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Paper Icon' />
                                </LargeRockButton>
                            </LargeRockDiv>
                        </BasicStep3PlayerSide>

                        <BasicStep3MiddleDiv>
                            <BasicStep3MiddleHeader>
                                DRAW
                            </BasicStep3MiddleHeader>
                            <BasicStep3Button onClick={this.props.playAgain}>
                                PLAY AGAIN
                            </BasicStep3Button>
                        </BasicStep3MiddleDiv>

                        <BasicStep3ComputerSide>
                            <ComputerHeader3>
                                THE HOUSE PICKED
                            </ComputerHeader3>
                            <LargeRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Paper Icon' />
                                </LargeRockButton>
                            </LargeRockDiv>
                        </BasicStep3ComputerSide>
                    </BasicStep3Div>
                )
            }

            else if(this.props.computerChosePaper === true) {
                return (
                    <BasicStep3Div>
                        <BasicStep3PlayerSide>
                            <PlayerHeader2>
                                YOU PICKED
                            </PlayerHeader2>
                            <LargeRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Paper Icon' />
                                </LargeRockButton>
                            </LargeRockDiv>
                        </BasicStep3PlayerSide>
    
                        <BasicStep3MiddleDiv>
                            <BasicStep3MiddleHeader>
                                YOU LOSE
                            </BasicStep3MiddleHeader>
                            <BasicStep3Button onClick={this.props.playAgain}>
                                PLAY AGAIN
                            </BasicStep3Button>
                        </BasicStep3MiddleDiv>

                        <BasicStep3ComputerSide>
                            <ComputerHeader3>
                                THE HOUSE PICKED
                            </ComputerHeader3>
                            <WinningPaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </WinningPaperDiv>
                        </BasicStep3ComputerSide>
                    </BasicStep3Div>
                )
            }

            else {
                return (
                    <BasicStep3Div>
                        <BasicStep3PlayerSide>
                            <PlayerHeader2>
                                YOU PICKED
                            </PlayerHeader2>
                            <WinningRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Paper Icon' />
                                </LargeRockButton>
                            </WinningRockDiv>
                        </BasicStep3PlayerSide>
    
                        <BasicStep3MiddleDiv>
                            <BasicStep3MiddleHeader>
                                YOU WIN
                            </BasicStep3MiddleHeader>
                            <BasicStep3Button onClick={this.props.playAgain}>
                                PLAY AGAIN
                            </BasicStep3Button>
                        </BasicStep3MiddleDiv>

                        <BasicStep3ComputerSide>
                            <ComputerHeader3>
                                THE HOUSE PICKED
                            </ComputerHeader3>
                            <LargeScissorsDiv>
                                <LargeScissorsButton>
                                    <LargeScissorsImg src={ScissorsImg} alt='Paper Icon' />
                                </LargeScissorsButton>
                            </LargeScissorsDiv>
                        </BasicStep3ComputerSide>
                    </BasicStep3Div>
                )
            }
        }

        else if(this.props.userChosePaper === true) {
            if(this.props.computerChoseRock === true) {
                return (
                    <BasicStep3Div>
                        <BasicStep3PlayerSide>
                            <PlayerHeader2>
                                YOU PICKED
                            </PlayerHeader2>
                            <WinningPaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </WinningPaperDiv>
                        </BasicStep3PlayerSide>
    
                        <BasicStep3MiddleDiv>
                            <BasicStep3MiddleHeader>
                                YOU WIN
                            </BasicStep3MiddleHeader>
                            <BasicStep3Button onClick={this.props.playAgain}>
                                PLAY AGAIN
                            </BasicStep3Button>
                        </BasicStep3MiddleDiv>

                        <BasicStep3ComputerSide>
                            <ComputerHeader3>
                                THE HOUSE PICKED
                            </ComputerHeader3>
                            <LargeRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Paper Icon' />
                                </LargeRockButton>
                            </LargeRockDiv>
                        </BasicStep3ComputerSide>
                    </BasicStep3Div>
                )
            }

            else if(this.props.computerChosePaper === true) {
                return (
                    <BasicStep3Div>
                        <BasicStep3PlayerSide>
                            <PlayerHeader2>
                                YOU PICKED
                            </PlayerHeader2>
                            <LargePaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </LargePaperDiv>
                        </BasicStep3PlayerSide>
    
                        <BasicStep3MiddleDiv>
                            <BasicStep3MiddleHeader>
                                DRAW
                            </BasicStep3MiddleHeader>
                            <BasicStep3Button onClick={this.props.playAgain}>
                                PLAY AGAIN
                            </BasicStep3Button>
                        </BasicStep3MiddleDiv>

                        <BasicStep3ComputerSide>
                            <ComputerHeader3>
                                THE HOUSE PICKED
                            </ComputerHeader3>
                            <LargePaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </LargePaperDiv>
                        </BasicStep3ComputerSide>
                    </BasicStep3Div>
                )
            }
            else {
                return (
                    <BasicStep3Div>
                        <BasicStep3PlayerSide>
                            <PlayerHeader2>
                                YOU PICKED
                            </PlayerHeader2>
                            <LargePaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </LargePaperDiv>
                        </BasicStep3PlayerSide>

                        <BasicStep3MiddleDiv>
                            <BasicStep3MiddleHeader>
                                YOU LOSE
                            </BasicStep3MiddleHeader>
                            <BasicStep3Button onClick={this.props.playAgain}>
                                PLAY AGAIN
                            </BasicStep3Button>
                        </BasicStep3MiddleDiv>

                        <BasicStep3ComputerSide>
                            <ComputerHeader3>
                                THE HOUSE PICKED
                            </ComputerHeader3>
                            <WinningScissorsDiv>
                                <LargeScissorsButton>
                                    <LargeScissorsImg src={ScissorsImg} alt='Paper Icon' />
                                </LargeScissorsButton>
                            </WinningScissorsDiv>
                        </BasicStep3ComputerSide>
                    </BasicStep3Div>
                )
            }
        }

        else {
            if(this.props.computerChoseRock === true) {
                return (
                    <BasicStep3Div>
                        <BasicStep3PlayerSide>
                            <PlayerHeader2>
                                YOU PICKED
                            </PlayerHeader2>
                            <LargeScissorsDiv>
                                <LargeScissorsButton>
                                    <LargeScissorsImg src={ScissorsImg} alt='Paper Icon' />
                                </LargeScissorsButton>
                            </LargeScissorsDiv>
                        </BasicStep3PlayerSide>
    
                        <BasicStep3MiddleDiv>
                            <BasicStep3MiddleHeader>
                                YOU LOSE
                            </BasicStep3MiddleHeader>
                            <BasicStep3Button onClick={this.props.playAgain}>
                                PLAY AGAIN
                            </BasicStep3Button>
                        </BasicStep3MiddleDiv>

                        <BasicStep3ComputerSide>
                            <ComputerHeader3>
                                THE HOUSE PICKED
                            </ComputerHeader3>
                            <WinningRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Paper Icon' />
                                </LargeRockButton>
                            </WinningRockDiv>
                        </BasicStep3ComputerSide>
                    </BasicStep3Div>
                )
            }

            else if(this.props.computerChosePaper === true) {
                return (
                    <BasicStep3Div>
                        <BasicStep3PlayerSide>
                            <PlayerHeader2>
                                YOU PICKED
                            </PlayerHeader2>
                                <WinningScissorsDiv>
                                    <LargeScissorsButton>
                                        <LargeScissorsImg src={ScissorsImg} alt='Paper Icon' />
                                    </LargeScissorsButton>
                                </WinningScissorsDiv>
                        </BasicStep3PlayerSide>
    
                        <BasicStep3MiddleDiv>
                            <BasicStep3MiddleHeader>
                                YOU WIN
                            </BasicStep3MiddleHeader>
                            <BasicStep3Button onClick={this.props.playAgain}>
                                PLAY AGAIN
                            </BasicStep3Button>
                        </BasicStep3MiddleDiv>

                        <BasicStep3ComputerSide>
                            <ComputerHeader3>
                                THE HOUSE PICKED
                            </ComputerHeader3>
                            <LargePaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </LargePaperDiv>
                        </BasicStep3ComputerSide>
                    </BasicStep3Div>
                )
            }

            else {
                return (
                    <BasicStep3Div>
                        <BasicStep3PlayerSide>
                            <PlayerHeader2>
                                YOU PICKED
                            </PlayerHeader2>
                            <LargeScissorsDiv>
                                <LargeScissorsButton>
                                    <LargeScissorsImg src={ScissorsImg} alt='Paper Icon' />
                                </LargeScissorsButton>
                            </LargeScissorsDiv>
                        </BasicStep3PlayerSide>
    
                        <BasicStep3MiddleDiv>
                            <BasicStep3MiddleHeader>
                                DRAW
                            </BasicStep3MiddleHeader>
                            <BasicStep3Button onClick={this.props.playAgain}>
                                PLAY AGAIN
                            </BasicStep3Button>
                        </BasicStep3MiddleDiv>

                        <BasicStep3ComputerSide>
                            <ComputerHeader3>
                                THE HOUSE PICKED
                            </ComputerHeader3>
                            <LargeScissorsDiv>
                                <LargeScissorsButton>
                                    <LargeScissorsImg src={ScissorsImg} alt='Paper Icon' />
                                </LargeScissorsButton>
                            </LargeScissorsDiv>
                        </BasicStep3ComputerSide>
                    </BasicStep3Div>
                )
            }

        }
    }
}

export default Step3;