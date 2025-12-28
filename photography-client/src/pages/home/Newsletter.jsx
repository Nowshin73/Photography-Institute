const Newsletter = () => {
  return (
    <section className="subscription bg-fixed my-20 pt-10">
      {/* Overlay */}
      <div className="bg-white/80 flex items-center justify-center">
        <div className="mx-auto text-center w-full md:w-1/2 my-16 px-4">
          <h3 className="text-4xl font-semibold uppercase py-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-700">
            Want 10% off your first purchase? Sign up to our newsletter for your
            unique discount code. You’ll also get free tutorials and news sent
            straight to your inbox.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex justify-center items-center pb-20 pt-12 px-4 lg:px-36">
        <div className="w-full max-w-xl bg-black/70 rounded-lg p-8">
          <form className="space-y-6">
            {/* Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="button-primary px-6 py-3 rounded-md text-white font-medium"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
