import React from 'react';
import { HomepageOutsideDiv, HomepageInsideDiv } from '../styledComponents/homepage.js';
import Basic from '../basic';
import Advanced from '../advanced';

class Homepage extends React.Component {
    state = {
        basicScore: 0,
        showRules: false,
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

    render() {
        if(this.state.showBasic === true) {
            return (
                <HomepageOutsideDiv>
                    <HomepageInsideDiv>
                        <Basic score={this.state.basicScore} showRules={this.state.showRules} showAdvanced={this.state.showAdvanced} showBasic={this.state.showBasic} switchMode={this.switchMode} />
                    </HomepageInsideDiv>
                </HomepageOutsideDiv>
            )
        }
        else {
            return (
                <HomepageOutsideDiv>
                    <HomepageInsideDiv>
                        <Advanced score={this.state.advancedScore} showRules={this.state.showRules} showAdvanced={this.state.showAdvanced} showBasic={this.state.showBasic} switchMode={this.switchMode} />
                    </HomepageInsideDiv>
                </HomepageOutsideDiv>
            )
        }

    }
}

export default Homepage;