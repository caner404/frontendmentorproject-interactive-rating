import { useState } from "react";
import { RatingForm } from "./RatingForm";
import { RatingFeedback } from "./RatingFeedback";

export function Rating() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="m-5 p-5  md:p-10 bg-rating-black  rounded-3xl  max-w-full sm:w-[420px]">
      {isSubmitted ? (
        <RatingFeedback selectedRating={selectedRating} />
      ) : (
        <RatingForm
          ratings={ratings}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </div>
  );
}
