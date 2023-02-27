import styled from 'styled-components';
import { DetailProfile } from '@/components/card/detail/Profile';
import { Header } from '@/components/header';
import { media } from '@/styles/media';
import { _Columns, _ColumnContent } from '../Columns';
import { detailDummy } from '@/_dummy/profile';

interface PropsType {
  children: React.ReactNode;
}

export const DetailLayout = ({ children }: PropsType) => (
  <>
    <Header />
    <_Columns padding="200px 1rem 50px">
      <_Content direction="row" gap="1.5rem">
        <DetailProfile
          image={detailDummy.image}
          name={detailDummy.name}
          intro={detailDummy.intro}
          url={detailDummy.url}
        />
        <_ContentInner>{children}</_ContentInner>
      </_Content>
    </_Columns>
  </>
);

const _Content = styled(_ColumnContent)`
  ${media._1024('flex-direction: column')}
`;

const _ContentInner = styled.div`
  max-width: 643px;
  ${media._1024('max-width: 100%')}
`;
