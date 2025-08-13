"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ExercisesPage() {
  const [fullscreenVideo, setFullscreenVideo] = useState<string | null>(null);

  const openFullscreen = (videoId: string) => {
    setFullscreenVideo(videoId);
  };

  const closeFullscreen = () => {
    setFullscreenVideo(null);
  };

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
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("tJMGfLH4KQg?si=A_dTSDOVuiLd0yf5")}
                      >
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/tJMGfLH4KQg?si=A_dTSDOVuiLd0yf5"
                          title="Straight Leg Raise Exercise"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-blue-600">Straight Leg Raises</h3>
                        <p className="text-gray-600 mb-3">Strengthens hip flexor without bending the knee</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Sets:</strong> 3 sets of 10-15 reps</p>
                          <p><strong>Instructions:</strong> Lie on back, lift straight leg 10 inches, hold 5 seconds</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("JaZNYM3zAP0")}
                      >
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/JaZNYM3zAP0"
                          title="Wall Sits Exercise"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-blue-600">Wall Sits</h3>
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
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("1ECrWm-3SKo")}
                      >
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/1ECrWm-3SKo"
                          title="Clamshell Exercise"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-blue-600">Clamshells</h3>
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
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("fK_xUE3OKIE?si=Mz59RZEQx6VOWxip")}
                      >
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/fK_xUE3OKIE?si=Mz59RZEQx6VOWxip"
                          title="Glute Bridge Exercise"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-blue-600">Glute Bridges</h3>
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

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-pink-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-2">💪Banded Strengthening Exercises</h2>
                <p className="opacity-90">Build muscle strength to support your knee</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  
                  <div className="border-l-4 border-pink-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("MmMM1cfExJM?si=rA5TXqnaH5q3pfwa")}
                      >
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/MmMM1cfExJM?si=rA5TXqnaH5q3pfwa"
                          title="Straight Leg Raise Exercise"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-pink-600">Banded Straight Leg Raises</h3>
                        <p className="text-gray-600 mb-3">Strengthens hip flexor without bending the knee</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Sets:</strong> 3 sets of 10-15 reps</p>
                          <p><strong>Instructions:</strong> Lie on back, lift straight leg 10 inches, hold 5 seconds</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("dFnk1abXQP0?si=vdQmX9wQAJUov0o8")}
                      >
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/dFnk1abXQP0?si=vdQmX9wQAJUov0o8"
                          title="Wall Sits Exercise"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-pink-600">Banded Wall Sits</h3>
                        <p className="text-gray-600 mb-3">Builds endurance in quadriceps and glutes</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Duration:</strong> Hold for 20-30 seconds, 3 times</p>
                          <p><strong>Instructions:</strong> Back against wall, slide down to 90° angle</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("4T2P_-MV9g0?si=46EaICZGUPHeWkwJ")}
                      >
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/4T2P_-MV9g0?si=46EaICZGUPHeWkwJ"
                          title="Clamshell Exercise"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-pink-600">Banded Clamshells</h3>
                        <p className="text-gray-600 mb-3">Strengthens hip abductors and external rotators</p>
                        <div className="text-sm text-gray-500">
                          <p><strong>Sets:</strong> 2 sets of 15 reps each side</p>
                          <p><strong>Instructions:</strong> Side-lying, lift top knee while keeping feet together</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("xrS2naqqB1E?si=7Zw5Jp2oVsQslYOc")}
                      >
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/xrS2naqqB1E?si=7Zw5Jp2oVsQslYOc"
                          title="Glute Bridge Exercise"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-pink-600">Banded Glute Bridges</h3>
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
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("bJuV3ZQVfJ4")}
                      >
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/bJuV3ZQVfJ4"
                          title="IT Band Stretch"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-green-600">IT Band Stretch</h3>
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
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("sDn-UtqdX58?si=GCvDkUFO5vRXehOc")}
                      >
                        
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/sDn-UtqdX58?si=GCvDkUFO5vRXehOc"
                          title="Hip Flexor Stretch"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-green-600">Hip Flexor Stretch</h3>
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
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("3mfIHcjSCtY")}
                      >
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/3mfIHcjSCtY"
                          title="Hamstring Stretch"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-green-600">Hamstring Stretch</h3>
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
                      <div 
                        className="relative cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openFullscreen("CuDoklMpFWo?si=-zNqmkfeNzMQ110w")}
                      >
                        <iframe
                          width="120"
                          height="90"
                          src="https://www.youtube.com/embed/CuDoklMpFWo?si=-zNqmkfeNzMQ110w"
                          title="Calf Stretch"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg border border-gray-200 pointer-events-none"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 rounded-lg transition-all">
                          <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-lg">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-green-600">Calf Stretch</h3>
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
                    <h3 className="text-lg font-semibold mb-2 text-purple-600">Swimming</h3>
                    <p className="text-gray-600 mb-3">Excellent full-body, zero-impact exercise</p>
                    <div className="text-sm text-gray-500">
                      <p><strong>Duration:</strong> 20-30 minutes, 3x per week</p>
                      <p><strong>Best strokes:</strong> Freestyle, backstroke (avoid breaststroke)</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-purple-600">Stationary Cycling</h3>
                    <p className="text-gray-600 mb-3">Low-impact cardio that strengthens legs</p>
                    <div className="text-sm text-gray-500">
                      <p><strong>Duration:</strong> 15-30 minutes, start with low resistance</p>
                      <p><strong>Tip:</strong> Adjust seat height for comfortable leg extension</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-purple-600">Water Walking</h3>
                    <p className="text-gray-600 mb-3">Gentle resistance training in water</p>
                    <div className="text-sm text-gray-500">
                      <p><strong>Duration:</strong> 20-30 minutes in chest-deep water</p>
                      <p><strong>Benefits:</strong> Reduces joint stress, improves circulation</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-purple-600">Elliptical Machine</h3>
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
                    <h3 className="text-lg font-semibold mb-2 text-orange-600">Week 1-2: Foundation</h3>
                    <p className="text-gray-600 mb-3">Focus on pain reduction and gentle movement</p>
                    <div className="text-sm text-gray-500">
                      <p>• Pain-free range of motion exercises</p>
                      <p>• Gentle stretching (hold 15-20 seconds)</p>
                      <p>• Basic strengthening with body weight</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-orange-600">Week 3-4: Building</h3>
                    <p className="text-gray-600 mb-3">Increase exercise intensity and duration</p>
                    <div className="text-sm text-gray-500">
                      <p>• Longer stretching holds (30 seconds)</p>
                      <p>• More strengthening repetitions</p>
                      <p>• Introduction of low-impact cardio</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-orange-600">Week 5-8: Strengthening</h3>
                    <p className="text-gray-600 mb-3">Focus on building muscle strength and endurance</p>
                    <div className="text-sm text-gray-500">
                      <p>• Add resistance bands or light weights</p>
                      <p>• Increase cardio duration</p>
                      <p>• Functional movement patterns</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-orange-600">Week 9+: Maintenance</h3>
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

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={closeFullscreen}
              className="absolute -top-12 right-0 text-white text-xl hover:text-gray-300 transition-colors z-10 flex items-center space-x-2"
            >
              <span>✕</span>
              <span className="text-sm">Close</span>
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${fullscreenVideo}?autoplay=1`}
                title="Exercise Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
