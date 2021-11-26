import Blog from "./Blog";

const Home = (props) => {
  return (
    <div className="container px-4 py-6 md:px-14 md:py-16 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-700 pb-4 md:pb-8">Plaats een blog bericht</h1>
          <div className="flex flex-col pb-4 md:pb-8">
            <label className="font-medium">
              Berichtnaam
            </label>
            <input 
              type="text"
              id="message_name"
              placeholder="Geen titel"
              className="bg-gray-50 h-10 p-5 mt-2 italic" />
          </div>
          <div className="flex flex-col pb-4 md:pb-8">
            <label className="font-medium">
              Categorie
            </label>
            <select className="bg-gray-50 h-10 mt-2 bg-white text-gray-400 italic">
              <option>Geen categorie</option>
              <option>Categorie 1</option>
              <option>Categorie 2</option>
              <option>Categorie 3</option>
              <option>Categorie 4</option>
            </select>
          </div>
          <div className="flex flex-col pb-4 md:pb-8">
            <label className="font-medium">
              Bericht
            </label>
            <input 
              type="text"
              id="message_content"
              placeholder="..."
              className="bg-gray-50 h-10 p-5 mt-2" />
          </div>
          <button className="flex justify-center items-center h-10 w-64 my-4 bg-yellow-600 rounded-full text-white font-semibold">
            Bericht aanmaken
          </button>
        </div>
        <Blog />
      </div>
    </div>
  );
}
 
export default Home;