const Testimonials = () => {
  return (
    <div className="py-20 dark:text-white">
      <div className="mb-14 text-center">
        <h2 className="font-bold font-serif text-5xl">Testimonials</h2>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {/* review 1 */}
        <div className="p-6 flex flex-col justify-between text-center bg-slate-50 dark:bg-gray-900 shadow-inner rounded-2xl">
          <p className="font-medium text-lg italic">
            &quot;Absolutely love the quality of the paintings I received! The attention to detail is remarkable. Will definitely be back for more.&quot;
          </p>

          <div className="mt-4">
            <h6 className="text-xl font-bold">Emily Turner</h6>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400">Art Enthusiast</p>
          </div>
        </div>
        {/* review 2 */}
        <div className="p-6 flex flex-col justify-between text-center bg-slate-50 dark:bg-gray-900 shadow-inner rounded-2xl">
          <p className="font-medium text-lg italic">
            &quot;As an artist, I&apos;m always on the lookout for high-quality materials. This store never disappoints. The canvases are top-notch!&quot;
          </p>

          <div className="mt-4">
            <h6 className="text-xl font-bold">Daniel Parker</h6>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400">Professional Artist</p>
          </div>
        </div>
        {/* review 3 */}
        <div className="p-6 flex flex-col justify-between text-center bg-slate-50 dark:bg-gray-900 shadow-inner rounded-2xl">
          <p className="font-medium text-lg italic">
            &quot;I&apos;ve purchased multiple pieces from this store and have been consistently impressed. Each painting is a masterpiece. Highly
            recommend!&quot;
          </p>

          <div className="mt-4">
            <h6 className="text-xl font-bold">Sophia Lee</h6>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400">Art Collector</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
