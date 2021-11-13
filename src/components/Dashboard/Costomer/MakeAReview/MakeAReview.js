import React, { useRef } from 'react';
import useAuth from '../../../../hooks/useAuth';
import './MakeAReview.css';

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Stack } from '@mui/material';
import swal from 'sweetalert';
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
const MakeAReview = () => {
    const { allFirebase } = useAuth();
    const { user } = allFirebase;
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    console.log(value);

    const nameRef = useRef();
    const photoRef = useRef();
    const commentRef = useRef();


    const handleMakeReview = (e) => {
        const name = nameRef.current.value;
        const photo = photoRef.current.value;
        const comment = commentRef.current.value;
        const review = {
            name: name,
            photo: photo,
            comment: comment,
            rating: value
        }

        fetch('https://agile-woodland-06952.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
                swal("Good job", "Make review successfully", "success");
            })

        e.preventDefault()
    }
    return (
        <div>
            <div className="row" style={{ height: "450px", alignItems: "center", justifyContent: "center" }}>
                <div className="col-md-6 mx-auto">
                    <div className="review-form shadow">
                        <form onSubmit={handleMakeReview}>
                            <h3 className="text-center">Give a Review</h3>
                            <input ref={nameRef} className="form-control mb-2" type="text" defaultValue={user?.displayName} disabled />
                            <input ref={photoRef} className="form-control mb-2" type="text" placeholder="Your photo URL" required />
                            <textarea ref={commentRef} className="form-control" name="" id="" cols="30" rows="3" placeholder="Write your comment here" required>
                            </textarea>
                            <Stack style={{ justifyContent: "space-around", flexDirection: "row" }}>
                                <Box
                                    sx={{
                                        width: 200,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Rating
                                        name="hover-feedback"
                                        value={value}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        style={{ fontSize: "35px" }}
                                    />
                                    {value !== null && (
                                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                    )}
                                </Box>
                            </Stack>
                            <div className="d-grid">
                                <button type="submit" className="btn my-btn">Make a review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAReview;