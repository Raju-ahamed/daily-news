import React, { Suspense } from "react";
import Catagory from "../Catagory/Catagory";
import News from "../News/News";


const LeftAside = () => {



    return (

        <div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Catagory></Catagory>
            </Suspense>
        </div>
    );
};

export default LeftAside;