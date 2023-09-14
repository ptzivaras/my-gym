import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Testimonials.css'

const Testimonials = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  // Sample data with images, names, and text
  const items = [
    {
      id: 1,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cXGi6zm5Pb3DAjHgQAFbd80tV3BaWbhKIg&usqp=CAU",
      name: "John Doe1",
      text: "A testimonial is an honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced success as a result of the work you did for them."
    },
    {
      id: 2,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cXGi6zm5Pb3DAjHgQAFbd80tV3BaWbhKIg&usqp=CAU",
      name: "Jane Smith2",
      text: "A testimonial is an honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced success as a result of the work you did for them."
    },
    {
        id: 3,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cXGi6zm5Pb3DAjHgQAFbd80tV3BaWbhKIg&usqp=CAU",
        name: "Jane Smith3",
        text: "A testimonial is an honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced success as a result of the work you did for them."
      },
      {
        id: 4,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cXGi6zm5Pb3DAjHgQAFbd80tV3BaWbhKIg&usqp=CAU",
        name: "Jane Smith4",
        text: "A testimonial is an honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced success as a result of the work you did for them."
      },
      {
        id: 5,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cXGi6zm5Pb3DAjHgQAFbd80tV3BaWbhKIg&usqp=CAU",
        name: "Jane Smith5",
        text: "A testimonial is an honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced success as a result of the work you did for them."
      },
    // Add more items as needed
  ];

  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      customTransition="all 0.5s"
      containerClass="custom-carousel-container"
      itemClass="custom-carousel-item"
    >
      {items.map((item) => (
        <div key={item.id} className="testimonial-card">
          <div className="testimonial-image">
            <img src={item.imageSrc} alt={item.name} />
          </div>
          <div className="testimonial-content">
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonials;
