import { Box, Stack, Button, IconButton, Grid, Typography, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Langugaes } from "./Langugaes";
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './../styles.module.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';

type HeaderType = {
};

export const Footer: React.FC<HeaderType> = ({ }) => {

    return (
        <Grid container textAlign={'center'}>
            <Grid item xs={4}>
                <Stack direction={'row'}>
                    <IconButton aria-label="instagram" href="/">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton aria-label="facebook" href="/">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="facebook" href="/">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton aria-label="facebook" href="/">
                        <XIcon />
                    </IconButton>
                </Stack>
            </Grid>
            <Grid item xs={4}>
                <Box></Box>

            </Grid>
            <Grid item xs={4} textAlign={'end'}>
                <Stack direction={'row'} justifyContent={"flex-end"} spacing={2}>
                    <Typography variant="body1" color="grey" href='/' component={'a'}>Main</Typography>
                    <Divider flexItem orientation="vertical"/>
                    <Typography variant="body1" color="grey" href='/' component={'a'}>Other pgae</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};