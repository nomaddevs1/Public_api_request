// This function create elelement
function createElement(elem) {
  return document.createElement(elem);
}
//it add class to already created element  in function createElement
function addClass(El, classs) {
  return El.classList.add(classs);
}
function appendEl(parent, child) {
  return parent.appendChild(child);
}
function attribute(elem, attr, val) {
  return elem.setAttribute(attr, val);
}

function changeClass(el, classs) {
  let elEM = document.querySelector(el);
  return elEM.classList.add;
}
fetch("https://randomuser.me/api?results=20")
  .then(response => response.json())
  .then(data => {
    let scriptEl = document.querySelector("script");
    let bodyEl = document.querySelector("body");

    data.results.forEach(data => {
      //declaration of variables that store the created element
      let divModal = createElement("div");
      let divCard = createElement("div");
      let divCMC = createElement("div");
      let imgEl = createElement("img");
      let divCIC = createElement("div");
      let h3El = createElement("h3");
      let pEl1 = createElement("p");
      let pEl2 = createElement("p");

      //add class to the element created
      addClass(imgEl, "card-img");
      addClass(divCMC, "card-img-container");
      addClass(divModal, "gallery");

      addClass(divCard, "card");
      addClass(divCIC, "card-info-container");
      addClass(h3El, "card-name");
      addClass(h3El, "cap");
      addClass(pEl1, "card-text");
      addClass(pEl2, "card-text");
      addClass(pEl2, "cap");

      h3El.textContent = `${data.name.first} ${data.name.last}`;
      pEl1.textContent = `${data.email}`;
      pEl2.textContent = `${data.location.city}, ${data.location.state}`;

      attribute(h3El, "id", "name");
      attribute(imgEl, "src", data.picture.large);
      appendEl(divCMC, imgEl);
      appendEl(divCIC, h3El);
      appendEl(divCIC, pEl1);
      appendEl(divCIC, pEl2);
      appendEl(divCard, divCMC);
      appendEl(divCard, divCIC);
      appendEl(divModal, divCard);
      bodyEl.insertBefore(divModal, scriptEl);
    });

    let divCAS = document.querySelectorAll(".card");
    let divCard = document.querySelectorAll(".gallery");
    for (let i = 0; i < divCAS.length; i++) {
      divCAS[i].addEventListener("click", e => {
        e.preventDefault();
        let name = divCard[i].children[0].children[1].children[0].textContent;

        let divMC = createElement("div");
        let divModal = createElement("div");
        let button = createElement("button");
        let divMIC = createElement("div");

        let imgModal = createElement("img");
        let h3Modal = createElement("h3");
        let pModal1 = createElement("p");
        let pModal2 = createElement("p");
        let hrModal = createElement("hr");
        let pModal3 = createElement("p");
        let pModal4 = createElement("p");
        let pModal5 = createElement("p");
        let divMBC = createElement("div");
        let button2 = createElement("button");
        let button3 = createElement("buuton");

        addClass(divMC, "modal-container");
        addClass(divModal, "modal");
        addClass(button, "modal-close-btn");
        addClass(divMIC, "modal-info-container");
        addClass(imgModal, "modal-img");
        addClass(h3Modal, "modal-name");
        addClass(h3Modal, "cap");
        addClass(pModal1, "modal-text");
        addClass(pModal2, "modal-text");
        addClass(pModal3, "modal-text");
        addClass(pModal4, "modal-text");
        addClass(pModal5, "modal-text");
        addClass(divMBC, "modal-btn-container");
        addClass(button2, "modal-prev");
        addClass(button2, "btn");
        addClass(button3, "modal-next");
        addClass(button3, "btn");

        let first = data.results[i].name.first;
        let last = data.results[i].name.last;
        let fullname = `${first} ${last}`;

        h3Modal.textContent = fullname;
        pModal1.textContent = data.results[i].email;
        pModal2.textContent = `${data.results[i].location.city}`;
        pModal3.textContent = data.results[i].phone;
        pModal4.textContent = `${data.results[i].location.street.number} ${data.results[i].location.street.name}
                             ,${data.results[i].location.city}, ${data.results[i].location.state} ${data.results[i].location.postcode}`;
        let birthday = `Birthday: ${data.results[i].dob.date}`;
        pModal5.textContent = birthday.slice(0, 20);
        button2.textContent = "prev";
        button3.textContent = "next";

        attribute(button, "type", "button");
        attribute(button, "id", "modal-close btn");
        attribute(imgModal, "src", data.results[i].picture.large);
        attribute(imgModal, "alt", "profile pictures");
        attribute(h3Modal, "id", "name");
        attribute(button2, "type", "button");
        attribute(button2, "id", "modal-close-prev");
        attribute(button3, "type", "button");
        attribute(button3, "id", "modal-close-next");

        bodyEl.insertBefore(divMC, scriptEl);
        appendEl(divMC, divModal);
        appendEl(divMC, divMBC);
        appendEl(divModal, button);
        appendEl(divModal, divMIC);
        appendEl(divMIC, imgModal);
        appendEl(divMIC, h3Modal);
        appendEl(divMIC, pModal1);
        appendEl(divMIC, pModal2);
        appendEl(divMIC, hrModal);
        appendEl(divMIC, pModal3);
        appendEl(divMIC, pModal4);
        appendEl(divMIC, pModal5);
        appendEl(divMBC, button2);
        appendEl(divMBC, button3);

        divMC.addEventListener("click", e => {
          let target = e.target;

          if (target.className == "modal-close-btn") {
            divMC.style.display = "none";
          }
        });

        let value = i;

        divMBC.addEventListener("click", e => {
          if (e.target.id == "modal-close-next") {
            if (value < data.results.length) {
              values = value++;
              let datas = data.results[values];
              let first = datas.name.first;
              let last = datas.name.last;
              let fullname = `${first} ${last}`;
              h3Modal.textContent = fullname;
              pModal1.textContent = datas.email;
              pModal2.textContent = `${datas.location.city}`;
              pModal3.textContent = datas.phone;
              pModal4.textContent = `${datas.location.street.number} ${datas.location.street.name}
                                        ,${datas.location.city}, ${datas.location.state} ${datas.location.postcode}`;
              let birthday = `Birthday: ${datas.dob.date}`;
              pModal5.textContent = birthday.slice(0, 20);
              attribute(imgModal, "src", datas.picture.large);
            } else if (value > data.results.length) {
              let button = document.querySelector("#modal-close-next");
              button.disabled = true;
            }
          }
          if (e.target.id == "modal-close-prev") {
            if (value !== -1) {
              let datas = data.results[value--];
              let first = datas.name.first;
              let last = datas.name.last;
              let fullname = `${first} ${last}`;
              h3Modal.textContent = fullname;
              pModal1.textContent = datas.email;
              pModal2.textContent = `${datas.location.city}`;
              pModal3.textContent = datas.phone;
              pModal4.textContent = `${datas.location.street.number} ${datas.location.street.name}
                                        ,${datas.location.city}, ${datas.location.state} ${datas.location.postcode}`;
              let birthday = `Birthday: ${datas.dob.date}`;
              pModal5.textContent = birthday.slice(0, 20);
              attribute(imgModal, "src", datas.picture.large);
            } else {
              e.target.disabled = true;
            }
            e.target.disabled = false;
          }
        });
      });
    }

    //it filters how element which does have the same letters as the input words
    let filter = document.querySelector("#search-input");
    filter.addEventListener("keyup", e => {
      let h3El = document.querySelectorAll("h3");
      let filters = filter.value.toUpperCase();
      for (let i = 0; i < h3El.length; i++) {
        let divGallery = document.querySelectorAll(".gallery");
        if (h3El[i].textContent.toUpperCase().indexOf(filters) > -1) {
          divGallery[i].style.display = "";
        } else {
          divGallery[i].style.display = "none";
        }
      }
    });
  });
