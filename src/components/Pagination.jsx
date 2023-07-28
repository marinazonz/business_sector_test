import { useSelector, useDispatch } from "react-redux";

import paginationSlice, { paginationActions } from "../store/pagination-slice";

const Pagination = () => {
    const dispatch = useDispatch(paginationSlice);

    //data from app-slice
    const data = useSelector((state) => state.app);
    const fetchedNotes = data.searchedNotes;
    const dataPerPage = data.dataPerPage;

    //data from pagination-slice
    const currentPage = useSelector((state) => state.pagination.currentPage);

    const pageNumbers = [];
    const totalNotesAmount = fetchedNotes.length;

    for (let i = 1; i <= Math.ceil(totalNotesAmount / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    const onNextPageHandler = () => {
        dispatch(paginationActions.increment());
    };

    const onPrevPageHandler = () => {
        dispatch(paginationActions.decrement());
    };

    return (
        <nav className='flex flex-row gap-2'>
            <button
                type='button'
                className='cursor-pointer disabled:text-slate-400 disabled:cursor-not-allowed'
                onClick={onPrevPageHandler}
                disabled={currentPage === 1}
            >
                <a href={`#/posts/${currentPage}`}>Назад</a>
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
                onClick={onNextPageHandler}
                disabled={currentPage === pageNumbers.length}
            >
                <a href={`#/posts/${currentPage}`}>Далее</a>
            </button>
        </nav>
    );
};

export default Pagination;
