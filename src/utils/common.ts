import { AxiosPromise, AxiosResponse, AxiosError } from 'axios';
import { Linking } from 'react-native';

import { MONTHS } from 'src/utils/constants';

/**
 * takes an axios promise and returns the actual data from the request or the error
 *
 * axiosPromise {AxiosPromise} the axios promise
 * @returns {AxiosResponse | AxiosError} The API response
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const axiosPromiseResult = (axiosPromise: AxiosPromise): Promise<any> =>
  axiosPromise
    .then(({ data }: AxiosResponse) => data)
    .catch((error: AxiosError) => {
      throw error.response ? error.response.data : error;
    });

export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Util function that takes a Date as a string argument and returns
 * details about the date (month, day, time)
 * @params date | the date
 */
export const getDateDetails = (date: string) => {
  const newDate = new Date(date);
  let hours = newDate.getHours();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Getting the current minutes from date object.
  const minutes = newDate.getMinutes();

  return {
    day: newDate.getDate(),
    month: MONTHS[newDate.getMonth()],
    time: `${hours}:${minutes < 10 ? '0'.concat(minutes.toString()) : minutes} ${ampm}`,
  };
};

/**
 * Util function that opens mail app in order to send an email
 * @param emailReceiver | The email receiver
 */
export const openMailApp = (emailReceiver: string) => Linking.openURL(`mailto:${emailReceiver}`);
