import React, { ReactElement } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

interface IButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  isLoading?: boolean;
}

export const Button = ({
  title,
  color,
  onPress,
  enabled = true,
  isLoading = false,
  ...rest
}: IButtonProps): ReactElement => {
  const theme = useTheme();

  return (
    <S.Container
      color={color || theme.colors.main}
      {...rest}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false || isLoading === true ? 0.5 : 1 }}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.shape} size="large" />
      ) : (
        <S.Title>{title}</S.Title>
      )}
    </S.Container>
  );
};
