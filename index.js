const button = document.querySelector(".btn");
const url = "https://dog.ceo/api/breeds/image/random/12";
const list = document.querySelector('ul.box');

async function fetchDog() {
    try {
        const respons = await fetch(url);
        const data = await respons.json();
        console.log(data)
        for (i of data.message){
            // Создаем элементы
            const image = document.createElement("img");
            const listItem = document.createElement('li')
            // Добавляем элементы
            image.src = i
            listItem.appendChild(image);
            list.appendChild(listItem)
        }

    } catch (error) {
        console.log (error);
    }
}


//  кнопка вызывает функцию
button.addEventListener("click", () => {
    fetchDog()
})



// const userListNode = document.querySelector('.user-list')

// fetch('https://dog.ceo/api/breeds/image/random/8')
//   .then((response) => response.json())
//   .then(users => {
//     // let userListNodeInner = ''
//     users.forEach((user) => {
//       const userNode = document.createElement('img')
//       const userNameNode = document.createElement('span')
//       const phoneNode = document.createElement('span')

//       userNode.classList.add('user-list')
//       userNameNode.classList.add('user-name')
//       phoneNode.classList.add('phone')

//       userNameNode.textContent = name: ${user.name}
//       phoneNode.textContent = phone: ${user.phone}

//       userNode.append(${user.id}. , userNameNode, phoneNode)
//       userListNode.append(userNode)

//       //   userListNodeInner += `<li>${user.id}. name: <span class="user-name">${user.name}</span> phone:
//       //   <span class="phone">${user.phone}</span>
//       // </li>`
//     });

//     // userListNode.innerHTML = userListNodeInner
//   })

