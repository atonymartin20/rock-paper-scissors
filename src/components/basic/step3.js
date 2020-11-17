import React from 'react';
import {
	BasicStep3ContianerDiv,
	BasicStep3AlternativeMiddleDiv,
	BasicStep3Div,
	BasicStep3PlayerSide,
	BasicStep3ComputerSide,
	PlayerHeader2,
	ComputerHeader3,
	LargePaperDiv2,
	LargePaperButton2,
	LargeScissorsDiv2,
	LargeScissorsButton2,
	LargeRockDiv2,
	LargeRockButton2,
	LargeRockImg,
	LargeScissorsImg,
	LargePaperImg,
	BasicStep3MiddleDiv,
	BasicStep3MiddleHeader,
	BasicStep3Button,
	WinningPaperDiv,
	WinningRockDiv,
	WinningScissorsDiv,
} from '../styledComponents/basic.js';
import PaperImg from '../../images/icon-paper.svg';
import ScissorsImg from '../../images/icon-scissors.svg';
import RockImg from '../../images/icon-rock.svg';

class Step3 extends React.Component {
	render() {
		if (this.props.userChoseRock === true) {
			if (this.props.computerChoseRock === true) {
				return (
					<BasicStep3ContianerDiv>
						<BasicStep3AlternativeMiddleDiv>
							<BasicStep3MiddleHeader>
								DRAW
							</BasicStep3MiddleHeader>
							<BasicStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</BasicStep3Button>
						</BasicStep3AlternativeMiddleDiv>
						<BasicStep3Div>
							<BasicStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeRockDiv2>
									<LargeRockButton2>
										<LargeRockImg
											src={RockImg}
											alt="Paper Icon"
										/>
									</LargeRockButton2>
								</LargeRockDiv2>
							</BasicStep3PlayerSide>

							<BasicStep3MiddleDiv>
								<BasicStep3MiddleHeader>
									DRAW
								</BasicStep3MiddleHeader>
								<BasicStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</BasicStep3Button>
							</BasicStep3MiddleDiv>

							<BasicStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeRockDiv2>
									<LargeRockButton2>
										<LargeRockImg
											src={RockImg}
											alt="Paper Icon"
										/>
									</LargeRockButton2>
								</LargeRockDiv2>
							</BasicStep3ComputerSide>
						</BasicStep3Div>
					</BasicStep3ContianerDiv>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<BasicStep3ContianerDiv>
						<BasicStep3AlternativeMiddleDiv>
							<BasicStep3MiddleHeader>
								YOU LOSE
							</BasicStep3MiddleHeader>
							<BasicStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</BasicStep3Button>
						</BasicStep3AlternativeMiddleDiv>

						<BasicStep3Div>
							<BasicStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeRockDiv2>
									<LargeRockButton2>
										<LargeRockImg
											src={RockImg}
											alt="Paper Icon"
										/>
									</LargeRockButton2>
								</LargeRockDiv2>
							</BasicStep3PlayerSide>

							<BasicStep3MiddleDiv>
								<BasicStep3MiddleHeader>
									YOU LOSE
								</BasicStep3MiddleHeader>
								<BasicStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</BasicStep3Button>
							</BasicStep3MiddleDiv>

							<BasicStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningPaperDiv>
									<LargePaperButton2>
										<LargePaperImg
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</WinningPaperDiv>
							</BasicStep3ComputerSide>
						</BasicStep3Div>
					</BasicStep3ContianerDiv>
				);
			} else {
				return (
					<BasicStep3ContianerDiv>
						<BasicStep3AlternativeMiddleDiv>
							<BasicStep3MiddleHeader>
								YOU WIN
							</BasicStep3MiddleHeader>
							<BasicStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</BasicStep3Button>
						</BasicStep3AlternativeMiddleDiv>

						<BasicStep3Div>
							<BasicStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningRockDiv>
									<LargeRockButton2>
										<LargeRockImg
											src={RockImg}
											alt="Paper Icon"
										/>
									</LargeRockButton2>
								</WinningRockDiv>
							</BasicStep3PlayerSide>

							<BasicStep3MiddleDiv>
								<BasicStep3MiddleHeader>
									YOU WIN
								</BasicStep3MiddleHeader>
								<BasicStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</BasicStep3Button>
							</BasicStep3MiddleDiv>

							<BasicStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeScissorsDiv2>
									<LargeScissorsButton2>
										<LargeScissorsImg
											src={ScissorsImg}
											alt="Paper Icon"
										/>
									</LargeScissorsButton2>
								</LargeScissorsDiv2>
							</BasicStep3ComputerSide>
						</BasicStep3Div>
					</BasicStep3ContianerDiv>
				);
			}
		} else if (this.props.userChosePaper === true) {
			if (this.props.computerChoseRock === true) {
				return (
					<BasicStep3ContianerDiv>
						<BasicStep3AlternativeMiddleDiv>
							<BasicStep3MiddleHeader>
								YOU WIN
							</BasicStep3MiddleHeader>
							<BasicStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</BasicStep3Button>
						</BasicStep3AlternativeMiddleDiv>
						<BasicStep3Div>
							<BasicStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningPaperDiv>
									<LargePaperButton2>
										<LargePaperImg
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</WinningPaperDiv>
							</BasicStep3PlayerSide>

							<BasicStep3MiddleDiv>
								<BasicStep3MiddleHeader>
									YOU WIN
								</BasicStep3MiddleHeader>
								<BasicStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</BasicStep3Button>
							</BasicStep3MiddleDiv>

							<BasicStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeRockDiv2>
									<LargeRockButton2>
										<LargeRockImg
											src={RockImg}
											alt="Paper Icon"
										/>
									</LargeRockButton2>
								</LargeRockDiv2>
							</BasicStep3ComputerSide>
						</BasicStep3Div>
					</BasicStep3ContianerDiv>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<BasicStep3ContianerDiv>
						<BasicStep3AlternativeMiddleDiv>
							<BasicStep3MiddleHeader>
								DRAW
							</BasicStep3MiddleHeader>
							<BasicStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</BasicStep3Button>
						</BasicStep3AlternativeMiddleDiv>
						<BasicStep3Div>
							<BasicStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargePaperDiv2>
									<LargePaperButton2>
										<LargePaperImg
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</LargePaperDiv2>
							</BasicStep3PlayerSide>

							<BasicStep3MiddleDiv>
								<BasicStep3MiddleHeader>
									DRAW
								</BasicStep3MiddleHeader>
								<BasicStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</BasicStep3Button>
							</BasicStep3MiddleDiv>

							<BasicStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargePaperDiv2>
									<LargePaperButton2>
										<LargePaperImg
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</LargePaperDiv2>
							</BasicStep3ComputerSide>
						</BasicStep3Div>
					</BasicStep3ContianerDiv>
				);
			} else {
				return (
					<BasicStep3ContianerDiv>
						<BasicStep3AlternativeMiddleDiv>
							<BasicStep3MiddleHeader>
								YOU LOSE
							</BasicStep3MiddleHeader>
							<BasicStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</BasicStep3Button>
						</BasicStep3AlternativeMiddleDiv>
						<BasicStep3Div>
							<BasicStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargePaperDiv2>
									<LargePaperButton2>
										<LargePaperImg
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</LargePaperDiv2>
							</BasicStep3PlayerSide>

							<BasicStep3MiddleDiv>
								<BasicStep3MiddleHeader>
									YOU LOSE
								</BasicStep3MiddleHeader>
								<BasicStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</BasicStep3Button>
							</BasicStep3MiddleDiv>

							<BasicStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningScissorsDiv>
									<LargeScissorsButton2>
										<LargeScissorsImg
											src={ScissorsImg}
											alt="Paper Icon"
										/>
									</LargeScissorsButton2>
								</WinningScissorsDiv>
							</BasicStep3ComputerSide>
						</BasicStep3Div>
					</BasicStep3ContianerDiv>
				);
			}
		} else {
			if (this.props.computerChoseRock === true) {
				return (
					<BasicStep3ContianerDiv>
						<BasicStep3AlternativeMiddleDiv>
							<BasicStep3MiddleHeader>
								YOU LOSE
							</BasicStep3MiddleHeader>
							<BasicStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</BasicStep3Button>
						</BasicStep3AlternativeMiddleDiv>
						<BasicStep3Div>
							<BasicStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeScissorsDiv2>
									<LargeScissorsButton2>
										<LargeScissorsImg
											src={ScissorsImg}
											alt="Paper Icon"
										/>
									</LargeScissorsButton2>
								</LargeScissorsDiv2>
							</BasicStep3PlayerSide>

							<BasicStep3MiddleDiv>
								<BasicStep3MiddleHeader>
									YOU LOSE
								</BasicStep3MiddleHeader>
								<BasicStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</BasicStep3Button>
							</BasicStep3MiddleDiv>

							<BasicStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<WinningRockDiv>
									<LargeRockButton2>
										<LargeRockImg
											src={RockImg}
											alt="Paper Icon"
										/>
									</LargeRockButton2>
								</WinningRockDiv>
							</BasicStep3ComputerSide>
						</BasicStep3Div>
					</BasicStep3ContianerDiv>
				);
			} else if (this.props.computerChosePaper === true) {
				return (
					<BasicStep3ContianerDiv>
						<BasicStep3AlternativeMiddleDiv>
							<BasicStep3MiddleHeader>
								YOU WIN
							</BasicStep3MiddleHeader>
							<BasicStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</BasicStep3Button>
						</BasicStep3AlternativeMiddleDiv>
						<BasicStep3Div>
							<BasicStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<WinningScissorsDiv>
									<LargeScissorsButton2>
										<LargeScissorsImg
											src={ScissorsImg}
											alt="Paper Icon"
										/>
									</LargeScissorsButton2>
								</WinningScissorsDiv>
							</BasicStep3PlayerSide>

							<BasicStep3MiddleDiv>
								<BasicStep3MiddleHeader>
									YOU WIN
								</BasicStep3MiddleHeader>
								<BasicStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</BasicStep3Button>
							</BasicStep3MiddleDiv>

							<BasicStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargePaperDiv2>
									<LargePaperButton2>
										<LargePaperImg
											src={PaperImg}
											alt="Paper Icon"
										/>
									</LargePaperButton2>
								</LargePaperDiv2>
							</BasicStep3ComputerSide>
						</BasicStep3Div>
					</BasicStep3ContianerDiv>
				);
			} else {
				return (
					<BasicStep3ContianerDiv>
						<BasicStep3AlternativeMiddleDiv>
							<BasicStep3MiddleHeader>
								DRAW
							</BasicStep3MiddleHeader>
							<BasicStep3Button onClick={this.props.playAgain}>
								PLAY AGAIN
							</BasicStep3Button>
						</BasicStep3AlternativeMiddleDiv>
						<BasicStep3Div>
							<BasicStep3PlayerSide>
								<PlayerHeader2>YOU PICKED</PlayerHeader2>
								<LargeScissorsDiv2>
									<LargeScissorsButton2>
										<LargeScissorsImg
											src={ScissorsImg}
											alt="Paper Icon"
										/>
									</LargeScissorsButton2>
								</LargeScissorsDiv2>
							</BasicStep3PlayerSide>

							<BasicStep3MiddleDiv>
								<BasicStep3MiddleHeader>
									DRAW
								</BasicStep3MiddleHeader>
								<BasicStep3Button
									onClick={this.props.playAgain}
								>
									PLAY AGAIN
								</BasicStep3Button>
							</BasicStep3MiddleDiv>

							<BasicStep3ComputerSide>
								<ComputerHeader3>
									THE HOUSE PICKED
								</ComputerHeader3>
								<LargeScissorsDiv2>
									<LargeScissorsButton2>
										<LargeScissorsImg
											src={ScissorsImg}
											alt="Paper Icon"
										/>
									</LargeScissorsButton2>
								</LargeScissorsDiv2>
							</BasicStep3ComputerSide>
						</BasicStep3Div>
					</BasicStep3ContianerDiv>
				);
			}
		}
	}
}

export default Step3;
