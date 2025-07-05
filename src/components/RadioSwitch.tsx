import {
  Box,
  HStack,
  type UseRadioProps,
  useColorMode,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { flatten } from "ramda";
import { cloneElement, Fragment } from "react";

type ItemProps<T extends string> = {
  value: T;
  children?: React.ReactNode;
};

export const RadioSwitchItem = <T extends string>(
  props: UseRadioProps & ItemProps<T>,
) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        px={4}
        py={0.5}
        fontSize="sm"
        borderRadius="md"
        _checked={{
          bg: "chakra-body-bg",
          boxShadow: "sm",
        }}
        cursor="pointer"
      >
        {props.children}
      </Box>
    </Box>
  );
};

type Props<T extends string> = {
  value?: T;
  onChange?: (newValue: T) => void;
  children: (
    | React.ReactElement<ItemProps<T>>
    | React.ReactElement<ItemProps<T>>[]
  )[];
};

export const RadioSwitch = <T extends string>({
  children,
  onChange,
  value,
}: Props<T>) => {
  const { colorMode } = useColorMode();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange,
    value,
  });

  const group = getRootProps();

  return (
    <HStack
      {...group}
      w="fit-content"
      h="32px"
      p={1}
      bg={colorMode === "dark" ? "gray.700" : "gray.50"}
      borderWidth="1px"
      borderRadius="md"
    >
      {flatten(children).map((item) => {
        const radio = getRadioProps({ value: item.props.value });
        return (
          <Fragment key={item.props.value}>
            {cloneElement(item, { ...radio, ...item.props })}
          </Fragment>
        );
      })}
    </HStack>
  );
};
