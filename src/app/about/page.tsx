'use client';

import { useSession } from 'next-auth/react';

export default function AboutPage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="space-y-6">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We are dedicated to providing the best dashboard experience for our users.
              Our platform combines powerful analytics with an intuitive interface.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Real-time data visualization</li>
              <li>Customizable dashboards</li>
              <li>Advanced analytics tools</li>
              <li>Secure authentication</li>
              <li>Responsive design</li>
            </ul>
          </section>

          {session && (
            <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Logged in as: {session.user?.name}</p>
                <p>Email: {session.user?.email}</p>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
