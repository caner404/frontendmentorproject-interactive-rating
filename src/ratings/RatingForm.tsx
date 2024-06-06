import { RatingButton } from './RatingButton';
import { RatingCircle } from './RatingCircle';
import { RatingStar } from './RatingStar';

interface RatingFormProps {
  ratings: number[];
  selectedRating: number | null;
  setSelectedRating: React.Dispatch<React.SetStateAction<number | null>>;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

export function RatingForm({ ratings, selectedRating, setSelectedRating, setIsSubmitted }: RatingFormProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5 justify-center '
    >
      <RatingCircle>
        <RatingStar />
      </RatingCircle>
      <h2 className='text-[24px] sm:text-[28px] font-bold text-white'>How did we do?</h2>
      <p className='text-light-grey text-left text-[14px] sm:text-[15px] leading-6'>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </p>
      <ul className='flex justify-center gap-2 sm:gap-5'>
        {ratings.map((rating) => (
          <li key={rating}>
            <RatingButton
              rating={rating}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
            />
          </li>
        ))}
      </ul>
      <button
        type='submit'
        data-test='rating-submit'
        onClick={() => setIsSubmitted(true)}
        className='bg-rating-orange rounded-3xl p-2 uppercase font-bold sm:hover:bg-white text-[14px] sm:text-[15px] '
      >
        Submit
      </button>
    </form>
  );
}
