import React, { ReactElement } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import * as S from './styles';

export const CompletedScheduling = (): ReactElement => {
  const { width } = useWindowDimensions();

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <LogoSvg width={width} />
      <S.Content>
        <DoneSvg width={80} height={80} />
        <S.Title>Carro alugado!</S.Title>

        <S.Message>
          Agora você só precisa ir {'\n'}
          até uma concessionária da RENTX {'\n'}e pegar seu automóvel.
        </S.Message>
      </S.Content>

      <S.Footer>
        <ConfirmButton title="Ok" />
      </S.Footer>
    </S.Container>
  );
};
