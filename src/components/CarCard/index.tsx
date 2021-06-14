import React, { ReactElement } from 'react';

import GasolineSvg from '../../assets/gasoline.svg';

import * as S from './styles';

interface ICardData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  imageUrl: string;
}

interface ICarCardProps {
  data: ICardData;
}

export const CarCard = ({ data }: ICarCardProps): ReactElement => {
  return (
    <S.Container>
      <S.Details>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.rent.period}</S.Period>
            <S.Price>{`R$ ${data.rent.price}`}</S.Price>
          </S.Rent>

          <S.Type>
            <GasolineSvg />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CardImage
        source={{
          uri: data.imageUrl,
        }}
        resizeMode="contain"
      />
    </S.Container>
  );
};
