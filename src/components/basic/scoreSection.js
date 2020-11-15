import React from 'react';
import { BasicScoreTitle, BasicScoreOutsideDiv, BasicScoreInsideDiv, BasicScoreInsideP, BasicScoreInsideCounter } from '../styledComponents/basic.js';
import Title from '../../images/logo.svg';

class ScoreSection extends React.Component {
    render() {
        return (
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
        )
    }
}

export default ScoreSection;