import React from "react";
import { sortOptions, sortOrderOptions } from "@/lib/constants";
import { SetStateAction } from "react";

interface SortNavProps {
  sortBy: string;
  setSortBy: React.Dispatch<SetStateAction<string>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<SetStateAction<string>>;
}

const SortNav = ({
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}: SortNavProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 shadow-md p-4 z-10 bg-purple-700">
      <div className="flex justify-center space-x-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 rounded border border-gray-300 text-black"
        >
          <option value="" disabled>
            Sort Option
          </option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 rounded border border-gray-300 text-black"
        >
          {sortOrderOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortNav;
