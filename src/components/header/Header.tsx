import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Branding from "./Branding";
import MobileNav from "./MobileNav";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { useLogout } from "../../hooks/useLogout";
import { onLogout } from "../../utils/logout";
import { PageItem } from "../../interfaces/page.interface";
import router from "../Routes";
import { useReactiveVar } from "@apollo/client";
import { authenticatedVar } from "../../constants/authenticated";

const authenticatedPages: PageItem[] = [
  {
    title: "Home",
    path: "/",
  },
];

const unauthenticatedPages: PageItem[] = [
  {
    title: "Sign in",
    path: "/login",
  },
  {
    title: "Sign up",
    path: "/signup",
  },
];

const settings = ["Logout"];
const commonSx: SxProps<Theme> = {
  mr: 2,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
};

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { logout } = useLogout();
  const authenticated = useReactiveVar(authenticatedVar);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page: PageItem) => {
    router.navigate(page.path);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = async (setting: string) => {
    if (setting === "Logout") {
      await logout();
      onLogout();
    }

    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* PC device */}
          <Branding
            pages={authenticated ? authenticatedPages : unauthenticatedPages}
            handleCloseNavMenu={handleCloseNavMenu}
            commonSx={commonSx}
          />

          {/* Mobile device */}
          <MobileNav
            pages={authenticated ? authenticatedPages : unauthenticatedPages}
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            settings={settings}
            anchorElUser={anchorElUser}
            handleOpenUserMenu={handleOpenUserMenu}
            handleCloseUserMenu={handleCloseUserMenu}
            commonSx={commonSx}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
