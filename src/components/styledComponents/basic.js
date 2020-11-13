import styled from 'styled-components';
import '../../index.css';
import BackgroundTriangleImg from '../../images/bg-triangle.svg';

// Basic Index
const BasicOutsideDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
`;

// Basic Score Section
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

// Basic Step 0
const BasicStep0Div = styled.div`
    width: 700px;
    background-color: inherit;
    background-image: url(${BackgroundTriangleImg});
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 90px;
    height: 407px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BasicRockImg = styled.img`
    width: 67px;
    height: 67px;    
    margin-top: 10px;
`;

const BasicPaperImg = styled.img`
    width: 68px;
    height: 82px;    
    margin-top: 10px;
`;

const BasicScissorsImg = styled.img`
    width: 68px;
    height: 82px;    
    margin-top: 10px;
    margin-right: 8px;
`;

const BasicPaperScissorsDiv = styled.div`
    margin-top: -27px;
    display: flex;
    justify-content: center;
`;

const PaperDiv = styled.div`
    width: 200px;
    height: 205px;
    border-radius: 50%;
    background-color: white;
    background-image: radial-gradient(circle farthest-corner at center 86px, hsl(230, 89%, 65%) 70%, hsl(230, 65%, 46%) 71%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
`;

const PaperButton = styled.button`
    width: 154px;
    height: 154px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: radial-gradient(circle farthest-corner at center 93px, hsl(0, 0%, 94%) 70%, hsl(228, 22%, 77%) 10%);
    margin-bottom: 5px;
`;

const RockDiv = styled.div`
    width: 200px;
    height: 205px;
    border-radius: 50%;
    background-color: white;
    background-image: radial-gradient(circle farthest-corner at center 86px, hsl(349, 70%, 56%) 70%, hsl(347, 74%, 35%) 71%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`;

const RockButton = styled.button`
    width: 154px;
    height: 154px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: radial-gradient(circle farthest-corner at center 93px, hsl(0, 0%, 94%) 70%, hsl(228, 22%, 77%) 10%);
    margin-bottom: 5px;
`;

const ScissorsDiv = styled.div`
    width: 200px;
    height: 205px;
    border-radius: 50%;
    background-color: white;
    background-image: radial-gradient(circle farthest-corner at center 86px, hsl(40, 84%, 53%) 70%, hsl(28, 76%, 44%) 71%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
`;

const ScissorsButton = styled.button`
    width: 154px;
    height: 154px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: radial-gradient(circle farthest-corner at center 93px, hsl(0, 0%, 94%) 70%, hsl(228, 22%, 77%) 10%);
    margin-bottom: 5px;
`;

// Basic Step 1
const BasicStep1Div = styled.div`
    width: 750px;
    background-color: inherit;
    margin-top: 75px;
    height: 422px;
    display: flex;
`;

const BasicStep1PlayerSide = styled.div`
    width: 50%;
    height: 100%;
    font-family: 'Barlow Semi Condensed Regular', serif;
    font-size: 2.25rem;
    color: orange;
    font-weight: 600;
    letter-spacing: 3.7px;
    display: flex;
    justify-content: center;
    background-color: green;
    padding-right: 3px;
    padding-top: 2px;
`;

const BasicStep1ComputerSide = styled.div`
    width: 50%;
    height: 100%;
    font-family: 'Barlow Semi Condensed Regular', serif;
    font-size: 2.2rem;
    color: #FFFEFF;
    font-weight: 600;
    letter-spacing: 3.75px;
    display: flex;
    justify-content: center;
    background-color: blue;
`;

export {
    BasicOutsideDiv,
    BasicScoreOutsideDiv,
    BasicScoreTitle,
    BasicScoreInsideDiv,
    BasicScoreInsideP,
    BasicScoreInsideCounter,
    BasicStep0Div,
    BasicRockImg,
    BasicScissorsImg,
    BasicPaperImg,
    BasicPaperScissorsDiv,
    PaperDiv,
    PaperButton,
    RockDiv,
    RockButton,
    ScissorsDiv,
    ScissorsButton,
    BasicStep1Div,
    BasicStep1PlayerSide,
    BasicStep1ComputerSide,
}