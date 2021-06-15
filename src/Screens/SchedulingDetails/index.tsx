import React, { ReactElement } from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { CarAccessory } from '../../components/CarAccessory';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import * as S from './styles';

export const SchedulingDetails = (): ReactElement => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Header>
        <BackButton
          onPress={() => {
            console.log('a');
          }}
        />
      </S.Header>

      <S.CardImages>
        <ImageSlider
          imagesUrl={[
            'https://i.pinimg.com/originals/9a/eb/34/9aeb34414cf5a43cc58f0fe505c911f8.png',
          ]}
        />
      </S.CardImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>Lamborghini</S.Brand>
            <S.Name>Huracan</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>Ao dia</S.Period>
            <S.Price>500</S.Price>
          </S.Rent>
        </S.Details>

        <S.CarAccessories>
          <CarAccessory name="380km/h" icon={SpeedSvg} />
          <CarAccessory name="3.2s" icon={AccelerationSvg} />
          <CarAccessory name="800 HP" icon={ForceSvg} />
          <CarAccessory name="380km/h" icon={GasolineSvg} />
          <CarAccessory name="380km/h" icon={ExchangeSvg} />
          <CarAccessory name="380km/h" icon={PeopleSvg} />
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
            <S.DateValue>18/07/2021</S.DateValue>
          </S.DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue>18/07/2021</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuote>R$ 500 x3 diárias</S.RentalPriceQuote>
            <S.RentalPriceTotal>R$ 1.500,00</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button title="Confirmar" onPress={() => console.log('aoba')} />
      </S.Footer>
    </S.Container>
  );
};
