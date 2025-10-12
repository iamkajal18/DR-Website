import { useState, FormEvent } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate appointment date (current date: 2025-10-12)
    const today = new Date().toISOString().split('T')[0];
    if (formData.appointmentDate < today) {
      setError('Appointment date cannot be in the past.');
      setLoading(false);
      return;
    }

    try {
      // Log the data being inserted for debugging
      const insertData = {
        name: formData.patientName,
        email: formData.email,
        phone: formData.phone,
        preferred_date: formData.appointmentDate,
        preferred_time: formData.appointmentTime,
        message: formData.message,
        status: 'pending'
      };
      console.log('Insert data:', insertData);

      // Use Supabase SDK to insert appointment
      const { data, error: insertError } = await supabase
        .from('appointments')
        .insert([insertData])
        .select();

      if (insertError) {
        console.error('Supabase error:', insertError.message, insertError.details);
        throw insertError;
      }

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
    } catch (err: any) {
      console.error('Appointment booking error:', err.message, err.details);
      setError(err.message || 'Failed to book appointment. Please try again.');
      setLoading(false);
    }
  };

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
        </div>

        {success ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="bg-green-100 rounded-full p-4 mb-6">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Appointment Booked!</h3>
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
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User size={16} className="inline mr-2" />
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.patientName}
                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar size={16} className="inline mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.appointmentDate}
                  onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock size={16} className="inline mr-2" />
                  Preferred Time
                </label>
                <select
                  required
                  value={formData.appointmentTime}
                  onChange={(e) => setFormData({ ...formData, appointmentTime: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Tell us about your symptoms or reason for visit..."
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Booking...' : 'Book Appointment'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;