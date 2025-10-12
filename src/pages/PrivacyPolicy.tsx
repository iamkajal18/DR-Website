import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-black via-neutral-900 to-amber-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-amber-100">Last Updated: {new Date().toLocaleDateString()}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="leading-relaxed">
                  At Ratna Homoeo Clinic, we are committed to protecting your privacy and
                  ensuring the security of your personal information. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when
                  you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="leading-relaxed mb-3">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, email address, phone number,
                    date of birth, and medical history when you book an appointment or register
                    as a patient.
                  </li>
                  <li>
                    <strong>Health Information:</strong> Medical conditions, symptoms, treatment
                    history, and other health-related data necessary for providing homeopathic
                    care.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you interact with our
                    website, including IP address, browser type, pages visited, and time spent
                    on pages.
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Records of your correspondence with us
                    through email, phone, or other channels.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="leading-relaxed mb-3">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing and managing your healthcare services</li>
                  <li>Scheduling and confirming appointments</li>
                  <li>Maintaining your medical records</li>
                  <li>Communicating with you about your treatment</li>
                  <li>Improving our services and website functionality</li>
                  <li>Sending appointment reminders and health tips</li>
                  <li>Complying with legal and regulatory requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties.
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>With healthcare professionals involved in your treatment</li>
                  <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                  <li>When required by law or to comply with legal proceedings</li>
                  <li>To protect the rights, property, or safety of our clinic, patients, or others</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to
                  protect your personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission over the
                  internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information we hold</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Lodge a complaint with relevant data protection authorities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <p className="leading-relaxed">
                  Our website uses cookies to enhance your browsing experience. Cookies are
                  small files stored on your device that help us analyze web traffic and
                  remember your preferences. You can choose to disable cookies through your
                  browser settings, though this may affect website functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do
                  not knowingly collect personal information from children without parental
                  consent. If you believe we have collected information from a child, please
                  contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in
                  our practices or legal requirements. We will notify you of any significant
                  changes by posting the updated policy on our website with a new "Last
                  Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="leading-relaxed mb-3">
                  If you have any questions or concerns about this Privacy Policy or our data
                  practices, please contact us:
                </p>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                  <p className="font-semibold mb-2">Ratna Homoeo Clinic</p>
                  <p>Email: kasaudhankajal51@gmail.com</p>
                  <p>Phone: +91 638 748 6751</p>
                  <p>Address: Medical District, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
