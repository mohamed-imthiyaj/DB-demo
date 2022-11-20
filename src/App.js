import { actions } from "ems-databinder";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  let getReadDoc = useSelector(
    (state) => state?.patientSlice?.read_document?.data?.result
  );
  const getReadDocument = async () => {
    await dispatch(actions.READ_DOCUMENT());
  };
  useEffect(() => {
    getReadDocument();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReadDocument</h1>
        <table>
          <tr>
            <th>_key</th>
            <th>_id</th>
            <th>Name</th>
          </tr>
          {getReadDoc?.map((getdata) => (
            <>
              <tr>
                <td>{getdata._key}</td>
                <td>{getdata._id}</td>
                <td>{getdata?.name}</td>
              </tr>
            </>
          ))}
        </table>
      </header>
    </div>
  );
};

export default App;
