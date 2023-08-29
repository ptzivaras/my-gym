const trainerCardData = [
    {
      title: "Thomas",
      image: "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png",
      link: ""
    },
    {
      title: "Kostas",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.thimble.com/wp-content/uploads/2022/05/Personal-Trainer-Salary-Guide-1200x800.jpg",
      link: ""
    },
    {
      title: "Jessica",
      image: "https://img.freepik.com/premium-photo/young-female-fitness-personal-trainer-with-notepad-standing-gym-with-thumb-up_146671-31568.jpg",
      link: ""
    },
    {
      title: "George",
      image: "https://healthguide.ng/wp-content/uploads/2022/02/Screenshot_2022-02-02-19-21-07-06.jpg",
      link: ""
    }
  ];



function Home() {
  return (

    <div className="card-grid container">
        {trainerCardData.map((card, index) => (
          <div className="card" key={index}>
            <div className="img-container">
              <img className="card-img-top" src={card.image} alt={`Image for ${card.title}`} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <a href={card.link} className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    
  );
}