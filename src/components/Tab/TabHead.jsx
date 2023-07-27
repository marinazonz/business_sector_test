import { IoIosArrowDown } from "react-icons/io";

const TabHead = () => {
    return (
        <thead>
            <tr className='text-[#FFFFFF] font-semibold text-xs sm:text-sm bg-[#474955] h-[54px] text-center'>
                <th scope='col'>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <span>ID</span>
                        <IoIosArrowDown />
                    </div>
                </th>

                <th scope='col'>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <span>Заголовок</span>
                        <IoIosArrowDown />
                    </div>
                </th>

                <th scope='col'>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <span>Описание</span>
                        <IoIosArrowDown />
                    </div>
                </th>
            </tr>
        </thead>
    );
};

export default TabHead;
