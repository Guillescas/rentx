import React, { ReactElement } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ICarDTO } from '../../dtos/CarDTO';
import getAccessoryIcon from '../../utils/getAccessoryIcon';

import * as S from './styles';

interface ICarCardProps extends RectButtonProps {
  data: ICarDTO;
}

export const CarCard = ({ data, ...rest }: ICarCardProps): ReactElement => {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <S.Container {...rest}>
      <S.Details>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.rent.period}</S.Period>
            <S.Price>{`R$ ${data.rent.price}`}</S.Price>
          </S.Rent>

          <S.Type>
            <MotorIcon />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CardImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </S.Container>
  );
};
