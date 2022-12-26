import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as style from "./BlueBar.style";

interface Props {
  value: number;
  total: number;
}

export const BlueBar = ({ total, value }: Props) => {
  return (
    <Box position="relative" width={"120px"} height={"20px"}>
      <Box css={style.blueBarBack} />
      <Box width={`${(value / total) * 100}%`} css={style.blueBarOutFront} />
      <Box
        width={`calc(${(value / total) * 100}% - 4px)`}
        css={style.blueBarInnerFront}
      />
      <Typography css={style.valueText}>
        {value} / {total}
      </Typography>
    </Box>
  );
};
