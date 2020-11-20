import React from 'react';
import { RulesBottomDiv, SwitchDifficultyButton, ShowRulesButton, AdvancedRulesBottomDiv } from '../styledComponents/rules.js';

class BottomSection extends React.Component {
    render() {
        if(this.props.showBasic === true) {
            return (
                <>
                    <RulesBottomDiv>
                        <SwitchDifficultyButton onClick={this.props.switchMode}>ADVANCED</SwitchDifficultyButton>
                        <ShowRulesButton onClick={this.props.showBasicRulesModal}>RULES</ShowRulesButton>
                    </RulesBottomDiv>
                </>
            )
        }
        else {
            return (
                <>
                    <AdvancedRulesBottomDiv>
                        <SwitchDifficultyButton onClick={this.props.switchMode}>BASIC</SwitchDifficultyButton>
                        <ShowRulesButton onClick={this.props.showAdvancedRulesModal}>RULES</ShowRulesButton>
                    </AdvancedRulesBottomDiv>
                </>
            )
        }
    }
}

export default BottomSection;