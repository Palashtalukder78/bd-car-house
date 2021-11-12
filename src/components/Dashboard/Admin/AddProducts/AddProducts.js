import React, { useRef } from 'react';
import './AddProcusts.css'
import swal from 'sweetalert';
const AddProducts = () => {
    const brandRef = useRef();
    const modelRef = useRef();
    const yearRef = useRef();
    const milagesRef = useRef();
    const priceRef = useRef();
    const photoRef = useRef();
    const descriptionRef = useRef();

    const handleAdProduct = (e) => {
        const brand = brandRef.current.value;
        const model = modelRef.current.value;
        const year = yearRef.current.value;
        const milages = milagesRef.current.value;
        const price = priceRef.current.value;
        const photo = photoRef.current.value;
        const description = descriptionRef.current.value;

        const product = {
            brand: brand,
            model: model,
            description: description,
            year: year,
            milages: milages,
            price: price,
            photo: photo
        }
        fetch('https://agile-woodland-06952.herokuapp.com/products/', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    swal("Good Job!", "Product add Successfully!", "success");
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <div className="add-product-form shadow">
                        <form onSubmit={handleAdProduct}>
                            <h3 className="text-center my-color">Add Products</h3>
                            <input ref={brandRef} className="form-control mb-2 " type="text" placeholder="Brand Name" />
                            <input ref={modelRef} className="form-control mb-2 " type="text" placeholder="Model Name" />
                            <input ref={yearRef} className="form-control mb-2 " type="text" placeholder="Release Year" />
                            <input ref={milagesRef} className="form-control mb-2 " type="text" placeholder="Milages (kilometer)" />
                            <input ref={priceRef} className="form-control mb-2 " type="text" placeholder="Car Price" />
                            <input ref={photoRef} className="form-control mb-2 " type="text" placeholder="Photo URL" />
                            <textarea ref={descriptionRef} className="form-control mb-2 " name="" id="" cols="30" rows="3" placeholder="Car's Description" ></textarea>
                            <div className="d-grid ">
                                <button className="btn btn-sm my-btn">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;