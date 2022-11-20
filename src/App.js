import { actions } from "ems-databinder";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  let Vital_workspace = useSelector(
    (state) => state?.patientSlice?.read_db?.data?.result?.[0]
  );
  const getPatientData = async () => {
    await dispatch(actions.READ_DB());
  };
  useEffect(() => {
    getPatientData();
  }, []);
  console.log(Vital_workspace);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <h1>AGE :{Vital_workspace?.age}</h1>
      </header>
    </div>
  );
};

export default App;
