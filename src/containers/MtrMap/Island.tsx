import { useColorMode } from "@chakra-ui/react";
import { memo } from "react";
import { roundCorners } from "svg-round-corners";

export const Island: React.FC<React.SVGProps<SVGPathElement>> = memo(
  ({ d = "", ...rest }) => {
    const { colorMode } = useColorMode();

    return (
      <path
        d={roundCorners(d, 20).path}
        fill={colorMode === "dark" ? "#000000" : "#FFFFFF"}
        stroke={colorMode === "dark" ? "" : "#CBD5E0"}
        strokeWidth="1"
        {...rest}
      />
    );
  },
);
