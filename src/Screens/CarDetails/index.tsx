import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';

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

export const CarDetails = (): ReactElement => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => navigation.goBack()} />
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

        <S.About>
          Asuyagsauiys aisyuga siuaygs iausyg aiusyag siauygs aiuysg
        </S.About>
      </S.Content>

      <S.Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => navigation.navigate('Scheduling')}
        />
      </S.Footer>
    </S.Container>
  );
};
