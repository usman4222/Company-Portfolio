import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DiscussForm from '../components/DiscussForm';

const DiscussProjectPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const initialState = {
    name: '',
    company: '',
    email: '',
    phone: '',
    projectIdea: '',
  };

  const [data, setData] = React.useState(initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setData(initialState);
  };

  return (
    <>
      <Header />
      <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
      <Footer />
    </>
  );
};

export default DiscussProjectPage;
