import { useNavigation } from '@react-navigation/native';
import React, { ReactElement, useEffect, useState } from 'react';

import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { CarCard } from '../../components/CarCard';

import api from '../../services/api';
import { ICarDTO } from '../../dtos/CarDTO';

import * as S from './styles';
import { Loading } from '../../components/Loading';

export const Home = (): ReactElement => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState<ICarDTO[]>([]);

  useEffect(() => {
    api
      .get('/cars')
      .then(response => {
        setCars(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

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

      {isLoading ? (
        <Loading />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CarCard
              data={item}
              onPress={() => navigation.navigate('CarDetails')}
            />
          )}
        />
      )}
    </S.Container>
  );
};
