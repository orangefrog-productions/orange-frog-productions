import axios from "axios";

const submitToWebServer = async (formID, data) => {
  console.log("data: ", data);
  console.log("formID: ", formID);

  const FORM_POST_URL = `https://orangefrog.swbdatabases3.com/wp-json/contact-form-7/v1/contact-forms/517/feedback`;
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const serverResponse = await axios.post(FORM_POST_URL, data, config);

  console.log("serverResponse.data.status: ", serverResponse.data);

  if (serverResponse.data.status === "mail_sent") {
    return { errors: false, errorMessages: [] };
  } else {
    return { errors: true, errorMessages: serverResponse.data.invalid_fields };
  }
};

export default submitToWebServer;
