import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SearchBar from './Searchbar';

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="input-group mb-3">
              <SearchBar/>
            </div>
            <div className="image-box text-center">
              <img src={product.img} alt={product.title} className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card custom-card p-4">
              <h4>{product.title} <i className="bi bi-info-circle"></i></h4>
              <p className="text-muted">{product.description}</p>
              <div className="d-flex justify-content-around mt-4">
                <div className="nutrient text-center">
                  <div className="icon bg-orange"><i className="bi bi-box"></i></div>
                  <p>Proteins<br /><small>24g</small></p>
                </div>
                <div className="nutrient text-center">
                  <div className="icon bg-pink"><i className="bi bi-droplet"></i></div>
                  <p>Fats<br /><small>54.3g</small></p>
                </div>
                <div className="nutrient text-center">
                  <div className="icon bg-green"><i className="bi bi-flower1"></i></div>
                  <p>Carbohydrates<br /><small>13.2g</small></p>
                </div>
              </div>
              <h6 className="mt-4">Alternative you can try</h6>
              <div className="d-flex gap-2 overflow-auto">
                <img src="/1.png" alt="alt1" className="alt-img" />
                <img src="/2.png" alt="alt2" className="alt-img" />
                <img src="/3.png" alt="alt3" className="alt-img" />
                <img src="/4.png" alt="alt4" className="alt-img" />
                <img src="/5.png" alt="alt5" className="alt-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}