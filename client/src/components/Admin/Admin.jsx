// Imports necessary hooks and components from React
import React, { useEffect, useState } from 'react';

/**
 * A functional React component that fetches and displays data for an admin dashboard.
 */
const Admin = () => {
  // State to hold the fetched data. Initially set to null.
  const [data, setData] = useState(null);
  
  // State to manage the loading status of the fetch operation.
  const [isLoading, setIsLoading] = useState(true);
  
  // State to store any error messages from the fetch operation.
  const [error, setError] = useState(null);

  // useEffect hook to perform the data fetching when the component mounts.
  useEffect(() => {
    // Initiates a fetch request to the admin dashboard endpoint.
    fetch('/admin/dashboard', {
      // Includes an Authorization header using a bearer token retrieved from localStorage.
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then(response => {
      // Checks if the response was successful, throws an error if not.
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parses the JSON response body.
      return response.json();
    })
    .then(data => {
      // Updates the data state with the fetched data and sets isLoading to false.
      setData(data);
      setIsLoading(false);
    })
    .catch(error => {
      // Catches any errors, updates the error state with the error message, and sets isLoading to false.
      setError(error.message);
      setIsLoading(false);
    });
  }, []); // Dependency array is empty, meaning this effect runs only once after the initial render.

  // Conditional rendering based on the loading status.
  if (isLoading) {
    return <div>Loading...</div>; // Displays this if data is still being fetched.
  }

  // Conditional rendering based on the presence of an error.
  if (error) {
    return <div>Error: {error}</div>; // Displays this if there was an error during fetch.
  }

  // Renders the admin dashboard UI with the fetched data.
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        {/* Displays the fetched data in a formatted JSON structure. */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

// Exports the Admin component for use in other parts of the application.
export default Admin;
