import { RatingCircle } from './RatingCircle';

interface RatingButtonProps {
  rating: number;
  selectedRating: number | null;
  setSelectedRating: React.Dispatch<React.SetStateAction<number | null>>;
}

export function RatingButton({ rating, selectedRating, setSelectedRating }: RatingButtonProps) {
  const isSelected = selectedRating === rating;

  return (
    <RatingCircle
      className={`sm:hover:bg-white hover:text-dark-blue ${
        isSelected ? 'bg-rating-orange text-dark-blue ' : 'bg-dark-blue text-light-grey'
      } `}
    >
      <button
        data-test={`rating-btn-${rating}`}
        className='w-full h-full'
        onClick={(e: React.FormEvent) => {
          e.preventDefault();
          setSelectedRating(rating);
        }}
      >
        {rating}
      </button>
    </RatingCircle>
  );
}
