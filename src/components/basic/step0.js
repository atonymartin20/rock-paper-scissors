import React from 'react';
import { BasicStep0Div, BasicRockImg, BasicPaperImg, BasicScissorsImg, BasicPaperScissorsDiv, PaperDiv, PaperButton, RockDiv, RockButton, ScissorsDiv, ScissorsButton } from '../styledComponents/basic.js';
import PaperImg from '../../images/icon-paper.svg';
import ScissorsImg from '../../images/icon-scissors.svg';
import RockImg from '../../images/icon-rock.svg';

class Step0 extends React.Component {
    render() {
        console.log(this.props)
        return (
            <BasicStep0Div>
                <BasicPaperScissorsDiv>
                    <PaperDiv onClick={this.props.userChoosesPaper}>
                        <PaperButton>
                            <BasicPaperImg src={PaperImg} alt='Paper Icon' />
                        </PaperButton>
                    </PaperDiv>
                    <ScissorsDiv onClick={this.props.userChoosesScissors}>
                        <ScissorsButton>
                        <BasicScissorsImg src={ScissorsImg} alt='Paper Icon' />
                        </ScissorsButton>
                    </ScissorsDiv>
                </BasicPaperScissorsDiv>
                <RockDiv onClick={this.props.userChoosesRock}>
                    <RockButton>
                        <BasicRockImg src={RockImg} alt='Paper Icon' />
                    </RockButton>
                </RockDiv>
            </BasicStep0Div>
        )
    }
}

export default Step0;