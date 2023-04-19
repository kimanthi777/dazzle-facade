import { Calendar, useCalendar, MantineProvider } from '@mantine/core';
import { dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../../styles/custom-calendar-styles.css';


const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


const MyCalendar = () => {
  const { value, onChange } = useCalendar({
    value: new Date(),
  });

  const myEventsList = [
    {
      title: 'Event today',
      start: new Date(),
      end: new Date(),
    },
    {
      title: 'Event yesterday',
      start: new Date(new Date().setDate(new Date().getDate() - 1)),
      end: new Date(new Date().setDate(new Date().getDate() - 1)),
    },
  ];

  const dayStyle = {
    backgroundColor: '#48bb78',
  };

  return (
    <Calendar
      value={value}
      onChange={onChange}
      events={myEventsList}
      localizer={localizer}
      views={['month']}
      formats={{
        monthHeaderFormat: 'MMMM yyyy',
        dayFormat: 'd',
        dayRangeHeaderFormat: ({ start, end }:any) =>
          `${format(start, 'MMM d')} - ${format(end, 'MMM d')}`,
      }}
      dayStyle={dayStyle}
    />
  );
};
