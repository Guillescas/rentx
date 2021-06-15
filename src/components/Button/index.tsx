import React, { ReactElement } from 'react';
import { useTheme } from 'styled-components';

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
  const theme = useTheme();

  return (
    <S.Container color={color || theme.colors.main} {...rest} onPress={onPress}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
