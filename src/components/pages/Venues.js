import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Venues() {

  const [venues, setVenues] = useState(null)

  useEffect(() => {
    fetch('https://sis.materdeicollege.com/api/venues')
      .then(res => {
        return res.json();
      }).then(data => {
        setVenues(data.venues)
      })
  }, []);
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div class="card mt-2">
            <div class="card-body">
              <img src="images/logo.jpg" class="card-img-top" alt="..." />
              <h3 class="card-title text-center">MATER DEI COLLEGE</h3>
              <hr />
              <p class="card-text">The Mater Dei School Community is made up of children, parents, teachers and staff 
              and upholds its motto “Caritas" (caring) by having a welcoming, inclusive and positive environment as we
               work together through our Catholic Christian faith, actions and love for all.
             The Alice Springs (Mparntwe) Education Declaration  (2019) forms the foundation for our Vision at Mater Dei. 
                   It outlines two fundamental goals in education -  to promote excellence and equity; and for young
                    Australians to become confident and creative individuals, successful lifelong learners, 
                    and to be active and informed members of the community. At Mater Dei we shall have a quality, safe 
                    environment where learning is relevant, motivating and meaningful because our children have developed 
                    the knowledge, skills and Christian values needed for life's journey.
                 Mater Dei is a place where our children are encouraged to work and reach their full potential as
                  individuals and as members of the wider community.​</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card w-100 mt-2">
            <header><h1 className="text-center">List Of Venues</h1></header>
            <div class="card-body">
              {venues && (
                <div id="venues">
                  {venues.map((venue) => (
                    <div id="venue">
                      <table className='table table-bordered table-striped'>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Building</th>
                            <th>Capacity</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{venue.name}</td>
                            <td>{venue.building}</td>
                            <td>{venue.capacity}</td>
                            <td>
                              <Link class="btn btn-primary mr-2 btn-sm" to={`/venues/${venue.id}`}>
                                View
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

  );



}
export default Venues;