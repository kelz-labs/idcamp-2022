function welcome() {
  alert("sim salabim");
  const contents = document.querySelector(".contents");
  contents.removeAttribute("hidden");
}

document.body.onload = welcome;

function increment() {
  document.getElementById("count").innerText++;

  if (document.getElementById("count").innerText == 7) {
    const hiddenMessage = document.createElement("h4");
    hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi!";
    const image = document.createElement("img");
    image.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");
    const contents = document.querySelector(".contents");
    contents.appendChild(hiddenMessage).appendChild(image);
  }
}

document.getElementById("incrementButton").onclick = increment;
