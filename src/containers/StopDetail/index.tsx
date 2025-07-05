import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  type DrawerProps,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Outlet, useNavigate, useParams } from "@tanstack/react-router";
import { type StopCode, stopMap } from "mtr-kit";
import { useTranslation } from "react-i18next";

import { Language } from "../../constants/language";
import { Empty } from "../StopSchedules/Empty";

export const StopDetail: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { stop: stopCode } = useParams({ strict: false });
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  const stop = stopCode ? stopMap[stopCode as StopCode] : undefined;

  const placement = useBreakpointValue<DrawerProps["placement"]>(
    {
      base: "bottom",
      md: "right",
    },
    {
      fallback: "bottom",
    },
  );

  return placement ? (
    <Drawer
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      onCloseComplete={() => {
        navigate({ to: "/" });
      }}
      placement={placement}
      size={{ md: "md" }}
      variant="alwaysOpen"
    >
      <DrawerContent
        minH="60vh"
        mt="80px"
        mr={{ md: "16px" }}
        mb={{ md: "16px" }}
        ml={{ md: "16px" }}
        borderRadius={{ md: "lg" }}
        borderTopRadius="lg"
      >
        <DrawerCloseButton color={stop?.textColor} />
        {stop ? (
          <>
            <DrawerHeader
              py="2"
              color={stop?.textColor}
              textAlign="center"
              bg={stop?.color}
              borderTopRadius="lg"
              transition="background-color 0.5s, color 0.5s"
            >
              {i18n.language === Language["ZH-HK"] ? stop.nameZh : stop.nameEn}
              <Box fontSize="xs">{stop.nameEn}</Box>
            </DrawerHeader>
            <DrawerBody p="0">
              <Outlet />
            </DrawerBody>
          </>
        ) : (
          <Empty />
        )}
      </DrawerContent>
    </Drawer>
  ) : undefined;
};
