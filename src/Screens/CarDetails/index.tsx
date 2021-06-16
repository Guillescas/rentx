import React, { ReactElement } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { CarAccessory } from '../../components/CarAccessory';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import * as S from './styles';

import { ICarDTO } from '../../dtos/CarDTO';
import getAccessoryIcon from '../../utils/getAccessoryIcon';

interface ICarDetailsParams {
  car: ICarDTO;
}

export const CarDetails = (): ReactElement => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as ICarDetailsParams;

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
            <S.Price>{`R$ ${car.rent.price}`}</S.Price>
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

        <S.About>{car.about}</S.About>
      </S.Content>

      <S.Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={() => navigation.navigate('Scheduling', { car })}
        />
      </S.Footer>
    </S.Container>
  );
};
