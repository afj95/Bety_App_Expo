import i18next from 'i18next';
import { I18nManager as RNI18nManager } from 'react-native';

import * as config from '../config/i18n';

import date from './date';
// import asyncStorage from './async';
// import languageDetector from './language-detector';
// import detectAsyncLangugae from './detect-async-lang';
import translationLoader from './translation-loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

var fallback = 'ar';

const i18n = {
  /**
   * @returns {Promise}
   */
  init: async () => {
    return new Promise(async (resolve, reject) => {
        try {
            fallback = await AsyncStorage.getItem('lang')
        } catch (error) {
            // TODO: Make it in another way
            console.log('error while getting data from async ' + error)
        }
        i18next
        // This module to get phone langugae
        // .use(languageDetector)
        .use(translationLoader)
        .init({
        fallbackLng: fallback !== null ? fallback : 'en',
        ns: config.namespaces,
        defaultNS: config.defaultNamespace,
        interpolation: {
            escapeValue: false,
            format(value, format) {
            if (value instanceof Date) {
                return date.format(value, format);
            }
            }
        },
        }, (error) => {
            if (error) {
            return reject(error);
            }
        date.init(i18next.language)
            .then(resolve)
            .catch(error => reject(error));
        });
    });
  },

  /**
   * @param {string} key
   * @param {Object} options
   * @returns {string}
   */
  t: (key, options) => i18next.t(key, options),

  /**
   * @returns {string}
   */
  get locale() { return i18next.language; },

  /**
   * @returns {'LTR' | 'RTL'}
   */
  get dir() {
      return i18next.dir().toUpperCase();
  },

  /**
   * @returns {boolean}
   */
  get isRTL() {
      return RNI18nManager.isRTL;
  },

  /**
   * @param {(arg0: string) => void} lang
   */
  async changeLanguage(lang) {
    await i18next.changeLanguage(lang);
  },

  /**
   * Similar to React Native's Platform.select(),
   * i18n.select() takes a map with two keys, 'rtl'
   * and 'ltr'. It then returns the value referenced
   * by either of the keys, given the current
   * locale's direction.
   *
   * @param {Object<string,mixed>} map
   * @returns {mixed}
   */
  select(map) {
    const key = this.isRTL ? 'rtl' : 'ltr';
    return map[key];
  }
};

export const t = i18n.t;

export default i18n;
