import { Link } from "react-router-dom";

const GendersTable = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>NO.</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Male</td>
            <td>
              <Link
                to={"/gender/edit"}
                type="submit"
                className="btn btn-success mx-1"
              >
                Edit
              </Link>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Female</td>
            <td>
              <button type="submit" className="btn btn-success mx-1">
                Edit
              </button>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Others</td>
            <td>
              <button type="submit" className="btn btn-success mx-1">
                Edit
              </button>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GendersTable;
