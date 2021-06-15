import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './stack.routes';

export const Routes = (): ReactElement => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
