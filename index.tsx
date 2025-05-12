import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaLock,
  FaRocket,
  FaComments,
  FaDollarSign,
  FaRegMoon,
  FaSun,
} from 'react-icons/fa';

// Chat component (Basic AI-powered chat widget)
const ChatWidget = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you?", isBot: true },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");
    // Simulate AI response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "You can sell your software licenses directly here on SoftSell!", isBot: true },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 bg-white shadow-lg p-4 rounded-lg w-80">
      <div className="flex flex-col space-y-3 h-72 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg ${msg.isBot ? "bg-gray-200" : "bg-blue-500 text-white"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-grow p-2 border rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={handleSend} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle class on HTML element
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>SoftSell - Resell Software Licenses</title>
        <meta name="description" content="Turn unused software into cash with SoftSell." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="SoftSell Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
        <div className="max-w-6xl mx-auto px-4 py-8">

          {/* Theme Toggle */}
          <div className="flex justify-end">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FaSun /> : <FaRegMoon />}
            </button>
          </div>

          {/* Hero Section */}
          <section className="text-center py-16">
            <h1 className="text-4xl font-bold">Sell Unused Software Licenses Easily</h1>
            <p className="text-lg mt-4 text-gray-600 dark:text-gray-300">
              Get instant valuation and fast payouts with SoftSell.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Sell My Licenses
            </button>
          </section>

          {/* How It Works */}
          <section className="py-16 text-center">
            <h2 className="text-2xl font-semibold mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[ 
                { icon: <FaRocket size={40} />, title: 'Upload License' },
                { icon: <FaDollarSign size={40} />, title: 'Get Valuation' },
                { icon: <FaLock size={40} />, title: 'Get Paid' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="p-6 bg-gray-100 dark:bg-gray-800 rounded"
                >
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="font-medium">{step.title}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 text-center">
            <h2 className="text-2xl font-semibold mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[ 
                { icon: <FaLock />, label: 'Secure Transactions' },
                { icon: <FaRocket />, label: 'Fast Valuation' },
                { icon: <FaComments />, label: '24/7 Support' },
                { icon: <FaDollarSign />, label: 'Best Market Rates' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-100 dark:bg-gray-800 rounded">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 text-center">
            <h2 className="text-2xl font-semibold mb-8">What Our Clients Say</h2>
            <div className="space-y-8">
              {[ 
                { name: 'Alice Johnson', role: 'IT Manager', company: 'CloudWorks Inc.', message: 'SoftSell helped us clear unused licenses and recover costs. Seamless experience!' },
                { name: 'Rahul Mehta', role: 'CTO', company: 'DevSphere', message: 'Great service, transparent process and fast payments.' },
              ].map((review, i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-800 p-6 rounded">
                  <p className="italic">"{review.message}"</p>
                  <p className="mt-2 font-semibold">
                    - {review.name}, {review.role}, {review.company}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-16 text-center">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="max-w-xl mx-auto space-y-4 text-left">
              <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
              <input type="text" placeholder="Company" className="w-full p-2 border rounded" />
              <select className="w-full p-2 border rounded" required>
                <option value="">Select License Type</option>
                <option>Adobe</option>
                <option>Microsoft</option>
                <option>Autodesk</option>
              </select>
              <textarea placeholder="Message" className="w-full p-2 border rounded" rows={4} required />
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                Submit
              </button>
            </form>
          </section>
        </div>

        {/* Chat Widget */}
        <ChatWidget />
      </main>
    </>
  );
}
