import Spiderman from "../assets/images/superhero/antman.jpg";
function Superhero() {
  return (
    <>
      <div className="superhero" id="superhero">
        <div className="container p-5">
          <h3 className="text-warning">SUPERHERO</h3>
          <div className="row">
            <div className="col">
              <div className="card">
                <img src={Spiderman} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-light">Card title</h5>
                  <p className="card-text text-light">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <a href="#" className="btn btn-warning">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Spiderman} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-light">Card title</h5>
                  <p className="card-text text-light">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <a href="#" className="btn btn-warning">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Spiderman} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-light">Card title</h5>
                  <p className="card-text text-light">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <a href="#" className="btn btn-warning">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Superhero;
