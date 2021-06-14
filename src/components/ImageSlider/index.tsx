import React, { ReactElement } from 'react';

import * as S from './styles';

interface IImageSliderProps {
  imagesUrl: string[];
}

export const ImageSlider = ({ imagesUrl }: IImageSliderProps): ReactElement => {
  return (
    <S.Container>
      <S.ImageIndexes>
        <S.ImageIndex active />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
      </S.ImageIndexes>

      <S.CarImageWrapper>
        <S.CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </S.CarImageWrapper>
    </S.Container>
  );
};
