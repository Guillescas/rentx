import React, { ReactElement, useEffect, useState } from 'react';
import { Alert, StatusBar, FlatList } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { CarCard } from '../../components/CarCard';
import { Loading } from '../../components/Loading';

import api from '../../services/api';

import { ICarDTO } from '../../dtos/CarDTO';

import * as S from './styles';

interface ICarProps {
  id: string;
  user_id: string;
  car: ICarDTO;
  startDate: string;
  endDate: string;
}

export const MyCars = (): ReactElement => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState<ICarProps[]>([]);

  useEffect(() => {
    api
      .get(`/schedules_byuser?user_id=1`)
      .then(response => {
        setCars(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        Alert.alert('Algo deu errado. Tente novamente mais tarde.');
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
        <BackButton
          color={theme.colors.shape}
          onPress={() => navigation.goBack()}
        />

        <S.Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </S.Title>

        <S.SubTitle>Conforto, segurança e praticidade.</S.SubTitle>
      </S.Header>

      {isLoading ? (
        <Loading />
      ) : (
        <S.Content>
          <S.Appointments>
            <S.AppointmentsTitle>Agendamentos feitos</S.AppointmentsTitle>
            <S.AppointmentsAmount>{cars.length}</S.AppointmentsAmount>
          </S.Appointments>

          <FlatList
            data={cars}
            keyExtractor={car => car.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <S.CarWrapper>
                <CarCard data={item.car} />
                <S.CarFooter>
                  <S.CarFooterTitle>Período</S.CarFooterTitle>
                  <S.CarFooterPeriod>
                    <S.CarFooterDate>{item.startDate}</S.CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <S.CarFooterDate>{item.endDate}</S.CarFooterDate>
                  </S.CarFooterPeriod>
                </S.CarFooter>
              </S.CarWrapper>
            )}
          />
        </S.Content>
      )}
    </S.Container>
  );
};
