export const CURRENT_YEAR = (new Date()).getFullYear() - 1;

export const TYPES = {
  javascript: 'JavaScript',
  css: 'CSS',
  ux: 'Design / UX',
  ruby: 'Ruby',
  ios: 'iOS / Swift',
  android: 'Android',
  php: 'PHP',
  general: 'General',
};

const DEFAULT_URL = 'https://raw.githubusercontent.com/tech-conferences/confs.tech/master/conferences';

const RAW_CONTENT_URLS = {
  javascript: 'https://raw.githubusercontent.com/tech-conferences/javascript-conferences/master/conferences',
  css: DEFAULT_URL,
  php: DEFAULT_URL,
  ux: DEFAULT_URL,
  ruby: DEFAULT_URL,
  ios: DEFAULT_URL,
  android: DEFAULT_URL,
  general: DEFAULT_URL,
};

export function getConferenceUrl(state) {
  const {type, year} = state;
  const _type = type.toLocaleLowerCase();

  return `${RAW_CONTENT_URLS[_type]}/${year}/${_type}.json`;
}
