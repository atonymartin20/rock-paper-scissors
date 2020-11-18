import styled from 'styled-components';
import '../../index.css';
import BackgroundPentagonImg from '../../images/bg-pentagon.svg';
import BackgroundPentagonMobileImg from '../../images/bg-pentagon-mobile.svg';
import Cursor from '../../images/tap.svg';

// Advanced Index
const AdvancedOutsideDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    overflow: hidden;
`;

// Advanced Score Section
const AdvancedScoreOutsideDiv = styled.div`
    max-width: 703px;
    width: 100%;
    height: 152.5px;
    border: 3px solid hsl(217, 16%, 45%);
    margin-top: 46.5px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 22.5px;

    @media(max-width: 375px) {
        height: 99px;
        width: 100%;
        max-width: 314px;
        margin-top: 31px;
        margin-left: 0px;
        border-radius: 6px;
        padding: 0px 11px;
    }
`;

const AdvancedScoreTitle = styled.img`
    margin-left: 5.5px;
    margin-top: 8px;
    z-index: 100;
    box-sizing: border-box;

    @media(max-width: 375px) {
        margin-left: 9.5px;
        height: 54%;
        width: 17.8%;
        margin-top: 3px;
    }
`;

const AdvancedScoreInsideDiv = styled.div`
    background-color: white;
    width: 150px;
    height: 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    padding: 17px;
    z-index: 100;

    @media(max-width: 375px) {
        height: 72px;
        border-radius: 3px;
        width: 80px;
        padding: 0px;
    }
`;

const AdvancedScoreInsideP = styled.p`
    color: hsl(229, 64%, 46%);
    font-size: 1.55rem;
    font-weight: 600;
    letter-spacing: 2.75px;

    @media(max-width: 375px) {
        font-size: .95rem;
        letter-spacing: 1.75px;
        padding-left: 1px;
        margin-bottom: 2px;
        margin-top: 2px;
    }
`;

const AdvancedScoreInsideCounter = styled.p`
    color: #5B596E;
    font-size: 6.35rem;
    font-weight: 700;
    letter-spacing: .5px;
    font-family: 'Barlow Semi Condensed Bold', serif;
    margin-top: 2px;

    @media(max-width: 375px) {
        font-size: 4.0rem;
        letter-spacing: -1.0px;
        margin: 0px;
    }
`;

// Advanced Step 0
const AdvancedStep0Div = styled.div`
    width: 100%;
    max-width: 700px;
    background-color: inherit;
    background-image: url(${BackgroundPentagonImg});
    background-repeat: no-repeat;
    background-position: center;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 38px;
    padding-top: 15px;

    @media(max-width: 500px) {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    @media(max-width: 375px) {
        width: 100%;
        max-width: 320px;
        background-image: url(${BackgroundPentagonMobileImg});
        background-size:  64.5%;
        margin-top: 10px;
    }
`;

const AdvancedRockImg = styled.img`
    width: 48px;
    height: 48px;    
    margin-top: 8px;
    margin-left: 2px;

    @media(max-width: 375px) {
        width: 31px;
        height: 32px;
        margin-top: 5px;
        margin-left: 0px;
    }
`;

const AdvancedPaperImg = styled.img`
    width: 50px;
    height: 60px;    
    margin-top: 6px;
    padding-right: 2px;

    @media(max-width: 375px) {
        width: 34px;
        height: 40px;
    }
`;

const AdvancedScissorsImg = styled.img`
    width: 48px;
    height: 62px;    
    margin-top: 7px;
    margin-right: 8px;

    @media(max-width: 375px) {
        width: 34px;
        height: 38px;
        margin-top: 6px;
        margin-right: 3.5px;
    }
`;

const AdvancedSpockImg = styled.img`
    width: 45px;
    height: 59px;    
    margin-top: 6px;
    margin-left: 5px;

    @media(max-width: 375px) {
        width: 30px;
        height: 39px;
        margin-top: 5px;
    }
`;

const AdvancedLizardImg = styled.img`
    width: 62px;
    height: 62px;    
    margin-top: 7px;
    margin-right: 2px;

    @media(max-width: 375px) {
        width: 42px;
        height: 40px;
        margin-top: 3px;
        margin-right: 1px;
    }
`;

const AdvancedSpockPaperDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -21px;
    margin-bottom: 36px;

    @media(max-width: 375px) {
        margin-top: -14px;
        margin-bottom: 26px;
    }
`;

const AdvancedLizardRockDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const PaperDiv = styled.div`
    width: 145px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 -7px #2945C2 inset;
    margin-left: 91px;

    @media(max-width: 500px) {
        width: 125px;
        height: 130px;
        box-shadow: 0 -5px #2945C2 inset;
        margin-left: 80px;
    }

    @media(max-width: 375px) {
        width: 95px;
        height: 99px;
        box-shadow: 0 -4.5px #2945C2 inset;
        margin-left: 61px;
        margin-right: 2px;
    }
`;

const PaperButton = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 7px;
    box-shadow: 0 6px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 500px) {
        width: 95px;
        height: 95px;
    }

    @media(max-width: 375px) {
        width: 73px;
        height: 73px;
        box-shadow: 0 4px #BFC0CD inset;
    }
