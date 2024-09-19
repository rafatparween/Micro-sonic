"use client";

const About = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900 via-blue-900 text-white"></div>
            <div className="flex flex-col lg:flex-row items-center justify-between relative p-10 z-10">
                <div className="relative w-full md:w-1/2 mb-10 lg:mb-0">
                    <div className="p-4 bg-gradient-to-br from-purple-800 via-blue-800 to-gray-800 rounded-xl overflow-hidden">
                        <img
                            src="https://www.shutterstock.com/image-photo/office-conference-room-meeting-diverse-260nw-2104484045.jpg"
                            alt="Team working"
                            className="w-full h-[400px] object-cover rounded-xl"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 lg:pl-10">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        About <span className="text-purple-300 cursor-pointer">Us</span>
                    </h2>
                    <p className="text-gray-200 mb-6">
                        Micro Sonic Work is a leading technology solutions provider dedicated to helping businesses of all sizes achieve their digital transformation goals. Our team of experts specializes in delivering cutting-edge solutions in Digital Marketing, App Development, Web Designing & Development, Software Development, and Salesforce Development.
                    </p>
                    <p className="text-gray-200 mb-6">
                        With years of experience and a commitment to innovation, we provide tailored services that drive growth, improve efficiency, and enhance customer experiences. Whether you're a startup looking to establish a digital presence or a large enterprise seeking to optimize operations, we have the expertise to bring your vision to life.
                    </p>
                    <p className="text-gray-200 mb-6">
                        At Micro Sonic Work, we believe in building long-term partnerships with our clients. We work closely with you to understand your business needs, offering personalized solutions that align with your goals and drive success. Our collaborative approach ensures that we are not just a service provider, but a true partner in your journey.
                    </p>
                    <p className="text-gray-200 mb-6">
                        Let us help you navigate the digital landscape and unlock new opportunities for growth. Together, we can create strategies that not only enhance your online presence but also streamline your operations and elevate customer engagement.
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-6 mt-10">
                        Why <span className="text-purple-300 cursor-pointer">Choose Us</span>?
                    </h2>
                    <p className="text-gray-200 mb-6">
                        Our mission is to empower businesses with innovative technology solutions that are not only effective but also sustainable. We take pride in our ability to adapt to the ever-changing digital world, ensuring that our clients are always ahead of the curve.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {[
                            {
                                icon: '🚀',
                                title: 'Digital Transformation',
                                description: 'We help businesses embrace digital tools to enhance their operations and services.',
                            },
                            {
                                icon: '📈',
                                title: 'Growth Driven',
                                description: 'Our solutions are designed to drive growth and improve efficiency for all clients.',
                            },
                            {
                                icon: '🤝',
                                title: 'Partnership Focused',
                                description: 'We work closely with you to ensure solutions align with your business goals.',
                            },
                            {
                                icon: '🌟',
                                title: 'Customer Experience',
                                description: 'We prioritize enhancing customer experiences through innovative strategies.',
                            },
                        ].map(({ icon, title, description }, index) => (
                            <div
                                key={index}
                                className="flex items-start bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
                            >
                                <div className="text-blue-600 text-4xl mr-4">{icon}</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                                    <p className="text-gray-700">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
