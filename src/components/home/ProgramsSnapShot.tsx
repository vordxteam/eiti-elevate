//   <section className="py-20 bg-gradient-to-b from-[#F8FAFA] to-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
       
//         <div className="text-center mb-12 sm:mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1CA6A3]/10 mb-6">
//             <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1CA6A3]">
//               Career Pathways
//             </span>
//           </div>
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#0D1F22] mb-4">
//             Programs{" "}
//             <span className="relative inline-block" style={{ color: "#1CA6A3" }}>
//               Snapshot
//               <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//                 <path d="M2 8.5C60 3.5 150 1 298 8.5" stroke="#74B4E0" strokeWidth="3" strokeLinecap="round" />
//               </svg>
//             </span>
//           </h2>
//         </div>


//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//           {tracks.map((track, index) => {
//             const IconComponent = track.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative rounded-3xl overflow-hidden bg-white border border-[#E0F0F0] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(28,166,163,0.15)] flex flex-col h-full"
//               >
//                 {/* Content Area - flex-1 pushes button to bottom */}
//                 <div className="flex-1 p-8 pb-4">
            
//                   <div
//                     className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
//                     style={{ backgroundColor: `${track.accent}15` }}
//                   >
//                     <IconComponent
//                       size={28}
//                       strokeWidth={1.5}
//                       style={{ color: track.accent }}
//                       className="transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>

          
//                   <div
//                     className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
//                     style={{
//                       backgroundColor: `${track.accent}15`,
//                       color: track.accent,
//                     }}
//                   >
//                     {track.category}
//                   </div>

                  
//                   <h3 className="text-xl font-headline font-bold text-[#0D1F22] mb-3 leading-tight group-hover:text-[#1CA6A3] transition-colors duration-300">
//                     {track.title}
//                   </h3>

               
//                   <p className="text-sm text-[#64748b] leading-relaxed">
//                     {track.description}
//                   </p>
//                 </div>

//                 <div className="relative px-8 pb-8 pt-2 mt-auto">
//                   <Link
//                     to="/programs"
//                     className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
//                     style={{ color: track.accent }}
//                   >
//                     Learn More
//                     <ArrowRight
//                       size={16}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   </Link>

              
//                   <div
//                     className="absolute bottom-8 left-8 h-0.5 rounded-full transition-all duration-500 w-0 group-hover:w-20"
//                     style={{ backgroundColor: track.accent }}
//                   />
//                 </div>

//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                   style={{
//                     background: `radial-gradient(circle at 50% 0%, ${track.accent}10 0%, transparent 70%)`,
//                   }}
//                 />
//               </div>
//             );
//           })}
//         </div>

       
//         <div className="text-center mt-16">
//           <Link
//             to="/programs"
//             className="inline-flex items-center gap-3 bg-[#1CA6A3] hover:bg-[#179490] hover:shadow-[#1CA6A3]/30 hover:-translate-y-0.5 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl  group"
//           >
//             View All Programs
//             <ArrowRight
//               size={18}
//               className="transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </Link>
//         </div>
//       </div>
//     </section>