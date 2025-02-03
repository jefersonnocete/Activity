import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you can integrate your backend here)
    setFormStatus('Submitting...');
    
    // Reset after 2 seconds to simulate submission
    setTimeout(() => {
      setFormStatus('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-gray-600 p-0">
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
      <div className="max-w-4xl w-full bg-gray-300 shadow-lg rounded-2xl p-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4 hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
</div>
        {formStatus && <p className="mt-4 text-center text-gray-700">{formStatus}</p>}
      </form>
    </div>
    </div>
  
  );
};

export default Contact;
