import React from 'react';
import { HomepageOutsideDiv, HomepageInsideDiv } from '../styledComponents/homepage.js';
import Basic from '../basic';
import Advanced from '../advanced';
import Rules from '../rules';

class Homepage extends React.Component {
    state = {
        basicScore: 0,
        showBasicRules: false,
        showAdvancedRules: false,
        advancedScore: 0,
        showAdvanced: false,
        showBasic: true,
    }

    switchMode = () => {
        this.setState ({
            showAdvanced: !this.state.showAdvanced,
            showBasic: !this.state.showBasic
        })
    }

    basicWin = () => {
        let win = this.state.basicScore + 1;
        this.setState({
            basicScore: win
        })
    }

    basicLoss = () => {
        let loss = this.state.basicScore - 1;
        this.setState({
            basicScore: loss
        })
    }

    advancedWin = () => {
        let win = this.state.advancedScore + 1;
        this.setState({
            advancedScore: win
        })
    }

    advancedLoss = () => {
        let loss = this.state.advancedScore - 1;
        this.setState({
            advancedScore: loss
        })
    }

    showBasicRulesModal = () => {
        this.setState({
            showBasicRules: true
        })
    }

    showAdvancedRulesModal = () => {
        this.setState({
            showAdvancedRules: true
        })
    }

    closeRules = () => {
        this.setState({
            showBasicRules: false,
            showAdvancedRules: false,
        })
    }

    render() {
        if(this.state.showBasic === true) {
            return (
                <HomepageOutsideDiv>
                    <HomepageInsideDiv>
                        <Basic score={this.state.basicScore} showAdvanced={this.state.showAdvanced} showBasic={this.state.showBasic} switchMode={this.switchMode} basicWin={this.basicWin} basicLoss={this.basicLoss} showBasicRules={this.state.showBasicRules} showAdvancedRules={this.state.showAdvancedRules} showBasicRulesModal={this.showBasicRulesModal} showAdvancedRulesModal={this.showAdvancedRulesModal} closeRules={this.closeRules} />
                        {this.state.showBasicRules ? <Rules closeRules={this.closeRules} showBasicRules={this.state.showBasicRules} showAdvancedRules={this.state.showAdvancedRules} /> : null }
                    </HomepageInsideDiv>
                </HomepageOutsideDiv>
            )
        }
        else {
            return (
                <HomepageOutsideDiv>
                    <HomepageInsideDiv>
                        <Advanced score={this.state.advancedScore} showAdvanced={this.state.showAdvanced} showBasic={this.state.showBasic} switchMode={this.switchMode} advancedWin={this.advancedWin} advancedLoss={this.advancedLoss} showBasicRules={this.state.showBasicRules} showAdvancedRules={this.state.showAdvancedRules} showBasicRulesModal={this.showBasicRulesModal} showAdvancedRulesModal={this.showAdvancedRulesModal} closeRules={this.closeRules} />
                        {this.state.showAdvancedRules ? <Rules closeRules={this.closeRules} showBasicRules={this.state.showBasicRules} showAdvancedRules={this.state.showAdvancedRules} /> : null }
                    </HomepageInsideDiv>
                </HomepageOutsideDiv>
            )
        }
    }
}

export default Homepage;