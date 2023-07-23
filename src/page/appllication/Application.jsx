import { useLoaderData } from "react-router-dom";

const Application = () => {

    const appliedCollage = useLoaderData()

    console.log(appliedCollage)


    return (
        <div>
            <h1>this is application pag</h1>
        </div>
    );
};

export default Application;