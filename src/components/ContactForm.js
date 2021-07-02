import React from "react";

const ContactForm = () => {
  
  return (
    <form 
      name="contact" method="post"
      className="lg:m-10 lg:p-10 md:m-10 md:p-10 m-.5 p-1 text-center items-center content-center justify-center" 
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="lg:ml-52 ml-4 lg:mr-52 mr-4 bg-gray-200 ">
        <div className="lg:p-5 p-2 lg:m-5 m-2">
          <label
            className="lg:mr-4"
          >
            Name:
          </label><br/><br/>
          <input name="name" type="text" id="name" required />
        </div>
        <div className="lg:p-5 p-2 lg:m-5 m-2">
          <label 
            className="lg:mr-4"
          >
            Partner Name:
          </label><br/><br/>
          <input name="partnerName" type="text" id="partnerName" required />
        </div>
        <div className="lg:p-5 p-2 lg:m-5 m-2">
          <label 
            className="lg:mr-4"
          >
            Preferred Date:
          </label><br/><br/>
          <input name="preferDate" type="date" id="preferDate" required />
        </div>
        <div className="lg:p-5 p-2 lg:m-5 m-2">
          <label 
            className="lg:mr-4"
            >
              Email:
          </label><br/><br/>
          <input name="email" type="email" id="email" required />
        </div>
        <div className="lg:p-5 p-2 lg:m-5 m-2">
          <label 
            className="lg:mr-4"
            >
              Type of Session:
          </label><br/><br/>
          <select name="session" id="session" required>
            <option value="Wedding">Wedding</option>
            <option value="Engagement">Engagement</option>
            <option value="Couples">Couples</option>
          </select>
        </div>
        <div className="lg:p-5 p-1 lg:m-5 m-1">
          <label 
            className="lg:mr-4"
          >
            Message:
          </label>
          <p className="text-xs">
            Drop any questions or concerns, or just say hello!
          </p>
          <br/>
          <textarea name="message" id="message"/>
        </div>
        <div className="mb-10">
          <button 
            type="submit"
            className="bg-blue-500 text-white lg:p-5 p-2 lg:m-5 m-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;