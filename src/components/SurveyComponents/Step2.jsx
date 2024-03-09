import React from 'react';

const Step2 = () => {
  return (
    <div id="step-2" className="tab-pane fade pt-4">
      <h5 className="text-center my-2">Question #1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum.</h5>
      <div className="row my-3">
        <div className="col-lg-6">
          <figure className="figure">
            <img src="img/1600x900.png" className="figure-img img-fluid rounded" alt="img" />
            <figcaption className="figure-caption">Lorem ipsum dolor sit.</figcaption>
          </figure>
        </div>
        <div className="col-lg-6">
          <div className="form-check">
            <input type="radio" id="answer-1" className="form-check-input" name="answer-1" />
            <label htmlFor="answer-1" className="form-label">
              Answer-1
            </label>
          </div>
          <div className="form-check">
            <input type="radio" id="answer-2" className="form-check-input" name="answer-1" />
            <label htmlFor="answer-2" className="form-label">
              Answer-2
            </label>
          </div>
          <div className="form-check">
            <input type="radio" id="answer-3" className="form-check-input" name="answer-1" />
            <label htmlFor="answer-3" className="form-label">
              Answer-3
            </label>
          </div>
          <div className="form-check">
            <input type="radio" id="answer-4" className="form-check-input" name="answer-1" />
            <label htmlFor="answer-4" className="form-label">
              Answer-4
            </label>
          </div>
          <div className="form-check">
            <input type="radio" id="answer-5" className="form-check-input" name="answer-1" />
            <label htmlFor="answer-5" className="form-label">
              <input type="text" className="form-control form-control-sm" size="30" />
            </label>
            <p className="text-muted small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam alias dolores?</p>
          </div>
        </div>
      </div>
      <hr />
      <h5 className="text-center my-2">Question #2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum.</h5>
      <div className="row my-3">
        <div className="col-lg-6">
          <figure className="figure">
            <img src="img/1600x900.png" className="figure-img img-fluid rounded" alt="img" />
            <figcaption className="figure-caption">Lorem ipsum dolor sit.</figcaption>
          </figure>
        </div>
        <div className="col-lg-6">
          <div className="form-check">
            <input type="radio" id="answer-6" className="form-check-input" name="answer-2" />
            <label htmlFor="answer-6" className="form-label">
              Answer-1
            </label>
          </div>
          <div className="form-check">
            <input type="radio" id="answer-7" className="form-check-input" name="answer-2" />
            <label htmlFor="answer-7" className="form-label">
              Answer-2
            </label>
          </div>
          <div className="form-check">
            <input type="radio" id="answer-8" className="form-check-input" name="answer-2" />
            <label htmlFor="answer-8" className="form-label">
              Answer-3
            </label>
          </div>
          <div className="form-check">
            <input type="radio" id="answer-9" className="form-check-input" name="answer-2" />
            <label htmlFor="answer-9" className="form-label">
              Answer-4
            </label>
          </div>
          <div className="form-check">
            <input type="radio" id="answer-10" className="form-check-input" name="answer-2" />
            <label htmlFor="answer-10" className="form-label">
              <input type="text" className="form-control form-control-sm" size="30" />
            </label>
            <p className="text-muted small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam alias dolores?</p>
          </div>
        </div>
      </div>
      <hr />
      <h5 className="text-center my-2">Question #3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum.</h5>
      <div className="row my-3">
        <div className="col-lg-6">
          <figure className="figure">
            <img src="img/1600x900.png" className="figure-img img-fluid rounded" alt="img" />
            <figcaption className="figure-caption">Lorem ipsum dolor sit.</figcaption>
          </figure>
        </div>
        <div className="col-lg-6">
          <div className="form-check">
            <input type="checkbox" id="answer-11" className="form-check-input" name="answer-3" />
            <label htmlFor="answer-11" className="form-label">
              Answer-1
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="answer-12" className="form-check-input" name="answer-4" />
            <label htmlFor="answer-12" className="form-label">
              Answer-2
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="answer-13" className="form-check-input" name="answer-5" />
            <label htmlFor="answer-13" className="form-label">
              Answer-3
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="answer-14" className="form-check-input" name="answer-6" />
            <label htmlFor="answer-14" className="form-label">
              Answer-4
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="answer-15" className="form-check-input" name="answer-7" />
            <label htmlFor="answer-15" className="form-label">
              <input type="text" className="form-control form-control-sm" size="30" />
            </label>
            <p className="text-muted small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed numquam alias dolores?</p>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-outline-secondary ms-auto d-block" id="go-to-step-3">
        Step 3
      </button>
    </div>
  );
};

export default Step2;
