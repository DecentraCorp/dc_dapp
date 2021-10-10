import styled from 'styled-components';

interface StyleProps {
    active?: boolean;
    passed?:boolean;
    dropped?: boolean;
    rejected?: boolean;
}

export const Wrapper = styled.div`
    width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-left: 2em;
    padding-right: 2em;
    margin-left: auto;
    margin-right: auto;
`;

export const AddNewBtn = styled.button`
    background-color: #01ffa5;
    border-radius: 6px;
    width: 231px;
    height: 61px;
    font-family: Spartan;
    font-weight: 600;
    font-size: 1.2rem;
    align-self: left;
    justify-self: left;
    margin-top: 3em;
    border: none;
`;

export const InfoDisplayWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3em;
    justify-content: space-between;
`;

export const InfoBox = styled.div`
    background-color: rgba(99, 109, 108, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: left;
    height: 144px;
    width: 374.69px;
    border-radius: 8px;
`;

export const InfoHeader = styled.h2`
    color: #01ffa5;
    font-family: Spartan;
    font-weight: 700;
    font-size: 1.5rem;
    opacity: 1;
    margin-left: 1em;
`;

export const InfoSecondary = styled.h3`
    color: #ffffff;
    font-family: Spartan;
    font-weight: 400;
    font-size: 2.5rem;
    opacity: 1;
    margin-left: 1em;
    margin-top: 0;
`;

export const ProposalsDisplay = styled.div`
    width: 100%;
    background-color: rgba(99, 109, 108, 0.4);
    height: 100%;
    margin-top: 2em;
    border-radius: 8px;
`;

export const WhiteDisplay = styled.h2`
    font-family: Spartan;
    font-weight: 700;
    font-size: 1.5rem;
    margin-left: 2em;
    margin-top: 1.5em;
`;

export const ProposalRow = styled.div`
    width: 100%;
    border-top: solid #7d8c8b 2px;
    height: 8em;
    display: flex;
    flex-direction: row;
`;

export const LeftProposalRow = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ProposalTitle = styled.h3`
    font-family: Spartan;
    font-weight: 600;
    font-size: 1.25;
    margin-left: 2em;
    margin-top: 1.5em;
`;

export const StatusBox = styled.div<StyleProps>`
    background-color: ${(props) => props.active ? 'rgba(1, 255, 165, 0.6)' : props.passed ? 'rgba(31, 229, 229, 0.6)' : props.rejected ? 'rgba(255, 90, 80, 0.6)' : props.dropped ? 'rgba(125, 140, 139, 0.6)' : ''};
    margin-left: 2.5em;
    border-radius: 8px;
    text-align: center;
    font-family: Spartan;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.2em;
`;

export const ProposalDetails = styled.h4`
    font-size: 0.9rem;
    font-family: Spartan;
    font-weight: 400;
    color: #ffffff;
    height: 100%;
    margin-left: 1em;
    margin-top: 5em;
`;

export const IndicatorImage = styled.img`
    height: 30%;
`;

export const Indicator = styled.div`
    justify-self: flex-end;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 65%;
`;

