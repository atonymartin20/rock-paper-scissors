import React from 'react';
import { AdvancedScoreTitle, AdvancedScoreOutsideDiv, AdvancedScoreInsideDiv, AdvancedScoreInsideP, AdvancedScoreInsideCounter } from '../styledComponents/advanced.js';
import Title from '../../images/logo-bonus.svg';

class ScoreSection extends React.Component {
    render() {
        return (
            <AdvancedScoreOutsideDiv>
                <AdvancedScoreTitle src={Title} alt='Title' />
                <AdvancedScoreInsideDiv>
                    <AdvancedScoreInsideP>
                        SCORE
                    </AdvancedScoreInsideP>
                    <AdvancedScoreInsideCounter>
                        {this.props.score}
                    </AdvancedScoreInsideCounter>
                </AdvancedScoreInsideDiv>
            </AdvancedScoreOutsideDiv>
        )
    }
}

export default ScoreSection;