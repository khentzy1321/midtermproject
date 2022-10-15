import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SingleVenue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // destructuring the data response from api
        const { venue } = data;

        setLoading(false);
        setVenue(venue);
        setSchedule(data.schedules);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (

    <div className="container">
      <div className="d-flex justify-content-end">
      <Link to="/" className="btn btn-sm btn-primary mt-1 ">
              BACK TO VENUE
            </Link>
      </div>
      
      <h1 className="text-center m-4">Mater Dei College</h1>
      {loading && (
        <p className="text-white bg-success text-center">
          Loading building and schedule record ....
        </p>
      )}
      <div className="row">

        <div className="col-md-4">
          <div class="card mt-2">

            <div class="card-body">

              <img src="/images/logo1.jpg" class="card-img-top" alt="..." />
              <h3 class="card-title">{ venue.building }</h3>
              <hr />
              <div class="card-title">Name: { venue.name }</div>
              <div class="card-title">There are { venue.capacity } Capacity</div>

            </div>
          </div>
        </div>
        <div className="col md-4">
          <div className="card mt-2">
            <h1 className="text-center m-4">
              {schedule ? "Schedules" : "No Schedule Found"}
            </h1>
            {schedule && (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Course No.</th>
                    <th>Description</th>
                    <th>Schedule</th>
                    <th>Size</th>
                    <th>Teacher</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(schedule)?.map((sched, index) => {
                    return (
                      <tr key={index}>
                        <td>{schedule[sched].id}</td>
                        <td>{schedule[sched].course_no}</td>
                        <td>{schedule[sched].description}</td>
                        <td>{schedule[sched].schedule}</td>
                        <td>{schedule[sched].size}</td>
                        <td>{schedule[sched].teacher}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}

           
          </div>
        </div>
      </div>
    </div>

  );
};

export default SingleVenue;
