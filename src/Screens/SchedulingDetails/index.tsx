import React, { ReactElement, useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { format } from 'date-fns';

import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { Alert } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { CarAccessory } from '../../components/CarAccessory';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import getAccessoryIcon from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';

import { ICarDTO } from '../../dtos/CarDTO';

import api from '../../services/api';

import * as S from './styles';

interface ICarDetailsParams {
  car: ICarDTO;
  dates: string[];
}

interface IRentalPeriodProps {
  dayOfStart: string;
  dayOfEnd: string;
}

export const SchedulingDetails = (): ReactElement => {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();

  const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriodProps>(
    {} as IRentalPeriodProps,
  );

  const { car, dates } = route.params as ICarDetailsParams;

  const totalRent = Number(dates.length * car.rent.price);

  useEffect(() => {
    setRentalPeriod({
      dayOfStart: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyy'),
      dayOfEnd: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        'dd/MM/yyy',
      ),
    });
  }, [dates]);

  const handleFinishScheduling = async () => {
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unvailableDates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unvailable_dates: unvailableDates,
      })
      .then(() => {
        navigation.navigate('CompleteScheduling');
      })
      .catch(() => Alert.alert('Algo deu errado. Tente novamente mais tarde.'));
  };

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => navigation.goBack()} />
      </S.Header>

      <S.CardImages>
        <ImageSlider imagesUrl={car.photos} />
      </S.CardImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>R$ {car.rent.price}</S.Price>
          </S.Rent>
        </S.Details>

        <S.CarAccessories>
          {car.accessories.map(accessory => (
            <CarAccessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </S.CarAccessories>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue>{rentalPeriod.dayOfStart}</S.DateValue>
          </S.DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue>{rentalPeriod.dayOfEnd}</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuote>{`R$ ${car.rent.period} x${dates.length} diárias`}</S.RentalPriceQuote>
            <S.RentalPriceTotal>R$ {totalRent}</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleFinishScheduling}
        />
      </S.Footer>
    </S.Container>
  );
};
