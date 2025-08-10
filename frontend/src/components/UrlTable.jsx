export default function UrlTable({ urls }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Original URL
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Short URL
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Clicks
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Created At
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {urls.map((url) => (
          <tr key={url._id} className="hover:bg-gray-50 transition-colors duration-200">
            <td className="px-6 py-4 whitespace-normal break-all">
              <a 
                href={url.originalUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-indigo-600 hover:text-indigo-900 font-medium"
              >
                {url.originalUrl}
              </a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center gap-2">
                <a
                  href={`${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/${url.shortCode}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:text-indigo-900 font-medium"
                >
                  {url.shortCode}
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"}/${url.shortCode}`)}
                  className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                  title="Copy short URL"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </button>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {url.clicks}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(url.createdAt).toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
