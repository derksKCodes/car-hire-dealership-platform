"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useSearch } from "@/lib/contexts/search-context"

export function CarsFilters() {
  const { filters, updateFilters, clearFilters } = useSearch()

  const makes = [
    { id: "toyota", label: "Toyota", count: 245 },
    { id: "honda", label: "Honda", count: 198 },
    { id: "bmw", label: "BMW", count: 156 },
    { id: "mercedes", label: "Mercedes-Benz", count: 134 },
    { id: "audi", label: "Audi", count: 112 },
    { id: "nissan", label: "Nissan", count: 98 },
  ]

  const bodyTypes = [
    { id: "sedan", label: "Sedan", count: 456 },
    { id: "suv", label: "SUV", count: 389 },
    { id: "hatchback", label: "Hatchback", count: 234 },
    { id: "coupe", label: "Coupe", count: 156 },
    { id: "convertible", label: "Convertible", count: 89 },
    { id: "wagon", label: "Wagon", count: 67 },
  ]

  const fuelTypes = [
    { id: "petrol", label: "Petrol" },
    { id: "diesel", label: "Diesel" },
    { id: "electric", label: "Electric" },
    { id: "hybrid", label: "Hybrid" },
  ]

  const transmissions = [
    { id: "automatic", label: "Automatic" },
    { id: "manual", label: "Manual" },
  ]

  const handleMakeChange = (makeId: string, checked: boolean) => {
    const newMakes = checked ? [...filters.make, makeId] : filters.make.filter((id) => id !== makeId)
    updateFilters({ make: newMakes })
  }

  const handleBodyTypeChange = (typeId: string, checked: boolean) => {
    const newTypes = checked ? [...filters.bodyType, typeId] : filters.bodyType.filter((id) => id !== typeId)
    updateFilters({ bodyType: newTypes })
  }

  const handleFuelTypeChange = (fuelId: string, checked: boolean) => {
    const newFuels = checked ? [...filters.fuelType, fuelId] : filters.fuelType.filter((id) => id !== fuelId)
    updateFilters({ fuelType: newFuels })
  }

  const handleTransmissionChange = (transId: string, checked: boolean) => {
    const newTrans = checked ? [...filters.transmission, transId] : filters.transmission.filter((id) => id !== transId)
    updateFilters({ transmission: newTrans })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => updateFilters({ priceRange: value as [number, number] })}
            max={100000}
            min={0}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${filters.priceRange[0].toLocaleString()}</span>
            <span>${filters.priceRange[1].toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Year</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={filters.yearRange}
            onValueChange={(value) => updateFilters({ yearRange: value as [number, number] })}
            max={2024}
            min={2000}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{filters.yearRange[0]}</span>
            <span>{filters.yearRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mileage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={filters.mileageRange}
            onValueChange={(value) => updateFilters({ mileageRange: value as [number, number] })}
            max={100000}
            min={0}
            step={5000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{filters.mileageRange[0].toLocaleString()} mi</span>
            <span>{filters.mileageRange[1].toLocaleString()} mi</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Make</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {makes.map((make) => (
            <div key={make.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={make.id}
                  checked={filters.make.includes(make.id)}
                  onCheckedChange={(checked) => handleMakeChange(make.id, checked as boolean)}
                />
                <Label htmlFor={make.id} className="text-sm">
                  {make.label}
                </Label>
              </div>
              <span className="text-sm text-muted-foreground">({make.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Body Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {bodyTypes.map((type) => (
            <div key={type.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={filters.bodyType.includes(type.id)}
                  onCheckedChange={(checked) => handleBodyTypeChange(type.id, checked as boolean)}
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
          <CardTitle>Fuel Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {fuelTypes.map((fuel) => (
            <div key={fuel.id} className="flex items-center space-x-2">
              <Checkbox
                id={fuel.id}
                checked={filters.fuelType.includes(fuel.id)}
                onCheckedChange={(checked) => handleFuelTypeChange(fuel.id, checked as boolean)}
              />
              <Label htmlFor={fuel.id} className="text-sm">
                {fuel.label}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transmission</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {transmissions.map((transmission) => (
            <div key={transmission.id} className="flex items-center space-x-2">
              <Checkbox
                id={transmission.id}
                checked={filters.transmission.includes(transmission.id)}
                onCheckedChange={(checked) => handleTransmissionChange(transmission.id, checked as boolean)}
              />
              <Label htmlFor={transmission.id} className="text-sm">
                {transmission.label}
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
