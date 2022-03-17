import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "Sylvia",
    lastName: "Woods",
    admin: false,
  });

  function onFormDataChange({target: { type, name, value, checked }}) {
    const inputVal = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputVal })
  }

  return (
    <form>
      <input
        type="text"
        name="firstName"
        onChange={onFormDataChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={onFormDataChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={onFormDataChange}
        value={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
