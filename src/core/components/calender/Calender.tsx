import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
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

type _CalendarProps = {
    title: string,
}

export const _Calendar = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const myEventsList = [
        {
            title: 'Event today',
            start: today,
            end: today,
        },
        {
            title: 'Event yesterday',
            start: yesterday,
            end: yesterday,
        },
    ];


    const dayPropGetter = (date: Date) => {
        const day = new Date().getDate();
        const isToday = date.getDate() === day;
        return isToday ? { style: { backgroundColor: '#48bb78' } } : {};
    };


    return (
        <div className="max-w-[80vw] mx-auto flex flex-col">
            <div className="flex-grow">
                <Calendar
                    localizer={localizer}
                    events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    className="bg-white rounded-lg shadow overflow-hidden"
                    components={{
                        event: (event) => (
                            <div
                                className="px-3 py-2 border-b border-gray-400 cursor-pointer"
                                title={event.title}
                            >
                                {event.title}
                            </div>
                        ),
                    }}

                    dayPropGetter={dayPropGetter}

                    style={{ height: 500 }}
                />
            </div>
        </div>
    );
};