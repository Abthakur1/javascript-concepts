function checkDay(dayNumber) {
    let day;
    switch (dayNumber) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
            case 3:
            day = 'Wed';
            break;
            case 4:
            day = 'Thu';
            break;
            case 5:
            day = 'Fri';
            break;
            case 6:
            day = 'Sat';
            break;
        default:
            day = 'invalid number'
            break;
    }

    return day;
}

const dayValue = checkDay(10);
console.log(dayValue);