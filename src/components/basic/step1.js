import React from 'react';
import { BasicStep1Div, BasicStep1PlayerSide, BasicStep1ComputerSide, PlayerHeader, ComputerHeader, ComputerPlaceHolder, LargePaperDiv, LargePaperButton, LargeScissorsDiv, LargeScissorsButton, LargeRockDiv, LargeRockButton, LargeRockImg, LargeScissorsImg, LargePaperImg, } from '../styledComponents/basic.js';
import PaperImg from '../../images/icon-paper.svg';
import ScissorsImg from '../../images/icon-scissors.svg';
import RockImg from '../../images/icon-rock.svg';

class Step1 extends React.Component {
    render() {
        if(this.props.userChoseRock === true) {
            return (
                <BasicStep1Div>
                    <BasicStep1PlayerSide>
                        <PlayerHeader>
                            YOU PICKED
                        </PlayerHeader>
                        <LargeRockDiv>
                            <LargeRockButton>
                                <LargeRockImg src={RockImg} alt='Paper Icon' />
                            </LargeRockButton>
                        </LargeRockDiv>
                    </BasicStep1PlayerSide>

                    <BasicStep1ComputerSide>
                        <ComputerHeader>
                            THE HOUSE PICKED
                        </ComputerHeader>
                        <ComputerPlaceHolder />
                    </BasicStep1ComputerSide>
                </BasicStep1Div>
            )
        }

        else if(this.props.userChosePaper === true) {
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

                    <BasicStep1ComputerSide>
                        <ComputerHeader>
                            THE HOUSE PICKED
                        </ComputerHeader>
                        <ComputerPlaceHolder />
                    </BasicStep1ComputerSide>
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
                                <LargeScissorsImg src={ScissorsImg} alt='Paper Icon' />
                            </LargeScissorsButton>
                        </LargeScissorsDiv>
                    </BasicStep1PlayerSide>

                    <BasicStep1ComputerSide>
                        <ComputerHeader>
                            THE HOUSE PICKED
                        </ComputerHeader>
                        <ComputerPlaceHolder />
                    </BasicStep1ComputerSide>
                </BasicStep1Div>
            )
        }
    }
}

export default Step1;