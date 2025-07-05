import { Box, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ImEnlarge } from "react-icons/im";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

type Props = {
  onFitScreenClick: () => void;
  onZoomInClick: () => void;
  onZoomOutClick: () => void;
};

export const Toolbox: React.FC<Props> = ({
  onFitScreenClick,
  onZoomInClick,
  onZoomOutClick,
}) => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "light" ? "gray.50" : "gray.900"}
      borderWidth="2px"
      borderRadius="md"
      shadow="sm"
    >
      <Tooltip label={t("fit_screen")}>
        <IconButton
          borderWidth="0"
          borderRightWidth="1px"
          borderRadius="0"
          aria-label="dit-screen"
          icon={<ImEnlarge />}
          onClick={onFitScreenClick}
          variant="outline"
        />
      </Tooltip>
      <Tooltip label={t("zoom_in")}>
        <IconButton
          borderWidth="0"
          borderRadius="0"
          aria-label="dit-screen"
          icon={<IoMdAdd />}
          onClick={onZoomInClick}
          variant="outline"
        />
      </Tooltip>
      <Tooltip label={t("zoom_out")}>
        <IconButton
          borderWidth="0"
          borderRadius="0"
          aria-label="dit-screen"
          icon={<IoMdRemove />}
          onClick={onZoomOutClick}
          variant="outline"
        />
      </Tooltip>
    </Box>
  );
};
