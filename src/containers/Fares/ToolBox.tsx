import { HStack, Select, useColorMode } from '@chakra-ui/react';
import { useLocalStorageValue } from '@react-hookz/web';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { FaresPassengerType } from '../../constants/faresPassengerType';
import { FaresType } from '../../constants/faresType';
import { LocalStorageKey } from '../../constants/localStorageKey';

export const Toolbox = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  const { value: faresType, set: setFaresType } =
    useLocalStorageValue<FaresType>(LocalStorageKey.FARES_TYPE, {
      defaultValue: FaresType.OCTOPUS_CARD,
    });

  const { value: faresPassengerType, set: setPassengerType } =
    useLocalStorageValue<FaresPassengerType>(
      LocalStorageKey.FARES_PASSENGER_TYPE,
      {
        defaultValue: FaresPassengerType.ADULT,
      },
    );

  const faresTypeOptions = useMemo(
    () => [
      {
        value: FaresType.OCTOPUS_CARD,
        label: t('ticket_type.option.octopus_card'),
      },
      {
        value: FaresType.SINGLE_JOURNEY_TICKET,
        label: t('ticket_type.option.single_journey_ticket'),
      },
    ],
    [t],
  );

  const faresPassengerTypeOptions = useMemo(
    () =>
      faresType === FaresType.OCTOPUS_CARD
        ? [
            {
              value: FaresPassengerType.CHILD,
              label: t('passenger_type.option.child'),
            },
            {
              value: FaresPassengerType.ADULT,
              label: t('passenger_type.option.adult'),
            },
            {
              value: FaresPassengerType.STUDENT,
              label: t('passenger_type.option.student'),
            },
            {
              value: FaresPassengerType.ELDERLY,
              label: t('passenger_type.option.elderly'),
            },
            {
              value: FaresPassengerType.JOY_YOU,
              label: t('passenger_type.option.joyYou'),
            },
            {
              value: FaresPassengerType.PWD,
              label: t('passenger_type.option.pwd'),
            },
          ]
        : [
            {
              value: FaresPassengerType.CHILD,
              label: t('passenger_type.option.child'),
            },
            {
              value: FaresPassengerType.ADULT,
              label: t('passenger_type.option.adult'),
            },
          ],
    [faresType, t],
  );

  return (
    <HStack
      gap="0"
      w="350px"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
      borderWidth="2px"
      borderRadius="md"
      shadow="sm"
    >
      <Select
        flexShrink="0"
        w="50%"
        textAlign="center"
        border="0"
        isInvalid={
          !faresType ||
          !faresTypeOptions.some(({ value }) => value === faresType)
        }
        onChange={(e) => {
          setFaresType(e.target.value as FaresType);
        }}
        placeholder={t('ticket_type.label')}
        size="sm"
        value={faresType}
      >
        {faresTypeOptions.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </Select>
      <Select
        flexShrink="0"
        w="50%"
        textAlign="center"
        border="0"
        borderColor="chakra-border-color"
        isInvalid={
          !faresPassengerType ||
          !faresPassengerTypeOptions.some(
            ({ value }) => value === faresPassengerType,
          )
        }
        onChange={(e) => {
          setPassengerType(e.target.value as FaresPassengerType);
        }}
        placeholder={t('passenger_type.label')}
        size="sm"
        value={faresPassengerType}
      >
        {faresPassengerTypeOptions.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </Select>
    </HStack>
  );
};
