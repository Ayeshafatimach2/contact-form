"use client"
import { useState } from "react";
import * as yup from "yup";
import DisplayContact from "./displayContact";
import { contactTypes, onChangeEventType } from "@/type/componentsType";

export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    message: "",
    subscribe: false, // Change to a boolean here
  });

  const [errors, setError] = useState<string[]>([]);

  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().min(5).max(10),
    email: yup.string().email().required(),
    phone: yup.string().required('Phone number is required'),
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zip: yup.string().required('ZIP Code is required'),
    message: yup.string().required(),
    subscribe: yup.boolean(),
  });

  const [contactList, setContactList] = useState<contactTypes[]>([]);

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value, // Handle checkboxes
    };
    setContactInfo(userDetails);
  };

  const onClickHandler = async () => {
    try {
      const result = await contactInfoSchema.validate(contactInfo);

      if (!result) {
        return;
      }

      let newContactList: contactTypes[] = [...contactList, contactInfo];
      setContactList(newContactList);

      setError([]);
      setContactInfo({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        message: "",
        subscribe: false, // Change to a boolean here
      });
    } catch (err: any) {
      setError(err.errors);

      console.log("error", err.errors);
    }
  };
 
  return (
    <>
      {/* <form className="max-w-md mx-auto"> */}
      <div className="mb-4">

        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          value={contactInfo.name}
          onChange={onChangeHandler}
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          value={contactInfo.email}
          onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Phone
        </label>
        <input
          value={contactInfo.phone}
          onChange={onChangeHandler}
          type="number"
          id="phone"
          name="phone"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
          Address
        </label>
        <input
          value={contactInfo.address}
          onChange={onChangeHandler}
          type="address"
          id="address"
          name="address"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
          City
        </label>
        <input
          value={contactInfo.city}
          onChange={onChangeHandler}
          type="city"
          id="city"
          name="city"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
          State
        </label>
        <input
          value={contactInfo.state}
          onChange={onChangeHandler}
          type="state"
          id="state"
          name="state"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="zip" className="block text-gray-700 text-sm font-bold mb-2">
          Zip
        </label>
        <input
          value={contactInfo.zip}
          onChange={onChangeHandler}
          type="zip"
          id="zip"
          name="zip"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor=" subscribe" className="block text-gray-700 text-sm font-bold mb-2">
        Subscribe
        </label>
        <input
          value={contactInfo.subscribe}
          onChange={onChangeHandler}
          type=" subscribe"
          id=" subscribe"
          name="z subscribe"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>


      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
         value={contactInfo.message}
         onChange={onChangeHandler}
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 border rounded-md"
          required
        ></textarea>
      </div>
        {errors.map((item)=>{
          return (
            <div style={{color:"red"}}>
              <h1>{item}</h1>
            </div>
          )
        })}
      <div className="mb-6">
        <button
          onClick={onClickHandler}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
      {/* </form> */}
      <DisplayContact contactData={contactList} />
    </>
  )
}