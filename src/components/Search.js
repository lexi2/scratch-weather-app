import React from "react";
import './Search.css';

export default function Search () {
  return (
    <div className="Search">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              className="form-control form-control-override"
              type="search"
              placeholder="Type a city.."
              aria-label="Search"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary w-100 button-override"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}