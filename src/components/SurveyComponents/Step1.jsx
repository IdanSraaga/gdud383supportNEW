import React from 'react';

const Step1 = () => {
  return (
    <div className="tab-content">
      <div id="step-1" className="tab-pane fade show active pt-4">
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="" className="form-label fw-bold">
              מין:
            </label>
            <div>
              <div className="form-check-inline form-check">
                <input type="radio" name="sex" id="sex-male" value="male" className="form-check-input" />
                <label htmlFor="sex-male" className="form-check-label">
                  זכר
                </label>
              </div>
              <div className="form-check-inline form-check">
                <input type="radio" name="sex" id="sex-female" value="female" className="form-check-input" />
                <label htmlFor="sex-female" className="form-check-label">
                  נקבה
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3 my-3 my-md-auto">
            <label htmlFor="age" className="form-label fw-bold">
              גיל:
            </label>
            <input type="number" className="form-control" id="age" />
            <small id="ageerror"></small>
          </div>
          <div className="col-md-6 my-3 my-md-auto">
            <label htmlFor="tel" className="form-label fw-bold">
              טלפון:
            </label>
            <input type="tel" className="form-control" id="tel" maxLength="10" />
            <small id="telerror"></small>
          </div>
        </div>
        <div className="row my-md-3">
          <div className="col-md-6 my-3 my-md-auto">
            <label htmlFor="name" className="form-label fw-bold">
              שם מלא:
            </label>
            <input type="text" id="name" className="form-control" placeholder="שם מלא" />
            <small id="nameerror"></small>
          </div>
          <div className="col-md-6 my-3 my-md-auto">
            <label htmlFor="email" className="form-label fw-bold">
              דוא"ל:
            </label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Username@domain.com" />
            <small id="emailerror"></small>
          </div>
        </div>
        <div className="row my-md-3">
          <div className="col-md-9 my-3 my-md-auto">
            <label htmlFor="address-1" className="form-label fw-bold">
              Address part 1:
            </label>
            <input type="text" id="address-1" className="form-control" placeholder="123 streetname neighborhood" />
          </div>
          <div className="col-md-3 my-3 my-md-auto">
            <label htmlFor="address-2" className="form-label fw-bold">
              Address part 2:
            </label>
            <input type="text" id="address-2" className="form-control" placeholder="B3 3th floor" />
          </div>
        </div>
        <div className="row my-md-3">
          <div className="col-md-6 my-3 my-md-auto">
            <label htmlFor="city" className="form-label fw-bold">
              City:
            </label>
            <input type="text" id="city" className="form-control" placeholder="Tehran" />
          </div>
          <div className="col-md-2 my-3 my-md-auto">
            <label htmlFor="zip" className="form-label fw-bold">
              Zip:
            </label>
            <input type="number" id="zip" className="form-control" placeholder="0098-21" />
          </div>
          <div className="col-md-4 my-3 my-md-auto">
            <label htmlFor="country" className="form-label fw-bold">
              Country:
            </label>
            <input list="countries" id="country" className="form-control" />
            <datalist id="countries">
              <option value="Iran"></option>
              <option value="England"></option>
              <option value="Sweden"></option>
              <option value="Austria"></option>
            </datalist>
          </div>
        </div>
        <button type="button" className="btn btn-outline-secondary d-block ms-auto" id="go-to-step-2">
          Step 2
        </button>
      </div>
    </div>
  );
};

export default Step1;
