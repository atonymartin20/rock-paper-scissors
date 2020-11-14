import styled from 'styled-components';
import '../../index.css';
import BackgroundTriangleImg from '../../images/bg-triangle.svg';
import Cursor from '../../images/tap.svg';

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
    margin-top: 12px;
`;

const BasicPaperImg = styled.img`
    width: 70px;
    height: 82px;    
    margin-top: 10px;
    padding-right: 2px;
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
    width: 199px;
    height: 203px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    box-shadow: 0 -8px #2945C2 inset;
`;

const PaperButton = styled.button`
    width: 152px;
    height: 152px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 5px;
    box-shadow: 0 8px #BFC0CD inset;
`;

const RockDiv = styled.div`
    width: 199px;
    height: 203px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    box-shadow: 0 -8px #9F1933 inset;
`;

const RockButton = styled.button`
    width: 152px;
    height: 152px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 5px;
    box-shadow: 0 8px #BFC0CD inset;
`;

const ScissorsDiv = styled.div`
    width: 199px;
    height: 203px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    box-shadow: 0 -8px #C76C1B inset;
`;

const ScissorsButton = styled.button`
    width: 152px;
    height: 152px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 5px;
    box-shadow: 0 8px #BFC0CD inset;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 3px;
    padding-top: 2px;
`;

const BasicStep1ComputerSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 9px;
    padding-top: 2px;
`;

const PlayerHeader = styled.div`
    font-family: 'Barlow Semi Condensed Regular', serif;
    font-size: 2.25rem;
    color: #FFFEFF;
    font-weight: 600;
    letter-spacing: 3.7px;
`;

const ComputerHeader = styled.div`
    font-family: 'Barlow Semi Condensed Regular', serif;
    font-size: 2.25rem;
    color: #FFFEFF;
    font-weight: 600;
    letter-spacing: 3.7px;
    margin-right: 17px;
`;

const ComputerPlaceHolder = styled.div`
    border-radius: 50%;
    background-color: #172240;
    background: linear-gradient(#192442 0%, #151E3D 100%);
    width: 227px;
    height: 227px;
    margin-top: 100px;
    margin-right: 13px;
`;

const LargePaperDiv = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    box-shadow: 0 -12px #2945C2 inset;
`;

const LargePaperButton = styled.button`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
`;

const LargeScissorsDiv = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    box-shadow: 0 -12px #C76C1B inset;
`;

const LargeScissorsButton = styled.button`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
`;

const LargeRockDiv = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    box-shadow: 0 -12px #9F1933 inset;
`;

const LargeRockButton = styled.button`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
`;

const LargeRockImg = styled.img`
    width: 97px;
    height: 96px;    
    margin-top: 16px;
    margin-left: 3px;
`;

const LargePaperImg = styled.img`
    width: 100px;
    height: 100px;    
    margin-top: 10px;
`;

const LargeScissorsImg = styled.img`
    width: 103px;
    height: 120px;    
    margin-top: 13px;
    margin-right: 15px;
`;

// Step 2
const BasicStep2ComputerSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 27px;
    padding-top: 2px;
`;

const ComputerHeader2 = styled.div`
    font-family: 'Barlow Semi Condensed Regular', serif;
    font-size: 2.25rem;
    color: #FFFEFF;
    font-weight: 600;
    letter-spacing: 3.7px;
    margin-left: 2px;
`;

// Step 3
const BasicStep3Div = styled.div`
    width: 950px;
    background-color: inherit;
    margin-top: 75px;
    height: 422px;
    display: flex;
    margin-right: 10px;
`;

const BasicStep3PlayerSide = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2px;
`;

const PlayerHeader2 = styled.div`
    font-family: 'Barlow Semi Condensed Regular', serif;
    font-size: 2.25rem;
    color: #FFFEFF;
    font-weight: 600;
    letter-spacing: 3.8px;
    padding-left: 75px;
`;

const BasicStep3MiddleDiv = styled.div`
    width: 280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    padding-left: 7.5px;
`;

const BasicStep3MiddleHeader = styled.div`
    font-size: 5.37rem;
    color: white;
    letter-spacing: 1.7px;
    margin-bottom: 23px;
    margin-top: 23px;
`;

const BasicStep3Button = styled.div`
    width: 220px;
    height: 48px;
    border-radius: 8px;
    font-size: 1.6rem;
    font-weight: 600;
    display: flex;
    font-family: 'Barlow Semi Condensed Regular', serif;
    justify-content: center;
    align-items: center;
    background-color: #F8F8F8;
    color: hsl(229, 25%, 31%);
    letter-spacing: 2.8px;
    cursor: url(${Cursor}), pointer;
    :hover & {
        color: #B73D53
    }
    margin-right: 3px;
`;

const BasicStep3ComputerSide = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 2px;
`;
const OutsideWinningCircle = styled.div`
    width: 725px;
    min-height: 725px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #202F4E;
`;

const MiddleWinningCircle = styled.div`
    width: 560px;
    height: 560px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #253453;
`;

const InsideWinningCircle = styled.div`
    width: 420px;
    height: 420px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2C3755;
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
    PlayerHeader,
    ComputerHeader,
    ComputerPlaceHolder,
    LargePaperDiv,
    LargePaperButton,
    LargeScissorsDiv,
    LargeScissorsButton,
    LargeRockDiv,
    LargeRockButton,
    LargeRockImg,
    LargeScissorsImg,
    LargePaperImg,
    BasicStep2ComputerSide,
    ComputerHeader2,
    BasicStep3Div,
    BasicStep3PlayerSide,
    PlayerHeader2,
    BasicStep3MiddleDiv,
    BasicStep3MiddleHeader,
    BasicStep3Button,
    BasicStep3ComputerSide,
    OutsideWinningCircle,
    MiddleWinningCircle,
    InsideWinningCircle,
}