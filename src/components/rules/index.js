import React from 'react';
import {
	RulesModalContainer,
	RulesImg,
	RulesContainer,
	RulesTopBanner,
	CloseIconImg,
	CloseIconImgMobile,
	AdvancedRulesTopBanner,
	AdvancedRulesImg,
} from '../styledComponents/rules.js';
import BasicRules from '../../images/image-rules.svg';
import AdvancedRules from '../../images/image-rules-bonus.svg';
import CloseIcon from '../../images/icon-close.svg';

class Rules extends React.Component {
	render() {
		console.log(this.props);
		if (this.props.showBasicRules === true) {
			return (
				<RulesModalContainer>
					<RulesContainer>
						<RulesTopBanner>
							RULES
							<CloseIconImg
								onClick={this.props.closeRules}
								src={CloseIcon}
								alt="Close Icon"
							/>
						</RulesTopBanner>
						<RulesImg src={BasicRules} alt="Rules Page" />
						<CloseIconImgMobile
								onClick={this.props.closeRules}
								src={CloseIcon}
								alt="Close Icon"
							/>
					</RulesContainer>
				</RulesModalContainer>
			);
		} else {
			return (
				<RulesModalContainer>
					<RulesContainer>
						<AdvancedRulesTopBanner>
							RULES
							<CloseIconImg
								onClick={this.props.closeRules}
								src={CloseIcon}
								alt="Close Icon"
							/>
						</AdvancedRulesTopBanner>
						<AdvancedRulesImg src={AdvancedRules} alt="Rules Page" />
						<CloseIconImgMobile
								onClick={this.props.closeRules}
								src={CloseIcon}
								alt="Close Icon"
							/>
					</RulesContainer>
				</RulesModalContainer>
			);
		}
	}
}

export default Rules;