`;

const RockDiv = styled.div`
    width: 145px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 -7px #9F1933 inset;
    margin-left: 25px;

    @media(max-width: 500px) {
        width: 125px;
        height: 130px;
        box-shadow: 0 -5px #9F1933 inset;
    }

    @media(max-width: 375px) {
        width: 95px;
        height: 99px;
        box-shadow: 0 -4.5px #9F1933 inset;
        margin-left: 17px;
    }
`;

const RockButton = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 7px;
    box-shadow: 0 6px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 500px) {
        width: 95px;
        height: 95px;
    }

    @media(max-width: 375px) {
        width: 73px;
        height: 73px;
        box-shadow: 0 4px #BFC0CD inset;
    }
`;

const ScissorsDiv = styled.div`
    width: 145px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -6px;
    box-shadow: 0 -7px #C76C1B inset;

    @media(max-width: 500px) {
        width: 125px;
        height: 130px;
        box-shadow: 0 -5px #C76C1B inset;
    }

    @media(max-width: 375px) {
        width: 95px;
        height: 99px;
        box-shadow: 0 -4.5px #C76C1B inset;
        margin-top: 68px;
        maring-left: 4px;
    }
`;

const ScissorsButton = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 7px;
    box-shadow: 0 6px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 500px) {
        width: 95px;
        height: 95px;
    }

    @media(max-width: 375px) {
        width: 73px;
        height: 73px;
        box-shadow: 0 4px #BFC0CD inset;
    }
`;

const SpockDiv = styled.div`
    width: 145px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 91px;
    box-shadow: 0 -7px #2D8CA8 inset;

    @media(max-width: 500px) {
        width: 125px;
        height: 130px;
        box-shadow: 0 -5px #2D8CA8 inset;
    }

    @media(max-width: 375px) {
        width: 95px;
        height: 99px;
        box-shadow: 0 -4.5px #2D8CA8 inset;
        margin-right: 59px;
    }
`;

const SpockButton = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 7px;
    box-shadow: 0 6px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 500px) {
        width: 95px;
        height: 95px;
    }

    @media(max-width: 375px) {
        width: 73px;
        height: 73px;
        box-shadow: 0 4px #BFC0CD inset;
    }
`;

const LizardDiv = styled.div`
    width: 145px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(261, 72%, 63%), hsl(261, 73%, 60%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
    box-shadow: 0 -7px #5E38A9 inset;

    @media(max-width: 500px) {
        width: 125px;
        height: 130px;
        box-shadow: 0 -5px #5E38A9 inset;
    }

    @media(max-width: 375px) {
        width: 95px;
        height: 99px;
        box-shadow: 0 -4.5px #5E38A9 inset;
        margin-right: 17px;
    }
`;

const LizardButton = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 7px;
    box-shadow: 0 6px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 500px) {
        width: 95px;
        height: 95px;
    }

    @media(max-width: 375px) {
        width: 73px;
        height: 73px;
        box-shadow: 0 4px #BFC0CD inset;

    }
`;

// Advanced Step 1
const AdvancedStep1Div = styled.div`
    width: 100%;
    max-width: 750px;
    background-color: inherit;
    margin-top: 75px;
    height: 444px;
    display: flex;
`;

const AdvancedStep1PlayerSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 3px;
    padding-top: 2px;

    @media(max-width: 375px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
    }
`;

const AdvancedStep1ComputerSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 9px;
    padding-top: 2px;

    @media(max-width: 375px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
    }
`;

const PlayerHeader = styled.div`
    font-family: 'Barlow Semi Condensed Regular', serif;
    font-size: 2.25rem;
    color: #FFFEFF;
    font-weight: 600;
    letter-spacing: 3.7px;
    height: 50px;

    @media(max-width: 375px) {
        font-size: 1.35rem;
        letter-spacing: 2.75px;
        margin-left: 3px;
        margin-top: 25px;
    }
`;

const ComputerHeader = styled.div`
    font-family: 'Barlow Semi Condensed Regular', serif;
    font-size: 2.25rem;
    color: #FFFEFF;
    font-weight: 600;
    letter-spacing: 3.7px;
    margin-right: 17px;
    height: 50px;

    @media(max-width: 1000px) {
        text-align: center;
    }

    @media(max-width: 375px) {
        font-size: 1.35rem;
        letter-spacing: 2.7px;
        margin-left: 10px;
        margin-top: 37px;
        margin-right: 0px;
    }
