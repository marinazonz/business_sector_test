import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Tab from "../components/Tab/Tab";

const AppPage = () => {
    return (
        <div className='bg-white py-3 px-3 md:pt-10 md:px-16'>
            <Navbar />
            <Tab />
            <Pagination />
        </div>
    );
};
export default AppPage;
