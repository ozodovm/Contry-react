import { useState } from "react";
import Modal from "./Modal";

function CountryCard({ item, isOpenModal, setIsOpenModal, handleDelete }) {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        handleDelete(item.id); 
        setShowModal(false);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    return (
        <>
            <li className="w-[264px] rounded-md bg-white pb-[20px] shadow-lg">
                <img className="rounded-t-md object-cover h-[160px] pb-[24px]" src={item.flag} alt="Flag" width={"100%"} />

                <div className="pl-[24px]">
                    <strong className="font-[700] text-[18px] leading-[26px]">{item.name}</strong>
                    <p className="font-[300] text-[14px] leading-[16px] mt-[16px]">
                        <span className="font-[600] text-[14px] leading-[16px]">Population: </span> {item.population}
                    </p>
                    <p className="font-[300] text-[14px] leading-[16px] my-[8px]">
                        <span className="font-[600] text-[14px] leading-[16px]">Region: </span> {item.region}
                    </p>
                    <p className="font-[300] text-[14px] leading-[16px]">
                        <span className="font-[600] text-[14px] leading-[16px]">Capital: </span> {item.capital}
                    </p>
                    <button className="w-[80px] bg-blue-500 py-2 mt-3 rounded-lg text-white hover:opacity-60 duration-300">update</button>
                    <button onClick={handleDeleteClick} className="w-[80px] bg-red-500 py-2 mt-3 ml-4 rounded-lg text-white hover:opacity-60 duration-300">delete</button>
                </div>
            </li>

            {showModal && (
                <Modal>
                    <h2 className="text-center">Are you sure delete confirmation?</h2>
                    <div className="flex justify-center mt-4">
                        <button onClick={handleConfirmDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2">Yes</button>
                        <button onClick={handleCancelDelete} className="bg-blue-500 text-white px-4 py-2 rounded-lg">No</button>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default CountryCard;
