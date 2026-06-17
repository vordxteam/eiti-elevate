// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// const NotFound = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.error("404 Error: User attempted to access non-existent route:", location.pathname);
//   }, [location.pathname]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-muted">
//       <div className="text-center">
//         <h1 className="mb-4 text-4xl font-bold">404</h1>
//         <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
//         <a href="/" className="text-primary underline hover:text-primary/90">
//           Return to Home
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NotFound;

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-[#F7F3EE] flex items-center justify-center overflow-hidden px-4">

      {/* Background decorative blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #1CA6A3, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #74B4E0, transparent)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #5FB673, transparent)" }}
      />

      <div className="relative z-10 text-center max-w-lg mx-auto">

        {/* Big 404 */}
        <div className="relative mb-6 select-none">
          <span
            className="text-[160px] sm:text-[200px] font-black leading-none"
            style={{
              background: "linear-gradient(135deg, #1CA6A3, #74B4E0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </span>
          {/* Subtle shadow text behind */}
          <span
            className="absolute inset-0 text-[160px] sm:text-[200px] font-black leading-none text-[#E6D9C6] -z-10 translate-x-1 translate-y-1 select-none"
          >
            404
          </span>
        </div>

        {/* Divider */}
        <div
          className="mx-auto mb-8 h-1 w-20 rounded-full"
          style={{ background: "linear-gradient(90deg, #1CA6A3, #74B4E0, #5FB673)" }}
        />

        {/* Message */}
        <h1 className="mb-3 text-2xl sm:text-3xl font-bold text-[#333333]">
          Page Not Found
        </h1>
        <p className="mb-10 text-gray-500 text-base leading-relaxed">
          The page{" "}
          <span className="font-medium text-[#1CA6A3]">{location.pathname}</span>{" "}
          doesn't exist or may have been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="group relative overflow-hidden rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-[#1CA6A3]/30 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #1CA6A3, #74B4E0)" }}
          >
            <span
              className="absolute inset-0 translate-x-[-100%] bg-white/10 transition-transform duration-500 group-hover:translate-x-[100%]"
              aria-hidden
            />
            Go to Homepage
          </button>

          <button
            onClick={() => navigate(-1)}
            className="rounded-xl border border-[#1CA6A3] px-8 py-3.5 text-sm font-semibold text-[#1CA6A3] transition-all duration-300 hover:bg-[#1CA6A3]/5 hover:-translate-y-0.5"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFound;