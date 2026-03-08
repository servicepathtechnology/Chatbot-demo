export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <div className="w-10 h-10 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin-slow"></div>
      <p className="mt-4 text-sm text-slate-500 font-medium tracking-wide animate-pulse">Loading...</p>
    </div>
  );
}
