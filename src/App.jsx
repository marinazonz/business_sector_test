import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { fetchNotes } from "./store/app-slice";
import AppPage from "./pages/AppPage";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

    return (
        <main>
            <Routes>
                <Route path={`/`} element={<AppPage />} />
            </Routes>
        </main>
    );
}

export default App;
