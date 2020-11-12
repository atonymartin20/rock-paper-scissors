import styled from 'styled-components';
import '../../index.css';
import BackgroundTriangleImg from '../../images/bg-triangle.svg';
import PaperImg from '../../images/icon-paper.svg';
import ScissorsImg from '../../images/icon-scissors.svg';
import RockImg from '../../images/icon-rock.svg';

// Homepage
const HomepageOutsideDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: blue;
    background-image: radial-gradient(circle farthest-corner at center 10px, hsl(214,47%,23%) 0%, hsl(237, 51%, 11%) 95%);
    display: flex;
    justify-content: center;
`;

const HomepageInsideDiv = styled.div`
    background-color: #111111;
    background-image: radial-gradient(circle farthest-corner at center 10px, hsl(214,47%,23%) 0%, hsl(237, 49%, 15%) 105%);
    width: 100%;
    max-width: 1366px;
    height: 770px;
`;

// Basic
const BasicOutsideDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: rows;
    justify-content: center;
    flex-wrap: wrap;
`;

const BasicScoreOutsideDiv = styled.div`
    width: 703px;
    height: 152.5px;
    border: 3px solid hsl(217, 16%, 45%);
    margin-top: 46.5px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 22.5px;
`;

const BasicScoreTitle = styled.img`
    margin-left: 5.5px;
    margin-top: 4px;
`;

const BasicScoreInsideDiv = styled.div`
    background-color: white;
    width: 150px;
    height: 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 7px;
    padding: 17px;
`;

const BasicScoreInsideP = styled.p`
    color: hsl(229, 64%, 46%);
    font-size: 1.55rem;
    font-weight: 600;
    letter-spacing: 2.75px;
`;

const BasicScoreInsideCounter = styled.p`
    color: #5B596E;
    font-size: 6.35rem;
    font-weight: 700;
    letter-spacing: .5px;
    font-family: 'Barlow Semi Condensed Bold', serif;
    margin-top: 2px;
`;

const BasicMiddleDiv = styled.div`
    width: 700px;
    background-color: inherit;
    background-image: url(${BackgroundTriangleImg});
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 90px;
    height: 407px;
`;

const BasicPaperScissorsDiv = styled.div`
`;

// border-radius: 50%;
const PaperButton = styled.button`
    background-color: #DDDDDD;
    background-image: url(${PaperImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70px 85px;
    width: 200px;
    height: 200px;
    border: 20px solid;
    border-image: radial-gradient(circle, green 35%, red 200%) 1;

    
`;
    // border-image-source: radial-gradient(circle, green 0%, red 105%);

const RockButton = styled.button`
    
`;

const ScissorsButton = styled.button`

`;

const BasicBottomDiv = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 32px;
`;

const SwitchDifficultyButton = styled.button`
    background-color: inherit;
    border: 1px solid white;
    color: #D5D7E3;
    height: 40px;
    font-size: 1.6rem;
    border-radius: 7px;
    width: 128px;
    letter-spacing: 2.5px;
    font-family: 'Barlow Semi Condensed', serif;
`;

const ShowRulesButton = styled.button`
    background-color: inherit;
    border: 1px solid white;
    color: #D5D7E3;
    height: 40px;
    font-size: 1.6rem;
    border-radius: 7px;
    width: 128px;
    letter-spacing: 2.5px;
    font-family: 'Barlow Semi Condensed', serif;
`;

// Advanced

// Rules

export {
    HomepageOutsideDiv,
    HomepageInsideDiv,
    BasicOutsideDiv,
    BasicScoreOutsideDiv,
    BasicScoreTitle,
    BasicScoreInsideDiv,
    BasicScoreInsideP,
    BasicScoreInsideCounter,
    BasicMiddleDiv,
    BasicPaperScissorsDiv,
    PaperButton,
    RockButton,
    ScissorsButton,
    BasicBottomDiv,
    SwitchDifficultyButton,
    ShowRulesButton,
}