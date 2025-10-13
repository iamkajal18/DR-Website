import { useState, FormEvent, useEffect } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare, MessageCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_7tdsb1j',
  TEMPLATE_ID: 'template_zti4l9c',
  PUBLIC_KEY: '9_Q98f7vrLawfwruS',
};

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    message: ''
  });
  const [emailLoading, setEmailLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Not needed since we're using separate buttons for WhatsApp and Email
  };

  const handleBookViaWhatsApp = () => {
    if (!formData.patientName || !formData.phone || !formData.appointmentDate || !formData.appointmentTime) {
      setError('Please fill all required fields (Name, Phone, Date, Time) for WhatsApp booking.');
      return;
    }

    const whatsappMessage = `New Appointment Request:

Patient Details:
Name: ${formData.patientName}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone}

Appointment Details:
Preferred Date: ${formData.appointmentDate}
Preferred Time: ${formData.appointmentTime}
Message: ${formData.message || 'No additional message'}

Please confirm this appointment.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '916387486751';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleSendViaEmail = async () => {
    if (!formData.patientName || !formData.phone || !formData.appointmentDate || !formData.appointmentTime) {
      setError('Please fill all required fields (Name, Phone, Date, Time) for email booking.');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    if (formData.appointmentDate < today) {
      setError('Appointment date cannot be in the past.');
      return;
    }

    setEmailLoading(true);
    setError('');

    try {
      const templateParams = {
        to_email: 'kasaudhankajal51@gmail.com',
        from_name: formData.patientName,
        from_email: formData.email || 'no-reply@clinic.com',
        patient_name: formData.patientName,
        patient_email: formData.email || 'Not provided',
        patient_phone: formData.phone,
        appointment_date: formData.appointmentDate,
        appointment_time: formData.appointmentTime,
        patient_message: formData.message || 'No additional message',
        subject: `New Appointment Request - ${formData.patientName}`,
        clinic_name: 'Your Clinic Name',
        reply_to: formData.email || 'kasaudhankajal51@gmail.com',
      };

      console.log('Form Data:', formData);
      console.log('Template Params:', JSON.stringify(templateParams, null, 2));

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('EmailJS Response:', result.text, result.status);

      if (result.status === 200) {
        setSuccess(true);
        setFormData({
          patientName: '',
          email: '',
          phone: '',
          appointmentDate: '',
          appointmentTime: '',
          message: ''
        });
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('EmailJS response status not OK');
      }
    } catch (error: any) {
      console.error('EmailJS error details:', {
        message: error.message,
        text: error.text,
        status: error.status,
        response: error.response
      });
      if (error.text?.includes('Failed to fetch')) {
        setError('Network error. Please check your internet connection and try again.');
      } else if (error.text?.includes('Invalid template')) {
        setError('Email template configuration error. Please contact support.');
      } else if (error.text?.includes('Public key is not valid')) {
        setError('Email service configuration error. Please contact support.');
      } else {
        setError(`Failed to send email: ${error.message || 'Unknown error'}`);
      }
    } finally {
      setEmailLoading(false);
    }
  };

  // Test function for debugging EmailJS
  const testEmailJSConnection = async () => {
    try {
      console.log('Testing EmailJS connection...');
      const testParams = {
        to_email: 'kasaudhankajal51@gmail.com',
        from_name: 'Test User',
        from_email: 'test@example.com',
        patient_name: 'Test Patient',
        patient_email: 'test@example.com',
        patient_phone: '+1234567890',
        appointment_date: new Date().toISOString().split('T')[0],
        appointment_time: '10:00 AM - 11:00 AM',
        patient_message: 'This is a test message from the appointment system',
        subject: 'Test Appointment Request',
        clinic_name: 'Test Clinic',
        reply_to: 'test@example.com'
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        testParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Test email sent successfully:', result);
      alert('Test email sent successfully! Check your inbox.');
      return true;
    } catch (error: any) {
      console.error('Test email failed:', error);
      alert('Test email failed. Check console for details.');
      return false;
    }
  };

  // Clear error when form data changes
  useEffect(() => {
    if (error) {
      setError('');
    }
  }, [formData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-black transition-colors"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold text-white">Book an Appointment</h2>
          <p className="text-amber-100 mt-1">Fill in your details and we'll contact you soon</p>
          
          {/* Debug button - remove in production */}
          <button
            onClick={testEmailJSConnection}
            className="mt-2 px-3 py-1 bg-white text-amber-600 text-xs rounded hover:bg-gray-100 transition-colors"
          >
            Test Email Connection
          </button>
        </div>

        {success ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="bg-green-100 rounded-full p-4 mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Appointment Request Sent!</h3>
            <p className="text-gray-600 mb-6">Thank you for your request. We'll contact you soon to confirm your appointment.</p>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all font-medium"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User size={16} className="inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar size={16} className="inline mr-2" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.appointmentDate}
                  onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock size={16} className="inline mr-2" />
                  Preferred Time *
                </label>
                <select
                  required
                  value={formData.appointmentTime}
                  onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                >
                  <option value="">Select time</option>
                  <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                  <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                  <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                  <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                  <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                  <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                  <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare size={16} className="inline mr-2" />
                Message (Optional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="Tell us about your symptoms or reason for visit..."
              />
            </div>

            <div className="space-y-4 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleSendViaEmail}
                  disabled={emailLoading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all font-medium flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {emailLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send via Email
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleBookViaWhatsApp}
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all font-medium flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
                >
                  <MessageCircle size={20} />
                  Send via WhatsApp
                </button>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>

              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-amber-600 hover:text-amber-700 underline">
                    privacy policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms-of-service" className="text-amber-600 hover:text-amber-700 underline">
                    terms of service
                  </a>.
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;