`;

const ComputerPlaceHolder = styled.div`
    border-radius: 50%;
    background-color: #172240;
    background: linear-gradient(#192442 0%, #151E3D 100%);
    width: 227px;
    height: 227px;
    margin-top: 70px;
    margin-right: 13px;

    @media(max-width: 700px) {
        margin-top: 55px;
    }

    @media (max-width: 525px) {
        width: 180px;
        height: 180px;
        margin-right: 0px;
    }

    @media(max-width: 425px) {
        width: 160px;
        height: 160px;
        margin-top: 44px;
    }

    @media(max-width: 375px) {
        width: 112px;
        height: 112px;
        margin-top: 30px;
        margin-left: 10px;
    }
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
    margin-top: 38px;
    box-shadow: 0 -12px #2945C2 inset;

    @media (max-width: 700px) {
        width: 244px;
        height: 250px;
    }

    @media (max-width: 525px) {
        width: 200px;
        height: 205px;
    }

    @media(max-width: 425px) {
        width: 165px;
        height: 165px;
        margin-top: 38px;
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #2945C2 inset;
    }
`;

const LargePaperButton = styled.div`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
        width: 174px;
        height: 176px;
    }

    @media (max-width: 525px) {
        width: 130px;
        height: 132px;
    }

    @media(max-width: 425px) {
        width: 115px;
        height: 117px;
    }

    @media(max-width: 375px) {
        width: 100px;
        height: 100px;
        box-shadow: 0 5px #BFC0CD inset;
    }
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
    margin-top: 38px;
    box-shadow: 0 -12px #C76C1B inset;

    @media (max-width: 700px) {
        width: 244px;
        height: 250px;
    }

    @media (max-width: 525px) {
        width: 200px;
        height: 205px;
    }

    @media(max-width: 425px) {
        width: 165px;
        height: 165px;
        margin-top: 38px;
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #C76C1B inset;
    }
`;

const LargeScissorsButton = styled.div`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
        width: 174px;
        height: 176px;
    }

    @media (max-width: 525px) {
        width: 130px;
        height: 132px;
    }

    @media(max-width: 425px) {
        width: 115px;
        height: 117px;
    }

    @media(max-width: 375px) {
        width: 100px;
        height: 100px;
        box-shadow: 0 5px #BFC0CD inset;
    }
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
    margin-top: 38px;
    box-shadow: 0 -12px #9F1933 inset;

    @media (max-width: 700px) {
        width: 244px;
        height: 250px;
    }

    @media (max-width: 525px) {
        width: 200px;
        height: 205px;
    }

    @media(max-width: 425px) {
        width: 165px;
        height: 165px;
        margin-top: 38px;
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #9F1933 inset;
    }
`;

const LargeRockButton = styled.div`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
        width: 174px;
        height: 176px;
    }

    @media (max-width: 525px) {
        width: 130px;
        height: 132px;
    }

    @media(max-width: 425px) {
        width: 115px;
        height: 117px;
    }

    @media(max-width: 375px) {
        width: 100px;
        height: 100px;
        box-shadow: 0 5px #BFC0CD inset;
    }
`;

const LargeSpockDiv = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 38px;
    box-shadow: 0 -12px #2D8CA8 inset;

    @media (max-width: 700px) {
        width: 244px;
        height: 250px;
    }

    @media (max-width: 525px) {
        width: 200px;
        height: 205px;
    }

    @media(max-width: 425px) {
        width: 165px;
        height: 165px;
        margin-top: 38px;
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #2D8CA8 inset;
    }
`;

const LargeSpockButton = styled.div`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
        width: 174px;
        height: 176px;
    }

    @media (max-width: 525px) {
        width: 130px;
        height: 132px;
    }

    @media(max-width: 425px) {
        width: 115px;
        height: 117px;
    }

    @media(max-width: 375px) {
        width: 100px;
        height: 100px;
        box-shadow: 0 5px #BFC0CD inset;
    }
`;

const LargeLizardDiv = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(261, 72%, 63%), hsl(261, 73%, 60%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 38px;
    box-shadow: 0 -12px #5E38A9 inset;

    @media (max-width: 700px) {
        width: 244px;
        height: 250px;
    }

    @media (max-width: 525px) {
        width: 200px;
        height: 205px;
    }

    @media(max-width: 425px) {
        width: 165px;
        height: 165px;
        margin-top: 38px;
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #5E38A9 inset;
    }
`;

const LargeLizardButton = styled.div`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
        width: 174px;
        height: 176px;
    }

    @media (max-width: 525px) {
        width: 130px;
        height: 132px;
    }

    @media(max-width: 425px) {
        width: 115px;
        height: 117px;
    }

    @media(max-width: 375px) {
        width: 100px;
        height: 100px;
        box-shadow: 0 5px #BFC0CD inset;
    }
`;

const LargeRockImg = styled.img`
    width: 97px;
    height: 96px;    
    margin-top: 16px;
    margin-left: 3px;

    @media (max-width: 700px) {
        width: 80px;
        height: 80px;
    }

    @media(max-width: 525px) {
        width: 65px;
        height: 65px;
    }

    @media(max-width: 425px) {
        width: 50px;
        height: 50px;
    }

    @media(max-width: 375px) {
        width: 43px;
        height: 43px;
        margin-top: 9px;
    }
