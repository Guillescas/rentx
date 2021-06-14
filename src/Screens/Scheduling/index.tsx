import React, { ReactElement } from 'react';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import LeftArrowSvg from '../../assets/arrow.svg';

import * as S from './styles';

export const Scheduling = (): ReactElement => {
  const theme = useTheme();

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <S.Header>
        <BackButton
          color={theme.colors.shape}
          onPress={() => {
            console.log('a');
          }}
        />

        <S.Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected={false} />
          </S.DateInfo>

          <LeftArrowSvg />

          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected>18/04/2021</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>

      <S.Content>
        <Calendar />
      </S.Content>

      <S.Footer>
        <Button title="Confirmar" onPress={() => console.log('aaa')} />
      </S.Footer>
    </S.Container>
  );
};
