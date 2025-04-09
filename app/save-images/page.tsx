import React from 'react';

export default function SaveImagesHelper() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Team Image Helper</h1>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <p className="text-yellow-800 font-medium">
          The team page is looking for images at specific locations. Please save the three team images as follows:
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">1. Save Mack Luby's photo (person with fall/autumn background)</h2>
          <p className="mb-4">Save as: <code className="bg-gray-100 px-2 py-1 rounded">/public/team/mack-luby.jpg</code></p>
          <div className="bg-gray-100 p-4 rounded">
            <p>This is the person with the beige cardigan and autumn/fall yellow trees in the background</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">2. Save Danny Kaufman's photo (person with light hair)</h2>
          <p className="mb-4">Save as: <code className="bg-gray-100 px-2 py-1 rounded">/public/team/danny-kaufman.jpg</code></p>
          <div className="bg-gray-100 p-4 rounded">
            <p>This is the smiling person with light/blonde hair wearing a black top</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">3. Save Jeremy Gardner's photo (person with beard)</h2>
          <p className="mb-4">Save as: <code className="bg-gray-100 px-2 py-1 rounded">/public/team/jeremy-gardner.jpg</code></p>
          <div className="bg-gray-100 p-4 rounded">
            <p>This is the person with a beard in formal attire (dark blazer)</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <p>Once you've saved these images, the team page will display them correctly.</p>
        <p className="mt-4">
          <a href="/team" className="text-purple-600 hover:text-purple-800">Return to Team Page</a>
        </p>
      </div>
    </div>
  );
} 