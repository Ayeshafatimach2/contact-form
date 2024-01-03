import { contactTypes } from "@/type/componentsType";

export default function DisplayContact(props: { contactData: contactTypes[] }) {
  return (
    <div>
      <div>
        <table>
          
          <tbody>
            {props.contactData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
