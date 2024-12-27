import sajek from "../../assets/images/Sajek.png"
import sreemongol from "../../assets/images/Sreemongol.png"
import sundorbon from "../../assets/images/sundorbon.png"

const newsArticles = [
    {
        id: 1,
        title: 'Top 10 Must-Visit Destinations in 2024',
        image: sajek,
        excerpt: 'Explore the top destinations for your next adventure in 2024. From serene beaches to bustling cities, there’s something for everyone!',
        date: 'January 10, 2024',
    },
    {
        id: 2,
        title: '5 Tips for Budget-Friendly Travel',
        image: sreemongol,
        excerpt: 'Learn how to travel smart and save money on your next trip with these essential budget-friendly tips.',
        date: 'February 5, 2024',
    },
    {
        id: 3,
        title: 'Best Hiking Trails Around the World',
        image: sundorbon,
        excerpt: 'Discover some of the most breathtaking hiking trails from around the world.',
        date: 'March 15, 2024',
    },
];

const NewsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Travel News & Updates</h1>
                <p className="text-gray-600 mt-2">Stay updated with the latest travel stories and tips</p>
            </header>

            {/* News Articles */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newsArticles.map((article) => (
                    <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">{article.title}</h2>
                            <p className="text-gray-600 text-sm mt-1">{article.date}</p>
                            <p className="text-gray-700 mt-2">{article.excerpt}</p>
                            <a
                                href="#"
                                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                            >
                                Read More →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
