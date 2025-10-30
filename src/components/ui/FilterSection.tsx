import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Filter, X } from 'lucide-react';

interface FilterSectionProps {
  onFilterChange?: (filters: { brands: string[]; conditions: string[] }) => void;
}

export const FilterSection = ({ onFilterChange }: FilterSectionProps) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const brands = ['Levi\'s', 'Chanel', 'Vintage Band', 'Designer', 'No Brand'];
  const conditions = ['Excellent', 'Very Good', 'Good', 'Fair'];

  const toggleBrand = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(newBrands);
    onFilterChange?.({ brands: newBrands, conditions: selectedConditions });
  };

  const toggleCondition = (condition: string) => {
    const newConditions = selectedConditions.includes(condition)
      ? selectedConditions.filter(c => c !== condition)
      : [...selectedConditions, condition];
    setSelectedConditions(newConditions);
    onFilterChange?.({ brands: selectedBrands, conditions: newConditions });
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedConditions([]);
    onFilterChange?.({ brands: [], conditions: [] });
  };

  const hasActiveFilters = selectedBrands.length > 0 || selectedConditions.length > 0;

  return (
    <div className="bg-white border-y border-border py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-4 md:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-1">
                {selectedBrands.length + selectedConditions.length}
              </Badge>
            )}
          </Button>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground"
            >
              Clear all
            </Button>
          )}
        </div>

        {/* Filter Content */}
        <div className={`space-y-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
          {/* Brand Filters */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                Brand
              </h3>
              {selectedBrands.length > 0 && (
                <button
                  onClick={() => {
                    setSelectedBrands([]);
                    onFilterChange?.({ brands: [], conditions: selectedConditions });
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => toggleBrand(brand)}
                  className={`filter-badge ${
                    selectedBrands.includes(brand) ? 'filter-badge-active' : ''
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Condition Filters */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                Condition
              </h3>
              {selectedConditions.length > 0 && (
                <button
                  onClick={() => {
                    setSelectedConditions([]);
                    onFilterChange?.({ brands: selectedBrands, conditions: [] });
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {conditions.map((condition) => (
                <button
                  key={condition}
                  onClick={() => toggleCondition(condition)}
                  className={`filter-badge ${
                    selectedConditions.includes(condition) ? 'filter-badge-active' : ''
                  }`}
                >
                  {condition}
                </button>
              ))}
            </div>
          </div>

          {/* Clear All (Desktop) */}
          {hasActiveFilters && (
            <div className="hidden md:flex justify-end pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-1" />
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};