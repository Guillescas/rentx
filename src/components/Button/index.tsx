import React, { ReactElement } from 'react';

import * as S from './styles';

interface IButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}

export const Button = ({
  title,
  color,
  onPress,
  ...rest
}: IButtonProps): ReactElement => {
  return (
    <S.Container color={color} {...rest} onPress={onPress}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
