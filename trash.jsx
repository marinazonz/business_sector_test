const [fetchedData, setFetchedData] = useState([]);
const [isLoading, setIsLoading] = useState("false");
const [error, setError] = useState(null);
const [currentPage, setCurrentPage] = useState(1);
const [dataPerPage] = useState(10);

const fetchNotesHandler = useCallback(async () => {
    setIsLoading(true);
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
        dispatch(
            appActions.replaceCurrentNotes({
                items: fetchedData.items || [],
            })
        );
    } catch (error) {
        setIsLoading(false);
        setError(error.message);
    }
    setIsLoading(false);
}, [dispatch]);
