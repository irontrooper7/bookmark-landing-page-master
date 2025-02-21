import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const emailTrackerSchema = Yup.object().shape({
	email: Yup.string()
		.email('Whoops, make sure its an email')
		.required('Whoops, make sure its an email'),
});

export default function ContactForm() {
	return (
		<div className="form mb-5">
			<Formik
				initialValues={{ email: '' }}
				validationSchema={emailTrackerSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className="field">
							<p className={`control has-icons-right ${errors.email && touched.email ? 'is-error' : ''}`}>
								<Field className='input' name='email' placeholder='Enter your email address' autoComplete="given-email" />
								{errors.email && touched.email ? 								
									<span className="icon is-small is-right">
										<img src="/assets/icon-error.svg" alt="" />
									</span> : null}
							</p>
							{errors.email && touched.email ? (<p className='help is-danger'>{errors.email}</p>) : null}
							<button className="button is-link" type="submit">Contact Us</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}