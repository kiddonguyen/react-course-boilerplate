import React from "react";
import withLoading from "./withLoading";
import withError from "./withError";

const FetchingData = ({ data }) => {
    return (
        <div>
            {/* {data.map((item) => {
                return <div key={item}>{item}</div>;
            })} */}
        </div>
    );
};

export default withError(
    withLoading(
        FetchingData,
        `https://hn.algolia.com/api/v1/search?query=react`
    )
);
