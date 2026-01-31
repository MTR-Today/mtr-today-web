import { useLocalStorageValue } from '@react-hookz/web';
import constate from 'constate';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Language } from '../constants/language';
import { LocalStorageKey } from '../constants/localStorageKey';
import { TimeDisplay } from '../constants/timeDisplay';

export const [UseConfigProvider, useConfig] = constate(() => {
  const { value: timeDisplay = TimeDisplay.REL, set: setTimeDisplay } =
    useLocalStorageValue<TimeDisplay>(LocalStorageKey.TIME_DISPLAY, {
      defaultValue: TimeDisplay.REL,
    });

  const { value: language = Language['ZH-HK'], set: setLanguage } =
    useLocalStorageValue<Language>(LocalStorageKey.LANGUAGE, {
      defaultValue: Language['ZH-HK'],
    });

  const { value: animatedBg = Language['ZH-HK'], set: setAnimatedBg } =
    useLocalStorageValue<boolean>(LocalStorageKey.ANIMATED_BG, {
      defaultValue: false,
    });

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return {
    timeDisplay,
    setTimeDisplay,
    language,
    setLanguage,
    animatedBg,
    setAnimatedBg,
  };
});
