const ProductGrid = ({ title, isEnvelope, titleColor }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
    <h3 className={`${titleColor} text-center py-2 text-base font-semibold`}>
      {title}
    </h3>
    <div className="p-6">
      <div className="grid grid-cols-4 gap-6 mb-4">
        <div className="text-center">
          <span className="text-sm font-medium text-indigo-600">Ibiro</span>
        </div>
        <div className="text-center">
          <span className="text-sm font-medium text-indigo-600">Imifuka</span>
        </div>
        <div className="text-center">
          <span className="text-sm font-medium whitespace-pre-wrap text-indigo-600">Price/u{'\n'}mufuka</span>
        </div>
        <div className="text-center">
          <span className="text-sm font-medium whitespace-pre-wrap text-indigo-600">Total/im{'\n'}ifuka</span>
        </div>
      </div>
      {[...Array(isEnvelope ? 1 : 3)].map((_, index) => (
        <div key={index} className="grid grid-cols-4 gap-6 mb-4">
          <input
      type="text"
      placeholder={
        isEnvelope
          ? "IS 5KG" // Placeholder only for the IS Envelope section
          : index === 0
          ? `${title.slice(0, 2)} 25KG`
          : index === 1
          ? "10KG"
          : "5KG"
      }
          
            className="w-full px-4 py-2 text-base border rounded focus:outline-none focus:ring-1"
          />
          <input
            type="text"
            className="w-full px-4 py-2 text-base border rounded focus:outline-none focus:ring-1"
          />
          <input
            type="text"
            className="w-full px-4 py-2 text-base border rounded focus:outline-none focus:ring-1"
          />
          <input
            type="text"
            readOnly
            className="w-full px-4 py-2 text-base border rounded bg-gray-50"
          />
        </div>
      ))}
      <div className="text-right font-bold mt-6 text text-indigo-600">
        Total: 0 KG
      </div>
    </div>
  </div>
);

const Gutunganywa = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your report has been submitted");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <h1 className="text-2xl font-bold text-indigo-500 text-center mb-8">
          Amakuru Y'ifu Zagiye Kw'isoko
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-600">
                Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-600">
                Utanze Raporo
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-600">
                Ugemuye Kw'isoko
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-600">
                Umucuruzi
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-600">
                Amafranga Araya Kw'isoko
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-indigo-600">
                Amafranga Asigaye
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
          </div>

          
          <div>
            <label className="block text-sm font-medium mb-2 text-indigo-600">
              Nimero Y'umufuka
            </label>
            <input
              type="text"
              className="w-full max-w-md px-4 py-2 text-base border rounded focus:outline-none focus:ring-1"
              required
            />
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-8 ">
            <ProductGrid title="NEW FOOD" titleColor="text-indigo-600"  />
            <ProductGrid title="IFUNGURO" titleColor="text-indigo-600" />
            <ProductGrid title="ISEZERANO" titleColor="text-indigo-600" />
            <ProductGrid title="MAGAJU" titleColor="text-indigo-600" />
          </div>

          
          <div className="max-w-4xl text-indigo-600">
            <ProductGrid title="ISEZERANO ENVELOPE/5KG" titleColor="text-indigo-600" isEnvelope={true} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-indigo-600">
              Comment
            </label>
            <textarea
              rows="3"
              className="w-full px-4 py-2 text-base border rounded focus:outline-none focus:ring-1"
            />
          </div>

          <div className="flex justify-center gap-4  text-indigo-600">
  
            <button
              type="submit"
              className=" w-64 px-8 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              Kubika
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Gutunganywa;