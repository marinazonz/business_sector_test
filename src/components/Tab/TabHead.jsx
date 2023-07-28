import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../store/app-slice";
import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

const TabHead = () => {
    const [searchDir, setSearchDir] = useState("asc");
    const dispatch = useDispatch();
    const fetchedNotes = useSelector((state) => state.app.searchedNotes);
    const fetchedNotesCopy = [...fetchedNotes];

    const onFilterHandler = (target) => {
        if (searchDir === "asc") {
            const filteredDataAsc = fetchedNotesCopy.sort((a, b) => {
                if (target === "id") {
                    return a.id > b.id ? 1 : -1;
                } else if (target === "title") {
                    return a.title > b.title ? 1 : -1;
                } else {
                    return a.body > b.body ? 1 : -1;
                }
            });
            setSearchDir("dsc");
            dispatch(appActions.setNotesAfterSearch(filteredDataAsc));
        } else {
            const filteredData = fetchedNotesCopy.reverse();
            setSearchDir("asc");
            dispatch(appActions.setNotesAfterSearch(filteredData));
        }
    };

    return (
        <thead>
            <tr className='text-[#FFFFFF] font-semibold text-xs sm:text-sm bg-[#474955] h-[54px] text-center'>
                <th scope='col' onClick={() => onFilterHandler("id")}>
                    <div className='h-full w-full flex flex-row justify-center items-center gap-1 cursor-pointer'>
                        <span>ID</span>
                        <IoIosArrowDown />
                    </div>
                </th>

                <th scope='col' onClick={() => onFilterHandler("title")}>
                    <div className='flex flex-row justify-center items-center gap-2 cursor-pointer'>
                        <span>Заголовок</span>
                        <IoIosArrowDown />
                    </div>
                </th>

                <th scope='col' onClick={() => onFilterHandler("body")}>
                    <div className='flex flex-row justify-center items-center gap-2 cursor-pointer'>
                        <span>Описание</span>
                        <IoIosArrowDown />
                    </div>
                </th>
            </tr>
        </thead>
    );
};

export default TabHead;