`;

const LargePaperImg = styled.img`
    width: 100px;
    height: 118px;    
    margin-top: 15px;
    margin-right: 5px;

    @media (max-width: 700px) {
        width: 85px;
        height: 94px;
    }

    @media(max-width: 525px) {
        width: 70px;
        height: 75px;
    }

    @media(max-width: 425px) {
        width: 55px;
        height: 60px;
    }

    @media(max-width: 375px) {
        width: 45px;
        height: 50px;
        margin-top: 5px;
    }
`;

const LargeScissorsImg = styled.img`
    width: 103px;
    height: 120px;    
    margin-top: 13px;
    margin-right: 15px;

    @media (max-width: 700px) {
        width: 85px;
        height: 94px;
    }

    @media(max-width: 525px) {
        width: 70px;
        height: 75px;
    }

    @media(max-width: 425px) {
        width: 55px;
        height: 60px;
    }

    @media(max-width: 375px) {
        width: 47px;
        height: 47px;
        margin-top: 5px;
        margin-right: 5px;
    }
`;

const LargeSpockImg = styled.img`
    width: 103px;
    height: 120px;    
    margin-top: 13px;
    margin-left: 17px;

    @media (max-width: 700px) {
        width: 85px;
        height: 94px;
    }

    @media(max-width: 525px) {
        width: 70px;
        height: 75px;
    }

    @media(max-width: 425px) {
        width: 55px;
        height: 60px;
    }

    @media(max-width: 375px) {
        width: 47px;
        height: 47px;
        margin-top: 5px;
        margin-right: 5px;
    }
`;

const LargeLizardImg = styled.img`
    width: 103px;
    height: 120px;    
    margin-top: 13px;
    margin-right: 15px;

    @media (max-width: 700px) {
        width: 85px;
        height: 94px;
    }

    @media(max-width: 525px) {
        width: 70px;
        height: 75px;
    }

    @media(max-width: 425px) {
        width: 55px;
        height: 60px;
    }

    @media(max-width: 375px) {
        width: 47px;
        height: 47px;
        margin-top: 5px;
        margin-right: 5px;
    }
`;

// Step 2
const AdvancedStep2ComputerSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 27px;
    padding-top: 2px;

    @media(max-width: 375px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
        padding-right: 5px;
    }
`;

const ComputerHeader2 = styled.div`
    font-family: 'Barlow Semi Condensed Regular', serif;
    font-size: 2.25rem;
    color: #FFFEFF;
    font-weight: 600;
    letter-spacing: 3.7px;
    margin-left: 2px;
    height: 50px;

    @media(max-width: 1000px) {
        text-align: center;
    }

    @media(max-width: 375px) {
        font-size: 1.35rem;
        letter-spacing: 2.7px;
        margin-left: 10px;
        margin-top: 25px;
        margin-right: 5px;
    }
`;

// Step 3
const AdvancedStep3ContianerDiv = styled.div`
    width: 100%;
    max-width: 1366px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 375px) {
        flex-direction: column-reverse;
    }
`;

const AdvancedStep3AlternativeMiddleDiv = styled.div`
    width: 100%;
    display: none;

    @media (max-width: 850px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const AdvancedStep3Div = styled.div`
    width: 100%;
    max-width: 950px;
    background-color: inherit;
    margin-top: 75px;
    height: 444px;
    display: flex;
    margin-right: 10px;

    @media(max-width: 850px) {
        margin: 15px 0 0 0;
        justify-content: space-between;
        padding: 0 20px;
        height: 340px;
    }
`;

const AdvancedStep3PlayerSide = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2px;

    @media (max-width: 1150px) {
        align-items: center;
        width: 50%;
    }

    @media(max-width: 375px) {
        width: 50%;
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: flex-start;
        padding-left: 7px;
        height: 80%;
    }
`;

const PlayerHeader2 = styled.div`
    font-family: 'Barlow Semi Condensed Regular', serif;
    font-size: 2.25rem;
    color: #FFFEFF;
    font-weight: 600;
    letter-spacing: 3.8px;
    padding-left: 75px;
    z-index: 100;

    @media (max-width: 1150px) {
        padding: 0px;
    }

    @media (max-width: 850px) {
        height: 50px;
    }

    @media (max-width: 600px) {
        font-size: 2.0rem;
    }

    @media(max-width: 375px) {
        font-size: 1.35rem;
        letter-spacing: 2.75px;
        margin-left: 23px;
        margin-top: 25px;
        height: auto;
        margin-bottom: 17px;
    }
`;

const AdvancedStep3MiddleDiv = styled.div`
    width: 280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    padding-left: 11.5px;
    z-index: 100;
    padding-bottom: 22px;

    @media (max-width: 1150px) {
        width: 180px;
    }

    @media (max-width: 850px) {
        display: none;
    }
`;

const AdvancedStep3MiddleHeader = styled.div`
    font-size: 5.37rem;
    color: white;
    letter-spacing: 1.7px;
    margin-bottom: 23px;
    margin-top: 23px;

    @media (max-width: 1150px) {
        font-size: 3.5rem;
    }

    @media (max-width: 850px) {
        font-size: 5.37rem;
    }

    @media (max-width: 375px) {
        margin-top: -6px;
        padding-left: 4px;
    }
`;

