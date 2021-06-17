import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { ICarDTO } from '../../dtos/CarDTO';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background: ${({ theme }) => theme.colors.header};

  font-family: ${({ theme }) => theme.fonts.secondary_600};

  justify-content: flex-end;

  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList as new () => FlatList<ICarDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const MyCarsButton = styled(RectButton)`
  width: 60px;
  height: 60px;

  position: absolute;
  bottom: 18px;
  right: 22px;

  align-items: center;
  justify-content: center;

  border-radius: 30px;

  background: ${({ theme }) => theme.colors.main};
`;
