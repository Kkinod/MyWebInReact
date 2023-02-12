import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import { Section } from 'components/atoms/Section/Section.styles';

export const Section_About = styled(Section)`
    padding: 15rem 0 25rem;
    background-color: ${({ theme }: ITheme): string => theme.colors.greyLight1};
`;
