export const getVideos = () => {
  (gapi.client as any).youtube.videos
    .list({
      part: ["snippet", "statistics", "contentDetails"],
      chart: "mostPopular",
      maxResults: 20,
      regionCode: "GB",
    })
    .then(function (response: any) {
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
    });
};
