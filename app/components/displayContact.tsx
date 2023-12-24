import { contactTypes } from "@/type/componentsType";

export default function DisplayContact(props: { contactData: contactTypes[] }) {
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Subscribe</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {props.contactData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.zip}</td>
                <td>{item.subscribe}</td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