const AdvancedStep3Button = styled.div`
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
    margin-right: 3px;
    &:hover {
        color: #B73D53
    }

    @media (max-width: 1150px) {
        width: 150px;
    }

    @media (max-width: 850px) {
        width: 220px;
    }

    @media(max-width: 375px) {
        margin-left: 4px;
        margin-bottom: 25px;
    }
`;

const AdvancedStep3ComputerSide = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 2px;
    padding-right: 10px;

    @media (max-width: 1150px) {
        align-items: center;
        width: 50%;
    }

    @media(max-width: 375px) {
        width: 50%;
        flex-direction: column-reverse;
        align-items: flex-end;
        justify-content: flex-start;
        padding-right: 8px;
        height: 80%;
    }
`;

const ComputerHeader3 = styled.div`
    font-family: 'Barlow Semi Condensed Regular', serif;
    font-size: 2.25rem;
    color: #FFFEFF;
    font-weight: 600;
    letter-spacing: 3.8px;
    padding-right: 34px;
    z-index: 100;

    @media (max-width: 1150px) {
        padding: 0px;
        text-align: center;
    }

    @media (max-width: 850px) {
        height: 50px;
    }

    @media (max-width: 600px) {
        font-size: 2.0rem;
    }

    @media(max-width: 375px) {
        font-size: 1.35rem;
        letter-spacing: 2.72px;
        margin-top: 25px;
        margin-right: -7px;
        height: auto;
        margin-bottom: 17px;
    }
`;

const WinningPaperDiv = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    box-shadow: 0 -12px #2945C2 inset,
    0 0 0 65px rgba(44,55,85,0.65),
    0 0 0 135px rgba(36,49,81,0.80),
    0 -3px 0 212.5px rgba(36,49,81,0.50);

    @media (max-width: 1350px) {
        box-shadow: 0 -12px #2945C2 inset,
        0 0 0 35px rgba(44,55,85,0.65),
        0 0 0 70px rgba(36,49,81,0.80),
        0 -3px 0 115px rgba(36,49,81,0.50);
    }

    @media (max-width: 1150px) {
        box-shadow: 0 -12px #2945C2 inset,
        0 0 0 35px rgba(44,55,85,0.65),
        0 0 0 70px rgba(36,49,81,0.80);
        width: 244px;
        height: 250px;
    }

    @media (max-width: 850px) {
        margin-top: 15px;
        box-shadow: 0 -12px #2945C2 inset,
        0 0 0 25px rgba(44,55,85,0.65),
        0 0 0 50px rgba(36,49,81,0.85);
    }

    @media(max-width: 600px) {
        width: 194px;
        height: 200px;
    }

    @media(max-width: 450px) {
        width: 154px;
        height: 160px;
        margin-top: 35px;
        box-shadow: 0 -12px #2945C2 inset,
        0 0 0 15px rgba(44,55,185,0.90);
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #2945C2 inset,
        0 0 0 20px rgba(45,62,92,0.95),
        0 0 0 45px rgba(41,58,88,.85),
        0 -3px 0 77.5px rgba(34,53,85,.80);
    }
`;


const WinningScissorsDiv = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    box-shadow: 0 -12px #C76C1B inset,
    0 0 0 65px rgba(44,55,85,0.65),
    0 0 0 135px rgba(36,49,81,0.80),
    0 -3px 0 212.5px rgba(36,49,81,0.50);

    @media (max-width: 1350px) {
        box-shadow: 0 -12px #C76C1B inset,
        0 0 0 35px rgba(44,55,85,0.65),
        0 0 0 70px rgba(36,49,81,0.80),
        0 -3px 0 115px rgba(36,49,81,0.50);
    }

    @media (max-width: 1150px) {
        box-shadow: 0 -12px #C76C1B inset,
        0 0 0 35px rgba(44,55,85,0.65),
        0 0 0 70px rgba(36,49,81,0.80);
        width: 244px;
        height: 250px;
    }

    @media (max-width: 850px) {
        margin-top: 15px;
        box-shadow: 0 -12px #C76C1B inset,
        0 0 0 25px rgba(44,55,85,0.65),
        0 0 0 50px rgba(36,49,81,0.85);
    }

    @media(max-width: 600px) {
        width: 194px;
        height: 200px;
    }

    @media(max-width: 450px) {
        width: 154px;
        height: 160px;
        margin-top: 35px;
        box-shadow: 0 -12px #C76C1B inset,
        0 0 0 15px rgba(200,100,40,0.90);
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #C76C1B inset,
        0 0 0 20px rgba(45,62,92,0.95),
        0 0 0 45px rgba(41,58,88,.85),
        0 -3px 0 77.5px rgba(34,53,85,.80);
    }
