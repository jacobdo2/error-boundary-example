import React from "react";

const Hello = ({ available }) => {
  if (!available) {
    throw new Error("MY_ABC_ERROR");
  }
  return <div>This my Hello</div>;
};

export default Library;
