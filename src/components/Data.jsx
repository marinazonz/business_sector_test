import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { appActions } from "../store/app-slice";

export const Data = () => {
    const [fetchedData, setFetchedData] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);
    const dispatch = useDispatch();

    //Get current data
    const indexOfLastNote = currentPage * dataPerPage;
    const indexOfFirstNote = indexOfLastNote - dataPerPage;
    const currentNotes = fetchedData.slice(indexOfFirstNote, indexOfLastNote);

    const fetchNotesHandler = useCallback(async () => {
        dispatch(appActions.setLoading());
        setError(null);
        //to make sure we cleared any previous errors

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            if (!response.ok) {
                throw new Error("Ups! Smth went wrong with response");
            }

            const data = await response.json();

            setFetchedData(data);
        } catch (error) {
            dispatch(appActions.setLoading(false));
            setError(error.message);
        }
        dispatch(appActions.setLoading(false));
    }, [dispatch]);

    useEffect(() => {
        fetchNotesHandler();
    }, [fetchNotesHandler]);

    return;
};
