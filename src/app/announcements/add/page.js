"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AddAnnouncementPage() {
  const [form, setForm] = useState({
    date: "",
    tag: "",
    title: "",
    description: "",
    passcode: "",
  });
  const [error, setError] = useState("");
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  const SECRET_PASSCODE = "1234"; // change to your own

  useEffect(() => {
    // Trigger animation on mount
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.passcode !== SECRET_PASSCODE) {
      setError("❌ Wrong Passcode");
      return;
    }

    try {
      const res = await fetch("/api/announcements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: form.date,
          tag: form.tag,
          title: form.title,
          description: form.description,
        }),
      });

      if (!res.ok) throw new Error("Failed to add announcement");
      alert("data saved Successfully");
      router.push("/"); // ✅ redirect back to home
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8 bg-slate-200"
      aria-label="Add Announcement Page"
    >
      <div
        className={`bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl max-w-lg w-full p-10
          transform transition-all duration-700 ease-out
          ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <h2 className="text-center text-3xl font-extrabold text-purple-700 mb-8 select-none">
          Add New Announcement
        </h2>

        {error && (
          <div
            role="alert"
            className="mb-6 rounded-md bg-red-50 border border-red-400 text-red-700 px-4 py-3 text-center text-sm font-semibold shadow-sm"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Picker */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
            />
          </div>

          {/* Tag */}
          <div>
            <label
              htmlFor="tag"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Tag
            </label>
            <input
              id="tag"
              type="text"
              name="tag"
              placeholder="e.g. Update, Release"
              value={form.tag}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
            />
          </div>

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter announcement title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Write announcement details..."
              value={form.description}
              onChange={handleChange}
              rows={4}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 placeholder-gray-400 resize-none
                focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
            />
          </div>

          {/* Passcode */}
          <div>
            <label
              htmlFor="passcode"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Passcode
            </label>
            <input
              id="passcode"
              type="password"
              name="passcode"
              placeholder="Enter secret passcode"
              value={form.passcode}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-800 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="px-6 py-3 rounded-lg border border-purple-300 text-purple-700 font-semibold
                hover:bg-purple-100 active:bg-purple-200 transition focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow-md
                hover:bg-purple-700 active:bg-purple-800 transition focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
