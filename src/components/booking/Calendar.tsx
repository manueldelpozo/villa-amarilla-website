"use client";
import { useEffect, useRef, useState } from 'react';
import type { CustomEventDates, HTMLCalendarRangeElement } from '@/types/cally';

interface IProps {
    onChange?: (range: { start: Date; end: Date }) => void;
}

const Calendar = ({ onChange }: IProps) => {
    const calendarRef = useRef<HTMLCalendarRangeElement | null>(null);
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);

    useEffect(() => {
        import('cally')
            .then(() => {
                console.log('Cally web components registered');
            })
            .catch((err) => {
                console.error('Failed to load Cally:', err);
            });
    }, []);

    const handleChange = (rangeEndDate: Date) => {
        const rangeSelected = {
            start: selectedDates[0],
            end: rangeEndDate
        };
        console.log(rangeSelected);

        onChange?.(rangeSelected);
    };

    useEffect(() => {
        const calendarElement = calendarRef.current;

        if (!calendarElement) return;

        const abortController = new AbortController();
        const { signal } = abortController;

        const handleRangeStart = (event: CustomEventDates) => {
            setSelectedDates(prev => [event.detail, prev[1]]);
        };

        const handleRangeEnd = (event: CustomEventDates) => {
            const rangeEndDate = event.detail;

            setSelectedDates(prev => [prev[0], rangeEndDate]);
            handleChange(rangeEndDate);
        };

        calendarElement.addEventListener('rangestart', handleRangeStart, { signal });
        calendarElement.addEventListener('rangeend', handleRangeEnd, { signal });

        return () => {
            abortController.abort();
        };
    }, [handleChange]);

    return (
        <calendar-range ref={calendarRef} months={2}>
            <div className="flex gap-4 justify-center flex-wrap">
                <calendar-month />
                <calendar-month offset={1} />
            </div>
        </calendar-range>
    );
};

export default Calendar;
