interface TestimonialProps {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  role?: string;
  company?: string;
  companyImage?: string;
}

export default function Testimonial({ name, avatar, rating, text, role, company, companyImage }: TestimonialProps) {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  // Check if it's a business testimonial (with company information)
  const isBusinessTestimonial = company && companyImage;

  return (
    <div className="bg-card p-6 rounded-xl shadow-lg border border-gray-800 flex-1">
      {isBusinessTestimonial && (
        <>
          <img
            src={companyImage}
            alt={`${company} interior`}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h4 className="font-bold text-lg text-foreground">{company}</h4>
        </>
      )}
      
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          {role && <p className="text-sm text-gray-400">{role}</p>}
          <div className="flex text-yellow-400">
            {renderStars(rating)}
          </div>
        </div>
      </div>
      
      <p className="text-gray-400">{text}</p>
    </div>
  );
}
