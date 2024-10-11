"use client"
import React, { useState } from 'react';
import styles from '@/styles/components/Contact.module.scss';
import MainLayout from '@/layouts/MainLayout';
const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        country: '',
        subject: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on change
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstname) newErrors.firstname = 'First name is required';
        if (!formData.lastname) newErrors.lastname = 'Last name is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.subject) newErrors.subject = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Simulate form submission
        console.log('Form submitted:', formData);
        // Reset form data
        setFormData({ firstname: '', lastname: '', country: '', subject: '' });
    };

    return (
        <MainLayout>
            <div className={styles.container}>
                <h3>Contact Form</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">First Name</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="fname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        placeholder="Your name.."
                    />
                    {errors.firstname && <span className={styles.error}>{errors.firstname}</span>}

                    <label htmlFor="lname">Last Name</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="lname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="Your last name.."
                    />
                    {errors.lastname && <span className={styles.error}>{errors.lastname}</span>}

                    <label htmlFor="country">Country</label>
                    <select
                        className={styles.select}
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    >
                        <option value="">Select a country</option>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    {errors.country && <span className={styles.error}>{errors.country}</span>}

                    <label htmlFor="subject">Subject</label>
                    <textarea
                        className={styles.textarea}
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Write something.."
                        style={{ height: '200px' }}
                    />
                    {errors.subject && <span className={styles.error}>{errors.subject}</span>}

                    <input className={styles.submit} type="submit" value="Submit" />
                </form>
            </div>
        </MainLayout>
    );
};

export default Contact;
