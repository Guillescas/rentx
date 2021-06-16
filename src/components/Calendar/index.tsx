import React, { ReactElement } from 'react';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import {
  Calendar as ReactCalendar,
  LocaleConfig,
  DateCallbackHandler,
} from 'react-native-calendars';

import { ptBR } from './localeConfig';
import { generateInterval } from './generateInterval';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

interface IMarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  };
}

interface IDateProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface ICalendarProps {
  markedDates: IMarkedDateProps;
  onDayPress: DateCallbackHandler;
}

const Calendar = ({
  markedDates,
  onDayPress,
}: ICalendarProps): ReactElement => {
  const theme = useTheme();

  return (
    <ReactCalendar
      renderArrow={direction => (
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_details,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.secondary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
};

export { Calendar, IMarkedDateProps, IDateProps, generateInterval };
