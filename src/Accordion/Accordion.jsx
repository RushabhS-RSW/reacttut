import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Api from "./Api";
import AccordionData from "./AccordionData";

const Accordion = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="mt-4">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title text-center">React Que Ans</h4>
                            <div>
                                { 
                                    Api.map((val) => {
                                        return  <AccordionData que={val.title} ans={val.describes} />;
                                    })
                                }
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </>
    )
};

export default Accordion;