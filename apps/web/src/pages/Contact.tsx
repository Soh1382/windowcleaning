import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Contact Us</h1>
          <p className="text-xl text-secondary-600">Get in touch for a sparkly clean property.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="bg-secondary-50 p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-secondary-600">07979 790482</p>
                    <p className="text-sm text-secondary-500">Mon-Fri 8am-6pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-secondary-600">aquamarinewindowcleaning@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-secondary-600">
                      Staynton Cres<br />
                      Huddersfield, HD2 1RL<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-secondary-200 p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <Input label="Name" placeholder="Your name" />
              <Input label="Email" type="email" placeholder="your@email.com" />
              <Input label="Phone" type="tel" placeholder="07700 900000" />
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Message</label>
                <textarea 
                  className="w-full rounded-md border border-secondary-200 px-3 py-2 h-32 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
