import styled from 'styled-components';

export const getBackgroundValue = string => {
    const defaultValue = '#1875f0';
    const backList = {
        gold: '#f18f1c',
        green: '#0f0',
        red:'#d52027',
        purple: '#9820d5',
        pink: '#ca20d5',
        yellow: '#f0e218',
        brown: '#AA650B'
    }
    return backList.hasOwnProperty(string)
        ? backList[string]
        : defaultValue
}

export const StyledButton = styled.div `
    background-color: ${({ backgroundColor }) => getBackgroundValue(backgroundColor)};
    font-size: 12px;
    font-weight: bolder;
    color:#fff;
    border-radius: 20px;
    height: 40px;
    border: 0;
    padding: 0 ${({icon}) => icon ? 12 : 26}px;
    margin: 0 auto;
    display:inline-flex;
    align-items: center;
    justify-items: center;
`