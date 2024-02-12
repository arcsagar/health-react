import { useState } from "react";
import Header from "../../module/Header/Header";

const Patient = () => {
    const [whichPage, setWhichPage] = useState("users");

    const PatientPage = ["Home","book appointment", "Booked appointment", "Setting"];

    const changePage = (page: string) => {
        console.log('page',page)
        setWhichPage(page);
      }
    return (
        <div>
            Patient
            <Header pages={PatientPage} changePage={changePage}/>
        </div>
    )
};

export default Patient;