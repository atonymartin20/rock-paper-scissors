import styled from 'styled-components';
import '../../index.css';

const RulesBottomDiv = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 32px;

    @media(max-width: 375px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: center;
        height: 150px;
    }
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

    @media(max-width: 375px) {
        margin-bottom: 25px;
    }
`;

const RulesModalContainer = styled.div`
    max-width: 1366px;
    height: 770px;
    width: 100%;
    background-color: rgba(12, 18, 34, 0.85);
    display: flex;
    justify-content: center;
    align-items: center; 
    position: fixed;
    top: 0;
    z-index: 10000000000;

    @media(max-width: 375px) {
        height: 100%;
    }
`;

const RulesContainer = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 20px 28px;
    margin-bottom: 2px;

    @media(max-width: 375px) {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`;

const RulesTopBanner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 3.0rem;
    font-family: 'Barlow Semi Condensed', serif;
    color: hsl(229, 25%, 31%);
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin-top: 3px;
    padding: 12px 3px 0 3px;

    @media(max-width: 375px) {
        justify-content: center;
        margin-top: 19%;
    }
`;

const RulesImg = styled.img`
    padding: 0px 20px;
    margin-top: 30px;
    margin-bottom: 10px;

    @media(max-width: 375px) {
        margin-top: 27.10%;
        margin-right: 2px;
        margin-bottom: 45%;
    }
`;

const CloseIconImg = styled.img`
    width: 20px;
    height: 20px;

    @media(max-width: 375px) {
        display: none;
    }
`;

const CloseIconImgMobile = styled.img`
    width: 20px;
    height: 20px;
    display: none;

    @media(max-width: 375px) {
        display: block;
    }
`;

const AdvancedRulesTopBanner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 3.0rem;
    font-family: 'Barlow Semi Condensed', serif;
    color: hsl(229, 25%, 31%);
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: 1.2px;
    margin-top: 3px;
    padding: 12px 3px 0 3px;

    @media(max-width: 375px) {
        justify-content: center;
        margin-top: 20.5%;
    }
`;

const AdvancedRulesImg = styled.img`
    padding: 0px 15px;
    margin-top: 30px;
    margin-bottom: 10px;

    @media(max-width: 375px) {
        margin-top: 24.10%;
        margin-left: 2px;
        margin-bottom: 42.5%;
        width: 107%;
    }
`;

const AdvancedRulesBottomDiv = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 30px;
    margin-top: -22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 32px;

    @media(max-width: 375px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-items: center;
        height: 150px;
    }
`;

export {
    RulesBottomDiv,
    SwitchDifficultyButton,
    ShowRulesButton,
    RulesModalContainer,
    RulesContainer,
    RulesTopBanner,
    RulesImg,
    CloseIconImg,
    CloseIconImgMobile,
    AdvancedRulesTopBanner,
    AdvancedRulesImg,
    AdvancedRulesBottomDiv,
}