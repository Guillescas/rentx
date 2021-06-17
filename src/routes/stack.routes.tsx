import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../Screens/Home';
import { CarDetails } from '../Screens/CarDetails';
import { Scheduling } from '../Screens/Scheduling';
import { SchedulingDetails } from '../Screens/SchedulingDetails';
import { CompletedScheduling } from '../Screens/CompletedScheduling';
import { MyCars } from '../Screens/MyCars';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(): ReactElement {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="CompleteScheduling" component={CompletedScheduling} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
