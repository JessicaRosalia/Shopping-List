import styled, { css } from 'styled-components';

const GenericText = css`
    color: ${(props) => props.color}
`;

const TitleStyle = styled.h1`
    font-size:25px;
    ${GenericText}
`;

const TextStyle = styled.p`
    ${GenericText}
    font-size:19px;
    font-weight: bold;
`;

function Title({ value, color, type = "text" }) {
    const TYPES = {
        title: <TitleStyle color={color} > {value} </TitleStyle>,
        text: <TextStyle color={color} >{value}</TextStyle>
    };
    return (
        TYPES[type]
    )
}

export default Title;