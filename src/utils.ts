import moment from 'moment';

export const arrayRandom = (array: Array<any>): any => array[Math.floor(Math.random() * array.length)];

export const nArray = (n: number): Array<null> => Array.from(Array(n));

export const daysAgo = (then: string) => `${moment().diff(then, 'days')}d ago`;

export const randomN = (ceiling: number) => Math.floor(Math.random() * ceiling) + 1;
