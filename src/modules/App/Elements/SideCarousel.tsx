import { Box, Divider, Fade, Stack } from '@mui/material';
import styles from './../styles.module.scss';
import Typography from '@mui/material/Typography';
import cn from 'classnames';

type SideCarouselType = {
    stage: number;
    slideData: {
        sunColor: string;
        sunShadowColor: string;
        title: string;
        subtitle: string;
        content: string;
    }[];
};

export const SideCarousel: React.FC<SideCarouselType> = ({ stage: stage, slideData }) => {
    return (
        <>
            <div className={styles.sideCarousel}>
                <div className={styles.sideCarousel__wrapper}>
                    <div className={styles.column}>
                        {slideData.map((item, index) => {
                            const positionClass = stage === index
                                ? styles.current
                                : stage < index
                                    ? styles.prev
                                    : styles.next
                            const classes = cn(styles.column__row, positionClass)
                            return (
                                <div key={index} className={classes}>
                                    <Typography variant="body1">
                                        {slideData[index].content}
                                    </Typography>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.sideCarousel__tabInfo}>
                        <Stack>
                            <Box position={'relative'} pt={'2em'}>
                                {
                                    slideData.map((_, index) => (
                                        <Box sx={{ position: 'absolute', top: 0, }} key={index}>
                                            <Fade in={index === stage} timeout={{ enter: 1000 }} unmountOnExit >
                                                <Typography variant="h5">{stage + 1}</Typography>
                                            </Fade>
                                        </Box>
                                    ))
                                }
                            </Box>
                            <Divider flexItem orientation='horizontal' />
                            <Typography variant="h5">{slideData.length}</Typography>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
};