import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { appActions } from "../store/app-slice";
import { AiOutlineSearch } from "react-icons/ai";

const NavbarSearch = () => {
    const searchRef = useRef("");
    const fetchedData = useSelector((state) => state.app.allNotes);

    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        const searchInput = searchRef.current.value;
        dispatch(appActions.setSeacrhField(searchInput));

        //check here
        if (searchInput !== "") {
            const newData = fetchedData.filter((note) => {
                return (
                    note.id.toString().toLowerCase().includes(searchInput) ||
                    note.title.toString().toLowerCase().includes(searchInput) ||
                    note.body.toString().toLowerCase().includes(searchInput)
                );
            });
            dispatch(appActions.setNotesAfterSearch(newData));
        }

        setInputValue("");
    };

    return (
        <form
            className='w-full sm:w-[39.438rem] h-[3.25rem] bg-[#5A5C66] flex flex-row justify-between items-center gap-4 px-5'
            onSubmit={submitHandler}
        >
            <input
                className='bg-transparent w-full h-full focus:outline-none text-white'
                type='search'
                value={inputValue}
                ref={searchRef}
                placeholder='Поиск'
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type='submit' className='cursor-pointer'>
                <AiOutlineSearch size={25} color='white' />
            </button>
        </form>
    );
};
export default NavbarSearch;
