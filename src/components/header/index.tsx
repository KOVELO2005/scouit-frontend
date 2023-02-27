import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Hamburger, LogoWithText } from '@/assets';
import { NavigationList } from '../common/list/Navigation';
import { NavListIsLogin } from './constants';
import { profileSelectBox } from '@/store/modal';
import { ProfileSelectBox } from '../selectBox/Profile';
import { localStorgeGetItem } from '@/utils/storge';
import { media } from '@/styles/media';
import { BottomListNav, BottomHeaderType } from './bottom/ListNav';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';
import { _ColumnContent, _Columns } from '@/layouts/Columns';

export const Header = ({
  textList,
  currentPage,
  gap,
  isMedia,
}: BottomHeaderType) => {
  const profile = useRecoilValue(profileSelectBox);
  const display = useHeaderScroll();
  return (
    <_Wrapper padding="0 1.5rem" as="header">
      <_Column12
        direction="row"
        align="center"
        justify="space-between"
        display={display}
      >
        <Link to="/">
          <LogoWithText />
        </Link>
        <nav>
          <NavigationList
            list={NavListIsLogin(!!localStorgeGetItem('access_token'))}
          />
          <_Hamburger>
            <Hamburger />
          </_Hamburger>
        </nav>
      </_Column12>
      {profile && <ProfileSelectBox />}
      {textList && (
        <BottomListNav
          textList={textList}
          currentPage={currentPage}
          gap={gap}
          isMedia={isMedia}
        />
      )}
    </_Wrapper>
  );
};

const _Wrapper = styled(_Columns)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray4};
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: ${({ theme }) => theme.shadow.modal};
  ${media._720('padding: 0 1rem;')};
`;

const _Column12 = styled(_ColumnContent)<{ display: boolean }>`
  transition: height 0.25s;
  height: 70px;
  ${({ display }) =>
    !display &&
    css`
      visibility: hidden;
      height: 0;
    `}
`;

const _Hamburger = styled.div`
  cursor: pointer;
  display: none;
  ${media._720('display: block;')}
`;
