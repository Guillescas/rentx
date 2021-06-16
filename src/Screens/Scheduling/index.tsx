import React, { ReactElement, useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import {
  Calendar,
  IDateProps,
  generateInterval,
  IMarkedDateProps,
} from '../../components/Calendar';

import { getPlatformDate } from '../../utils/getPlatformDate';

import { ICarDTO } from '../../dtos/CarDTO';

import LeftArrowSvg from '../../assets/arrow.svg';

import * as S from './styles';

interface IRentalPeriodProps {
  dayOfStart: number;
  formattedDayOfStart: string;
  dayOfEnd: number;
  formattedDayOfEnd: string;
}

interface ICarDetailsParams {
  car: ICarDTO;
}

export const Scheduling = (): ReactElement => {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();

  const { car } = route.params as ICarDetailsParams;

  const [lastSelectedDate, setLastSelectedDate] = useState<IDateProps>(
    {} as IDateProps,
  );
  const [markedDates, setMarkedDates] = useState<IMarkedDateProps>(
    {} as IMarkedDateProps,
  );
  const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriodProps>(
    {} as IRentalPeriodProps,
  );

  const handleChangeDate = (date: IDateProps) => {
    let firstSelectedDay = !lastSelectedDate.timestamp
      ? date
      : lastSelectedDate;
    let lastSelectedDay = date;

    if (firstSelectedDay.timestamp > lastSelectedDate.timestamp) {
      firstSelectedDay = lastSelectedDay;
      lastSelectedDay = firstSelectedDay;
    }

    setLastSelectedDate(lastSelectedDay);

    const datesInterval = generateInterval(firstSelectedDay, lastSelectedDay);
    setMarkedDates(datesInterval);

    const firstDayOfSelectedDays = Object.keys(datesInterval)[0];
    const lastDayOfSelectedDays =
      Object.keys(datesInterval)[Object.keys(datesInterval).length - 1];

    setRentalPeriod({
      dayOfStart: firstSelectedDay.timestamp,
      formattedDayOfStart: format(
        getPlatformDate(new Date(firstDayOfSelectedDays)),
        'dd/MM/yyyy',
      ),
      dayOfEnd: lastSelectedDay.timestamp,
      formattedDayOfEnd: format(
        getPlatformDate(new Date(lastDayOfSelectedDays)),
        'dd/MM/yyyy',
      ),
    });
  };

  const handleSubmitRentalDate = () => {
    if (!rentalPeriod.dayOfStart || !rentalPeriod.dayOfEnd) {
      Alert.alert('Selecione alguma data para alugar o veículo.');
    } else {
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDates),
      });
    }
  };

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

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.formattedDayOfStart}>
              {rentalPeriod.formattedDayOfStart}
            </S.DateValue>
          </S.DateInfo>

          <LeftArrowSvg />

          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.formattedDayOfEnd}>
              {rentalPeriod.formattedDayOfEnd}
            </S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>

      <S.Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </S.Content>

      <S.Footer>
        <Button title="Confirmar" onPress={handleSubmitRentalDate} />
      </S.Footer>
    </S.Container>
  );
};
