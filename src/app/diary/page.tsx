"use client";
import { useState, useEffect } from "react";

const EXERCISES = [
  "Straight Leg Raises",
  "Wall Sits",
  "Clamshells",
  "Glute Bridges",
  "IT Band Stretch",
  "Hip Flexor Stretch",
  "Hamstring Stretch",
  "Calf Stretch",
];

function getToday() {
  return new Date().toISOString().slice(0, 10);
}


import Link from "next/link";

export default function DiaryPage() {
  const [selectedDate, setSelectedDate] = useState(getToday());
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [notes, setNotes] = useState("");
  const [entries, setEntries] = useState<{ [date: string]: any[] }>({});

  useEffect(() => {
    const stored = localStorage.getItem("diaryEntries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  function addEntry() {
    if (!exercise) return;
    const newEntry = { exercise, sets, reps, notes };
    setEntries((prev) => {
      const dayEntries = prev[selectedDate] || [];
      return { ...prev, [selectedDate]: [...dayEntries, newEntry] };
    });
    setExercise("");
    setSets("");
    setReps("");
    setNotes("");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Nav */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
          <span className="text-lg font-bold text-gray-700">Workout Diary</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Track Your Progress</h1>
          <p className="text-xl text-gray-600 mb-8">
            Select a day, log your exercises, and build your recovery journey!
          </p>
        </div>
      </section>

      {/* Diary Card Section */}
      <section className="py-12 px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-blue-500">
            <label className="block mb-2 font-semibold text-gray-700">Select Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
              className="mb-4 p-2 border text-gray-600 rounded w-full"
            />

            <form
              className="bg-blue-50 p-4 rounded mb-6 border border-blue-200"
              onSubmit={e => { e.preventDefault(); addEntry(); }}
            >
              <label className="block mb-2 text-blue-700 font-semibold">Exercise:</label>
              <select
                value={exercise}
                onChange={e => setExercise(e.target.value)}
                className="mb-2 p-2 text-gray-600 border rounded w-full"
              >
                <option value="">Select exercise</option>
                {EXERCISES.map(ex => (
                  <option key={ex} value={ex}>{ex}</option>
                ))}
              </select>
              <div className="flex gap-2 mb-2">
                <input
                  type="number"
                  min="1"
                  placeholder="Sets"
                  value={sets}
                  onChange={e => setSets(e.target.value)}
                  className="p-2 text-gray-600 border rounded w-1/2"
                />
                <input
                  type="number"
                  min="1"
                  placeholder="Reps"
                  value={reps}
                  onChange={e => setReps(e.target.value)}
                  className="p-2 border text-gray-600 rounded w-1/2"
                />
              </div>
              <textarea
                placeholder="Notes (optional)"
                value={notes}
                onChange={e => setNotes(e.target.value)}
                className="mb-2 p-2 text-gray-600 border rounded w-full"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full font-semibold"
              >Add Entry</button>
            </form>

            <h2 className="text-xl font-semibold mb-2 text-blue-700">Entries for {selectedDate}:</h2>
            <div>
              {(entries[selectedDate] && entries[selectedDate].length > 0) ? (
                <ul className="space-y-2 text-gray-600">
                  {entries[selectedDate].map((entry, idx) => (
                    <li key={idx} className="bg-gray-50 border border-blue-100 p-3 rounded">
                      <strong className="text-blue-700">{entry.exercise}</strong> — {entry.sets} sets x {entry.reps} reps
                      {entry.notes && <div className="text-sm text-gray-600 mt-1">{entry.notes}</div>}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-gray-500">No entries for this day.</div>
              )}
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
