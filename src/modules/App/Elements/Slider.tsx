import { Box, Stack, Button, SxProps, Zoom, IconButton } from "@mui/material";
import styles from './../styles.module.scss';
import { CSSProperties, useEffect, useLayoutEffect, useState } from "react";
import cn from 'classnames';
import { SlideInfo } from "./SlideInfo";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { SideCarousel } from "./SideCarousel";
import { slideData } from "../../../redux/state";

type SliderType = {
};

export const Slider: React.FC<SliderType> = ({ }) => {
    const [stage, setStage] = useState(0);
    const [isRenderPreview, setIsRenderPreview] = useState(true);

    const [isNextAnimation, setIsNextAnimation] = useState(false);
    const [isPrevAnimation, setIsPrevAnimation] = useState(false);

    useEffect(() => {
        isNextAnimation && setTimeout(() => {
            setIsNextAnimation(false)
            setStage((prev: number) => prev + 1);
            setIsRenderPreview(false)
        }, 2000);

        isPrevAnimation && setTimeout(() => {
            setIsPrevAnimation(false)
        }, 2000);

    }, [isNextAnimation, isPrevAnimation]);

    useEffect(() => {
        setIsRenderPreview(true);
    }, [isRenderPreview]);

    const slideNext = () => {
        if (stage === slideData.length - 1)
            return;

        setIsNextAnimation((prev: boolean) => !prev);
    };

    const slidePrev = () => {
        if (stage === 0)
            return;
        setIsPrevAnimation(true);
        setStage((prev: number) => prev - 1);
    };

    const renderReview = (): JSX.Element => {
        if (stage + 1 > slideData.length - 1 || !isRenderPreview)
            return (<></>);

        const nextSlide = slideData[stage + 1];

        const nextSunStyle = {
            '--shadow': nextSlide.sunShadowColor,
            '--color': nextSlide.sunColor,
        } as CSSProperties;

        return (
            <div className={cn(styles.slideReview, isNextAnimation ? styles.active : '')}>
                <div className={cn(styles.slide, isNextAnimation ? '' : styles.nextSlide)}>
                    <div className={styles.slide__central}>
                        <div className={styles.slide__circle} style={nextSunStyle}></div>
                    </div>
                    <Stack justifyContent={'center'} height={'100%'}>
                        <Stack direction={'row'} justifyContent={"space-between"}>
                            <Stack width={'33%'} alignItems={'center'}>
                                <SlideInfo
                                    title={nextSlide.title}
                                    subtitle={nextSlide.subtitle}
                                />
                            </Stack>
                            <Box minWidth={'30em'}></Box>
                        </Stack>
                    </Stack>
                    <img className={styles.slide__animal} src={nextSlide?.image} alt={nextSlide?.title} />
                </div>
            </div>
        );
    };

    const renderPreview = (): JSX.Element => {
        if (stage < 0 || !isRenderPreview)
            return (<></>);

        const prevSlide = slideData[stage + 1];
        // const prevSlide = slid;
        const nextSunStyle = {
            '--shadow': prevSlide?.sunShadowColor,
            '--color': prevSlide?.sunColor,
        } as CSSProperties;

        // const isAnimation=true;
        // const activate=true;

        return (
            <div className={cn(isPrevAnimation ? styles.slidePreview : '')}
                style={{
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                }}
            >
                <div className={cn(styles.slide, isPrevAnimation ? '' : styles.nextSlide)}>
                    {isPrevAnimation &&
                        <>
                            <div className={styles.slide__central}>
                                <div className={styles.slide__circle} style={nextSunStyle}></div>
                            </div>
                            <Stack justifyContent={'center'} height={'100%'}>
                                <Stack direction={'row'} justifyContent={"space-between"}>
                                    <Stack width={'33%'} alignItems={'center'}>
                                        <SlideInfo
                                            title={prevSlide?.title}
                                            subtitle={prevSlide?.subtitle}
                                        />
                                    </Stack>
                                    <Box minWidth={'30em'}></Box>
                                </Stack>
                            </Stack>
                        </>
                    }
                    <img className={styles.slide__animal} src={prevSlide?.image} alt={prevSlide?.title} />
                </div>
            </div>
        );
    };

    return (
        <Stack className={styles.sliderWrapper} alignItems={'center'} justifyContent={'center'}>
            <div className={styles.sliderWrapper__slider} >
                {
                    slideData.map((item, index) => {
                        const relativeClass = stage === index
                            ? styles.currentSlide
                            : index < stage
                                ? styles.prevSlide
                                : styles.displayNone;
                        const slideCalsess = isNextAnimation && stage === index
                            ? cn(styles.slide, styles.prevSlide)
                            : cn(styles.slide, relativeClass);

                        return (
                            <div key={index} className={slideCalsess}>
                                <div className={styles.slide__central}>
                                    <div className={styles.slide__circle} onClick={slideNext} style={{
                                        //@ts-ignore
                                        '--shadow': item.sunShadowColor,
                                        '--color': item.sunColor
                                    }}>
                                    </div>
                                </div>
                                <Stack justifyContent={'center'} height={'100%'}>
                                    <Stack direction={'row'} justifyContent={"space-between"}>
                                        <Stack width={'33%'} alignItems={'center'}>
                                            <SlideInfo
                                                title={item.title}
                                                subtitle={item.subtitle}
                                            />
                                        </Stack>
                                        <Box minWidth={'30em'}></Box>
                                    </Stack>
                                </Stack>
                                <img className={cn(styles.slide__animal, styles.active)} src={item?.image} alt={item?.title} />
                            </div>
                        )
                    })
                }
            </div>

            {renderReview()}
            {renderPreview()}
            <Stack className={styles.bottomWrapper} alignItems={'center'}>
                <Zoom in={Boolean(stage)}>
                    <Button variant="outlined" color="inherit" onClick={slidePrev}>
                        prev
                    </Button>
                </Zoom>
            </Stack>

            <Box className={styles.playBtn}>
                <Zoom in={!isNextAnimation && !isPrevAnimation && stage !== slideData.length - 1}>
                    <IconButton aria-label="play" onClick={slideNext}>
                        <PlayCircleOutlineIcon />
                    </IconButton>
                </Zoom>
            </Box>

            <SideCarousel stage={stage + +isNextAnimation} slideData={slideData} />
        </Stack>
    );
};