"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useSearch } from "@/lib/contexts/search-context"

export function RentFilters() {
  const { filters, updateFilters, clearFilters } = useSearch()

  const carTypes = [
    { id: "sedan", label: "Sedan", count: 45 },
    { id: "suv", label: "SUV", count: 32 },
    { id: "hatchback", label: "Hatchback", count: 28 },
    { id: "coupe", label: "Coupe", count: 15 },
    { id: "convertible", label: "Convertible", count: 8 },
  ]

  const brands = [
    { id: "toyota", label: "Toyota", count: 25 },
    { id: "honda", label: "Honda", count: 20 },
    { id: "bmw", label: "BMW", count: 15 },
    { id: "mercedes", label: "Mercedes", count: 12 },
    { id: "audi", label: "Audi", count: 10 },
  ]

  const features = [
    { id: "gps", label: "GPS Navigation" },
    { id: "ac", label: "Air Conditioning" },
    { id: "bluetooth", label: "Bluetooth" },
    { id: "backup-camera", label: "Backup Camera" },
    { id: "sunroof", label: "Sunroof" },
    { id: "leather", label: "Leather Seats" },
  ]

  const handleCarTypeChange = (typeId: string, checked: boolean) => {
    const newTypes = checked ? [...filters.carType, typeId] : filters.carType.filter((id) => id !== typeId)
    updateFilters({ carType: newTypes })
  }

  const handleBrandChange = (brandId: string, checked: boolean) => {
    const newBrands = checked ? [...filters.make, brandId] : filters.make.filter((id) => id !== brandId)
    updateFilters({ make: newBrands })
  }

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    const newFeatures = checked ? [...filters.features, featureId] : filters.features.filter((id) => id !== featureId)
    updateFilters({ features: newFeatures })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Price Range (per day)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={[filters.priceRange[0], Math.min(filters.priceRange[1], 200)]}
            onValueChange={(value) => updateFilters({ priceRange: [value[0], value[1]] as [number, number] })}
            max={200}
            min={0}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${Math.min(filters.priceRange[0], 200)}</span>
            <span>${Math.min(filters.priceRange[1], 200)}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Car Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {carTypes.map((type) => (
            <div key={type.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={filters.carType.includes(type.id)}
                  onCheckedChange={(checked) => handleCarTypeChange(type.id, checked as boolean)}
                />
                <Label htmlFor={type.id} className="text-sm">
                  {type.label}
                </Label>
              </div>
              <span className="text-sm text-muted-foreground">({type.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Brand</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={brand.id}
                  checked={filters.make.includes(brand.id)}
                  onCheckedChange={(checked) => handleBrandChange(brand.id, checked as boolean)}
                />
                <Label htmlFor={brand.id} className="text-sm">
                  {brand.label}
                </Label>
              </div>
              <span className="text-sm text-muted-foreground">({brand.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center space-x-2">
              <Checkbox
                id={feature.id}
                checked={filters.features.includes(feature.id)}
                onCheckedChange={(checked) => handleFeatureChange(feature.id, checked as boolean)}
              />
              <Label htmlFor={feature.id} className="text-sm">
                {feature.label}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full bg-transparent" onClick={clearFilters}>
        Clear All Filters
      </Button>
    </div>
  )
}