`;

const WinningRockDiv = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    box-shadow: 0 -12px #9F1933 inset,
    0 0 0 65px rgba(44,55,85,0.65),
    0 0 0 135px rgba(36,49,81,0.80),
    0 -3px 0 212.5px rgba(36,49,81,0.50);

    @media (max-width: 1350px) {
        box-shadow: 0 -12px #9F1933 inset,
        0 0 0 35px rgba(44,55,85,0.65),
        0 0 0 70px rgba(36,49,81,0.80),
        0 -3px 0 115px rgba(36,49,81,0.50);
    }

    @media (max-width: 1150px) {
        box-shadow: 0 -12px #9F1933 inset,
        0 0 0 35px rgba(44,55,85,0.65),
        0 0 0 70px rgba(36,49,81,0.80);
        width: 244px;
        height: 250px;
    }

    @media (max-width: 850px) {
        margin-top: 15px;
        box-shadow: 0 -12px #9F1933 inset,
        0 0 0 25px rgba(44,55,85,0.65),
        0 0 0 50px rgba(36,49,81,0.85);
    }

    @media(max-width: 600px) {
        width: 194px;
        height: 200px;
    }

    @media(max-width: 450px) {
        width: 154px;
        height: 160px;
        margin-top: 35px;
        box-shadow: 0 -12px #9F1933 inset,
        0 0 0 15px rgba(175,20,40,0.90);
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #9F1933 inset,
        0 0 0 20px rgba(45,62,92,0.95),
        0 0 0 45px rgba(41,58,88,.85),
        0 -3px 0 77.5px rgba(34,53,85,.80);
    }
`;

const WinningSpockDiv = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    box-shadow: 0 -12px #2D8CA8 inset,
    0 0 0 65px rgba(44,55,85,0.65),
    0 0 0 135px rgba(36,49,81,0.80),
    0 -3px 0 212.5px rgba(36,49,81,0.50);

    @media (max-width: 1350px) {
        box-shadow: 0 -12px #2D8CA8 inset,
        0 0 0 35px rgba(44,55,85,0.65),
        0 0 0 70px rgba(36,49,81,0.80),
        0 -3px 0 115px rgba(36,49,81,0.50);
    }

    @media (max-width: 1150px) {
        box-shadow: 0 -12px #2D8CA8 inset,
        0 0 0 35px rgba(44,55,85,0.65),
        0 0 0 70px rgba(36,49,81,0.80);
        width: 244px;
        height: 250px;
    }

    @media (max-width: 850px) {
        margin-top: 15px;
        box-shadow: 0 -12px #2D8CA8 inset,
        0 0 0 25px rgba(44,55,85,0.65),
        0 0 0 50px rgba(36,49,81,0.85);
    }

    @media(max-width: 600px) {
        width: 194px;
        height: 200px;
    }

    @media(max-width: 450px) {
        width: 154px;
        height: 160px;
        margin-top: 35px;
        box-shadow: 0 -12px #2D8CA8 inset,
        0 0 0 15px rgba(11,171,212,0.95);
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #2D8CA8 inset,
        0 0 0 20px rgba(45,62,92,0.95),
        0 0 0 45px rgba(41,58,88,.85),
        0 -3px 0 77.5px rgba(34,53,85,.80);
    }
`;

const WinningLizardDiv = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(261, 72%, 63%), hsl(261, 73%, 60%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    box-shadow: 0 -12px #5E38A9 inset,
    0 0 0 65px rgba(44,55,85,0.65),
    0 0 0 135px rgba(36,49,81,0.80),
    0 -3px 0 212.5px rgba(36,49,81,0.50);

    @media (max-width: 1350px) {
        box-shadow: 0 -12px #5E38A9 inset,
        0 0 0 35px rgba(44,55,85,0.65),
        0 0 0 70px rgba(36,49,81,0.80),
        0 -3px 0 115px rgba(36,49,81,0.50);
    }

    @media (max-width: 1150px) {
        box-shadow: 0 -12px #5E38A9 inset,
        0 0 0 35px rgba(44,55,85,0.65),
        0 0 0 70px rgba(36,49,81,0.80);
        width: 244px;
        height: 250px;
    }

    @media (max-width: 850px) {
        margin-top: 15px;
        box-shadow: 0 -12px #5E38A9 inset,
        0 0 0 25px rgba(44,55,85,0.65),
        0 0 0 50px rgba(36,49,81,0.85);
    }

    @media(max-width: 600px) {
        width: 194px;
        height: 200px;
    }

    @media(max-width: 450px) {
        width: 154px;
        height: 160px;
        margin-top: 35px;
        box-shadow: 0 -12px #5E38A9 inset,
        0 0 0 15px rgba(89,0,255,0.90);
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #5E38A9 inset,
        0 0 0 20px rgba(45,62,92,0.95),
        0 0 0 45px rgba(41,58,88,.85),
        0 -3px 0 77.5px rgba(34,53,85,.80);
    }
`;

const LargePaperDiv2 = styled.div`
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
    z-index: 100;

    @media (max-width: 1150px) {
        width: 244px;
        height: 250px;
    }

    @media (max-width: 850px) {
        margin-top: 15px;
    }

    @media(max-width: 600px) {
        width: 194px;
        height: 200px;
    }

    @media(max-width: 450px) {
        width: 154px;
        height: 160px;
        margin-top: 35px;
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #2945C2 inset;
    }
`;

