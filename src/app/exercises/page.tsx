import Link from "next/link";
import Image from "next/image";

export default function ExercisesPage() {
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
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Exercise Programs for Penny
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive rehabilitation exercises designed specifically for patellofemoral compartment osteoarthritis
          </p>
        </div>
      </section>

      {/* Exercise Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Strengthening Exercises */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-2">💪 Strengthening Exercises</h2>
                <p className="opacity-90">Build muscle strength to support your knee</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <Image
                        src="/images/photo-to-come.jpg"
                        alt="Straight Leg Raise Exercise"
                        width={120}
                        height={90}
                        className="rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Straight Leg Raises</h3>
                        <p className="text-gray-600 mb-3">Strengthens quadriceps without bending the knee</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Sets:</strong> 3 sets of 10-15 reps</p>
                          <p><strong>Instructions:</strong> Lie on back, lift straight leg 6 inches, hold 5 seconds</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <Image
                        src="/images/photo-to-come.jpg"
                        alt="Wall Sit Exercise"
                        width={120}
                        height={90}
                        className="rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Wall Sits</h3>
                        <p className="text-gray-600 mb-3">Builds endurance in quadriceps and glutes</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Duration:</strong> Hold for 20-30 seconds, 3 times</p>
                          <p><strong>Instructions:</strong> Back against wall, slide down to 90° angle</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <Image
                        src="/images/photo-to-come.jpg"
                        alt="Clamshell Exercise"
                        width={120}
                        height={90}
                        className="rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Clamshells</h3>
                        <p className="text-gray-600 mb-3">Strengthens hip abductors and external rotators</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Sets:</strong> 2 sets of 15 reps each side</p>
                          <p><strong>Instructions:</strong> Side-lying, lift top knee while keeping feet together</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <Image
                        src="/images/photo-to-come.jpg"
                        alt="Glute Bridge Exercise"
                        width={120}
                        height={90}
                        className="rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Glute Bridges</h3>
                        <p className="text-gray-600 mb-3">Activates glutes and supports knee alignment</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Sets:</strong> 3 sets of 12-15 reps</p>
                          <p><strong>Instructions:</strong> Lie on back, lift hips up, squeeze glutes</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Stretching Exercises */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-2">🧘 Stretching Exercises</h2>
                <p className="opacity-90">Improve flexibility and reduce muscle tension</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <Image
                        src="/images/photo-to-come.jpg"
                        alt="IT Band Stretch"
                        width={120}
                        height={90}
                        className="rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">IT Band Stretch</h3>
                        <p className="text-gray-600 mb-3">Reduces tension in the iliotibial band</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Hold:</strong> 30 seconds each side, 2-3 times</p>
                          <p><strong>Instructions:</strong> Cross leg over, lean away from stretched side</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <Image
                        src="/images/photo-to-come.jpg"
                        alt="Hip Flexor Stretch"
                        width={120}
                        height={90}
                        className="rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Hip Flexor Stretch</h3>
                        <p className="text-gray-600 mb-3">Releases tight hip flexors that affect knee tracking</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Hold:</strong> 30 seconds each side, 2 times</p>
                          <p><strong>Instructions:</strong> Lunge position, push hips forward</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <Image
                        src="/images/photo-to-come.jpg"
                        alt="Hamstring Stretch"
                        width={120}
                        height={90}
                        className="rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Hamstring Stretch</h3>
                        <p className="text-gray-600 mb-3">Improves posterior leg flexibility</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Hold:</strong> 30 seconds each leg, 2-3 times</p>
                          <p><strong>Instructions:</strong> Sit and reach toward toes, keep back straight</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <Image
                        src="/images/photo-to-come.jpg"
                        alt="Calf Stretch"
                        width={120}
                        height={90}
                        className="rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">Calf Stretch</h3>
                        <p className="text-gray-600 mb-3">Releases calf tightness affecting knee mechanics</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Hold:</strong> 30 seconds each leg, 2 times</p>
                          <p><strong>Instructions:</strong> Step back, keep heel down, lean forward</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Low-Impact Cardio */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-2">🏊 Low-Impact Cardio</h2>
                <p className="opacity-90">Improve fitness without stressing the knee</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Swimming</h3>
                    <p className="text-gray-600 mb-3">Excellent full-body, zero-impact exercise</p>
                    <div className="text-sm text-gray-500">
                      <p><strong>Duration:</strong> 20-30 minutes, 3x per week</p>
                      <p><strong>Best strokes:</strong> Freestyle, backstroke (avoid breaststroke)</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Stationary Cycling</h3>
                    <p className="text-gray-600 mb-3">Low-impact cardio that strengthens legs</p>
                    <div className="text-sm text-gray-500">
                      <p><strong>Duration:</strong> 15-30 minutes, start with low resistance</p>
                      <p><strong>Tip:</strong> Adjust seat height for comfortable leg extension</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Water Walking</h3>
                    <p className="text-gray-600 mb-3">Gentle resistance training in water</p>
                    <div className="text-sm text-gray-500">
                      <p><strong>Duration:</strong> 20-30 minutes in chest-deep water</p>
                      <p><strong>Benefits:</strong> Reduces joint stress, improves circulation</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Elliptical Machine</h3>
                    <p className="text-gray-600 mb-3">Smooth, low-impact full-body workout</p>
                    <div className="text-sm text-gray-500">
                      <p><strong>Duration:</strong> 15-25 minutes, low to moderate intensity</p>
                      <p><strong>Tip:</strong> Keep movements smooth and controlled</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Progressive Plans */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-orange-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-2">📈 Progressive Plans</h2>
                <p className="opacity-90">Structured progression for optimal recovery</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Week 1-2: Foundation</h3>
                    <p className="text-gray-600 mb-3">Focus on pain reduction and gentle movement</p>
                    <div className="text-sm text-gray-500">
                      <p>• Pain-free range of motion exercises</p>
                      <p>• Gentle stretching (hold 15-20 seconds)</p>
                      <p>• Basic strengthening with body weight</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Week 3-4: Building</h3>
                    <p className="text-gray-600 mb-3">Increase exercise intensity and duration</p>
                    <div className="text-sm text-gray-500">
                      <p>• Longer stretching holds (30 seconds)</p>
                      <p>• More strengthening repetitions</p>
                      <p>• Introduction of low-impact cardio</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Week 5-8: Strengthening</h3>
                    <p className="text-gray-600 mb-3">Focus on building muscle strength and endurance</p>
                    <div className="text-sm text-gray-500">
                      <p>• Add resistance bands or light weights</p>
                      <p>• Increase cardio duration</p>
                      <p>• Functional movement patterns</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2">Week 9+: Maintenance</h3>
                    <p className="text-gray-600 mb-3">Maintain gains and prevent re-injury</p>
                    <div className="text-sm text-gray-500">
                      <p>• Continue strengthening 3x per week</p>
                      <p>• Regular cardio activities</p>
                      <p>• Daily stretching routine</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 px-4 bg-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Important Guidelines</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Listen to your body:</strong> Stop any exercise that causes increased knee pain.</p>
              <p><strong>Progress gradually:</strong> Don't rush through the program stages.</p>
              <p><strong>Consistency over intensity:</strong> Regular, gentle exercise is better than sporadic intense workouts.</p>
              <p><strong>Ice after exercise:</strong> Apply ice for 15-20 minutes after workouts if there's any swelling.</p>
              <p><strong>Consult your healthcare provider:</strong> Always check with your doctor or physical therapist before starting new exercises.</p>
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
