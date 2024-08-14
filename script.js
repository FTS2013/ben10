function mostrarAlien() {
    var nomeAlien = document.getElementById("nomeAlien").value;
    var alienImagens = {
      "4": "Ben 10 Clássico/quatro braços.png",
      "agua": "Ben 10 Clássico/aquatic.png",
      "besta": "Ben 10 Clássico/besta.png",
      "chama": "Ben 10 Clássico/chama.png",
      "fan": "Ben 10 Clássico/fantasmatico.jpg",
      "massa": "Ben 10 Clássico/massa1.png",
      "inseto": "Ben 10 Clássico/inseto.png",
      "ultra t": "Ben 10 Clássico/ultra t.png",
      "xrl8": "Ben 10 Clássico/xrl8.png",
      "enor": "ben 10 força alienigina/enro.png",
      "eco": "ben 10 força alienigina/eco.png",
      "fogo": "ben 10 força alienigina/fogo fatul.jpg", 
      "raia": "ben 10 força alienigina/raia.jpg",
      "calafrio": "ben 10 força alienigina/CALAFRIO_19.png",
      "croma": "ben 10 força alienigina/cromatico.png",
      "giga": "ben 10 força alienigina/giga.jpg",
      "glu": "ben 10 força alienigina/glu.jpeg",
      "mamaco": "ben 10 força alienigina/mamaco.png",
      "rath": "ben 10 força alienigina/rath.jpg",
      
     
      // Adicione mais aliens conforme necessário 
    };
  
    var alienSrc = alienImagens[nomeAlien.toLowerCase()];
    if (alienSrc) {
      var alienImg = document.createElement("img");
      alienImg.src = alienSrc;
      alienImg.classList.add("alien");
      alienImg.style.width = "200px"; // Set image width
      alienImg.style.height = "200px"; // Set image height
      document.getElementById("alienContainer").appendChild(alienImg);
      setTimeout(function() {
        alienImg.remove();
      }, 5000);
    } else {
      alert("Alien não encontrado!");
    }
  }
  