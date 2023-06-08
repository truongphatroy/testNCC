import React from "react";

const PaginationTitle = ({ startProduct, endProduct, totalProduct }) => {
  return (
    <div className='mb-2 d-flex justify-content-center'>
      {totalProduct == 0 ? (
        <div>No found product.</div>
      ) : (
        <div>
          Showing {startProduct}-{endProduct} of {totalProduct} results.
        </div>
      )}
    </div>
  );
};

export default PaginationTitle;
