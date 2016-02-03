import moment from 'moment';

export default function formatDateRange(start, end, format = 'dddd, MMMM Do YYYY') {
    if (!start.isValid() || !end.isValid()) {
        // Not a valid moment object, return null
        return null;
    }

    return {
        start: start.format(format),
        end:end.format(format)
    };
}
