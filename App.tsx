import React, { useEffect, useState } from 'react';
import { AppNavigator } from "./src/navigation/AppNavigator"
import { UserContext } from './src/context/userContext';
import { ReviewsContext } from './src/context/reviewsContext';
import { User } from './src/types/user';
import { Review } from './src/types/review';

export default function App() {
  const [user, setUser] = useState<User | null>();
  const [reviews, setReviews] = useState<Review[]>([]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ReviewsContext.Provider value={{ reviews, setReviews}} >
        <AppNavigator />
      </ReviewsContext.Provider>
    </UserContext.Provider>
    )
}