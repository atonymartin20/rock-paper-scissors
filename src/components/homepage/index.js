import React from 'react';
import { HomepageOutsideDiv, HomepageInsideDiv } from '../styledComponents';
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

    switchRules = () => {
        this.setState ({
            showAdvanced: !this.state.showAdvanced,
            showBasic: !this.state.showBasic
        })
    }

    // score outside box
    // 2px border with border-radius x
    // width 700px
    // height 152px
    // centered on page 47px from top

    // score inside box
    // STILLL TO GRAB
    render() {
        if(this.state.showBasic === true) {
            return (
                <HomepageOutsideDiv>
                    <HomepageInsideDiv>
                        <Basic score={this.state.basicScore} showRules={this.state.showRules} showAdvanced={this.state.showAdvanced} showBasic={this.state.showBasic} switchRules={this.switchRules} />
                    </HomepageInsideDiv>
                </HomepageOutsideDiv>
            )
        }
        else {
            return (
                <HomepageOutsideDiv>
                    <HomepageInsideDiv>
                        <Advanced score={this.state.advancedScore} showRules={this.state.showRules} showAdvanced={this.state.showAdvanced} showBasic={this.state.showBasic} switchRules={this.switchRules} />
                    </HomepageInsideDiv>
                </HomepageOutsideDiv>
            )
        }

    }
}

// middle
// 60px down from bottom of score box


// rules box
// height 40px
// 30px from bottom and right
// width: 128px

export default Homepage;
//     constructor(props) {
    // super(props);
    // this.state = {
    //     userData: {},
    //     disablePickUpButton: false,
    // }
// <InventoryList ListType='items' />
//   if (this.props.ListType === "players") {
//  }