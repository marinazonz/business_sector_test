import { useSelector, useDispatch } from "react-redux";

import paginationSlice from "../store/pagination-slice";

const Pagination = ({ onPrevPage, onNextPage }) => {
    const dispatch = useDispatch(paginationSlice);

    //data from app-slice
    const data = useSelector((state) => state.app);
    const fetchedNotes = data.allNotes;
    const dataPerPage = data.dataPerPage;

    //data from pagination-slice
    const currentPage = useSelector((state) => state.pagination.currentPage);

    const pageNumbers = [];
    const totalNotes = fetchedNotes.length;

    for (let i = 1; i <= Math.ceil(totalNotes / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='flex flex-row gap-2'>
            <button
                type='button'
                className='cursor-pointer disabled:text-slate-400 disabled:cursor-not-allowed'
                onClick={() => dispatch.increment()}
                disabled={currentPage === 1}
            >
                Назад
            </button>
            <ul className='flex flex-row justify-center items-center gap-2'>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a href={number}>{number}</a>
                    </li>
                ))}
            </ul>
            <button
                type='button'
                className='cursor-pointer disabled:text-slate-400 disabled:cursor-not-allowed'
                onClick={onNextPage}
                disabled={currentPage === pageNumbers.length}
            >
                Далее
            </button>
        </nav>
    );
};

export default Pagination;
