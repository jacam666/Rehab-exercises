import Link from "next/link";

export default function PainManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-teal-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pain Management Strategies
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive approaches to manage and reduce knee pain effectively
          </p>
        </div>
      </section>

      {/* Ice vs Heat Therapy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🧊 Ice vs Heat Therapy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Ice Therapy */}
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🧊</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-800">Ice Therapy</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">When to Use:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• After exercise or activity</li>
                    <li>• When knee is swollen</li>
                    <li>• During acute pain flare-ups</li>
                    <li>• First 24-48 hours after injury</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">How to Apply:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Wrap ice pack in thin towel</li>
                    <li>• Apply for 15-20 minutes</li>
                    <li>• Wait 45-60 minutes between applications</li>
                    <li>• Never apply directly to skin</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Reduces inflammation</li>
                    <li>• Numbs pain</li>
                    <li>• Decreases swelling</li>
                    <li>• Slows nerve impulses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Heat Therapy */}
            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔥</span>
                </div>
                <h3 className="text-2xl font-bold text-red-800">Heat Therapy</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">When to Use:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Before exercise (warm-up)</li>
                    <li>• For chronic stiffness</li>
                    <li>• When muscles feel tight</li>
                    <li>• For general aches (no swelling)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">How to Apply:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Use heating pad or warm compress</li>
                    <li>• Apply for 15-20 minutes</li>
                    <li>• Ensure temperature is comfortable</li>
                    <li>• Don't fall asleep with heat on</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Improves blood flow</li>
                    <li>• Relaxes muscles</li>
                    <li>• Increases flexibility</li>
                    <li>• Reduces stiffness</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Activity Modification */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🔄 Activity Modification Strategies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Stair Navigation</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Going Up:</strong> Lead with stronger leg</p>
                <p><strong>Going Down:</strong> Lead with weaker leg</p>
                <p><strong>Use handrails:</strong> For additional support</p>
                <p><strong>One step at a time:</strong> Don't rush</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Sitting & Standing</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Use higher chairs:</strong> Reduces knee bend</p>
                <p><strong>Cushions:</strong> Add height to low seats</p>
                <p><strong>Armrests:</strong> Help with standing up</p>
                <p><strong>Frequent breaks:</strong> Change position often</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Exercise Modifications</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Partial squats:</strong> Don't go too deep</p>
                <p><strong>Supported exercises:</strong> Use walls or chairs</p>
                <p><strong>Avoid deep lunges:</strong> Stay in comfort zone</p>
                <p><strong>Water exercises:</strong> Reduce joint stress</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Daily Activities</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Gardening:</strong> Use kneepads or raised beds</p>
                <p><strong>Cleaning:</strong> Use long-handled tools</p>
                <p><strong>Shopping:</strong> Use a cart for support</p>
                <p><strong>Driving:</strong> Adjust seat position</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Sleep Position</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Pillow support:</strong> Between or under knees</p>
                <p><strong>Avoid stomach sleeping:</strong> Can twist knees</p>
                <p><strong>Side sleeping:</strong> Keep knees aligned</p>
                <p><strong>Firm mattress:</strong> Better joint support</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Work Ergonomics</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Desk height:</strong> Knees at 90 degrees</p>
                <p><strong>Footrest:</strong> If needed for comfort</p>
                <p><strong>Standing breaks:</strong> Every 30-45 minutes</p>
                <p><strong>Ergonomic chair:</strong> Good lumbar support</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* When to Rest vs Push Through */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🚦 When to Rest vs. When to Push Through
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Rest Signals */}
            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-700 mb-6">🛑 Time to Rest</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Sharp or Shooting Pain</h4>
                  <p className="text-gray-600">Any sudden, intense pain requires immediate rest</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Significant Swelling</h4>
                  <p className="text-gray-600">Visible swelling indicates inflammation - ice and rest</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Pain That Worsens</h4>
                  <p className="text-gray-600">If pain increases during activity, stop immediately</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Pain Lasting {'>'}24 Hours</h4>
                  <p className="text-gray-600">Extended pain after activity means you overdid it</p>
                </div>
              </div>
            </div>

            {/* Push Through Signals */}
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-700 mb-6">✅ Safe to Continue</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Mild Discomfort</h4>
                  <p className="text-gray-600">Gentle aching that doesn't worsen is usually okay</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Morning Stiffness</h4>
                  <p className="text-gray-600">Normal stiffness that improves with gentle movement</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Muscle Fatigue</h4>
                  <p className="text-gray-600">General tiredness in muscles (not joint pain)</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Pain That Improves</h4>
                  <p className="text-gray-600">Discomfort that decreases as you warm up</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pain Scale Guide */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📊 Pain Scale Reference
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-center text-gray-600 mb-8">Use this scale to assess your pain level and make informed decisions about activity</p>
            
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-green-100 rounded-lg">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">0-2</div>
                <div>
                  <h4 className="font-semibold text-green-800">No Pain to Mild</h4>
                  <p className="text-green-700">Safe to exercise normally</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-yellow-100 rounded-lg">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3-4</div>
                <div>
                  <h4 className="font-semibold text-yellow-800">Mild to Moderate</h4>
                  <p className="text-yellow-700">Exercise with caution, modify as needed</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-orange-100 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">5-6</div>
                <div>
                  <h4 className="font-semibold text-orange-800">Moderate</h4>
                  <p className="text-orange-700">Light exercise only, focus on stretching</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-red-100 rounded-lg">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4">7+</div>
                <div>
                  <h4 className="font-semibold text-red-800">Severe Pain</h4>
                  <p className="text-red-700">Rest and consider medical consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Guidelines */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-500">
            <h2 className="text-2xl font-bold text-red-700 mb-6">🚨 When to Seek Medical Attention</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Immediate Medical Care:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Severe, sudden onset pain</li>
                  <li>• Inability to bear weight</li>
                  <li>• Knee gives out or feels unstable</li>
                  <li>• Signs of infection (fever, warmth, redness)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Schedule Appointment:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pain persists despite rest and treatment</li>
                  <li>• Swelling doesn't improve after 3-4 days</li>
                  <li>• Pain significantly worsens</li>
                  <li>• New symptoms develop</li>
                </ul>
              </div>
            </div>
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
