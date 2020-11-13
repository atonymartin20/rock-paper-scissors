import styled from 'styled-components';
import '../../index.css';

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

export {
    HomepageOutsideDiv,
    HomepageInsideDiv,
}