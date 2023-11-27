import React from "react";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
const BlogPageDetails = () => {
    // const { slug } = useParams();
    const navigate = useNavigate();
    return (
        <>
            <div>BlogPageDetails</div>;
            <button
                className="p-3 text-white bg-blue-500 rounded-sm"
                onClick={() => navigate("/blog")}
            >
                Navigate to Blog Page
            </button>
        </>
    );
};

export default BlogPageDetails;
