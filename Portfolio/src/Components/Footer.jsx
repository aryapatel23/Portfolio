import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#F9F9F9] py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex space-x-4">
                        <a href="https://github.com/aryapatel23" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/arya-patel-profile/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/arya-patel-profile/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-green-500 transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                    <p className="text-black-400 text-sm">
                        © {new Date().getFullYear()} Arya Patel. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;