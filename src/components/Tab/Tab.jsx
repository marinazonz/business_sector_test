import { useSelector } from "react-redux";

import TabHead from "./TabHead";
import TabBody from "./TabBody";

const Tab = () => {
    const isLoading = useSelector((state) => state.app.loading);
    return (
        <section className='pt-5 w-full'>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <table className='w-full md:w-[1077px]'>
                    <TabHead />
                    <TabBody />
                </table>
            )}
        </section>
    );
};

export default Tab;
