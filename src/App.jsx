import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchNotes } from "./store/app-slice";
import Navbar from "./components/Navbar";
import Tab from "./components/Tab/Tab";
import Pagination from "./components/Pagination";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

    const onNextPageHandler = () => {
        setCurrentPage((page) => page + 1);
    };
    const onPrevPageHandler = () => {
        setCurrentPage((page) => page - 1);
    };

    return (
        <div className='bg-white py-3 px-5'>
            <Navbar />
            <Tab />
            <Pagination />
        </div>
    );
}

export default App;
