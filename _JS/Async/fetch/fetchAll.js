
// async function fetchCodeStatuses(urls) {
//   const httpResponses = await Promise.all(urls.map(async (url) => fetch(url)))
//   return httpResponses.map((response) => response.status)
// }
//
// (async () => {
//   const statusCodes = await fetchCodeStatuses([
//       "https://example.com",
//       "https://example.com/bar",
//       "https://example.com/baz",
//     ]
//   )
// })()