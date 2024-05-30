import { Box, Button, SxProps, Theme, Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import router from "../Routes";
import { PageItem } from "../../interfaces/page.interface";
import { useReactiveVar } from "@apollo/client";
import { authenticatedVar } from "../../constants/authenticated";

interface BrandingProps {
  pages: PageItem[];
  handleCloseNavMenu: (page: PageItem) => void;
  commonSx: SxProps<Theme>;
}

const Branding: React.FC<BrandingProps> = ({
  pages,
  handleCloseNavMenu,
  commonSx,
}) => {
  const authenticated = useReactiveVar(authenticatedVar);

  const onClickTypography = () => {
    router.navigate(`${authenticated ? "/" : "/login"}`);
  };

  return (
    <>
      <ForumIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={onClickTypography}
        sx={{
          ...commonSx,
          display: { xs: "none", md: "flex" },
        }}
      >
        CHATTER
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page.path}
            onClick={handleCloseNavMenu.bind(this, page)}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page.title}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default Branding;
