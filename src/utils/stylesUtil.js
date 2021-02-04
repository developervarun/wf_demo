import styled from "styled-components";

export const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const LI = styled.li``;
export const Item = styled.div`
  display: flex;
  padding: 12px 18px;
  padding-left: ${props => `${props.depth * 18}px`};
  align-items: center;
`;
export const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer;
`;
export const Arrow = styled.span`
  display: flex;
  height: 25px;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000;
    transform: ${props => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;