const LargePaperButton2 = styled.div`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1150px) {
        width: 174px;
        height: 176px;
        box-shadow: 0 10px #BFC0CD inset;
    }

    @media(max-width: 600px) {
        width: 134px;
        height: 136px;
        box-shadow: 0 8px #BFC0CD inset;
    }

    @media(max-width: 450px) {
        width: 110px;
        height: 110px;
        box-shadow: 0 7px #BFC0CD inset;
    }

    @media(max-width: 375px) {
        width: 100px;
        height: 100px;
        box-shadow: 0 5px #BFC0CD inset;
        margin-bottom: 5px;
    }
`;

const LargeScissorsDiv2 = styled.div`
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
    z-index: 100;

    @media (max-width: 1150px) {
        width: 244px;
        height: 250px;
    }

    @media (max-width: 850px) {
        margin-top: 15px;
    }

    @media(max-width: 600px) {
        width: 194px;
        height: 200px;
    }

    @media(max-width: 450px) {
        width: 154px;
        height: 160px;
        margin-top: 35px;
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 30px;
        margin-left: 2px;
        box-shadow: 0 -5px #C76C1B inset;
    }
`;

const LargeScissorsButton2 = styled.div`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1150px) {
        width: 174px;
        height: 176px;
        box-shadow: 0 10px #BFC0CD inset;
    }

    @media(max-width: 600px) {
        width: 134px;
        height: 136px;
        box-shadow: 0 8px #BFC0CD inset;
    }

    @media(max-width: 450px) {
        width: 110px;
        height: 110px;
        box-shadow: 0 7px #BFC0CD inset;
    }

    @media(max-width: 375px) {
        width: 100px;
        height: 100px;
        box-shadow: 0 5px #BFC0CD inset;
        margin-bottom: 5px;
    }
`;

const LargeRockDiv2 = styled.div`
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
    z-index: 100;

    @media (max-width: 1150px) {
        width: 244px;
        height: 250px;
    }

    @media (max-width: 850px) {
        margin-top: 15px;
    }

    @media(max-width: 600px) {
        width: 194px;
        height: 200px;
    }

    @media(max-width: 450px) {
        width: 154px;
        height: 160px;
        margin-top: 35px;
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #9F1933 inset;
    }
`;

const LargeRockButton2 = styled.div`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1150px) {
        width: 174px;
        height: 176px;
        box-shadow: 0 10px #BFC0CD inset;
    }

    @media(max-width: 600px) {
        width: 134px;
        height: 136px;
        box-shadow: 0 8px #BFC0CD inset;
    }

    @media(max-width: 450px) {
        width: 110px;
        height: 110px;
        box-shadow: 0 7px #BFC0CD inset;
    }

    @media(max-width: 375px) {
        width: 100px;
        height: 100px;
        box-shadow: 0 5px #BFC0CD inset;
        margin-bottom: 5px;
    }
`;

const LargeSpockDiv2 = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    box-shadow: 0 -12px #2D8CA8 inset;
    z-index: 100;

    @media (max-width: 1150px) {
        width: 244px;
        height: 250px;
    }

    @media (max-width: 850px) {
        margin-top: 15px;
    }

    @media(max-width: 600px) {
        width: 194px;
        height: 200px;
    }

    @media(max-width: 450px) {
        width: 154px;
        height: 160px;
        margin-top: 35px;
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #2D8CA8 inset;
    }
`;

const LargeSpockButton2 = styled.div`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1150px) {
        width: 174px;
        height: 176px;
        box-shadow: 0 10px #BFC0CD inset;
    }

    @media(max-width: 600px) {
        width: 134px;
        height: 136px;
        box-shadow: 0 8px #BFC0CD inset;
    }

    @media(max-width: 450px) {
        width: 110px;
        height: 110px;
        box-shadow: 0 7px #BFC0CD inset;
    }

    @media(max-width: 375px) {
        width: 100px;
        height: 100px;
        box-shadow: 0 5px #BFC0CD inset;
        margin-bottom: 5px;
    }
`;

const LargeLizardDiv2 = styled.div`
    width: 294px;
    height: 300px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(hsl(261, 72%, 63%), hsl(261, 73%, 60%));
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    box-shadow: 0 -12px #5E38A9 inset;
    z-index: 100;

    @media (max-width: 1150px) {
        width: 244px;
        height: 250px;
    }

    @media (max-width: 850px) {
        margin-top: 15px;
    }

    @media(max-width: 600px) {
        width: 194px;
        height: 200px;
    }

    @media(max-width: 450px) {
        width: 154px;
        height: 160px;
        margin-top: 35px;
    }

    @media(max-width: 375px) {
        width: 130px;
        height: 135px;
        margin-top: 20px;
        margin-left: 2px;
        box-shadow: 0 -5px #5E38A9 inset;
    }
