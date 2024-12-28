
const blogPosts = [
    {
        id: 1,
        title: 'The Ultimate Travel Guide to Bali',
        image: 'https://images.pexels.com/photos/1544351/pexels-photo-1544351.jpeg?auto=compress&cs=tinysrgb&w=600',
        excerpt: 'Discover the best places to visit, eat, and stay while exploring the beautiful island of Bali.',
        date: 'January 15, 2024',
        author: 'John Doe',
    },
    {
        id: 2,
        title: '10 Tips for Safe Solo Travel',
        image: 'https://images.pexels.com/photos/2405095/pexels-photo-2405095.jpeg?auto=compress&cs=tinysrgb&w=600',
        excerpt: 'Learn how to travel solo safely and make the most out of your adventures.',
        date: 'February 10, 2024',
        author: 'Jane Smith',
    },
    {
        id: 3,
        title: 'Exploring the Hidden Gems of Europe',
        image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600',
        excerpt: 'A guide to some of the lesser-known yet stunning destinations in Europe.',
        date: 'March 5, 2024',
        author: 'Alice Johnson',
    },
    {
        id: 4,
        title: 'Best Food Destinations for 2024',
        image: 'https://images.pexels.com/photos/2165159/pexels-photo-2165159.jpeg?auto=compress&cs=tinysrgb&w=600',
        excerpt: 'Indulge in the best cuisines from around the world in these top food destinations.',
        date: 'April 12, 2024',
        author: 'Mark Wilson',
    },
    {
        id: 5,
        title: 'How to Pack Light for Long Trips',
        image: 'https://images.pexels.com/photos/105234/pexels-photo-105234.jpeg?auto=compress&cs=tinysrgb&w=600',
        excerpt: 'Master the art of packing light without missing out on the essentials.',
        date: 'May 20, 2024',
        author: 'Sophia Lee',
    },
    {
        id: 6,
        title: 'Top Eco-Friendly Travel Tips',
        image: 'https://images.pexels.com/photos/4222000/pexels-photo-4222000.jpeg?auto=compress&cs=tinysrgb&w=600',
        excerpt: 'Travel sustainably with these easy eco-friendly tips for your next trip.',
        date: 'June 8, 2024',
        author: 'Chris Evans',
    },
];

const Blog = () => {
    return (
        <section className="bg-gray-50 py-12 px-4">
            {/* Section Header */}
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Latest Blog Posts</h2>
                <p className="text-gray-600 mt-2">Read our latest travel stories, tips, and guides.</p>
            </div>

            {/* Blog Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">
                                By {post.author} | {post.date}
                            </p>
                            <p className="text-gray-700 mt-2">{post.excerpt}</p>
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
        </section>
    );
};

export default Blog;
