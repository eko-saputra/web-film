import { useEffect, useState } from "react";
import axios from "axios";

function Trending() {
  const [trending, setTrending] = useState();
  const [movies, setMovies] = useState([])

  const handleTrending = (e) => {
    e.preventDefault();
    const data = e.currentTarget.getAttribute("data-trending");
    setTrending(data);
  };

  useEffect(() => {

    // axios.get('https://api.themoviedb.org/3/tv/popular',
    axios.get('https://api.themoviedb.org/3/discover/movie',
      {
        params: {
          api_key: '257443ce2715a86e96cc262188606431',
        }
      }
    ).then((response) => {
      setMovies(response.data.results)
    })
  }, []);

  return (
    <>
      <div className="trending" id="trending">
        <div className="container p-5">
          <h3 className="text-warning">TRENDING</h3>
          <div className="row">
            {movies.map((result, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <a
                        href="#"
                        className="nav-link"
                        onClick={handleTrending}
                        data-bs-toggle="modal"
                        data-bs-target={`#${index}`}
                      >
                        <h5 className="card-title text-light">{result.title}</h5>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {movies.map((result, index) => {
        return (
          <div
            className="modal fade"
            id={index}
            key={index}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    {result.title}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} className="card-img-top" alt="..." />
                  <h3 className="text-uppercase mt-3">overview</h3>
                  <p>
                    {result.overview}
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col">
                      Release Date : <b className="badge bg-primary p-1">{result.release_date}</b>
                    </div>

                    <div className="col">
                      Popularity : <b className="badge bg-primary p-1">{result.popularity}</b>
                    </div>

                    <div className="col">
                      Language: <b className="badge bg-primary p-1">{result.original_language}</b>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default Trending;
