import styled from 'styled-components';
import Header from '../public/Header';
import { BlackButton } from '../public/BlackButton';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  min-width: 50%;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
`;
export const BodyContainer = styled.div`
  min-width: 50%;
  width: 100vw;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2fr 1.2fr 0.5fr repeat(5, 2fr);
`;
export const Title = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
`;
export const TitleTo = styled.p`
  width: 44px;
  height: 35px;
  justify-self: center;
  align-self: center;
  margin: 0;
  padding-right: 60px;

  font-family: 'Pretendard';
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const TitleP = styled.p`
  margin-bottom: 0;
  margin-top: 10px;
  justify-self: center;
  align-self: center;

  color: #000;
  font-family: 'Pretendard';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Border = styled.hr`
  grid-column: 2/3;
  grid-row: 3/4;
  width: 846px;
  height: 1px;
  border: 1px solid rgba(128, 136, 8, 0);
  background: #d9d9d9;
  margin: 1px;
`;
export const Letter = styled.div`
  grid-column: 2/3;
  grid-row: 4/7;

  /* outline: none;
  border: none;
  background-color: transparent;
  border-radius: 5px; */

  color: #000;
  font-family: 'Pretendard';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const ButtonContainer = styled.div`
  grid-column: 2/3;
  grid-row: 8/9;
`;

export default function WatchingLetter() {
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <Title>
          <TitleTo>From.</TitleTo>
          <TitleP>이예나</TitleP>
        </Title>
        <Border></Border>
        <Letter>받은 내용</Letter>
        <ButtonContainer>
        <Link to="/MyPage" style={{ textDecoration: 'none' }}>
          <BlackButton>확인</BlackButton>
          </Link>
        </ButtonContainer>
      </BodyContainer>
    </MainContainer>
  );
}
