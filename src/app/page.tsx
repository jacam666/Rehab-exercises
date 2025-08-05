import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-gray-900 font-bold mb-4">
            Penny, let's fix that knee pain!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A personalized rehabilitation program designed specifically for patellofemoral compartment osteoarthritis recovery
          </p>
          <Image
            src="/images/Patellofemoral_Syndrome_causes_large.webp"
            alt="Patellofemoral Syndrome Illustration"
            width={300}
            height={400}
            className="rounded-lg shadow-xl mx-auto mb-8"
          />
        </div>
      </section>

      {/* Understanding the Condition */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Understanding Patellofemoral Osteoarthritis
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What It Is</h3>
              <p className="text-gray-600">
                Wear and tear of cartilage behind the kneecap, causing pain during movement and daily activities.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Common Symptoms</h3>
              <p className="text-gray-600">
                Knee pain when climbing stairs, squatting, sitting for long periods, or during physical activities.
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Why Exercise Helps</h3>
              <p className="text-gray-600">
                Strengthening surrounding muscles reduces pressure on the kneecap and improves joint stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Programs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Personalized Exercise Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Strengthening</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Quadriceps exercises</li>
                <li>• Glute strengthening</li>
                <li>• Hip stabilization</li>
                <li>• Core strengthening</li>
              </ul>
              <button className="mt-4 w-full py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                <Link href="/exercises">View Exercises</Link>
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-green-600">Stretching</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• IT band stretches</li>
                <li>• Hip flexor stretches</li>
                <li>• Calf stretches</li>
                <li>• Hamstring stretches</li>
              </ul>
              <button className="mt-4 w-full py-2 bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
                <Link href="/exercises">View Stretches</Link>
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Low-Impact Cardio</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Swimming routines</li>
                <li>• Stationary cycling</li>
                <li>• Water exercises</li>
                <li>• Walking programs</li>
              </ul>
              <button className="mt-4 w-full py-2 bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors">
                <Link href="/exercises">View Cardio</Link>
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Progressive Plans</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Beginner level</li>
                <li>• Intermediate level</li>
                <li>• Advanced level</li>
                <li>• Maintenance phase</li>
              </ul>
              <button className="mt-4 w-full py-2 bg-orange-100 text-orange-700 rounded hover:bg-orange-200 transition-colors">
                <Link href="/exercises">View Plans</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Management */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Pain Management Strategies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Ice & Heat Therapy</h3>
                <p className="text-gray-600">
                  Learn when to use ice vs. heat for optimal pain relief and recovery.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Activity Modification</h3>
                <p className="text-gray-600">
                  Smart strategies to stay active while protecting your knee joint.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Rest vs. Push Through</h3>
                <p className="text-gray-600">
                  Understanding when to rest and when gentle movement helps recovery.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Daily Living Tips</h3>
                <p className="text-gray-600">
                  Practical advice for managing stairs, sitting, and daily activities.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              <Link href="/pain-management">Learn More Pain Management</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            You're Not Alone in This Journey
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "The key to recovery is consistency, patience, and the right guidance. Every small step forward is progress worth celebrating."
            </blockquote>
            <p className="text-gray-600">
              This program is designed with love and care, specifically for your unique needs. 
              Together, we'll work through this challenge one day at a time.
            </p>
          </div>
        </div>
      </section>
     

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">
            Made with ❤️ for Penny's recovery journey
          </p>
          <p className="text-gray-400 text-sm">
            Always consult with healthcare professionals before starting any new exercise program
          </p>
        </div>
      </footer>
    </div>
  );
}
