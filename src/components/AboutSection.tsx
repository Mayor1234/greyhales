export default function AboutSection() {
  return (
    <section className="bg-white py-10 px-6" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold  mb-6 text-[#994C12]">
            Timeless Interiors, Curated for You
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At GreyHales, we craft spaces that reflect elegance, comfort, and
            modern sophistication. Our passion lies in transforming everyday
            rooms into serene, functional, and aesthetic sanctuaries.
          </p>
        </div>

        {/* Photo Layout */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/mini1.jpg"
            alt="Living room styled by GreyHales"
            className="rounded-2xl shadow-lg object-cover h-52 w-full"
          />
          <img
            src="/images/mini2.jpg"
            alt="Minimalist kitchen space"
            className="rounded-2xl shadow-lg object-cover h-52 w-full"
          />
          <img
            src="/images/mini3.jpg"
            alt="Elegant bathroom decor"
            className="rounded-2xl shadow-lg object-cover h-58 w-full col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
