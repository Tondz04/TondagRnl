import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Genders from "../../interfaces/Genders";
import GenderServices from "../../services/GenderServices";
import ErrorHandler from "../../handler/ErrorHandler";
import Spinner from "../Spinner";

interface GendersTableProps {
  refreshGenders: boolean;
}

const GendersTable = ({ refreshGenders }: GendersTableProps) => {
  const [state, setstate] = useState({
    loadingGenders: true,
    genders: [] as Genders[],
  });

  const handleLoadGenders = () => {
    GenderServices.loadGenders()
      .then((res) => {
        if (res.status == 200) {
          setstate((prevState) => ({
            ...prevState,
            genders: res.data.genders,
          }));
        } else {
          console.error(
            "Unexpected status error during loading genders:",
            res.status
          );
        }
      })
      .catch((error) => {
        ErrorHandler(error, null);
      })
      .finally(() => {
        setstate((prevState) => ({
          ...prevState,
          loadingGenders: false,
        }));
      });
  };

  useEffect(() => {
    handleLoadGenders();
  }, [refreshGenders]);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr className="align-middle">
            <th>NO.</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.loadingGenders ? (
            <tr className="align-middle">
              <td colSpan={3} className="text-center">
                <Spinner />
              </td>
            </tr>
          ) : (
            state.genders.map((gender, index) => (
              <tr className="align-middle" key={index}>
                <td>{index + 1}</td>
                <td>{gender.gender}</td>
                <td>
                  <div className="btn-group">
                    <button type="button" className="btn btn-success">
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}

          <tr className="align-middle"></tr>
        </tbody>
      </table>
    </>
  );
};

export default GendersTable;
