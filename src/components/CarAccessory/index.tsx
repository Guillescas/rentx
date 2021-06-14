import React, { ReactElement } from 'react';
import { SvgProps } from 'react-native-svg';

import * as S from './styles';

interface ICarAccessoriesProps {
  name: string;
  icon: React.FC<SvgProps>;
}

export const CarAccessory = ({
  name,
  icon: Icon,
}: ICarAccessoriesProps): ReactElement => {
  return (
    <S.Container>
      <Icon width={32} height={32} />

      <S.Name>{name}</S.Name>
    </S.Container>
  );
};
