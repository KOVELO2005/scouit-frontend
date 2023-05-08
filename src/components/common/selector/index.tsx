import { Button } from '@scouit/design-system';
import styled, { css } from 'styled-components';

interface PropsType {
  list: string[];
  value: string;
  onClick: (value: string) => void;
}

export const Selector = ({ list, value, onClick }: PropsType) => (
  <_Wrapper>
    {list.map((str) => (
      <_Button
        kind="text"
        isSelect={str === value}
        onClick={() => onClick(str)}
      >
        {str}
      </_Button>
    ))}
  </_Wrapper>
);

const _Wrapper = styled.div`
  display: flex;
  gap: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary700};
`;

const _Button = styled(Button)<{ isSelect: boolean }>`
  width: fit-content;
  padding: 10px 18px;
  color: ${({ theme }) => theme.color.primary700};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  ${({ theme, isSelect }) => {
    const { gray0, primary700 } = theme.color;
    return (
      isSelect &&
      css`
        color: ${gray0};
        background-color: ${primary700};
        :hover {
          background-color: ${primary700};
        }
      `
    );
  }}
`;
