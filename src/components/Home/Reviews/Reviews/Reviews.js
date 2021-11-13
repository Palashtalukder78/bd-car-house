import React, { useEffect } from 'react';
import Carousel from "react-elastic-carousel";
import useAuth from '../../../../hooks/useAuth';
import Item from "./Item";
import "./Reviews.css";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const Reviews = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const { allReviews } = useAuth();
    const { reviews } = allReviews;
    return (
        <Container data-aos="fade-down" data-aos-delay="500">
            <h2 className="text-center mb-4">Client Reviews</h2>
            <Carousel breakPoints={breakPoints}>
                {
                    reviews.map(review => (
                        <Item>
                            <div className="single-review text-center">
                                <img className="img-fluid" src={review.photo} alt="" />
                                <h3 className="text-center">{review.name}</h3>
                                <Stack spacing={1} style={{ justifyContent: "space-around", flexDirection: "row" }} >
                                    <Rating precision={0.5} name="read-only" value={review?.rating} readOnly />
                                </Stack>
                                <p>{review?.comment.slice(0, 100)}</p>
                            </div>
                        </Item>
                    ))
                }
            </Carousel>
        </Container>
    );
};

export default Reviews;