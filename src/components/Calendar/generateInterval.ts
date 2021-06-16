import { eachDayOfInterval, format } from 'date-fns';
import { IDateProps, IMarkedDateProps } from '.';
import theme from '../../styles/theme';
import { getPlatformDate } from '../../utils/getPlatformDate';

export function generateInterval(
  start: IDateProps,
  end: IDateProps,
): IMarkedDateProps {
  let interval: IMarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach(date => {
    const formattedDateString = format(getPlatformDate(date), 'yyy-MM-dd');

    interval = {
      ...interval,
      [formattedDateString]: {
        color:
          start.dateString === formattedDateString ||
          end.dateString === formattedDateString
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          start.dateString === formattedDateString ||
          end.dateString === formattedDateString
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });

  return interval;
}
