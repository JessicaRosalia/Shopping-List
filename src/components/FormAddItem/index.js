import styled from 'styled-components';
import Box from '../Box';
import Button from '../Button';

export const FormAddItem = styled(Box).attrs({ as: 'form' })`
    width:50vw;
    display: flex;
    flex-direction: column;
    padding:30px 50px;
`;

export const TitleForm = styled.h1`
    color: #4848BB;
    font-size:40px;
    text-align: center;
    margin-bottom:10px;
`;

export const LabelField = styled.p`
    color: rgba(0,0,0,.85);
    font-size:20px;
    margin:10px 0;
`;

export const SearchField = styled.input`
    width:300px;
    height:30px;
    background-color: #FBFBFB;
    outline:none;
    border: none;
`;

export const ButtonAdd = styled(Button).attrs({ as: 'button' })`
    background-color: #82C762;
    color:#F4F4F4;
`;