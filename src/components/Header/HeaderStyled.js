import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  min-height: 68px;
  padding-right: 24px;
  color: var(--primary-heading-color);
  background-color: var(--header-background-color);

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 1439px) {
    padding-left: 20px;
    padding-right: 32px;
  }
`;

export const IconBM = styled.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: var(--primary-icon-stroke-color);

  @media (min-width: 1440px) {
    display: none;
  }

  &:hover {
    box-shadow: 0px 6px 7px 1px var(--user-edit-icon-plus-hover-color);
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomSelect = styled.div`
  position: relative;
`;

export const CustomOptionList = styled.ul`
  position: absolute;
  display: ${props => (props.open ? 'block' : 'none')};
  top: 20px;
  left: -105px;
  margin: 0;
  padding: 18px 44px 18px 18px;
  list-style: none;
  border: solid 1px var(--theme-switcher-dropdown-border-color);
  border-radius: 8px;
  background-color: var(--header-background-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  z-index: 1;
`;

export const CustomOption = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  color: var(--theme-switcher-dropdown-text-color);

  &:hover {
    color: var(--theme-switcher-dropdown-hover-color);
  }

  ${props =>
    props.selected &&
    `
      color: var(--primary-button-color);
    `}
`;

export const TheamBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    padding: 5px;
    box-shadow: 0px 6px 7px -5px var(--user-edit-icon-plus-hover-color);
  }
`;

export const IconDown = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  fill: transparent;
  stroke: var(--primary-icon-stroke-color);
`;
