import styled from 'styled-components/macro';
import { animationMoveInLeft, animationMoveInRight } from 'assets/styles/animations.styles';
import { ITheme } from 'assets/styles/theme';

export const HeadingBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const HeadingPrimary = styled.h1`
    color: ${({ theme }: ITheme): string => theme.colors.white};
`;

export const HeadingPrimaryMain = styled.span`
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
    color: ${({ theme }: ITheme): string => theme.colors.secondary};
    animation: ${animationMoveInLeft} 1s;
`;

export const HeadingPrimarySecond = styled.span`
    display: block;
    font-size: 6rem;
    font-weight: 500;
    text-transform: capitalize;
    animation: ${animationMoveInRight} 1s;
`;
