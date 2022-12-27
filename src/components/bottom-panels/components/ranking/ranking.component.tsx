import { Box } from "@mui/material";
import { observer } from "mobx-react-lite";
import { RankingContent } from "./components/ranking-content/ranking-content.component";
import { RankingTitle } from "./components/ranking-title/ranking-title.component";

export const Ranking = observer(() => {
  return (
    <Box
      maxHeight={250}
      borderRadius="12px"
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      <RankingTitle />
      <RankingContent />
    </Box>
  );
});
