import React, { useState } from "react";
import { data1, data2 } from "./SampleData";
import "./SupportForm.css";

const SupportForm = () => {
  const [formData, setFormData] = useState(data1.fields);
  const [values, setValues] = useState({});

  const formDataSwitchHandler = (type) => {
    if (type == 1) setFormData(data1?.fields);
    else setFormData(data2?.fields);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    alert("form submited success fully check the console for values");
    console.log(values, "#form values");
  };
  const inputChangeHandler = (e) => {
    setValues({
      ...values,
      [e?.target?.name]: e?.target?.value,
    });
  };
  console.log(values, "values");
  return (
    <div className="form_container">
      <div className=" gap-2">
        <button
          className="btn btn-primary mr-2"
          onClick={() => formDataSwitchHandler(1)}
        >
          Type form 1
        </button>
        <button
          className="btn btn-primary"
          onClick={() => formDataSwitchHandler(2)}
        >
          Type form 2
        </button>
      </div>
      <div className="p-2 form_root">
        <form className="card" onSubmit={formSubmitHandler}>
          {formData?.map((field) => {
            if (field.type == "dropdown") {
              return (
                <div className="flex flex-column">
                  <label className="label" htmlFor={field.key}>
                    {field.label}
                  </label>
                  <select
                    disabled={field.isreadonly}
                    onChange={inputChangeHandler}
                    name={field.key}
                    id={field.key}
                    className="basic-input"
                    required={field.isRequired}
                  >
                    <option>select</option>

                    {field.items?.map((each) => (
                      <option value={each?.value}>{each?.text}</option>
                    ))}
                  </select>
                </div>
              );
            }
            return (
              <div className="flex flex-column">
                <label className="label" htmlFor={field.key}>
                  {field.label}
                </label>
                <input
                  placeholder={field?.unit ? `Enter in ${field.unit}` : ""}
                  onChange={inputChangeHandler}
                  className="basic-input"
                  name={field.key}
                  id={field.key}
                  type={field.type}
                  disabled={field.isreadonly}
                  required={field.isRequired}
                  key={field.key}
                />
              </div>
            );
          })}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportForm;
