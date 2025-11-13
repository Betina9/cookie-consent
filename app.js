const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const form = document.getElementById("contact-form");
const modalText = document.getElementById("modal-text");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>`;

  setTimeout(function () {
    document.getElementById("upload-text").innerText = `Making the sale...`;
  }, 1500);

  setTimeout(function () {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDRlazJpbHZ4OXAwNHhxM3p2Nm5iZWNrcHBkYzkzaWFoeDA5dmM5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11C5ohOOaxjlcc/giphy.gif">
    </div>
    `;
  }, 3000);
});
