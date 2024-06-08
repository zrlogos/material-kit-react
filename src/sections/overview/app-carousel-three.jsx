import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CarouselContainer = styled('div')({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
});

const CarouselInner = styled('div')({
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
});

const CarouselItem = styled('div')({
    minWidth: '100%',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
});

const CarouselImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

const ControlButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
}));

const PrevButton = styled(ControlButton)({
    left: 10,
});

const NextButton = styled(ControlButton)({
    right: 10,
});

export default function AppCarousel({ title, subheader, items, autoPlayInterval }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (autoPlayInterval) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            }, autoPlayInterval);
            return () => clearInterval(interval);
        }
    }, [autoPlayInterval, items.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handleItemClick = (url) => {
        window.location.href = url;
    };

    return (
        <Card>
            <CardHeader title={title} subheader={subheader} sx={{ mb: 1}} />
            <CarouselContainer>
                <PrevButton onClick={handlePrev}>
                    <ArrowBackIosNewIcon />
                </PrevButton>
                <CarouselInner style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {items.map((item, index) => (
                        <CarouselItem key={index} onClick={() => handleItemClick(item.url)}>
                            <CarouselImage src={item.image} alt={`Slide ${index + 1}`} />
                        </CarouselItem>
                    ))}
                </CarouselInner>
                <NextButton onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </NextButton>
            </CarouselContainer>
        </Card>
    );
}

AppCarousel.propTypes = {
    title: PropTypes.string,
    subheader: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    autoPlayInterval: PropTypes.number,
};
