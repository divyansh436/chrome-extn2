document.getElementById("generateMeme").addEventListener("click", function () {
    fetch("https://meme-api.com/gimme")
      .then(response => response.json())
      .then(data => {
        if (data && data.url) {
          const memeImage = new Image();
          memeImage.src = data.url;
          memeImage.width = 400;
          memeImage.height = 400;
          
          // Create a container div for the meme image
          const memeContainer = document.getElementById("memeContainer");
          memeContainer.innerHTML = "";
          memeContainer.appendChild(memeImage);
        } else {
          alert("Failed to fetch meme. Please try again.");
        }
      })
      .catch(error => {
        console.error("Error fetching meme:", error);
        alert("Failed to fetch meme. Please try again.");
      });
  });
  