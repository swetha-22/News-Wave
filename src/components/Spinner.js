import React from "react";

const Spinner=() =>{
    return (
      <div className="text-center">
        {/* <img src={loading} alt="" style={{width:'130px',height:'100px'}} /> */}
        <div className="spinner-border" role="status"></div>
      </div>
    );
}
export default Spinner;