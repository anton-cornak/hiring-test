import React from "react";

const Sample = (props) => {
  const { setShowSampleModal, setSampleResponse } = props;

  return (
    <div className="container no-padding">
      <div className="panel" style={{ borderRadius: "12px" }}>
        <div className="panel-body">
          <h1 className="no-margin" style={{ paddingBottom: "15px" }}>
            <b>Make the model Great Again!</b>
          </h1>
          Start by uploading another sample to train the model and get even more
          precise results.
          <div className="row float-right">
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => {
                setShowSampleModal(true);
                setSampleResponse({});
              }}
            >
              Add Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
