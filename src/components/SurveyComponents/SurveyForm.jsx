import 'bootstrap';
import '../../styles/Survey.css'
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const SurveyForm = () => {


    return (
                <form>
        <div className="container mt-3 mt-lg-5">
            <header className="mb-4">
                <h1 className="display-3 text-center ">גדוד 383</h1>
                <h2 className="lead text-center">סקר שירות תמיכת גדוד 383</h2>
            </header>
            <main>
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item  "><a href="#step-1" id="step-1-tab" data-bs-toggle="tab" className="nav-link h3 active">step 1 <small
                                className="d-none d-md-block lead">personal info</small></a></li>
                    <li className="nav-item  "><a  href="#step-2" id="step-2-tab" data-bs-toggle="tab" className="nav-link h3 disabled ">step 2 <small
                                className="d-none d-md-block lead">questions/answers</small></a></li>
                    <li className="nav-item  "><a href="#step-3" id="step-3-tab" data-bs-toggle="tab" className="nav-link h3 disabled">step 3 <small
                                className="d-none d-md-block lead">questions/rating</small></a></li>
                </ul>
                <div className="tab-content">
                    <div id="step-1" className="tab-pane fade  show active   pt-4 ">
                        <div className="row">
                            <div className="col-md-3">
                                <label htmlFor="" className="form-label fw-bold">מין:</label>
                                <div>
                                    <div className="form-check-inline form-check">
                                        <input type="radio" name="sex" id="sex-male" value="male" className="form-check-input"/>
                                        <label htmlFor="sex-male" className="form-check-label">זכר</label>
                                    </div>
                                    <div className="form-check-inline form-check">
                                        <input type="radio" name="sex" id="sex-female" value="female"
                                            className="form-check-input"/>
                                        <label htmlFor="sex-female" className="form-check-label">נקבה</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 my-3 my-md-auto">
                                <label htmlFor="age" className="form-label fw-bold" >
                                    גיל:
                                </label>
                                <input type="number" className="form-control" id="age" />
                                    <small id="ageerror"></small>
                                  
                                
                            </div>
                            <div className="col-md-6 my-3 my-md-auto">
                                <label htmlFor="tel" className="form-label fw-bold" >
                                    טלפון:
                                </label>
                                <input type="tel" className="form-control" id="tel" maxLength="10"/>
                                    <small id="telerror"></small>
                                  
                            </div>
                        </div>
                        <div className="row my-md-3">
                            <div className="col-md-6 my-3 my-md-auto">
                                <label htmlFor="name" className="form-label fw-bold">שם מלא:</label>
                                <input type="text" id="name" className="form-control" placeholder="שם מלא"/>
                                    <small id="nameerror"></small>
                                
                     
                            </div>
                            <div className="col-md-6 my-3 my-md-auto">
                                <label htmlFor="email" className="form-label fw-bold">דוא"ל:</label>
                                <input type="email" id="email" name="email" className="form-control" placeholder="Username@domain.com"/>
                                    <small id="emailerror"></small>
                                                    
                            </div>
                        </div>
                        <div className="row my-md-3">
                            <div className="col-md-9 my-3 my-md-auto">
                                <label htmlFor="address-1" className="form-label fw-bold">Address part 1:</label>
                                <input type="text" id="address-1" className="form-control"
                                    placeholder="123 streetname neighborhood"/>
                            </div>
                            <div className="col-md-3 my-3 my-md-auto">
                                <label htmlFor="address-2" className="form-label fw-bold">Address part 2:</label>
                                <input type="text" id="address-2" className="form-control" placeholder="B3 3th floor"/>
                            </div>
                        </div>
                        <div className="row my-md-3">
                            <div className="col-md-6 my-3 my-md-auto">
                                <label htmlFor="city" className="form-label fw-bold">City:</label>
                                <input type="text" id="city" className="form-control" placeholder="Tehran"/>
                            </div>
                            <div className="col-md-2 my-3 my-md-auto">
                                <label htmlFor="zip" className="form-label fw-bold">Zip:</label>
                                <input type="number" id="zip" className="form-control" placeholder="0098-21"/>
                            </div>
                            <div className="col-md-4 my-3 my-md-auto">
                                <label htmlFor="country" className="form-label fw-bold">Country:</label>
                                <input list="countries" id="country" className="form-control"/>
                                <datalist id="countries">
                                    <option value="Iran"></option>
                                    <option value="England"></option>
                                    <option value="Sweden"></option>
                                    <option value="Austria"></option>
                                </datalist>
    
                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-secondary d-block ms-auto" id="go-to-step-2">Step
                            2
                        </button>
    
    
    
                    </div>
                    <div id="step-2" className="tab-pane fade  pt-4 ">
                        <h5 className="text-center my-2">Question #1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorum.</h5>
                        <div className="row my-3">
                            <div className="col-lg-6">
                                <figure className="figure">
                                    <img src="img/1600x900.png" className="figure-img img-fluid rounded" alt="img"></img>
                                    <figcaption className="figure-caption">Lorem ipsum dolor sit.</figcaption>
                                </figure>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-check ">
                                    <input type="radio" id="answer-1" className="form-check-input " name="answer-1"/>
                                    <label htmlFor="answer-1" className="form-label">Answer-1</label>
                                </div>
                                <div className="form-check ">
                                    <input type="radio" id="answer-2" className="form-check-input " name="answer-1"/>
                                    <label htmlFor="answer-2" className="form-label">Answer-2</label>
                                </div>
                                <div className="form-check ">
                                    <input type="radio" id="answer-3" className="form-check-input " name="answer-1"/>
                                    <label htmlFor="answer-3" className="form-label">Answer-3</label>
                                </div>
                                <div className="form-check ">
                                    <input type="radio" id="answer-4" className="form-check-input " name="answer-1"/>
                                    <label htmlFor="answer-4" className="form-label">Answer-4</label>
                                </div>
                                <div className="form-check ">
                                    <input type="radio" id="answer-5" className="form-check-input " name="answer-1"/>
                                    <label htmlFor="answer-5" className="form-label">
                                        <input type="text" className="form-control form-control-sm" size="30"/>
                                    </label>
                                    <p className="text-muted small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sed numquam alias dolores?</p>
    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <h5 className="text-center my-2">Question #2: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorum.</h5>
                        <div className="row my-3">
                            <div className="col-lg-6">
                                <figure className="figure">
                                    <img src="img/1600x900.png" className="figure-img img-fluid rounded" alt="img"></img>
                                    <figcaption className="figure-caption">Lorem ipsum dolor sit.</figcaption>
                                </figure>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-check ">
                                    <input type="radio" id="answer-6" className="form-check-input " name="answer-2"/>
                                    <label htmlFor="answer-6" className="form-label">Answer-1</label>
                                </div>
                                <div className="form-check ">
                                    <input type="radio" id="answer-7" className="form-check-input " name="answer-2"/>
                                    <label htmlFor="answer-7" className="form-label">Answer-2</label>
                                </div>
                                <div className="form-check ">
                                    <input type="radio" id="answer-8" className="form-check-input " name="answer-2"/>
                                    <label htmlFor="answer-8" className="form-label">Answer-3</label>
                                </div>
                                <div className="form-check ">
                                    <input type="radio" id="answer-9" className="form-check-input " name="answer-2"/>
                                    <label htmlFor="answer-9" className="form-label">Answer-4</label>
                                </div>
                                <div className="form-check ">
                                    <input type="radio" id="answer-10" className="form-check-input " name="answer-2"/>
                                    <label htmlFor="answer-10" className="form-label">
                                        <input type="text" className="form-control form-control-sm" size="30"/>
                                    </label>
                                    <p className="text-muted small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sed numquam alias dolores?</p>
    
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <h5 className="text-center my-2">Question #3: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorum.</h5>
                        <div className="row my-3">
                            <div className="col-lg-6">
                                <figure className="figure">
                                    <img src="img/1600x900.png" className="figure-img img-fluid rounded" alt="img"></img>
                                    <figcaption className="figure-caption">Lorem ipsum dolor sit.</figcaption>
                                </figure>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-check ">
                                    <input type="checkbox" id="answer-11" className="form-check-input " name="answer-3"/>
                                    <label htmlFor="answer-11" className="form-label">Answer-1</label>
                                </div>
                                <div className="form-check ">
                                    <input type="checkbox" id="answer-12" className="form-check-input " name="answer-4"/>
                                    <label htmlFor="answer-12" className="form-label">Answer-2</label>
                                </div>
                                <div className="form-check ">
                                    <input type="checkbox" id="answer-13" className="form-check-input " name="answer-5"/>
                                    <label htmlFor="answer-13" className="form-label">Answer-3</label>
                                </div>
                                <div className="form-check ">
                                    <input type="checkbox" id="answer-14" className="form-check-input " name="answer-6"/>
                                    <label htmlFor="answer-14" className="form-label">Answer-4</label>
                                </div>
                                <div className="form-check ">
                                    <input type="checkbox" id="answer-15" className="form-check-input " name="answer-7"/>
                                    <label htmlFor="answer-15" className="form-label">
                                        <input type="text" className="form-control form-control-sm" size="30"/>
                                    </label>
                                    <p className="text-muted small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sed numquam alias dolores?</p>
    
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-secondary ms-auto d-block" id="go-to-step-3">Step
                            3</button>
                    </div>
                    <div id="step-3" className="tab-pane fade my-3  pt-4 ">
                        <div className="row my-2">
                            <div className="col-lg-6">
                                <h2 className="h5">Question #4: Lorem ipsum dolor sit ameo est dolquibusdam optio voluptas! Ex.
                                </h2>
                                <p className="small">Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
    
                            </div>
                            <div className="col-lg-6 ">
                                <div className=" d-flex justify-content-between mb-2">
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q4-a1" id="q4-a1" name="q4-a"/>
                                        <label className="form-check-label" htmlFor="q4-a1">1</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q4-a2" id="q4-a2" name="q4-a"/>
                                        <label className="form-check-label" htmlFor="q4-a2">2</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q4-a3" id="q4-a3" name="q4-a"/>
                                        <label className="form-check-label" htmlFor="q4-a3">3</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q4-a4" id="q4-a4" name="q4-a"/>
                                        <label className="form-check-label" htmlFor="q4-a4">4</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q4-a5" id="q4-a5" name="q4-a"/>
                                        <label className="form-check-label" htmlFor="q4-a5">5</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q4-ana" id="q4-ana" name="q4-a"/>
                                        <label className="form-check-label" htmlFor="q4-ana">נמנע</label>
                                    </div>
                                </div>
                                <textarea className="form-control" rows="2"
                                    placeholder="write something for Ali ..."></textarea>
    
    
    
    
    
                            </div>
                            <hr className="mt-4"/>
    
    
                        </div>
                        <div className="row my-2">
                            <div className="col-lg-6">
                                <h2 className="h5">Question #5: Lorem ipsum dolor sit ameo est dolquibusdam optio voluptas! Ex.
                                </h2>
                                <p className="small">Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
    
                            </div>
                            <div className="col-lg-6 ">
                                <div className=" d-flex justify-content-between mb-2">
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q5-a1" id="q5-a1" name="q5-a"/>
                                        <label className="form-check-label" htmlFor="q5-a1">1</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q5-a2" id="q5-a2" name="q5-a"/>
                                        <label className="form-check-label" htmlFor="q5-a2">2</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q5-a3" id="q5-a3" name="q5-a"/>
                                        <label className="form-check-label" htmlFor="q5-a3">3</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q5-a4" id="q5-a4" name="q5-a"/>
                                        <label className="form-check-label" htmlFor="q4-a4">4</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q5-a5" id="q5-a5" name="q5-a"/>
                                        <label className="form-check-label" htmlFor="q4-a5">5</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="q5-ana" id="q5-ana" name="q5-a"/>
                                        <label className="form-check-label" htmlFor="q5-ana">נמנע</label>
                                    </div>
                                </div>
                                <textarea className="form-control" rows="2"
                                    placeholder="write something for Ali ..."></textarea>
    
    
    
    
    
                            </div>
                            <hr className="mt-4"/>
    
    
                        </div>
                        <div className="row my-2">
                            <div className="col-lg-6">
                                <h2 className="h5">Question #6: Lorem ipsum dolor sit ameo est dolquibusdam optio voluptas! Ex.
                                </h2>
                                <p className="small">Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
    
                            </div>
                            <div className="col-lg-6 ">
                                <div className="  mb-2">
                                    <div className="btn-group btn-group-lg w-100">
                                        <input type="radio" className="btn-check" value="q6-a1" id="q6-a1" name="q6-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q6-a1">1</label>
    
    
                                        <input type="radio" className="btn-check" value="q6-a2" id="q6-a2" name="q6-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q6-a2">2</label>
    
    
                                        <input type="radio" className="btn-check" value="q6-a3" id="q6-a3" name="q6-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q6-a3">3</label>
    
                                        <input type="radio" className="btn-check" value="q6-a4" id="q6-a4" name="q6-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q4-a4">4</label>
    
                                        <input type="radio" className="btn-check" value="q6-a5" id="q6-a5" name="q6-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q6-a5">5</label>
    
                                        <input type="radio" className="btn-check" value="q6-ana" id="q6-ana" name="q6-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q6-ana">נמנע</label>
                                    </div>
                                </div>
                                <textarea className="form-control" rows="2"
                                    placeholder="write something for Ali ..."></textarea>
    
    
    
    
    
                            </div>
                            <hr className="mt-4"/>
    
                        </div>
                        <div className="row my-2">
                            <div className="col-lg-6">
                                <h2 className="h5">Question #7: Lorem ipsum dolor sit ameo est dolquibusdam optio voluptas! Ex.
                                </h2>
                                <p className="small">Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
    
                            </div>
                            <div className="col-lg-6 ">
                                <div className="  mb-2">
                                    <div className="btn-group btn-group-lg w-100">
                                        <input type="radio" className="btn-check" value="q7-a1" id="q7-a1" name="q7-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q7-a1">1</label>
    
    
                                        <input type="radio" className="btn-check" value="q7-a2" id="q7-a2" name="q7-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q7-a2">2</label>
    
    
                                        <input type="radio" className="btn-check" value="q7-a3" id="q7-a3" name="q7-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q7-a3">3</label>
    
                                        <input type="radio" className="btn-check" value="q7-a4" id="q7-a4" name="q7-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q4-a4">4</label>
    
                                        <input type="radio" className="btn-check" value="q7-a5" id="q7-a5" name="q7-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q7-a5">5</label>
    
                                        <input type="radio" className="btn-check" value="q7-ana" id="q7-ana" name="q7-a"/>
                                        <label className="btn btn-outline-secondary" htmlFor="q7-ana">נמנע</label>
                                    </div>
                                </div>
                                <textarea className="form-control" rows="2"
                                    placeholder="write something for Ali ..."></textarea>
    
    
    
    
    
                            </div>
                            <hr className="mt-4"/>
    
    
                        </div>
                        <div className="row my-2">
                            <div className="col-lg-6">
                                <h2 className="h5">Question #8: Lorem ipsum dolor sit ameo est dolquibusdam optio voluptas! Ex.
                                </h2>
                                <p className="small">Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
    
                            </div>
                            <div className="col-lg-6 ">
                                <div className="d-flex justify-content-between  mb-2">
                                    <span className="me-3">1</span>
                                    <input type="range" max="5" min="1" className="form-range" name="q7-a"/>
                                    <span className="ms-3">5</span>
                                </div>
                                <textarea className="form-control" rows="2"
                                    placeholder="write something for Ali ..."></textarea>
                            </div>
                        </div>
                        <button type="submit" id="submitButton" className="btn btn-secondary my-4  d-block ms-auto">
                            Submit
                            <span className="spinner-border spinner-border-sm d-none"></span>
                        </button>
                    </div>
    
    
                </div>
            </main>
        </div>
        </form>
    );
  };
  
  export default SurveyForm;