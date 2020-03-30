import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { Container } from "reactstrap";

const RegisterSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	email: Yup.string()
		.email("Please correct your email")
		.required("Required"),
	password: Yup.string()
		.min(3, "password need at least 3 char")
		.required("Password is required")
});

export default function FormHookYup() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmitForm = data => {
		console.log(data);
	};

	return (
		<>
			<div className="Container">
				<div className="row">
					<form onSubmit={ handleSubmit(onSubmitForm) } >
						<div className="col-md-6">
                            
                        </div>
					</form>
				</div>
			</div>
		</>
	);
}
