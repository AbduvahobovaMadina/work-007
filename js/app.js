

const API_URL = "https://jsonplaceholder.typicode.com"
const wrapper = document.querySelector(".wrapper")
const box = document.querySelector(".box")
const loading = document.querySelector(".loading")
console.log(wrapper);

async function fetchUsers(api){
    let response = await fetch(`${api}/users`)

    response
        .json()
        .then((res)=> createCard(res))
        .catch((err)=> console.log(err))
        .finally(()=>{
            loading.style.display = "none"
            setTimeout(() => {
                $(".box").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                   arrows: true,
                   prevArrow: "<button type=\"button\" class=\"arrow\"><</button>",
                   nextArrow: "<button type=\"button\" class=\"arrow\">></button>"
                  });
            }, 100);
        })
}


fetchUsers(API_URL)




function createCard(data){
    data.forEach((user) => {
        let card = document.createElement("div")
        card.classList.add("card") 
        card.innerHTML = `
        <div class="img">
        </div>
        <div class="info">
            <h3>${user.id}</h3>
            <p>${user.name}</p>
            <p>${user.username}</p>
            <p>${user.email}</p>
            <p>${user.address.city}</p>
            <p>${user.address.street}</p>

        </div>
        `

        wrapper.appendChild(card)
        console.log(card);
    });
}