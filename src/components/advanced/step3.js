import React from 'react';
import {
	AdvancedStep3ContianerDiv,
	AdvancedStep3AlternativeMiddleDiv,
	AdvancedStep3Div,
	AdvancedStep3PlayerSide,
	AdvancedStep3ComputerSide,
	PlayerHeader2,
	ComputerHeader3,
	LargePaperDiv2,
	LargePaperButton2,
	LargeScissorsDiv2,
	LargeScissorsButton2,
	LargeRockDiv2,
	LargeRockButton2,
	LargeSpockDiv2,
	LargeSpockButton2,
	LargeLizardDiv2,
	LargeLizardButton2,
	LargeRockImg2,
	LargeScissorsImg2,
	LargePaperImg2,
	LargeSpockImg2,
	LargeLizardImg2,
	AdvancedStep3MiddleDiv,
	AdvancedStep3MiddleHeader,
	AdvancedStep3Button,
	WinningPaperDiv,
	WinningRockDiv,
	WinningScissorsDiv,
	WinningSpockDiv,
	WinningLizardDiv,
} from '../styledComponents/advanced.js';
import PaperImg from '../../images/icon-paper.svg';
import ScissorsImg from '../../images/icon-scissors.svg';
import RockImg from '../../images/icon-rock.svg';
import SpockImg from '../../images/icon-spock.svg';
import LizardImg from '../../images/icon-lizard.svg';

