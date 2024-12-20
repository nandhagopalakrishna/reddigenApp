import React, { createContext, useContext, useState } from 'react';

interface PromoBannerContextType {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const PromoBannerContext = createContext<PromoBannerContextType | undefined>(undefined);

export function PromoBannerProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <PromoBannerContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </PromoBannerContext.Provider>
  );
}

export function usePromoBanner() {
  const context = useContext(PromoBannerContext);
  if (context === undefined) {
    throw new Error('usePromoBanner must be used within a PromoBannerProvider');
  }
  return context;
}