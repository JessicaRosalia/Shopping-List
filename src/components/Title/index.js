import styled, { css } from 'styled-components';

const GenericText = css`
    color: ${(props) => props.color}
`;

const TitleStyle = styled.h1`
    font-size:25px;
    font-weight: bold;
    ${GenericText};
    font-family: 'Helvetica';
`;

const TextStyle = styled.p`
    ${GenericText}
    font-size:19px;
    font-style: italic;
`;

function Title({ value, color, type }) {
    const TYPES = {
        title: <TitleStyle type={type} color="#fff" > {value} </TitleStyle>,
        text: <TextStyle color={color} type={type}>{value}</TextStyle>
    };
    return (
        TYPES[type]
    )
}

export default Title;