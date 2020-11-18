import React from 'react';
import { BasicStep1Div, BasicStep1PlayerSide, BasicStep2ComputerSide, PlayerHeader, ComputerHeader2, LargePaperDiv, LargePaperButton, LargeScissorsDiv, LargeScissorsButton, LargeRockDiv, LargeRockButton, LargeRockImg, LargeScissorsImg, LargePaperImg, } from '../styledComponents/basic.js';
import PaperImg from '../../images/icon-paper.svg';
import ScissorsImg from '../../images/icon-scissors.svg';
import RockImg from '../../images/icon-rock.svg';

class Step2 extends React.Component {
    render() {
        if(this.props.userChoseRock === true) {
            if(this.props.computerChoseRock === true) {
                return (
                    <BasicStep1Div>
                        <BasicStep1PlayerSide>
                            <PlayerHeader>
                                YOU PICKED
                            </PlayerHeader>
                            <LargeRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Rock Icon' />
                                </LargeRockButton>
                            </LargeRockDiv>
                        </BasicStep1PlayerSide>
    
                        <BasicStep2ComputerSide>
                            <ComputerHeader2>
                                THE HOUSE PICKED
                            </ComputerHeader2>
                            <LargeRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Rock Icon' />
                                </LargeRockButton>
                            </LargeRockDiv>
                        </BasicStep2ComputerSide>
                    </BasicStep1Div>
                )
            }

            else if(this.props.computerChosePaper === true) {
                return (
                    <BasicStep1Div>
                        <BasicStep1PlayerSide>
                            <PlayerHeader>
                                YOU PICKED
                            </PlayerHeader>
                            <LargeRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Rock Icon' />
                                </LargeRockButton>
                            </LargeRockDiv>
                        </BasicStep1PlayerSide>
    
                        <BasicStep2ComputerSide>
                            <ComputerHeader2>
                                THE HOUSE PICKED
                            </ComputerHeader2>
                            <LargePaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </LargePaperDiv>
                        </BasicStep2ComputerSide>
                    </BasicStep1Div>
                )
            }

            else {
                return (
                    <BasicStep1Div>
                        <BasicStep1PlayerSide>
                            <PlayerHeader>
                                YOU PICKED
                            </PlayerHeader>
                            <LargeRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Rock Icon' />
                                </LargeRockButton>
                            </LargeRockDiv>
                        </BasicStep1PlayerSide>
    
                        <BasicStep2ComputerSide>
                            <ComputerHeader2>
                                THE HOUSE PICKED
                            </ComputerHeader2>
                            <LargeScissorsDiv>
                                <LargeScissorsButton>
                                    <LargeScissorsImg src={ScissorsImg} alt='Scissors Icon' />
                                </LargeScissorsButton>
                            </LargeScissorsDiv>
                        </BasicStep2ComputerSide>
                    </BasicStep1Div>
                )
            }
        }

        else if(this.props.userChosePaper === true) {
            if(this.props.computerChoseRock === true) {
                return (
                    <BasicStep1Div>
                        <BasicStep1PlayerSide>
                            <PlayerHeader>
                                YOU PICKED
                            </PlayerHeader>
                            <LargePaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </LargePaperDiv>
                        </BasicStep1PlayerSide>
    
                        <BasicStep2ComputerSide>
                            <ComputerHeader2>
                                THE HOUSE PICKED
                            </ComputerHeader2>
                            <LargeRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Rock Icon' />
                                </LargeRockButton>
                            </LargeRockDiv>
                        </BasicStep2ComputerSide>
                    </BasicStep1Div>
                )
            }

            else if(this.props.computerChosePaper === true) {
                return (
                    <BasicStep1Div>
                        <BasicStep1PlayerSide>
                            <PlayerHeader>
                                YOU PICKED
                            </PlayerHeader>
                            <LargePaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </LargePaperDiv>
                        </BasicStep1PlayerSide>
    
                        <BasicStep2ComputerSide>
                            <ComputerHeader2>
                                THE HOUSE PICKED
                            </ComputerHeader2>
                            <LargePaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </LargePaperDiv>
                        </BasicStep2ComputerSide>
                    </BasicStep1Div>
                )
            }
            else {
                return (
                    <BasicStep1Div>
                        <BasicStep1PlayerSide>
                            <PlayerHeader>
                                YOU PICKED
                            </PlayerHeader>
                            <LargePaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </LargePaperDiv>
                        </BasicStep1PlayerSide>
    
                        <BasicStep2ComputerSide>
                            <ComputerHeader2>
                                THE HOUSE PICKED
                            </ComputerHeader2>
                            <LargeScissorsDiv>
                                <LargeScissorsButton>
                                    <LargeScissorsImg src={ScissorsImg} alt='Scissors Icon' />
                                </LargeScissorsButton>
                            </LargeScissorsDiv>
                        </BasicStep2ComputerSide>
                    </BasicStep1Div>
                )
            }
        }

        else {
            if(this.props.computerChoseRock === true) {
                return (
                    <BasicStep1Div>
                        <BasicStep1PlayerSide>
                            <PlayerHeader>
                                YOU PICKED
                            </PlayerHeader>
                            <LargeScissorsDiv>
                                <LargeScissorsButton>
                                    <LargeScissorsImg src={ScissorsImg} alt='Scissors Icon' />
                                </LargeScissorsButton>
                            </LargeScissorsDiv>
                        </BasicStep1PlayerSide>
    
                        <BasicStep2ComputerSide>
                            <ComputerHeader2>
                                THE HOUSE PICKED
                            </ComputerHeader2>
                            <LargeRockDiv>
                                <LargeRockButton>
                                    <LargeRockImg src={RockImg} alt='Rock Icon' />
                                </LargeRockButton>
                            </LargeRockDiv>
                        </BasicStep2ComputerSide>
                    </BasicStep1Div>
                )
            }

            else if(this.props.computerChosePaper === true) {
                return (
                    <BasicStep1Div>
                        <BasicStep1PlayerSide>
                            <PlayerHeader>
                                YOU PICKED
                            </PlayerHeader>
                            <LargeScissorsDiv>
                                <LargeScissorsButton>
                                    <LargeScissorsImg src={ScissorsImg} alt='Scissors Icon' />
                                </LargeScissorsButton>
                            </LargeScissorsDiv>
                        </BasicStep1PlayerSide>
    
                        <BasicStep2ComputerSide>
                            <ComputerHeader2>
                                THE HOUSE PICKED
                            </ComputerHeader2>
                            <LargePaperDiv>
                                <LargePaperButton>
                                    <LargePaperImg src={PaperImg} alt='Paper Icon' />
                                </LargePaperButton>
                            </LargePaperDiv>
                        </BasicStep2ComputerSide>
                    </BasicStep1Div>
                )
            }

            else {
                return (
                    <BasicStep1Div>
                        <BasicStep1PlayerSide>
                            <PlayerHeader>
                                YOU PICKED
                            </PlayerHeader>
                            <LargeScissorsDiv>
                                <LargeScissorsButton>
                                    <LargeScissorsImg src={ScissorsImg} alt='Scissors Icon' />
                                </LargeScissorsButton>
                            </LargeScissorsDiv>
                        </BasicStep1PlayerSide>
    
                        <BasicStep2ComputerSide>
                            <ComputerHeader2>
                                THE HOUSE PICKED
                            </ComputerHeader2>
                            <LargeScissorsDiv>
                                <LargeScissorsButton>
                                    <LargeScissorsImg src={ScissorsImg} alt='Scissors Icon' />
                                </LargeScissorsButton>
                            </LargeScissorsDiv>
                        </BasicStep2ComputerSide>
                    </BasicStep1Div>
                )
            }

        }
    }
}

export default Step2;