`;

const LargeLizardButton2 = styled.div`
    width: 224px;
    height: 226px;
    border-radius: 50%;
    background-color: #DBDBDB;
    border: none;
    background-image: linear-gradient(hsl(0, 0%, 94%), hsl(0, 0%, 86%));
    margin-bottom: 8px;
    box-shadow: 0 12px #BFC0CD inset;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1150px) {
        width: 174px;
        height: 176px;
        box-shadow: 0 10px #BFC0CD inset;
    }

    @media(max-width: 600px) {
        width: 134px;
        height: 136px;
        box-shadow: 0 8px #BFC0CD inset;
    }

    @media(max-width: 450px) {
        width: 110px;
        height: 110px;
        box-shadow: 0 7px #BFC0CD inset;
    }

    @media(max-width: 375px) {
        width: 100px;
        height: 100px;
        box-shadow: 0 5px #BFC0CD inset;
        margin-bottom: 5px;
    }
`;

const LargeRockImg2 = styled.img`
    width: 97px;
    height: 96px;    
    margin-top: 16px;
    margin-left: 3px;

    @media(max-width: 1150px) {
        width: 80px;
        height: 80px;
        margin-left: 0px;
    }

    @media(max-width: 600px) {
        width: 65px;
        height: 65px;
    }

    @media(max-width: 450px) {
        width: 50px;
        height: 50px;
    }

    @media(max-width: 375px) {
        width: 43px;
        height: 43px;
        margin-top: 9px;
    }
`;

const LargePaperImg2 = styled.img`
    width: 100px;
    height: 118px;    
    margin-top: 15px;
    margin-right: 5px;

    @media(max-width: 1150px) {
        width: 85px;
        height: 94px;
        margin-top: 12px;
        margin-right: 4px;
    }

    @media(max-width: 600px) {
        width: 70px;
        height: 75px;
        margin-top: 8px;
        margin-right: 1px;
    }

    @media(max-width: 450px) {
        width: 55px;
        height: 60px;
    }

    @media(max-width: 375px) {
        width: 45px;
        height: 50px;
        margin-top: 5px;
    }
`;

const LargeScissorsImg2 = styled.img`
    width: 103px;
    height: 120px;    
    margin-top: 13px;
    margin-right: 15px;

    @media(max-width: 1150px) {
        width: 85px;
        height: 94px;
        margin-right: 5px;
    }

    @media(max-width: 600px) {
        width: 70px;
        height: 75px;
        margin-right: 2px;
        margin-top: 10px;
    }

    @media(max-width: 450px) {
        width: 55px;
        height: 60px;
    }

    @media(max-width: 375px) {
        width: 47px;
        height: 47px;
        margin-top: 5px;
        margin-right: 5px;
    }
`;

const LargeSpockImg2 = styled.img`
    width: 103px;
    height: 120px;    
    margin-top: 13px;
    margin-left: 17px;

    @media(max-width: 1150px) {
        width: 85px;
        height: 94px;
    }

    @media (max-width: 600px) {
        width: 70px;
        height: 75px;
    }

    @media(max-width: 450px) {
        width: 55px;
        height: 60px;
        margin-left: 10px;
    }

    @media(max-width: 375px) {
        width: 47px;
        height: 47px;
        margin-top: 5px;
        margin-right: 5px;
    }
`;

const LargeLizardImg2 = styled.img`
    width: 103px;
    height: 120px;    
    margin-top: 13px;
    margin-right: 15px;

    @media(max-width: 1150px) {
        width: 85px;
        height: 94px;
        margin-right: 4px;
        margin-top: 6px;
    }

    @media (max-width: 600px) {
        width: 75px;
        height: 75px;
    }

    @media(max-width: 450px) {
        width: 55px;
        height: 60px;
    }

    @media(max-width: 375px) {
        width: 47px;
        height: 47px;
        margin-top: 5px;
        margin-right: 5px;
    }
`;

export {
    AdvancedOutsideDiv,
    AdvancedScoreOutsideDiv,
    AdvancedScoreTitle,
    AdvancedScoreInsideDiv,
    AdvancedScoreInsideP,
    AdvancedScoreInsideCounter,
    AdvancedStep0Div,
    AdvancedRockImg,
    AdvancedScissorsImg,
    AdvancedPaperImg,
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
    AdvancedStep1Div,
    AdvancedStep1PlayerSide,
    AdvancedStep1ComputerSide,
    PlayerHeader,
    ComputerHeader,
    ComputerPlaceHolder,
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
    AdvancedStep2ComputerSide,
    ComputerHeader2,
    AdvancedStep3ContianerDiv,
    AdvancedStep3AlternativeMiddleDiv,
    AdvancedStep3Div,
    AdvancedStep3PlayerSide,
    PlayerHeader2,
    AdvancedStep3MiddleDiv,
    AdvancedStep3MiddleHeader,
    AdvancedStep3Button,
    AdvancedStep3ComputerSide,
    ComputerHeader3,
    WinningPaperDiv,
    WinningRockDiv,
    WinningScissorsDiv,
    WinningSpockDiv,
    WinningLizardDiv,
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
}