document.addEventListener("DOMContentLoaded", () => {
    const characters = [
      { name: "Mr. Cute", image: "https://media0.giphy.com/media/vVegyymxA90fkY8jkE/giphy.webp?cid=790b7611x2h3ymujnvl1nutf3e2mgolrm4hu4iw0f41bz286&ep=v1_gifs_search&rid=giphy.webp&ct=g", votes: 0 },
      { name: "Mx. Monkey", image: "https://media2.giphy.com/media/qixJFUXq1UNLa/giphy.webp?cid=790b76117k5g1e4i1ojxq4g6y3w0o4vp9rw72ehw98jnjwre&ep=v1_gifs_search&rid=giphy.webp&ct=g", votes: 0 },
      { name: "Ms. Zebra", image: "https://media3.giphy.com/media/aCApF8cx7smhq/giphy.webp?cid=790b7611vnoeuvkww3xwdmbop7dpar73kgm9jo8fexdb4yk0&ep=v1_gifs_search&rid=giphy.webp&ct=g", votes: 0 },
      { name: "Dr. Lion", image: "https://media2.giphy.com/media/Ipu4SBjy3xsTm/200.webp?cid=790b7611umnw7m1ykff48adgf3cy7kmo6jox5w6wnur748kn&ep=v1_gifs_search&rid=200.webp&ct=g", votes: 0 },
      { name: "Mme. Panda", image: "https://media1.giphy.com/media/E49KOgnZDmLXq/200.webp?cid=790b7611cty0q346jsppnaow0zo9ya1lcr5xbotbvvupx9nm&ep=v1_gifs_search&rid=200.webp&ct=g", votes: 0 }
    ];
  
    const characterBar = document.getElementById("character-bar");
    const nameDisplay = document.getElementById("name");
    const imageDisplay = document.getElementById("image");
    const voteCount = document.getElementById("vote-count");
    const voteForm = document.getElementById("votes-form");
    const voteInput = document.getElementById("votes");
    const resetBtn = document.getElementById("reset-btn");
  
    let selectedCharacter = characters[1]; // Default to Mx. Monkey
  
    function updateCharacterDisplay(character) {
      selectedCharacter = character;
      nameDisplay.textContent = character.name;
      imageDisplay.src = character.image;
      voteCount.textContent = character.votes;
    }
  
    characters.forEach((character) => {
      const btn = document.createElement("button");
      btn.textContent = character.name;
      btn.classList.add("character-btn");
      btn.addEventListener("click", () => updateCharacterDisplay(character));
      characterBar.appendChild(btn);
    });
  
    voteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const votesToAdd = parseInt(voteInput.value, 10);
      if (!isNaN(votesToAdd) && votesToAdd > 0) {
        selectedCharacter.votes += votesToAdd;
        voteCount.textContent = selectedCharacter.votes;
        voteInput.value = "";
      }
    });
  
    resetBtn.addEventListener("click", () => {
      selectedCharacter.votes = 0;
      voteCount.textContent = "0";
    });
  
    // Initialize default character
    updateCharacterDisplay(selectedCharacter);
  });
  