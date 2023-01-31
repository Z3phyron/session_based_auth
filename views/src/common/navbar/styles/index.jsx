import styled, { keyframes } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const fade_in = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const Container = styled.div`
  padding: 0 5%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;
export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-1);
  transition: all 0.3s ease-in-out;

  span {
    color: var(--color-4);
  }

  &:hover {
    transform: scale(1.06);
  }
`;

export const Hamburger = styled.div`
  font-size: 25px;
  display: none;
  z-index: 12;
  color: ${(p) => p.theme.text};
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: ${(p) => (p.open ? "block" : "none")};
  @media screen and (max-width: 500px) {
    animation: ${fade_in} 0.5s ease;
    background: ${(p) => p.theme.overlays};
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  z-index: 11;
  button {
    padding: 10px 25px;
    outline: none;
    border: none;
    border-radius: 8px;
    background: ${(p) => p.theme.button.background};
    color: ${(p) => p.theme.button.text};
    transition: 0.5s ease;

    &:hover {
      background: ${(p) => p.theme.button.hover.background};
      color: ${(p) => p.theme.button.hover.text};
    }
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    top: 0;
    padding: 0 5%;
    padding-top: 10vh;
    right: 0;
    width: 50%;
    height: 100vh;
    display: ${(p) => (p.open ? "flex" : "none")};
    flex-direction: column;
    background: ${(p) => p.theme.background};
    animation: ${fade_in} 0.7s ease;
    align-items: flex-start;
  }
`;
export const MenuItem = styled(NavLink)`
  color: ${(p) => p.theme.links.color};
  transition: 0.5s ease;

  &.active {
    color: ${(p) => p.theme.links.active};
  }

  &:hover {
    color: ${(p) => p.theme.links.active};
  }
`;
