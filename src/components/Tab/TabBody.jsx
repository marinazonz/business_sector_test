import { useSelector } from "react-redux";

const TabBody = () => {
    //data from app-slice
    const data = useSelector((state) => state.app);
    const fetchedNotes = data.allNotes;
    const dataPerPage = data.dataPerPage;

    //data from pagination-slice
    const currentPage = useSelector((state) => state.pagination.currentPage);

    //Get current data
    const indexOfLastNote = currentPage * dataPerPage;
    const indexOfFirstNote = indexOfLastNote - dataPerPage;
    const currentNotes = fetchedNotes.slice(indexOfFirstNote, indexOfLastNote);

    return (
        <>
            <tbody className='text-xs text-[#474955] font-medium'>
                {currentNotes.map((note) => {
                    return (
                        <tr key={note.id}>
                            <td className='border border-[#E3E6EC]'>
                                {note.id}
                            </td>
                            <td className='border border-[#E3E6EC] p-1'>
                                {note.title}
                            </td>
                            <td className='border border-[#E3E6EC] p-1'>
                                {note.body}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
};

export default TabBody;
