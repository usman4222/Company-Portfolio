import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; 
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../elements/Form';
import Button from '../elements/Button';

const DiscussForm = ({ data, onChange, resetForm }) => {
  const form = useRef();

  const submitEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_lpmbt1q', 'template_gh2wsgq', {
        from_name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        message: data.projectIdea,
      }, 'XohnXcZl3e1DVEBqg')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Success! We\'ll get back to you soon. Thank you!');
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('FAILED...', error.text);
        }
      );
  };

  return (
    <motion.section
      className="flex flex-col container mx-auto mt-10 justify-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl text-theme-blue text-center font-bold">Lets Discuss</h1>

      <p className="font-light text-lg text-gray-400 text-center mb-12">
        Please fill out the form below to discuss your project and we'll get back to you in less than 24 hours.
      </p>

      <form ref={form} onSubmit={submitEmail}>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your name"
              className=""
              onChange={onChange}
            />
            <Form
              id="company"
              name="company"
              type="text"
              value={data.company}
              placeholder="Your company"
              className=""
              onChange={onChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row mx-auto">
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your email address"
              className=""
              onChange={onChange}
            />
            <Form
              id="phone"
              name="phone"
              type="tel"
              value={data.phone}
              placeholder="Your contact number"
              className=""
              onChange={onChange}
            />
          </div>

          <div className="mx-auto">
            <Form
              id="projectIdea"
              name="projectIdea"
              type="textarea"
              value={data.projectIdea}
              placeholder="Explain about your project idea"
              className=""
              onChange={onChange}
            />
          </div>

          <Button
            className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>

      <ToastContainer />
    </motion.section>
  );
};

export default DiscussForm;
