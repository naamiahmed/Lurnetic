import { Helmet } from 'react-helmet-async';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Lurnetic</title>
        <meta name="description" content="Lurnetic's terms of service. Please read these terms carefully before using our services." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Terms of <span className="bg-clip-text text-transparent bg-gradient-primary">Service</span>
            </h1>
            <p className="text-lg text-secondary-700">
              Last updated: May 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Lurnetic. These Terms of Service ("Terms") govern your use of our website located at www.lurnetic.com (the "Service") operated by Lurnetic ("us", "we", or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Lurnetic and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Lurnetic.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you guarantee that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password.
            </p>

            <h2>4. Content and Services</h2>
            <p>
              Our Service allows you to access our technology development services, educational content, and resources. You acknowledge and agree that:
            </p>
            <ul>
              <li>We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice.</li>
              <li>We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.</li>
              <li>From time to time, we may restrict access to some parts of the Service, or the entire Service, to users, including registered users.</li>
            </ul>

            <h2>5. Service Engagement</h2>
            <p>
              When engaging our professional services:
            </p>
            <ul>
              <li>All project details, timelines, deliverables, and payment terms will be outlined in a separate Statement of Work or Service Agreement.</li>
              <li>Any modifications to the agreed-upon scope, timeline, or deliverables must be documented in writing and may impact project costs and timelines.</li>
              <li>We retain all intellectual property rights to our work until final payment is received, at which point specified rights transfer as outlined in the Service Agreement.</li>
            </ul>

            <h2>6. Payment Terms</h2>
            <p>
              For any paid services or products:
            </p>
            <ul>
              <li>Payment terms are specified in individual service agreements or at the point of purchase.</li>
              <li>We accept payment via credit card, bank transfer, or other methods specified at the time of purchase.</li>
              <li>Late payments may incur additional fees and may result in service suspension.</li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Lurnetic, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Service;</li>
              <li>Any conduct or content of any third party on the Service;</li>
              <li>Any content obtained from the Service; and</li>
              <li>Unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.</li>
            </ul>

            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Lurnetic</strong></p>
              <p>123 Tech Street, Innovation Valley, CA 94043</p>
              <p>Email: info@lurnetic.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;