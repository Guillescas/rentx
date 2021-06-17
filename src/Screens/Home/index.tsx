import { useNavigation } from '@react-navigation/native';
import React, { ReactElement, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import Logo from '../../assets/logo.svg';

import { CarCard } from '../../components/CarCard';
import { Loading } from '../../components/Loading';

import api from '../../services/api';

import { ICarDTO } from '../../dtos/CarDTO';

import * as S from './styles';

export const Home = (): ReactElement => {
  const navigation = useNavigation();
  const theme = useTheme();

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

  const handleClickOnCarCard = (car: ICarDTO) => {
    navigation.navigate('CarDetails', { car });
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
          <S.TotalCars>Total de {cars.length} carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      {isLoading ? (
        <Loading />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CarCard data={item} onPress={() => handleClickOnCarCard(item)} />
          )}
        />
      )}

      <S.MyCarsButton onPress={() => navigation.navigate('MyCars')}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </S.MyCarsButton>
    </S.Container>
  );
};
