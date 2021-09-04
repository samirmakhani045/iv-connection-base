import { useTranslation } from '@studio/hooks/useTranslation';

/**
 * useHumanTimeAgo
 * Convert timestamp to readable time ago with following rules:
 * < 1 hour, show the number of minutes
 * < 24 hours, show the number of hours
 * < 7 days, show the number of days
 * > 7 days, show the date
 *
 * @param {Number} timestamp Date in miliseconds in the past
 * @returns {Object} Human time ago: { timeAgo: 1, human: '1 min' }
 */
export const useHumanTimeAgo = (timestamp) => {
  const { t } = useTranslation('common.humanize');
  const seconds = Math.floor((new Date().getTime() - timestamp) / 1000);
  const minute = 60;
  const hour = 3600;
  const day = 86400;
  const week = 604800;
  let timeAgo = 1;
  let human = '';

  // < 1 hour
  if (seconds / hour < 1) {
    timeAgo = Math.floor(seconds / minute);
    human = `${timeAgo} ${t('minutes')}`;
  }
  // < 24 hours
  else if (seconds / day < 1) {
    timeAgo = Math.floor(seconds / hour);
    human = `${timeAgo} ${t('hours')}`;
  }
  // < 7 days
  else if (seconds / week < 1) {
    timeAgo = Math.floor(seconds / day);
    human = `${timeAgo} ${t('days')}`;
  }
  // format: Jan 01, 2021
  else {
    timeAgo = -1;
    // eslint-disable-next-line compat/compat
    human = `${new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(timestamp)}`;
  }

  return { timeAgo, human };
};

export default useHumanTimeAgo;
