declare namespace JSX {
    interface IntrinsicElements {
        'calendar-range': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            months?: string | number;
        };
        'calendar-month': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            offset?: string | number;
        };
    }
}

export type CustomEventDates = CustomEvent<Date>;
export type CustomEventDatesType = 'change' | 'rangeend' | 'rangestart' | 'focusday';

// Custom element interfaces
export interface HTMLCalendarRangeElement extends HTMLElement {
    addEventListener(type: CustomEventDatesType, listener: (event: CustomEventDates) => void, { signal: AbortSignal }): void;
    removeEventListener(type: CustomEventDatesType, listener: (event: CustomEventDates) => void, { signal: AbortSignal }): void;
}

export interface HTMLCalendarMonthElement extends HTMLElement {
    offset?: number;
}

declare global {
    interface HTMLElementTagNameMap {
        'calendar-range': HTMLCalendarRangeElement;
        'calendar-month': HTMLCalendarMonthElement;
    }
}
