import sajek from "../../assets/images/Sajek.png"
import sreemongol from "../../assets/images/Sreemongol.png"
import sundorbon from "../../assets/images/sundorbon.png"
const destinations = [
    {
        id: 1,
        name: 'Sajek Valley',
        image: sajek, // Replace with actual image
        description: 'Experience the breathtaking beauty of Sajek Valley, a serene hill station in Bangladesh.',
        location: 'Bangladesh',
    },
    {
        id: 2,
        name: 'Sreemangal',
        image: sreemongol, // Replace with actual image
        description: 'Famous for its lush green tea gardens, Sreemangal is a must-visit for nature lovers.',
        location: 'Bangladesh',
    },
    {
        id: 3,
        name: 'Sundarbans',
        image: sundorbon, // Replace with actual image
        description: 'Explore the world’s largest mangrove forest and spot the Royal Bengal Tiger.',
        location: 'Bangladesh',
    },
];

const Destination = () => {
    return (
        <section className="bg-gray-50 py-12 px-4">
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Popular Destinations</h2>
                <p className="text-gray-600 mt-2">Discover the most popular travel destinations around the world.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {destinations.map((destination) => (
                    <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                            <p className="text-gray-600 text-sm mt-1">{destination.location}</p>
                            <p className="text-gray-700 mt-2">{destination.description}</p>
                            <a
                                href="#"
                                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                            >
                                Explore More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destination;
