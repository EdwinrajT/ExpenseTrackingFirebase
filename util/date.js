export function formatedDate(date){
    return `${date.getFullYear()} - ${date.getMonth()+1} - ${date.getDate()}`;
}

export function diffBwDateDays(date,days){
    return new Date(date.getFullYear(),date.getMonth(),date.getDate()-days);
}