import { Instagram, Mail, MailPlus } from "lucide-react";
import { SiDiscord } from "react-icons/si";

export function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-center mb-6 text-teal-600 text-4xl">Contact Us</h1>
          <p className="text-center text-gray-700 mb-6">
            Have questions or want to get involved? Reach out to us through any of these channels!
          </p>
          <p className="text-center text-gray-700 mb-8">
            All of our news and events can be found on our socials as well as through our mailing list. 
            Our primary mode of communication is through our Discord channel, but we also post all of 
            our events and important info on Instagram. 
          </p>
          <p className="text-center text-gray-700 mb-10">
            Please feel free to shoot us an email with any questions or feedback!
            We want to hear from you!
          </p>

          <div className="space-y-6">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h2 className="text-white">Instagram</h2>
                <p className="text-gray-300">Follow us for updates and photos</p>
              </div>
              <span className="text-teal-400" aria-label="Opens in new tab">→</span>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                <SiDiscord className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h2 className="text-white">Discord</h2>
                <p className="text-gray-300">Join our community server</p>
              </div>
              <span className="text-teal-400" aria-label="Opens in new tab">→</span>
            </a>

            {/* Email */}
            <a
              href="mailto:qpp@cs.washington.edu"
              className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <Mail className="w-10 h-10 text-blue-400" aria-hidden="true" />
              <div className="flex-1">
                <h2 className="text-white">Email Us</h2>
                <p className="text-gray-300">qpp@cs.washington.edu</p>
              </div>
              <span className="text-teal-400">→</span>
            </a>

            {/* Mailing List */}
            <a
              href="https://mailman.cs.washington.edu/mailman/admin/qpp/general"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                <MailPlus className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h2 className="text-white">Join Our Mailing List</h2>
                <p className="text-gray-300">Stay updated with our latest news</p>
              </div>
              <span className="text-teal-400" aria-label="Opens in new tab">→</span>
            </a>
          </div>

          <div className="mt-12 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg p-6">
            <h2 className="mb-3 text-teal-600 text-center">About Q++</h2>
            <p className="text-gray-700 mb-3 text-center">
              Q++ is a registered student organization at the University of Washington Allen School of Computer Science & Engineering. We provide a supportive community for LGBTQ+ students and allies in the CS department.
            </p>
            <p className="text-gray-700 text-center">
              All are welcome at our events, regardless of major, background, or identity. We're here to build connections, provide support, and create an inclusive space in tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}