import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./product.css"
import tshirt1 from "./images/tshirt1.jpg"
import tshirt2 from "./images/tshirt2.jpg"
import tshirt3 from "./images/tshirt3.jpg"
import tshirt4 from "./images/tshirt4.jpg"
import tshirt5 from "./images/tshirt5.jpg"
import tshirt6 from "./images/tshirt6.jpg"
export default function Product() {
    return (
        <div>
            <h1>Products</h1>
            <div className="card-container">
            <div className="card">
                <img src={tshirt1} class="card-img-top" alt="pic" />
                <div className="card-body">
                    <h2 className="card-title">Tommy Shirt</h2>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

            </div>
            <div className="card">
                <img src={tshirt2} class="card-img-top" alt="pic" />
                <div className="card-body">
                    <h2 className="card-title">Tommy Shirt</h2>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

            </div>
            <div className="card">
                <img src={tshirt3} class="card-img-top" alt="pic" />
                <div className="card-body">
                    <h2 className="card-title">Tommy Shirt</h2>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

            </div>
            <div className="card">
                <img src={tshirt4} class="card-img-top" alt="pic" />
                <div className="card-body">
                    <h2 className="card-title">Tommy Shirt</h2>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

            </div>
            <div className="card">
                <img src={tshirt5} class="card-img-top" alt="pic" />
                <div className="card-body">
                    <h2 className="card-title">Tommy Shirt</h2>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

            </div>
            <div className="card">
                <img src={tshirt6} class="card-img-top" alt="pic" />
                <div className="card-body">
                    <h2 className="card-title">Tommy Shirt</h2>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

            </div>
        </div>
        </div>
    )
}
