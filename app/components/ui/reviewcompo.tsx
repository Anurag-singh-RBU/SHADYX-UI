
'use client';
import React, { useState } from 'react';
import { Monitor, FileCode, ArrowBigRight } from 'lucide-react';
import CodeBlock from './CodeBlock';
import { ScriptCopyBtn } from './ScriptCopyBtn';
import ReviewRating from './ReviewRating';

const Spotlight: React.FC = () => {

const demoReviews = [
  {
    id: "1",
    author: "Anurag Singh",
    rating: 5,
    text: "Super helpful and well designed. Highly recommended.",
  },
  {
    id: "2",
    author: "Random Guy",
    rating: 4,
    text: "Good components and clean UI but Could be more responsive.",
  },
  {
    id: "3",
    author: "Cutie",
    rating: 3,
    text: "It works fine but has room for improvement.",
  },
  {
    id: "4",
    author: "Binod",
    rating: 2,
    text: "Needs better documentation and styling options.",
  },
  {
    id: "5",
    author: "Chota Bheem",
    rating: 1,
    text: "Bas dhikane ke liye 1 star hai.",
  },
];

const avgRating = demoReviews.reduce((acc, r) => acc + r.rating, 0) / demoReviews.length;
const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

const codeString = `import React, { useState, useEffect } from 'react';
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
    if (rating >= 5)
      return {
        Icon: ThumbsUp,
        color: 'from-green-400 to-emerald-500',
        animation: 'bounce',
        iconColor: 'text-green-500',
      };
    if (rating >= 4)
      return {
        Icon: Smile,
        color: 'from-green-300 to-green-400',
        animation: 'pulse',
        iconColor: 'text-green-400',
      };
    if (rating >= 3)
      return {
        Icon: Meh,
        color: 'from-yellow-300 to-yellow-400',
        animation: 'wobble',
        iconColor: 'text-yellow-500',
      };
    if (rating >= 2)
      return {
        Icon: Frown,
        color: 'from-orange-300 to-orange-400',
        animation: 'shake',
        iconColor: 'text-orange-500',
      };
    return {
      Icon: ThumbsDown,
      color: 'from-red-300 to-red-400',
      animation: 'shake',
      iconColor: 'text-red-500',
    };
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
        className={\`w-5 h-5 transition-all duration-300 \${index < atomicRating ? 
        'text-yellow-400 fill-yellow-400' : 'text-gray-300'}\`}/>
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

  const IconComponent = iconData.Icon;

  return (
    <Card className={\`w-full max-w-4xl mx-auto shadow-md border 
    border-border rounded-2xl \${className}\`}>
      <CardContent className="p-6 font-mono">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div
              className={\`
                transition-all duration-500 transform
                \${isAnimating && iconData.animation === 'bounce' 
                ? 'animate-bounce' : ''}
                \${isAnimating && iconData.animation === 'pulse' 
                ? 'animate-pulse scale-110' : ''}
                \${isAnimating && iconData.animation === 'wobble' 
                ? 'animate-[wiggle_0.5s_ease-in-out]' : ''}
                \${isAnimating && iconData.animation === 'shake' 
                ? 'animate-[shake_0.5s_ease-in-out]' : ''}
                hover:scale-125 hover:rotate-12 cursor-pointer\`}>
              <IconComponent className={\`sm:w-10 sm:h-10 w-12 h-12 \${iconData.iconColor}\`}/>
            </div>
            <div>
              <div className="flex items-center space-x-1 mb-1">{renderStars()}</div>
              <p className="sm:text-2xl text-xl font-bold text-foreground">{atomicRating}/5</p>
            </div>
          </div>

          <div
            className={\`px-4 py-2 sm:block hidden rounded-full text-white font-semibold 
            text-sm bg-gradient-to-r \${iconData.color} transition-all duration-300 hover:scale-105\`}>
            {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex sm:flex-wrap gap-2 overflow-x-auto whitespace-nowrap pb-1">
            <button
              onClick={() => handleFilterChange('all')}
              className={\`sm:px-4 px-2 py-2 rounded-lg sm:text-sm text-xs font-medium 
              transition-all duration-200 \${selectedFilter === 'all' ? 'bg-blue-500 
              text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}\`}>
              View All ({reviews.length})
            </button>
            {[5, 4, 3, 2, 1].map(starRating => {
              const count = getReviewCount(starRating);
              return (
                <button
                  key={starRating}
                  onClick={() => handleFilterChange(starRating)}
                  disabled={count === 0}
                  className={\`px-4 py-2 rounded-lg text-sm font-medium transition-all 
                  duration-200 flex items-center space-x-1 \${selectedFilter === starRating ? 
                  'bg-blue-500 text-white shadow-md' : count === 0 ? 'bg-gray-100 text-gray-400 
                  cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}\`}>
                  <span>{starRating}</span>
                  <Star className="w-3 h-3 fill-current"/>
                  <span>({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3 max-h-64 overflow-y-auto">
          {displayedReviews.length > 0 ? (
            displayedReviews.map((review, index) => (
              <Card
                key={review.id}
                className="border-l-4 transition-all duration-300 hover:shadow-sm"
                style={{
                  borderLeftColor:
                    review.rating >= 4 ? '#10b981' : review.rating >= 3 ? '#f59e0b' : '#ef4444',
                  animationDelay: \`\${index * 100}ms\`,
                }}>
                <CardContent className="sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{review.author}</span>
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
                <p className="text-muted-foreground">
                  No reviews found for {selectedFilter} star{selectedFilter !== 1 ? 's' : ''}
                </p>
              </CardContent>
            </Card>
          )}

          {filteredReviews.length > 3 && (
            <div className="text-center">
              <button
                onClick={handleViewAllClick}
                className="text-blue-500 hover:text-blue-600 transition-colors duration-200 
                text-sm font-medium">
                {showAllReviews ? 'Show less' : \`View all \${filteredReviews.length} reviews\`}
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span className="font-bold">
              {selectedFilter === 'all' ? 'Overall satisfaction' : \`\${selectedFilter} star satisfaction\`}
            </span>
            <span className="font-semibold">{Math.round((filteredAverageRating / 5) * 100)}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className={\`h-2 rounded-full transition-all duration-1000 bg-gradient-to-r \${iconData.color}\`}
              style={{ width: \`\${(filteredAverageRating / 5) * 100}%\` }}>
              </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewRating;`


const usage = `export default const App = () =>{

const DEMO_REVIEWS = [
  {
    id: "1",
    author: "Anurag Singh",
    rating: 5,
    text: "Super helpful and well designed. Highly recommended.",
  },
  {
    id: "2",
    author: "Random Guy",
    rating: 4,
    text: "Good components and clean UI but Could be more responsive.",
  },
  {
    id: "3",
    author: "Cutie",
    rating: 3,
    text: "It works fine but has room for improvement.",
  },
  {
    id: "4",
    author: "Binod",
    rating: 2,
    text: "Needs better documentation and styling options.",
  },
  {
    id: "5",
    author: "Chota Bheem",
    rating: 1,
    text: "Bas dhikane ke liye 1 star hai.",
  },
];

const AVG_RATING = DEMO_REVIEWS.reduce((acc, r) => acc + r.rating, 0) / DEMO_REVIEWS.length;

return(

    <ReviewRating reviews={DEMO_REVIEWS} rating={AVG_RATING}/>

)}`;

  return (
    <div className="w-auto sm:mt-35 mt-33 sm:ml-32 ml-8 sm:mr-25 mr-8 relative">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3 font-JB">Review Rating</h1>

      {/* Subheading */}
      <p className="sm:text-md text-sm text-gray-600 mb-4 mono-text text-justify">
        If you want to showcase your good reviews - you can use this component.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap sm:gap-2 gap-3 -ml-2 mb-6 font-JB">
      {['Review', 'Rating', 'Feedback'].map((tag, index) => (
    <div key={tag} className={`relative rounded-full sm:ml-0 ml-1 p-[2px] tag-wrapper tag-${index}`}>
      <div className="relative z-10 bg-black text-white text-sm sm:px-4 px-2 py-1 rounded-full font-medium">
        {tag}
      </div>
    </div>
    ))}
    </div>


      {/* Toggle Buttons */}
      <div className="flex gap-4 sm:mt-20 mt-15">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-5 py-2 rounded-md shadow-sm ${
            activeTab === 'preview'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span className="font-medium">Preview</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 px-5 py-2 rounded-md ${
            activeTab === 'code'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span className="font-medium">Code</span>
        </button>
      </div>

      {/* Content Switcher */}
      <div className="sm:mt-10 mt-5 min-h-[400px] relative">
        {activeTab === 'preview' ? (
          <div className="relative rounded-md md:h-auto sm:h-[800px] h-auto w-full sm:bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200 py-5">
            <ReviewRating reviews={demoReviews} rating={avgRating}/>
          </div>
        ) : (
          <div className="sm:h-[500px] h-[500px] overflow-y-auto font-JB rounded-xl border border-gray-200">
            <CodeBlock
              language="typescript"
              fileName="ReviewRating.tsx"
              code={codeString}/>
          </div>
        )}
      </div>

    <div className="sm:px-32 sm:pt-10 pb-10 font-JB">
      <h2 className="text-3xl font-bold mb-6 sm:ml-1 mt-20 sm:mt-10">Installation</h2>

      {/* Tabs */}
      <div className="flex items-center border-b border-gray-300 mb-6 text-sm">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Install Dependencies</h3>
      </div>

      {/* Install Dependencies */}
      <div className="mb-10 relative">
        <ScriptCopyBtn
          commandMap={{
            npm: "npm install lucide-react",
            yarn: "yarn add lucide-react",
            pnpm: "pnpm add lucide-react",
            bun: "bun add lucide-react",
          }}/>
      </div>

      {/* Add util file */}
      <div className="relative -mb-15">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Usage</h3>
          <div className="sm:h-[500px] h-[300px] mb-10 overflow-y-auto font-JB rounded-xl border border-gray-200">
            <CodeBlock
              language="typescript"
              fileName="App.tsx"
              code={usage}/>
          </div>
      </div>

      <p className='mt-30 text-sm font-bold font-JB flex'><ArrowBigRight/> 
      <span className='ml-2 mt-0.5 text-md'>Install Shadcn UI - Visit <a href='/docs' className='text-blue-600'>Docs</a></span>
      </p>

    </div>
    </div>
  );
};

export default Spotlight;
