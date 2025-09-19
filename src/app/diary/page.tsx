"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const EXERCISES = [
  "Straight Leg Raises",
  "Wall Sits",
  "Clamshells",
  "Glute Bridges",
  "Banded Straight Leg Raises",
  "Banded Wall Sits",
  "Banded Clamshells",
  "Banded Glute Bridges",
  "IT Band Stretch",
  "Hip Flexor Stretch",
  "Hamstring Stretch",
  "Calf Stretch",
];

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

const SUPABASE_URL = "https://wrzwblzteydkwmgvwuie.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyendibHp0ZXlka3dtZ3Z3dWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyNzY1ODksImV4cCI6MjA3Mzg1MjU4OX0.xQQvrtC2dCuNRI4UvWq3vXafdoWbHl6m6Qa7jZ1foAo";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function DiaryPage() {
  const [selectedDate, setSelectedDate] = useState(getToday());
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [notes, setNotes] = useState("");
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch entries for selected date
  useEffect(() => {
    setLoading(true);
    supabase
      .from("diary_entries")
      .select("id, exercise, sets, reps, notes, date")
      .eq("date", selectedDate)
      .order("created_at", { ascending: true })
      .then(({ data, error }) => {
        if (error) {
          console.error("Fetch error:", error);
        } else {
          console.log("Fetched entries:", data);
        }
        setEntries(data || []);
        setLoading(false);
      });
  }, [selectedDate]);

  async function addEntry() {
    if (!exercise) return;
    setLoading(true);
    const { error: insertError, data: insertData } = await supabase.from("diary_entries").insert({
      date: selectedDate,
      exercise,
      sets: sets ? parseInt(sets) : null,
      reps: reps ? parseInt(reps) : null,
      notes,
    });
    if (insertError) {
      console.error("Insert error:", insertError);
    } else {
      console.log("Insert result:", insertData);
    }
    setExercise("");
    setSets("");
    setReps("");
    setNotes("");
    // Refresh entries
    supabase
      .from("diary_entries")
      .select("id, exercise, sets, reps, notes, date")
      .eq("date", selectedDate)
      .order("created_at", { ascending: true })
      .then(({ data, error }) => {
        if (error) {
          console.error("Fetch after insert error:", error);
        } else {
          console.log("Fetched after insert:", data);
        }
        setEntries(data || []);
        setLoading(false);
      });
  }

  async function deleteEntry(id: number) {
    setLoading(true);
    await supabase.from("diary_entries").delete().eq("id", id);
    // Refresh entries
    supabase
      .from("diary_entries")
      .select("id, exercise, sets, reps, notes")
      .eq("date", selectedDate)
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        setEntries(data || []);
        setLoading(false);
      });
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
              {loading ? (
                <div className="text-gray-500">Loading...</div>
              ) : entries.length > 0 ? (
                <ul className="space-y-2">
                  {entries.map((entry: any) => (
                    <li key={entry.id} className="bg-gray-50 border border-blue-100 p-3 rounded flex justify-between items-start">
                      <div className="text-gray-700">
                        <strong className="text-blue-700">{entry.exercise}</strong> — {entry.sets} sets x {entry.reps} reps
                        {entry.notes && <div className="text-sm text-gray-600 mt-1">{entry.notes}</div>}
                      </div>
                      <button
                        className="ml-4 text-red-500 hover:text-red-700 text-sm px-2 py-1 rounded border border-red-200 bg-red-50"
                        onClick={() => deleteEntry(entry.id)}
                        title="Delete entry"
                      >Delete</button>
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
