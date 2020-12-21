import React from 'react';
import { StyledSectionTitle, StyledSectionText } from './section-title.style';

const SectionTitle = ({ children }) => {
    return (
        <StyledSectionTitle>
            <StyledSectionText>{children}</StyledSectionText>
        </StyledSectionTitle>
    )
}


export { SectionTitle }