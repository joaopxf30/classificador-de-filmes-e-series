export const addRating = async (audiovisualId, rating) => {
    const formData = new FormData();
    formData.append("audiovisualId", audiovisualId)
    formData.append("rating", rating)

    console.log("Sending a request in order to create a tuple for rating in the database")

    let url = "http://127.0.0.1:5001/add_rating";
    return fetch(url, {
        method: "POST",
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("A tuple in the database has been created")
        return data
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

export const changeRating = async (audiovisualId, rating) => {
    const formData = new FormData();
    formData.append("audiovisualId", audiovisualId)
    formData.append("rating", rating)

    console.log("Sending a request in order to change a rating")

    let url = "http://127.0.0.1:5001/change_rating";
    return fetch(url, {
        method: "PUT",
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

export const removeRating = async (audiovisualId) => {
    console.log("Sending a request in order to remove a rating")

    let url = "http://127.0.0.1:5001/delete_rating?audiovisualId=" + audiovisualId;
    fetch(url, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  }