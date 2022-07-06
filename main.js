const arrayFoods = [
    {
        id: 0,
        name: "comida 1",
        price: 2500,
        stock: 3,
        img: "./images/img1.png",
    },
    {
        id: 1,
        name: "comida 2",
        price: 2600,
        stock: 5,
        img: "./images/img2.png",
    },
    {
        id: 2,
        name: "comida 3",
        price: 2700,
        stock: 10,
        img: "./images/img3.png",
    },
    {
        id: 3,
        name: "comida 4",
        price: 2000,
        stock: 9,
        img: "./images/img4.png",
    },
    {
        id: 4,
        name: "comida 5",
        price: 2100,
        stock: 5,
        img: "./images/img5.png",
    },
    {
        id: 5,
        name: "comida 6",
        price: 2150,
        stock: 9,
        img: "./images/img6.png",
    },
    {
        id: 6,
        name: "comida 7",
        price: 1500,
        stock: 12,
        img: "./images/img7.png",
    },
    {
        id: 7,
        name: "comida 8",
        price: 1000,
        stock: 15,
        img: "./images/img8.png",
    },
];

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("btn")) {
            const idUser = event.target.parentElement.dataset.iduser;

            let currentFood = null;

            for (let i = 0; i < arrayFoods.length; i++) {
                if (arrayFoods[i].id === parseInt(idUser)) {
                    currentFood = arrayFoods[i];
                }
            }

            console.log(currentFood);
        }
    });
    printCardsFood();
});

function printCardsFood() {
    const foods = document.querySelector(".foods");

    let html = "";

    for (let i = 0; i < arrayFoods.length; i++) {
        html += `<div class="food">
                    <div class="food_img">
                        <img src='${arrayFoods[i].img}' alt='${arrayFoods[i].name}'>
                    </div>
                    <div class="food_info">
                        <p>nombre: ${arrayFoods[i].name} </p>
                        <p>precio: ${arrayFoods[i].price}</p>
                        <p><small>cantidad en bodega: ${arrayFoods[i].stock}</small></p>
                    </div>
                    <div class="food_actions" data-iduser='${arrayFoods[i].id}'>
                        <button class='btn'>Agregar</button>
                    </div>
                </div>
                `;
    }

    foods.innerHTML = html;
}
