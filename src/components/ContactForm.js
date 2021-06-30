import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, partnerName, preferDate, session, email, message } = e.target.elements;
    let details = {
      name: name.value,
      partnerName: partnerName.value,
      preferDate: preferDate.value,
      session: session.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form 
      className="lg:m-10 lg:p-10 md:m-10 md:p-10 m-.5 p-1 text-center items-center content-center justify-center" 
      onSubmit={handleSubmit}
    >
      <div className="lg:ml-52 ml-4 lg:mr-52 mr-4 bg-gray-200 ">
        <div className="lg:p-5 p-2 lg:m-5 m-2">
          <label 
            htmlFor="name"
            className="lg:mr-4"
          >
            Name:
          </label><br/><br/>
          <input type="text" id="name" required />
        </div>
        <div className="lg:p-5 p-2 lg:m-5 m-2">
          <label 
            htmlFor="partnerName"
            className="lg:mr-4"
          >
            Partner Name:
          </label><br/><br/>
          <input type="text" id="partnerName" required />
        </div>
        <div className="lg:p-5 p-2 lg:m-5 m-2">
          <label 
            htmlFor="preferDate"
            className="lg:mr-4"
          >
            Preferred Date:
          </label><br/><br/>
          <input type="date" id="preferDate" required />
        </div>
        <div className="lg:p-5 p-2 lg:m-5 m-2">
          <label 
            htmlFor="email"
            className="lg:mr-4"
            >
              Email:
          </label><br/><br/>
          <input type="email" id="email" required />
        </div>
        <div className="lg:p-5 p-2 lg:m-5 m-2">
          <label 
            htmlFor="session"
            className="lg:mr-4"
            >
              Type of Session:
          </label><br/><br/>
          <select id="session" required>
            <option value="Wedding">Wedding</option>
            <option value="Engagement">Engagement</option>
            <option value="Couples">Couples</option>
          </select>
        </div>
        <div className="lg:p-5 p-1 lg:m-5 m-1">
          <label 
            htmlFor="message"
            className="lg:mr-4"
          >
            Message:
          </label>
          <p className="text-xs">
            Drop any questions or concerns, or just say hello!
          </p>
          <br/>
          <textarea id="message" required />
        </div>
        <div className="transition duration-500 ease-in-out transform hover:scale-150 mb-10">
          <button 
            type="submit"
            className="bg-blue-500 text-white lg:p-5 p-2 lg:m-5 m-2"
          >
            {status}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;