import React, { useState, useEffect } from 'react';
import { Star, Smile, Meh, Frown, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Review {
  id: string;
  text: string;
  rating: number;
  author: string;
}

interface ReviewRatingProps {
  reviews: Review[];
  rating: number;
  className?: string;
}

const ReviewRating: React.FC<ReviewRatingProps> = ({ reviews, className = '' }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<number | 'all'>('all');

  const getFilteredReviews = () => {
    if (selectedFilter === 'all') return reviews;
    return reviews.filter(review => review.rating === selectedFilter);
  };

  const filteredReviews = getFilteredReviews();

  const filteredAverageRating =
    filteredReviews.length > 0
      ? filteredReviews.reduce((sum, r) => sum + r.rating, 0) / filteredReviews.length
      : 0;

  const atomicRating = Math.round(filteredAverageRating);

  const getIconData = (rating: number) => {
    if (rating >= 5) return { Icon: ThumbsUp, color: 'from-green-400 to-emerald-500', animation: 'bounce', iconColor: 'text-green-500' };
    if (rating >= 4) return { Icon: Smile, color: 'from-green-300 to-green-400', animation: 'pulse', iconColor: 'text-green-400' };
    if (rating >= 3) return { Icon: Meh, color: 'from-yellow-300 to-yellow-400', animation: 'wobble', iconColor: 'text-yellow-500' };
    if (rating >= 2) return { Icon: Frown, color: 'from-orange-300 to-orange-400', animation: 'shake', iconColor: 'text-orange-500' };
    return { Icon: ThumbsDown, color: 'from-red-300 to-red-400', animation: 'shake', iconColor: 'text-red-500' };
  };

  const iconData = getIconData(atomicRating);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [atomicRating]);

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 transition-all duration-300 ${index < atomicRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const displayedReviews = showAllReviews ? filteredReviews : filteredReviews.slice(0, 3);

  const handleFilterChange = (filterValue: number | 'all') => {
    setSelectedFilter(filterValue);
    setShowAllReviews(false);
  };

  const handleViewAllClick = () => {
    setShowAllReviews(!showAllReviews);
  };

  const getReviewCount = (starRating: number) => {
    return reviews.filter(review => review.rating === starRating).length;
  };

  return (
    <Card className={`w-full max-w-4xl mx-auto shadow-md border border-border rounded-2xl ${className}`}>
      <CardContent className="p-6 font-mono">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div
              className={`
                transition-all duration-500 transform
                ${isAnimating && iconData.animation === 'bounce' ? 'animate-bounce' : ''}
                ${isAnimating && iconData.animation === 'pulse' ? 'animate-pulse scale-110' : ''}
                ${isAnimating && iconData.animation === 'wobble' ? 'animate-[wiggle_0.5s_ease-in-out]' : ''}
                ${isAnimating && iconData.animation === 'shake' ? 'animate-[shake_0.5s_ease-in-out]' : ''}
                hover:scale-125 hover:rotate-12 cursor-pointer
              `}
            >
              <iconData.Icon className={`sm:w-10 sm:h-10 w-12 h-12 ${iconData.iconColor}`} />
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {renderStars()}
              </div>
              <p className="sm:text-2xl text-xl font-bold text-foreground">{atomicRating}/5</p>
            </div>
          </div>

          <div className={`px-4 py-2 sm:block hidden rounded-full text-white font-semibold text-sm bg-gradient-to-r ${iconData.color} transition-all duration-300 hover:scale-105`}>
            {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Filter buttons */}
        <div className="mb-6">
          <div className="flex sm:flex-wrap gap-2 overflow-x-auto whitespace-nowrap pb-1">
            <button
                onClick={() => handleFilterChange('all')}
                className={`sm:px-4 px-2 py-2 rounded-lg sm:text-sm text-xs font-medium transition-all 
                duration-200 ${selectedFilter === 'all' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                View All ({reviews.length})
            </button>
            {[5, 4, 3, 2, 1].map((starRating) => {
              const count = getReviewCount(starRating);
              return (
                <button
                  key={starRating}
                  onClick={() => handleFilterChange(starRating)}
                  disabled={count === 0}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1
                    ${selectedFilter === starRating
                      ? 'bg-blue-500 text-white shadow-md'
                      : count === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                  `}>
                  <span>{starRating}</span>
                  <Star className="w-3 h-3 fill-current"/>
                  <span>({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Reviews list */}
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {displayedReviews.length > 0 ? (
            displayedReviews.map((review, index) => (
              <Card
                key={review.id}
                className="border-l-4 transition-all duration-300 hover:shadow-sm"
                style={{
                  borderLeftColor: review.rating >= 4 ? '#10b981' : review.rating >= 3 ? '#f59e0b' : '#ef4444',
                  animationDelay: `${index * 100}ms`
                }}>
                <CardContent className="sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold font-JB text-foreground">{review.author}</span>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400"/>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-justify font-GS text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="border-dashed">
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">No reviews found for {selectedFilter} star{selectedFilter !== 1 ? 's' : ''}</p>
              </CardContent>
            </Card>
          )}

          {filteredReviews.length > 3 && (
            <div className="text-center">
              <button
                onClick={handleViewAllClick}
                className="text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
              >
                {showAllReviews ? `Show less` : `View all ${filteredReviews.length} reviews`}
              </button>
            </div>
          )}
        </div>

        {/* Summary bar */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span className='font-JB font-bold'>
              {selectedFilter === 'all' ? 'Overall satisfaction' : `${selectedFilter} star satisfaction`}
            </span>
            <span className="font-semibold font-GS">{Math.round((filteredAverageRating / 5) * 100)} %</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div className={`h-2 rounded-full transition-all duration-1000 bg-gradient-to-r ${iconData.color}`} style={{ width: `${(filteredAverageRating / 5) * 100} %` }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewRating;
