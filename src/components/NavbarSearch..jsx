import { useRef, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";

const NavbarSearch = () => {
    const searchRef = useRef("");
    const [searchfield, setSearchfield] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const searchInput = searchRef.current.value.toLowerCase();

        setSearchfield(""); //doeasnt work

        //onSearch(searchInput);
    };

    return (
        <form
            className='md:w-[39.438rem] h-[3.25rem] bg-[#5A5C66] flex flex-row justify-between items-center gap-4 px-5'
            onSubmit={submitHandler}
        >
            <input
                className='bg-transparent w-full h-full focus:outline-none text-white'
                type='search'
                defaultValue={searchfield}
                ref={searchRef}
                placeholder='Поиск'
            />
            <button type='submit' className='cursor-pointer'>
                <AiOutlineSearch size={25} color='white' />
            </button>
        </form>
    );
};
export default NavbarSearch;
