import { suppliers } from "./data/suppliersData";

function App() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>Contact Title</th>
            <th>Country</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr>
              <td>{supplier.companyName}</td>
              <td>{supplier.contactName}</td>
              <td>{supplier.contactTitle}</td>
              <td>{supplier.address.country}</td>
              <td>{supplier.address.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
