import React from 'react';
import {
	AdvancedStep0Div,
	AdvancedRockImg,
	AdvancedPaperImg,
	AdvancedScissorsImg,
	AdvancedSpockImg,
	AdvancedLizardImg,
	AdvancedSpockPaperDiv,
	AdvancedLizardRockDiv,
	PaperDiv,
	PaperButton,
	RockDiv,
	RockButton,
	ScissorsDiv,
	ScissorsButton,
	SpockDiv,
	SpockButton,
	LizardDiv,
	LizardButton,
} from '../styledComponents/advanced.js';
import PaperImg from '../../images/icon-paper.svg';
import ScissorsImg from '../../images/icon-scissors.svg';
import RockImg from '../../images/icon-rock.svg';
import SpockImg from '../../images/icon-spock.svg';
import LizardImg from '../../images/icon-lizard.svg';

class Step0 extends React.Component {
	render() {
		return (
			<AdvancedStep0Div>
				<ScissorsDiv onClick={this.props.userChoosesScissors}>
					<ScissorsButton>
						<AdvancedScissorsImg
							src={ScissorsImg}
							alt="Paper Icon"
						/>
					</ScissorsButton>
				</ScissorsDiv>
				<AdvancedSpockPaperDiv>
					<SpockDiv onClick={this.props.userChoosesSpock}>
						<SpockButton>
							<AdvancedSpockImg src={SpockImg} alt="Spock Icon" />
						</SpockButton>
					</SpockDiv>
					<PaperDiv onClick={this.props.userChoosesPaper}>
						<PaperButton>
							<AdvancedPaperImg src={PaperImg} alt="Paper Icon" />
						</PaperButton>
					</PaperDiv>
				</AdvancedSpockPaperDiv>

				<AdvancedLizardRockDiv>
					<LizardDiv onClick={this.props.userChoosesLizard}>
						<LizardButton>
							<AdvancedLizardImg
								src={LizardImg}
								alt="Lizard Icon"
							/>
						</LizardButton>
					</LizardDiv>
					<RockDiv onClick={this.props.userChoosesRock}>
						<RockButton>
							<AdvancedRockImg src={RockImg} alt="Paper Icon" />
						</RockButton>
					</RockDiv>
				</AdvancedLizardRockDiv>
			</AdvancedStep0Div>
		);
	}
}

export default Step0;
