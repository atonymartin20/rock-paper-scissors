import React from 'react';
import {
	AdvancedStep1Div,
	AdvancedStep1PlayerSide,
	AdvancedStep2ComputerSide,
	PlayerHeader,
	ComputerHeader2,
	LargePaperDiv,
	LargePaperButton,
	LargeScissorsDiv,
	LargeScissorsButton,
	LargeRockDiv,
	LargeRockButton,
	LargeSpockDiv,
	LargeSpockButton,
	LargeLizardDiv,
	LargeLizardButton,
	LargeRockImg,
	LargeScissorsImg,
	LargePaperImg,
	LargeSpockImg,
	LargeLizardImg,
} from '../styledComponents/advanced.js';
import PaperImg from '../../images/icon-paper.svg';
import ScissorsImg from '../../images/icon-scissors.svg';
import RockImg from '../../images/icon-rock.svg';
import SpockImg from '../../images/icon-spock.svg';
import LizardImg from '../../images/icon-lizard.svg';

class Step2 extends React.Component {
	render() {
		if (this.props.userChoseRock === true) {
			if (this.props.computerChoseRock === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeRockDiv>
								<LargeRockButton>
									<LargeRockImg
										src={RockImg}
										alt="Rock Icon"
									/>
								</LargeRockButton>
							</LargeRockDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeRockDiv>
								<LargeRockButton>
									<LargeRockImg
										src={RockImg}
										alt="Rock Icon"
									/>
								</LargeRockButton>
							</LargeRockDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeRockDiv>
								<LargeRockButton>
									<LargeRockImg
										src={RockImg}
										alt="Rock Icon"
									/>
								</LargeRockButton>
							</LargeRockDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargePaperDiv>
								<LargePaperButton>
									<LargePaperImg
										src={PaperImg}
										alt="Paper Icon"
									/>
								</LargePaperButton>
							</LargePaperDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChoseScissors === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeRockDiv>
								<LargeRockButton>
									<LargeRockImg
										src={RockImg}
										alt="Rock Icon"
									/>
								</LargeRockButton>
							</LargeRockDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeScissorsDiv>
								<LargeScissorsButton>
									<LargeScissorsImg
										src={ScissorsImg}
										alt="Scissors Icon"
									/>
								</LargeScissorsButton>
							</LargeScissorsDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChoseSpock === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeRockDiv>
								<LargeRockButton>
									<LargeRockImg
										src={RockImg}
										alt="Rock Icon"
									/>
								</LargeRockButton>
							</LargeRockDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeSpockDiv>
								<LargeSpockButton>
									<LargeSpockImg
										src={SpockImg}
										alt="Spock Icon"
									/>
								</LargeSpockButton>
							</LargeSpockDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeRockDiv>
								<LargeRockButton>
									<LargeRockImg
										src={RockImg}
										alt="Rock Icon"
									/>
								</LargeRockButton>
							</LargeRockDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeLizardDiv>
								<LargeLizardButton>
									<LargeLizardImg
										src={LizardImg}
										alt="Lizard Icon"
									/>
								</LargeLizardButton>
							</LargeLizardDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			}
		} else if (this.props.userChosePaper === true) {
			if (this.props.computerChoseRock === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargePaperDiv>
								<LargePaperButton>
									<LargePaperImg
										src={PaperImg}
										alt="Paper Icon"
									/>
								</LargePaperButton>
							</LargePaperDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeRockDiv>
								<LargeRockButton>
									<LargeRockImg
										src={RockImg}
										alt="Rock Icon"
									/>
								</LargeRockButton>
							</LargeRockDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargePaperDiv>
								<LargePaperButton>
									<LargePaperImg
										src={PaperImg}
										alt="Paper Icon"
									/>
								</LargePaperButton>
							</LargePaperDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargePaperDiv>
								<LargePaperButton>
									<LargePaperImg
										src={PaperImg}
										alt="Paper Icon"
									/>
								</LargePaperButton>
							</LargePaperDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChoseScissors === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargePaperDiv>
								<LargePaperButton>
									<LargePaperImg
										src={PaperImg}
										alt="Paper Icon"
									/>
								</LargePaperButton>
							</LargePaperDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeScissorsDiv>
								<LargeScissorsButton>
									<LargeScissorsImg
										src={ScissorsImg}
										alt="Scissors Icon"
									/>
								</LargeScissorsButton>
							</LargeScissorsDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChoseSpock === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargePaperDiv>
								<LargePaperButton>
									<LargePaperImg
										src={PaperImg}
										alt="Paper Icon"
									/>
								</LargePaperButton>
							</LargePaperDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeSpockDiv>
								<LargeSpockButton>
									<LargeSpockImg
										src={SpockImg}
										alt="Spock Icon"
									/>
								</LargeSpockButton>
							</LargeSpockDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargePaperDiv>
								<LargePaperButton>
									<LargePaperImg
										src={PaperImg}
										alt="Paper Icon"
									/>
								</LargePaperButton>
							</LargePaperDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeLizardDiv>
								<LargeLizardButton>
									<LargeLizardImg
										src={LizardImg}
										alt="Lizard Icon"
									/>
								</LargeLizardButton>
							</LargeLizardDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			}
		} else if (this.props.userChoseScissors === true) {
			if (this.props.computerChoseRock === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeScissorsDiv>
								<LargeScissorsButton>
									<LargeScissorsImg
										src={ScissorsImg}
										alt="Scissors Icon"
									/>
								</LargeScissorsButton>
							</LargeScissorsDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeRockDiv>
								<LargeRockButton>
									<LargeRockImg
										src={RockImg}
										alt="Rock Icon"
									/>
								</LargeRockButton>
							</LargeRockDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeScissorsDiv>
								<LargeScissorsButton>
									<LargeScissorsImg
										src={ScissorsImg}
										alt="Scissors Icon"
									/>
								</LargeScissorsButton>
							</LargeScissorsDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargePaperDiv>
								<LargePaperButton>
									<LargePaperImg
										src={PaperImg}
										alt="Paper Icon"
									/>
								</LargePaperButton>
							</LargePaperDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChoseScissors === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeScissorsDiv>
								<LargeScissorsButton>
									<LargeScissorsImg
										src={ScissorsImg}
										alt="Scissors Icon"
									/>
								</LargeScissorsButton>
							</LargeScissorsDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeScissorsDiv>
								<LargeScissorsButton>
									<LargeScissorsImg
										src={ScissorsImg}
										alt="Scissors Icon"
									/>
								</LargeScissorsButton>
							</LargeScissorsDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChoseSpock === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeScissorsDiv>
								<LargeScissorsButton>
									<LargeScissorsImg
										src={ScissorsImg}
										alt="Scissors Icon"
									/>
								</LargeScissorsButton>
							</LargeScissorsDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeSpockDiv>
								<LargeSpockButton>
									<LargeSpockImg
										src={SpockImg}
										alt="Spock Icon"
									/>
								</LargeSpockButton>
							</LargeSpockDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeScissorsDiv>
								<LargeScissorsButton>
									<LargeScissorsImg
										src={ScissorsImg}
										alt="Scissors Icon"
									/>
								</LargeScissorsButton>
							</LargeScissorsDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeLizardDiv>
								<LargeLizardButton>
									<LargeLizardImg
										src={LizardImg}
										alt="Lizard Icon"
									/>
								</LargeLizardButton>
							</LargeLizardDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			}
		} else if (this.props.userChoseSpock === true) {
			if (this.props.computerChoseRock === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeSpockDiv>
								<LargeSpockButton>
									<LargeSpockImg
										src={SpockImg}
										alt="Spock Icon"
									/>
								</LargeSpockButton>
							</LargeSpockDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeRockDiv>
								<LargeRockButton>
									<LargeRockImg
										src={RockImg}
										alt="Rock Icon"
									/>
								</LargeRockButton>
							</LargeRockDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeSpockDiv>
								<LargeSpockButton>
									<LargeSpockImg
										src={SpockImg}
										alt="Spock Icon"
									/>
								</LargeSpockButton>
							</LargeSpockDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargePaperDiv>
								<LargePaperButton>
									<LargePaperImg
										src={PaperImg}
										alt="Paper Icon"
									/>
								</LargePaperButton>
							</LargePaperDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChoseScissors === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeSpockDiv>
								<LargeSpockButton>
									<LargeSpockImg
										src={SpockImg}
										alt="Spock Icon"
									/>
								</LargeSpockButton>
							</LargeSpockDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeScissorsDiv>
								<LargeScissorsButton>
									<LargeScissorsImg
										src={ScissorsImg}
										alt="Scissors Icon"
									/>
								</LargeScissorsButton>
							</LargeScissorsDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChoseSpock === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeSpockDiv>
								<LargeSpockButton>
									<LargeSpockImg
										src={SpockImg}
										alt="Spock Icon"
									/>
								</LargeSpockButton>
							</LargeSpockDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeSpockDiv>
								<LargeSpockButton>
									<LargeSpockImg
										src={SpockImg}
										alt="Spock Icon"
									/>
								</LargeSpockButton>
							</LargeSpockDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeSpockDiv>
								<LargeSpockButton>
									<LargeSpockImg
										src={SpockImg}
										alt="Spock Icon"
									/>
								</LargeSpockButton>
							</LargeSpockDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeLizardDiv>
								<LargeLizardButton>
									<LargeLizardImg
										src={LizardImg}
										alt="Lizard Icon"
									/>
								</LargeLizardButton>
							</LargeLizardDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			}
		} else {
			if (this.props.computerChoseRock === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeLizardDiv>
								<LargeLizardButton>
									<LargeLizardImg
										src={LizardImg}
										alt="Lizard Icon"
									/>
								</LargeLizardButton>
							</LargeLizardDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeRockDiv>
								<LargeRockButton>
									<LargeRockImg
										src={RockImg}
										alt="Rock Icon"
									/>
								</LargeRockButton>
							</LargeRockDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeLizardDiv>
								<LargeLizardButton>
									<LargeLizardImg
										src={LizardImg}
										alt="Lizard Icon"
									/>
								</LargeLizardButton>
							</LargeLizardDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargePaperDiv>
								<LargePaperButton>
									<LargePaperImg
										src={PaperImg}
										alt="Paper Icon"
									/>
								</LargePaperButton>
							</LargePaperDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChoseScissors === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeLizardDiv>
								<LargeLizardButton>
									<LargeLizardImg
										src={LizardImg}
										alt="Lizard Icon"
									/>
								</LargeLizardButton>
							</LargeLizardDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeScissorsDiv>
								<LargeScissorsButton>
									<LargeScissorsImg
										src={ScissorsImg}
										alt="Scissors Icon"
									/>
								</LargeScissorsButton>
							</LargeScissorsDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else if (this.props.computerChoseSpock === true) {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeLizardDiv>
								<LargeLizardButton>
									<LargeLizardImg
										src={LizardImg}
										alt="Lizard Icon"
									/>
								</LargeLizardButton>
							</LargeLizardDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeSpockDiv>
								<LargeSpockButton>
									<LargeSpockImg
										src={SpockImg}
										alt="Spock Icon"
									/>
								</LargeSpockButton>
							</LargeSpockDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			} else {
				return (
					<AdvancedStep1Div>
						<AdvancedStep1PlayerSide>
							<PlayerHeader>YOU PICKED</PlayerHeader>
							<LargeLizardDiv>
								<LargeLizardButton>
									<LargeLizardImg
										src={LizardImg}
										alt="Lizard Icon"
									/>
								</LargeLizardButton>
							</LargeLizardDiv>
						</AdvancedStep1PlayerSide>

						<AdvancedStep2ComputerSide>
							<ComputerHeader2>THE HOUSE PICKED</ComputerHeader2>
							<LargeLizardDiv>
								<LargeLizardButton>
									<LargeLizardImg
										src={LizardImg}
										alt="Lizard Icon"
									/>
								</LargeLizardButton>
							</LargeLizardDiv>
						</AdvancedStep2ComputerSide>
					</AdvancedStep1Div>
				);
			}
		}
	}
}

export default Step2;
