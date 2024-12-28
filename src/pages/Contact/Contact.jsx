
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="bg-gray-50 py-12 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
                    <p className="text-gray-600 mt-2">We`d love to hear from you! Feel free to reach out.</p>
                </div>

                {/* Contact Content */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
                        <form>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
                            <p className="text-gray-700">123 Travel Street, City, Country</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaPhoneAlt className="text-indigo-600 text-2xl" />
                            <p className="text-gray-700">+123 456 7890</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-indigo-600 text-2xl" />
                            <p className="text-gray-700">info@travelwebsite.com</p>
                        </div>

                        {/* Social Media */}
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-indigo-600 hover:text-indigo-800 text-2xl">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="text-indigo-600 hover:text-indigo-800 text-2xl">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-indigo-600 hover:text-indigo-800 text-2xl">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
