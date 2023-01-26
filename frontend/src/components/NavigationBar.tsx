import {NavLink, useNavigate} from "react-router-dom";
import "../styles/NavigationBar.css"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import {AppBar, Menu, MenuItem, Toolbar} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';


type NavigationBarProps = {
    logout: () => Promise<string>
}


export default function NavigationBar(props: NavigationBarProps) {
    const navigation = useNavigate()

    function logout() {
        props.logout().then(() =>
            navigation("/locations"))
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const lightTheme = createTheme({

        palette: {

            primary: {
                main: "#fafafa"
            },
            secondary: {
                main: "#26a27b"
            }
        }
    })
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={lightTheme}>
        <AppBar  className={"nav-bar"}>
            <Toolbar>
                <MenuIcon className={"nav-bar-icon"} onClick={handleClick}/>

                <NavLink to={"/"} className={"site-title"}>Perfect Location</NavLink>
                <Menu anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}>
                    <MenuItem >
                        <NavLink to={"/owners/register"} className={"nav-bar-element"}>Registrieren</NavLink>
                    </MenuItem>
                    <MenuItem >
                        <NavLink to={"/owners/login"} className={"nav-bar-element"}>Einloggen</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to={"/locations/add"} className={"nav-bar-element"}>Als Gastgeber:in loslegen</NavLink>
                    </MenuItem>
                    <MenuItem >
                        <NavLink to={"/locations"} className={"nav-bar-element"}>Locations finden</NavLink>
                    </MenuItem>
                    <MenuItem >
                        <ExitToAppIcon onClick={logout}>Ausloggen</ExitToAppIcon>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
            </ThemeProvider>
        </Stack>

    )
}