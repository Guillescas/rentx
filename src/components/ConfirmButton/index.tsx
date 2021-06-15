import React, { ReactElement } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

interface IConfirmButtonProps extends RectButtonProps {
  title: string;
}

export const ConfirmButton = ({ title }: IConfirmButtonProps): ReactElement => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
