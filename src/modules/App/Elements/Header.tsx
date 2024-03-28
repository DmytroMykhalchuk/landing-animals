import { Box, Stack, Button, Grid, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Langugaes } from "./Langugaes";
import styles from './../styles.module.scss';
import { useState } from "react";

type HeaderType = {
};

export const Header: React.FC<HeaderType> = ({ }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onNavigate = (path: string) => {
        window.location.href = path;
    };

    const open = Boolean(anchorEl);
    return (
        <Grid container >
            <Grid item xs={4}>
                <IconButton
                    aria-label="open menu"
                    onClick={toggleMenu}
                    id='header-menu'
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="header-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => onNavigate('https://github.com/DmytroMykhalchuk/landing-viking-equipment')}>Github</MenuItem>
                    <MenuItem onClick={() => onNavigate('https://github.com/DmytroMykhalchuk/')}>CV</MenuItem>
                </Menu>
            </Grid>
            <Grid item xs={4} textAlign={'center'}>
                <Typography variant="h5">
                    Animals
                </Typography>
            </Grid>
            <Grid item xs={4} justifyContent={'end'}>
                <Stack direction={'row'} justifyContent={'flex-end'}>
                    <Button variant="outlined" color="inherit" href="/">
                        All products
                    </Button>
                    {/* <Langugaes /> */}
                </Stack>
            </Grid>
        </Grid>
    );
};