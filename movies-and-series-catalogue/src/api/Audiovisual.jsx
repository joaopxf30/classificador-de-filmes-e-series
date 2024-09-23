export const getAudiovisuals = async () => {
  console.log("Sending a request in order to get movies and series from the collection")

  let url = "http://127.0.0.1:5001/audiovisuals";
  return fetch(url, {
    method: "GET",
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("The movies and series from the collection are displayed")
    return data.audiovisuals
  })
  .catch((error) => {
    console.error("Error:", error)
  });
};

export const addAudiovisual = async (imdbId, title, year) => {
  const formData = new FormData();
  formData.append("imdbId", imdbId)
  formData.append("title", title)
  formData.append("year", year)

  console.log("Sending a request in order to add a movie or series")

  let url = "http://127.0.0.1:5001/add_audiovisual";
  return fetch(url, {
    method: "POST",
    body: formData,
  })
  .then((response) => response.json()
  .then((data) => {
    if (!response.ok) {
      throw new Error(data.message);
    }
    console.log("The movie or series has been added")
    return data
  }))
}

export const removeAudiovisual = (id) => {
  console.log("Sending a request in order to remove a movie or series")

  let url = "http://127.0.0.1:5001/delete_audiovisual?id=" + id;
  fetch(url, {
    method: "DELETE"
  })
  .then((response) => {
  if (response.ok) {
    console.log("The movie or series has been removed")
  }})
  .catch((error) => {
    console.error("Error:", error);
  });
}
  