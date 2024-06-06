import { RatingThankYou } from './RatingThankYou';

export function RatingFeedback({ selectedRating }: { selectedRating: number | null }) {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <RatingThankYou />
      <span
        data-test='submittedRating'
        className='text-rating-orange  text-[14px] sm:text-[15px] text-center p-1 bg-dark-blue rounded-3xl'
      >
        You selected {selectedRating} out of 5
      </span>
      <h2 className='text-[24px] sm:text-[28px] font-bold text-white text-center'>Thank You!</h2>
      <p className='text-light-grey  text-[14px] sm:text-[15px] leading-6 text-center'>
        We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in
        touch!
      </p>
    </div>
  );
}
