import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledContDropMenu = styled.div`
  position: absolute;
  width: fit-content;
`;

const StyledFullscreenNav = styled.nav`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) =>
    theme?.fullscreenNav?.background?.color ||
    inube.fullscreenNav.background.color};
  padding: 0px 16px;
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
`;

const StyledSeparatorLine = styled.div`
  width: calc(100% - 32px);
  margin: 16px 16px 16px;
  height: 1px;
  background-color: ${({ theme }) =>
    theme?.fullscreenNav?.divider?.color || inube.fullscreenNav.divider.color};
`;

const StyledFooter = styled.footer`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  gap: 24px;
`;

const StyledDetails = styled.details`
  width: 100%;
  margin: 0 24px;
  list-style: none;
`;

const StyledSummary = styled.summary`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) =>
      theme?.fullscreenNav?.background?.color ||
      inube.fullscreenNav.background.color};
  }
`;

const StyledFooterLogoImage = styled.img`
  width: 124px;
  height: auto;
  display: block;
  padding: 24px 62px;
`;

export {
  StyledContDropMenu,
  StyledFullscreenNav,
  StyledSeparatorLine,
  StyledFooter,
  StyledFooterLogoImage,
  StyledDetails,
  StyledSummary,
};
