import styled from 'styled-components/macro';
import footerBgImg from 'assets/img/bed-middle.jpg';
import { ITheme } from 'assets/styles/theme';

export const FooterSection = styled.footer`
    position: relative;
    z-index: 0;
    padding: 10rem 0;
    background-image: url(${footerBgImg});
    background-position: center;
    background-size: cover;
    font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};
`;

export const FooterLogoBox = styled.div`
    margin-bottom: 8rem;
    text-align: center;
`;

export const FooterLogo = styled.img`
    width: 20rem;
    height: auto;
`;
