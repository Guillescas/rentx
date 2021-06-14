import React, { ReactElement } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { CarCard } from '../../components/CarCard';

import * as S from './styles';

export const Home = (): ReactElement => {
  const cardData = {
    brand: 'Audi',
    name: 'R8',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    imageUrl:
      'https://i.pinimg.com/originals/9a/eb/34/9aeb34414cf5a43cc58f0fe505c911f8.png',
  };

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      <S.CarList
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <CarCard data={cardData} />}
      />
    </S.Container>
  );
};
