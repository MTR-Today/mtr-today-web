import {
  Box,
  HStack,
  UseRadioProps,
  useColorMode,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react'
import { flatten } from 'ramda'
import React, { cloneElement } from 'react'

type ItemProps<T extends string> = {
  value: T
  children?: React.ReactNode
}

export const RadioSwitchItem = <T extends string>(
  props: UseRadioProps & ItemProps<T>
) => {
  const { getInputProps, getRadioProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        _checked={{
          bg: 'chakra-body-bg',
          boxShadow: 'sm',
        }}
        px={4}
        py={0.5}
        fontSize="sm"
      >
        {props.children}
      </Box>
    </Box>
  )
}

type Props<T extends string> = {
  value?: T
  onChange?: (newValue: T) => void
  children: (
    | React.ReactElement<ItemProps<T>>
    | React.ReactElement<ItemProps<T>>[]
  )[]
}

export const RadioSwitch = <T extends string>({
  children,
  onChange,
  value,
}: Props<T>) => {
  const { colorMode } = useColorMode()

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange,
    value,
  })

  const group = getRootProps()

  return (
    <HStack
      {...group}
      w="fit-content"
      p={1}
      h="32px"
      borderWidth="1px"
      borderRadius="md"
      bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'}
    >
      {flatten(children).map(item => {
        const radio = getRadioProps({ value: item.props.value })
        return (
          <React.Fragment key={item.props.value}>
            {cloneElement(item, { ...radio, ...item.props })}
          </React.Fragment>
        )
      })}
    </HStack>
  )
}
