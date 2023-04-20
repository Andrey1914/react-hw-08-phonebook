import React from 'react';
import PropTypes from 'prop-types';
import ContainerMui from '../Container/Container';
import { StyledSection, SectionTitle } from './SectionStyled';

export default function Section({ title, children }) {
  return (
    <StyledSection component="section">
      <ContainerMui>
        <SectionTitle variant="h1">{title}</SectionTitle>
        {children}
      </ContainerMui>
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
};
