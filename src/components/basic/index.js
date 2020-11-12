import React from 'react';
import { BasicOutsideDiv, BasicScoreTitle, BasicScoreOutsideDiv, BasicScoreInsideDiv, BasicScoreInsideP, BasicScoreInsideCounter, BasicMiddleDiv, BasicPaperScissorsDiv, PaperButton, RockButton, ScissorsButton, BasicBottomDiv, SwitchDifficultyButton, ShowRulesButton } from '../styledComponents';
import Rules from '../rules';
import Title from '../../images/logo.svg';


class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log(props)
    }

    render() {
        return (
            <BasicOutsideDiv>
                <BasicScoreOutsideDiv>
                    <BasicScoreTitle src={Title} alt='Title' />
                    <BasicScoreInsideDiv>
                        <BasicScoreInsideP>
                            SCORE
                        </BasicScoreInsideP>
                        <BasicScoreInsideCounter>
                            {this.props.score}
                        </BasicScoreInsideCounter>
                    </BasicScoreInsideDiv>
                </BasicScoreOutsideDiv>
            </BasicOutsideDiv>
        )
    }
}

export default Basic;