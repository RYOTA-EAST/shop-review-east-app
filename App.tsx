import React, { useEffect, useState } from 'react';
import { AppNavigator } from "./src/navigation/AppNavigator"
import { UserContext } from './src/context/userContext';
import { User } from './src/types/user';

export default function App() {
  const [user, setUser] = useState<User | null>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppNavigator />
    </UserContext.Provider>
    )
}