import { Box, Typography } from "@mui/material";

type SlideInfoType = {
    title: string;
    subtitle: string;
};

export const SlideInfo: React.FC<SlideInfoType> = ({ title, subtitle }) => {

    return (
        <Box maxWidth={230} position={'relative'} zIndex={25} sx={{
            transform: 'translateY(-100px)'
        }}>
            <Typography variant="h3" mb={2}>{title}</Typography>
            <Typography variant="h6">{subtitle}</Typography>
        </Box>
    );
};