import styled from 'styled-components';

interface StyleProps {
    active?: boolean;
    passed?:boolean;
    dropped?: boolean;
    rejected?: boolean;
    withdrawl?: boolean;
    deposit?: boolean;
}

export const WhiteDisplay = styled.h2`
    font-family: Spartan;
    font-weight: 700;
    font-size: 1.5rem;
    margin-left: 2em;
    margin-top: 1.5em;
`;

export const TransactRow = styled.div`
    width: 100%;
    border-top: solid #7d8c8b 2px;
    height: 8em;
    display: flex;
    flex-direction: row;
`;

export const LeftTransactRow = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const TransactionType = styled.h3`
    font-family: Spartan;
    font-weight: 600;
    font-size: 1.25;
    margin-left: 2em;
    margin-top: 1.5em;
`;

export const StatusBox = styled.div<StyleProps>`
    background-color: ${(props) => props.deposit ? 'rgba(1, 255, 165, 0.6)' : props.withdrawl ? 'rgba(255, 90, 80, 0.6)' : ''};
    margin-left: 2.5em;
    border-radius: 8px;
    text-align: center;
    font-family: Spartan;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.2em;
`;

export const TransactionDetails = styled.h4`
    font-size: 0.9rem;
    font-family: Spartan;
    font-weight: 400;
    color: #ffffff;
    height: 100%;
    margin-left: 1em;
    margin-top: 5em;
`;

export const Indicator = styled.div`
    justify-self: flex-end;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 3em;
    margin-left: auto;
`;
