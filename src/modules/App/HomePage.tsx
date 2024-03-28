import { Button, Container, Stack, SxProps, Typography } from '@mui/material';
import { getThemeMode } from '../../redux/app/appSelector';
import { toggleThemeMode } from '../../redux/app/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { Header } from './Elements/Header';
import { Footer } from './Elements/Footer';
import { Slider } from './Elements/Slider';

type HomePageType = {
};

export const HomePage: React.FC<HomePageType> = ({ }) => {
    const dispatch: any = useDispatch();
    const { t: translation } = useTranslation();

    const mode = useSelector(getThemeMode)

    const toggleThee = () => {
        dispatch(toggleThemeMode(mode))
    };



    return (
        <Stack className={styles.appContainer} >
            <Stack sx={stylesProps.stack}>
                <Container className={styles.header} maxWidth='lg'>
                    <Header />
                </Container>
                <Slider />
                <Container className={styles.footer} maxWidth='lg'>
                    <Footer />
                </Container>
            </Stack>
        </Stack >
    );
};

const stylesProps = {
    stack: {
        color: 'fpage.main',
        height: '100vh',
    } as SxProps,
};