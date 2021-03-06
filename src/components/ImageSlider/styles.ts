import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface IImageIndexProps {
  active: boolean;
}

export const Container = styled.View``;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.View<IImageIndexProps>`
  width: 6px;
  height: 6px;

  background: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};

  margin-left: 8px;
  border-radius: 3px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px;

  align-items: center;
  justify-content: center;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
