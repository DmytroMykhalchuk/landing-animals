import { Stack, Button } from "@mui/material";

type LangugaesType = {
};

export const Langugaes: React.FC<LangugaesType> = ({ }) => {

    return (
        <Stack direction={'row'}>
            <Button variant="text" color="inherit">
                UK
            </Button>
            <Button variant="text" color="inherit">
                EN
            </Button>
        </Stack>
    );
};