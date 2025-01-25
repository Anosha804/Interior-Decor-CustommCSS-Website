import Image from 'next/image';

export default function About() {
    return (
      <div className="about-section">
        <div className="about-container">
          {/* Hero Section */}
          <div className="about-title">
            <h1>About InteriorCraft</h1>
            <p>
              Creating beautiful, functional spaces that inspire and delight since 2010.
            </p>
          </div>
  
          {/* Story Section */}
          <div className="story-section">
          <div className="story-image-wrapper relative h-[400px]">
           <Image
             src="/about.jpg"
             alt="Our studio"
             width={600}   
             height={400} 
             className="object-cover rounded-lg"
             />
             </div>

            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, InteriorCraft has grown from a small design studio to a full-service interior design firm. Our passion for creating beautiful, functional spaces has driven us to work on hundreds of successful projects across the country.
              </p>
              <p>
                We believe that great design should be accessible to everyone. Our team of experienced designers and architects works closely with each client to understand their needs, preferences, and lifestyle, creating spaces that are both beautiful and practical.
              </p>
              <a href="/learn-more" className="story-button">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    );
}
