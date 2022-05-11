import React from "react";
import quote from "../../Assets/icons/quote.svg";
import people1 from "../../Assets/images/people1.png";
import people2 from "../../Assets/images/people2.png";
import people3 from "../../Assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      review: "",
      location: "california",
      img: people3,
    },
  ];
  return (
		<section className="flex flex-col justify-between px-6 mt-28 container mx-auto">
			<div className="flex justify-between items-center">
				<div>
					<p className="text-secondary text-xl">Testimonial</p>
					<p className="text-4xl text-accent font-bold">
						What our patients say
					</p>
				</div>
				<div>
					<img className="w-[98px] lg:w-[192px]" src={quote} alt="" />
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-y-12  justify-items-center ">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
