
import React, { useRef, useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { SOCIAL_LINKS } from '../constants';

const BehanceIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22.344 7.045h-6.135V4.537h6.135v2.508zm.656-5.016H1v17.94h22V2.029zM8.736 17.521c-2.355 0-4.32-1.965-4.32-4.32s1.965-4.32 4.32-4.32c2.355 0 4.32 1.965 4.32 4.32s-1.965 4.32-4.32 4.32zm0-6.84c-1.35 0-2.52.99-2.52 2.52s1.17 2.52 2.52 2.52c1.35 0 2.52-.99 2.52-2.52s-1.17-2.52-2.52-2.52zm8.064 7.236h-4.5v-1.836h4.5v1.836zm0-3.456h-4.5V9.03h4.5v2.424z" /></svg>
);

const LinkedInIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.42c-1.14 0-2.07-.93-2.07-2.07s.93-2.07 2.07-2.07 2.07.93 2.07 2.07-.93 2.07-2.07 2.07zm15.11 13.03h-3.56v-5.69c0-1.36-.02-3.1-1.89-3.1s-2.18 1.48-2.18 3.01v5.78h-3.56V9h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.27z" /></svg>
);

const YouTubeIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
);


export const Contact: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(sectionRef, { threshold: 0.1 });
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');
        setTimeout(() => {
            setStatus('Message Sent! Thank you.');
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setStatus(''), 3000);
        }, 1000);
    };

    return (
        <footer id="contact" ref={sectionRef} className="py-20 bg-slate-800/20">
            <div className={`container mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-4">
                    Get In Touch
                </h2>
                <div className="w-24 h-1 bg-teal-300 mx-auto mb-12"></div>
                
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-lg text-slate-300 mb-8">
                        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <input type="text" name="name" placeholder="Your Name" required className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"/>
                            <input type="email" name="email" placeholder="Your Email" required className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"/>
                        </div>
                        <textarea name="message" placeholder="Your Message" rows={5} required className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"></textarea>
                        <button type="submit" className="bg-teal-500 text-slate-900 font-bold py-3 px-8 rounded-md hover:bg-teal-400 transition-colors duration-300 transform hover:scale-105">
                            Send Message
                        </button>
                         {status && <p className="mt-4 text-teal-300">{status}</p>}
                    </form>
                </div>

                <div className="mt-16 text-center">
                    <div className="flex justify-center space-x-6 mb-8">
                        <a href={SOCIAL_LINKS.behance} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors duration-300"><BehanceIcon /></a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors duration-300"><LinkedInIcon /></a>
                        <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors duration-300"><YouTubeIcon /></a>
                    </div>
                    <p className="text-slate-500">&copy; {new Date().getFullYear()} Kavinmani M. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};