class Step3 extends React.Component {
	render() {
		if (this.props.userChoseRock === true) {
			if (this.props.computerChoseRock === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								DRAW
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeRockDiv2>
									<LargeRockButton2>
										<LargeRockImg2
											src={RockImg}
											alt="Rock Icon"
										/>
									</LargeRockButton2>
								</LargeRockDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									DRAW
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeRockDiv2>
									<LargeRockButton2>
										<LargeRockImg2
											src={RockImg}
											alt="Rock Icon"
										/>
									</LargeRockButton2>
								</LargeRockDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU LOSE
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>

						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeRockDiv2>
									<LargeRockButton2>
										<LargeRockImg2
											src={RockImg}
											alt="Rock Icon"
										/>
									</LargeRockButton2>
								</LargeRockDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU LOSE
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningPaperDiv>
									<LargePaperButton2>
										<LargePaperImg2
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</WinningPaperDiv>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChoseScissors === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU WIN
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>

						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningRockDiv>
									<LargeRockButton2>
										<LargeRockImg2
											src={RockImg}
											alt="Rock Icon"
										/>
									</LargeRockButton2>
								</WinningRockDiv>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU WIN
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeScissorsDiv2>
									<LargeScissorsButton2>
										<LargeScissorsImg2
											src={ScissorsImg}
											alt="Scissors Icon"
										/>
									</LargeScissorsButton2>
								</LargeScissorsDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChoseSpock === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU LOSE
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeRockDiv2>
									<LargeRockButton2>
										<LargeRockImg2
											src={RockImg}
											alt="Rock Icon"
										/>
									</LargeRockButton2>
								</LargeRockDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU LOSE
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningSpockDiv>
									<LargeSpockButton2>
										<LargeSpockImg2
											src={SpockImg}
											alt="Spock Icon"
										/>
									</LargeSpockButton2>
								</WinningSpockDiv>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU WIN
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>

						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningRockDiv>
									<LargeRockButton2>
										<LargeRockImg2
											src={RockImg}
											alt="Rock Icon"
										/>
									</LargeRockButton2>
								</WinningRockDiv>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU WIN
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeLizardDiv2>
									<LargeLizardButton2>
										<LargeLizardImg2
											src={LizardImg}
											alt="Lizard Icon"
										/>
									</LargeLizardButton2>
								</LargeLizardDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			}
		} else if (this.props.userChosePaper === true) {
			if (this.props.computerChoseRock === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU WIN
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningPaperDiv>
									<LargePaperButton2>
										<LargePaperImg2
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</WinningPaperDiv>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU WIN
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeRockDiv2>
									<LargeRockButton2>
										<LargeRockImg2
											src={RockImg}
											alt="Rock Icon"
										/>
									</LargeRockButton2>
								</LargeRockDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								DRAW
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargePaperDiv2>
									<LargePaperButton2>
										<LargePaperImg2
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</LargePaperDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									DRAW
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargePaperDiv2>
									<LargePaperButton2>
										<LargePaperImg2
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</LargePaperDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChoseScissors === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU LOSE
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargePaperDiv2>
									<LargePaperButton2>
										<LargePaperImg2
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</LargePaperDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU LOSE
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningScissorsDiv>
									<LargeScissorsButton2>
										<LargeScissorsImg2
											src={ScissorsImg}
											alt="Scissors Icon"
										/>
									</LargeScissorsButton2>
								</WinningScissorsDiv>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChoseSpock === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU WIN
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningPaperDiv>
									<LargePaperButton2>
										<LargePaperImg2
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</WinningPaperDiv>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU WIN
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeSpockDiv2>
									<LargeSpockButton2>
										<LargeSpockImg2
											src={SpockImg}
											alt="Spock Icon"
										/>
									</LargeSpockButton2>
								</LargeSpockDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU LOSE
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>

						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargePaperDiv2>
									<LargePaperButton2>
										<LargePaperImg2
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</LargePaperDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU LOSE
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningLizardDiv>
									<LargeLizardButton2>
										<LargeLizardImg2
											src={LizardImg}
											alt="Lizard Icon"
										/>
									</LargeLizardButton2>
								</WinningLizardDiv>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			}
		} else if (this.props.userChoseScissors === true) {
			if (this.props.computerChoseRock === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU LOSE
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeScissorsDiv2>
									<LargeScissorsButton2>
										<LargeScissorsImg2
											src={ScissorsImg}
											alt="Scissors Icon"
										/>
									</LargeScissorsButton2>
								</LargeScissorsDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU LOSE
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningRockDiv>
									<LargeRockButton2>
										<LargeRockImg2
											src={RockImg}
											alt="Rock Icon"
										/>
									</LargeRockButton2>
								</WinningRockDiv>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU WIN
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningScissorsDiv>
									<LargeScissorsButton2>
										<LargeScissorsImg2
											src={ScissorsImg}
											alt="Scissors Icon"
										/>
									</LargeScissorsButton2>
								</WinningScissorsDiv>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU WIN
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargePaperDiv2>
									<LargePaperButton2>
										<LargePaperImg2
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</LargePaperDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChoseScissors === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								DRAW
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeScissorsDiv2>
									<LargeScissorsButton2>
										<LargeScissorsImg2
											src={ScissorsImg}
											alt="Scissors Icon"
										/>
									</LargeScissorsButton2>
								</LargeScissorsDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									DRAW
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeScissorsDiv2>
									<LargeScissorsButton2>
										<LargeScissorsImg2
											src={ScissorsImg}
											alt="Scissors Icon"
										/>
									</LargeScissorsButton2>
								</LargeScissorsDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChoseSpock === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU LOSE
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeScissorsDiv2>
									<LargeScissorsButton2>
										<LargeScissorsImg2
											src={ScissorsImg}
											alt="Scissors Icon"
										/>
									</LargeScissorsButton2>
								</LargeScissorsDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU LOSE
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningSpockDiv>
									<LargeSpockButton2>
										<LargeSpockImg2
											src={SpockImg}
											alt="Spock Icon"
										/>
									</LargeSpockButton2>
								</WinningSpockDiv>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU WIN
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>

						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningScissorsDiv>
									<LargeScissorsButton2>
										<LargeScissorsImg2
											src={ScissorsImg}
											alt="Scissors Icon"
										/>
									</LargeScissorsButton2>
								</WinningScissorsDiv>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU WIN
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeLizardDiv2>
									<LargeLizardButton2>
										<LargeLizardImg2
											src={LizardImg}
											alt="Lizard Icon"
										/>
									</LargeLizardButton2>
								</LargeLizardDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			}
		} else if (this.props.userChoseSpock === true) {
			if (this.props.computerChoseRock === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU WIN
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningSpockDiv>
									<LargeSpockButton2>
										<LargeSpockImg2
											src={SpockImg}
											alt="Spock Icon"
										/>
									</LargeSpockButton2>
								</WinningSpockDiv>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU WIN
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeRockDiv2>
									<LargeRockButton2>
										<LargeRockImg2
											src={RockImg}
											alt="Rock Icon"
										/>
									</LargeRockButton2>
								</LargeRockDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU LOSE
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeSpockDiv2>
									<LargeSpockButton2>
										<LargeSpockImg2
											src={SpockImg}
											alt="Spock Icon"
										/>
									</LargeSpockButton2>
								</LargeSpockDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU LOSE
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningPaperDiv>
									<LargePaperButton2>
										<LargePaperImg2
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</WinningPaperDiv>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChoseScissors === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU WIN
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningSpockDiv>
									<LargeSpockButton2>
										<LargeSpockImg2
											src={SpockImg}
											alt="Spock Icon"
										/>
									</LargeSpockButton2>
								</WinningSpockDiv>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU WIN
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeScissorsDiv2>
									<LargeScissorsButton2>
										<LargeScissorsImg2
											src={ScissorsImg}
											alt="Scissors Icon"
										/>
									</LargeScissorsButton2>
								</LargeScissorsDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChoseSpock === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								DRAW
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeSpockDiv2>
									<LargeSpockButton2>
										<LargeSpockImg2
											src={SpockImg}
											alt="Spock Icon"
										/>
									</LargeSpockButton2>
								</LargeSpockDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									DRAW
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeSpockDiv2>
									<LargeSpockButton2>
										<LargeSpockImg2
											src={SpockImg}
											alt="Spock Icon"
										/>
									</LargeSpockButton2>
								</LargeSpockDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU LOSE
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>

						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeSpockDiv2>
									<LargeSpockButton2>
										<LargeSpockImg2
											src={SpockImg}
											alt="Spock Icon"
										/>
									</LargeSpockButton2>
								</LargeSpockDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU LOSE
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningLizardDiv>
									<LargeLizardButton2>
										<LargeLizardImg2
											src={LizardImg}
											alt="Lizard Icon"
										/>
									</LargeLizardButton2>
								</WinningLizardDiv>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			}
		} else {
			if (this.props.computerChoseRock === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU LOSE
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeLizardDiv2>
									<LargeLizardButton2>
										<LargeLizardImg2
											src={LizardImg}
											alt="Lizard Icon"
										/>
									</LargeLizardButton2>
								</LargeLizardDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU LOSE
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningRockDiv>
									<LargeRockButton2>
										<LargeRockImg2
											src={RockImg}
											alt="Rock Icon"
										/>
									</LargeRockButton2>
								</WinningRockDiv>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU WIN
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningLizardDiv>
									<LargeLizardButton2>
										<LargeLizardImg2
											src={LizardImg}
											alt="Lizard Icon"
										/>
									</LargeLizardButton2>
								</WinningLizardDiv>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU WIN
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargePaperDiv2>
									<LargePaperButton2>
										<LargePaperImg2
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</LargePaperDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChoseScissors === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU LOSE
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeLizardDiv2>
									<LargeLizardButton2>
										<LargeLizardImg2
											src={LizardImg}
											alt="Lizard Icon"
										/>
									</LargeLizardButton2>
								</LargeLizardDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU LOSE
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningScissorsDiv>
									<LargeScissorsButton2>
										<LargeScissorsImg2
											src={ScissorsImg}
											alt="Scissors Icon"
										/>
									</LargeScissorsButton2>
								</WinningScissorsDiv>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else if (this.props.computerChoseSpock === true) {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								YOU WIN
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>
						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningLizardDiv>
									<LargeLizardButton2>
										<LargeLizardImg2
											src={LizardImg}
											alt="Lizard Icon"
										/>
									</LargeLizardButton2>
								</WinningLizardDiv>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									YOU WIN
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeSpockDiv2>
									<LargeSpockButton2>
										<LargeSpockImg2
											src={SpockImg}
											alt="Spock Icon"
										/>
									</LargeSpockButton2>
								</LargeSpockDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			} else {
				return (
					<AdvancedStep3ContianerDiv>
						<AdvancedStep3AlternativeMiddleDiv>
							<AdvancedStep3MiddleHeader>
								DRAW
							</AdvancedStep3MiddleHeader>
							<AdvancedStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</AdvancedStep3Button>
						</AdvancedStep3AlternativeMiddleDiv>

						<AdvancedStep3Div>
							<AdvancedStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeLizardDiv2>
									<LargeLizardButton2>
										<LargeLizardImg2
											src={LizardImg}
											alt="Lizard Icon"
										/>
									</LargeLizardButton2>
								</LargeLizardDiv2>
							</AdvancedStep3PlayerSide>

							<AdvancedStep3MiddleDiv>
								<AdvancedStep3MiddleHeader>
									DRAW
								</AdvancedStep3MiddleHeader>
								<AdvancedStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</AdvancedStep3Button>
							</AdvancedStep3MiddleDiv>

							<AdvancedStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeLizardDiv2>
									<LargeLizardButton2>
										<LargeLizardImg2
											src={LizardImg}
											alt="Lizard Icon"
										/>
									</LargeLizardButton2>
								</LargeLizardDiv2>
							</AdvancedStep3ComputerSide>
						</AdvancedStep3Div>
					</AdvancedStep3ContianerDiv>
				);
			}
		}
	}
}

export default Step3;
