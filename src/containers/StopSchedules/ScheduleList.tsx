import { Box, Flex, Stack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { stopMap } from 'mtr-kit';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Language } from '../../constants/language';
import { TimeDisplay } from '../../constants/timeDisplay';
import { useConfig } from '../../hooks/useConfig';
import { useTime } from '../../hooks/useTime';
import type { ScheduleItem } from '../../queries/schedules';

type Props = {
  schedules: ScheduleItem[];
  color?: string;
};

export const ScheduleList: React.FC<Props> = ({ schedules, color }) => {
  const { timeDisplay } = useConfig();
  const now = useTime();
  const { i18n } = useTranslation();

  const getDisplayTime = useCallback(
    (time: string) => {
      const timeDayJs = dayjs(time);

      if (timeDisplay === TimeDisplay.ABS) return timeDayJs.format('H[:]mm');

      return timeDayJs.isAfter(now)
        ? dayjs
            .duration(dayjs(timeDayJs).diff(now))
            .format('H[:]mm:ss')
            .replace(/^0:/, '')
        : dayjs
            .duration(dayjs(now).diff(timeDayJs))
            .format('-H[:]mm:ss')
            .replace(/^-0:/, '-');
    },
    [now, timeDisplay],
  );

  return (
    <Stack gap='6' py='2'>
      {schedules.map(({ platform, timestamp, destination }) => {
        const stop = stopMap[destination];
        return (
          <Flex key={timestamp} align='center' px='4'>
            <Box
              flexShrink='0'
              w='6'
              h='6'
              mr='4'
              color='white'
              textAlign='center'
              bg={color}
              borderRadius='full'
            >
              {platform}
            </Box>
            <Box w='full' mr='2'>
              {i18n.language === Language['ZH-HK'] ? stop.nameZh : stop.nameEn}
            </Box>
            {getDisplayTime(timestamp)}
          </Flex>
        );
      })}
    </Stack>
  );
};
