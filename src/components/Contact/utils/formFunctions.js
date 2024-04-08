export const handleErrorModalClose = (setFormStatus, formStatus) => {
  setFormStatus({
    ...formStatus,
    submitting: false,
    errorWarnDisplay: false,
    success: false,
  });
};

export const handleSuccessModalClose = (
  setFormStatus,
  formStatus,
  clearFormFields,
) => {
  setFormStatus({
    ...formStatus,
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
    captachError: false,
  });

  clearFormFields();
};

export const handleOnChange = (setFormData, formData, event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
};

export const handleOnSubmit = async (
  event,
  setFormStatus,
  formData,
  submitToServer,
  contactFormId,
  clearFormFields,
  formStatus,
) => {
  event.preventDefault();

  setFormStatus((prevState) => {
    return {
      ...prevState,
      submitting: true,
      errors: [],
    };
  });

  const formDataArray = Object.entries(formData);
  const bodyFormData = new FormData();
  formDataArray.forEach((field) => {
    bodyFormData.append(field[0], field[1]);
  });
  bodyFormData.append("_wpcf7_unit_tag", "ddabdd4");

  const response = await submitToServer(contactFormId, bodyFormData);

  if (!response.errors) {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: true,
      errors: [],
    });
    clearFormFields();
  } else {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: true,
      success: false,
      errors: response.errorMessages,
    });
  }
};
