import React from "react";
import { useForm } from "react-hook-form";

export default function FormContact() {
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmitForm = data => {
		console.log(data);
	};

    console.log(watch("firstName")); // watch input value by passing the name of it
    
    const InputName = ({ label, register, required }) => ( 
        <>
          <label>{label}</label>
          <input name={label} ref={ register ({ pattern: /^[A-Za-z]+$/i }) } />
          {errors[label] && (<span>Char Only</span>)}
        </>
      )

    const Select = React.forwardRef(({ label, register }, ref) => ( 
        <>
          <label>{label}</label>
          <select name={label} ref={ref}>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </>
      ))

	return (
		<>
			<form onSubmit={handleSubmit(onSubmitForm)}>
                <InputName label="First Name" register={register} required />
			
				{/* <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
				{errors.lastName && <span>Char Only</span>}
				<input name="age" type="number" ref={register({ min: 18, max: 99 })} />
				{errors.age && <span>range min 18 and max 99 only</span>} */}
                <Select label="Age" ref={register} />
				<input type="submit" />
			</form>
		</>
	);
}
