import React from 'react'
import { testimonials } from '../assets/assets'

function Testimonials() {
  return (
    <div className='testimonial mt-5 container'>
      <h3 className='text-center'>What Our Coustomer Say</h3>
      <div className='mt-3'>
        <div className='row gy-3'>
          {
            testimonials.map((t)=>{
              return (
                <div className="col-lg-4" key={t._id}>
                  <div className="card">
                    <img
                      src={t.image}
                      className="card-img-top img-fluid"
                      alt=""
                    />
                    <div className="card-body">
                      <p className="card-text fw-bold">Name: {t.name}</p>
                      <p className="card-text fw-bold">Location: {t.location}</p>
                      <p className="card-text fw-bold">Rating: {t.rating}</p>
                      <p className="card-text fw-bold">Comment: {t.comment}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonials