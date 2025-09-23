"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface SearchFilters {
  query: string
  make: string[]
  bodyType: string[]
  fuelType: string[]
  transmission: string[]
  priceRange: [number, number]
  yearRange: [number, number]
  mileageRange: [number, number]
  location: string
  pickupDate: string
  returnDate: string
  carType: string[]
  features: string[]
}

interface SearchContextType {
  filters: SearchFilters
  updateFilters: (updates: Partial<SearchFilters>) => void
  clearFilters: () => void
  searchResults: any[]
  setSearchResults: (results: any[]) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const defaultFilters: SearchFilters = {
  query: "",
  make: [],
  bodyType: [],
  fuelType: [],
  transmission: [],
  priceRange: [0, 100000],
  yearRange: [2000, 2024],
  mileageRange: [0, 100000],
  location: "",
  pickupDate: "",
  returnDate: "",
  carType: [],
  features: [],
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const updateFilters = (updates: Partial<SearchFilters>) => {
    setFilters((prev) => ({ ...prev, ...updates }))
  }

  const clearFilters = () => {
    setFilters(defaultFilters)
  }

  return (
    <SearchContext.Provider
      value={{
        filters,
        updateFilters,
        clearFilters,
        searchResults,
        setSearchResults,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
