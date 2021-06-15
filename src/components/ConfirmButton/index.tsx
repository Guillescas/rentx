import React, { ReactElement } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

interface IConfirmButtonProps extends RectButtonProps {
  title: string;
}

export const ConfirmButton = ({
  title,
  ...rest
}: IConfirmButtonProps): ReactElement => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
