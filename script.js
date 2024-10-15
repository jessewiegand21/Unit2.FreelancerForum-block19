const freeLancersList = [
  {
    name: "Jesse",
    occupation: "hvac",
    price: 75,
  },
  {
    name: "Cheyenne",
    occupation: "healthcare",
    price: 60,
  },
  {
    name: "Jay",
    occupation: "baby",
    price: 50,
  },
];
const maxLancers = 10;

function addFreelancer() {
  if (renderList.length == maxLancers) {
    clearInterval(addFreelancerInterval);
  }
  const freeLancerToAdd =
    freeLancersList[Math.floor(Math.random() * freeLancersList.length)];
  renderList.push(freeLancerToAdd);
}

function render() {
  const freeLancers = document.querySelector("#freelancers");
  const newList = renderList.map((person) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = ` <div class="row2">
                <div>${person.name}</div>
                <div>${person.occupation}</div>
                <div>${person.price}</div>
            </div>`;
    return newElement;
  });
  const avg = getAverage();
  console.log(avg);
  const newAverage = document.querySelector("#average");
  freeLancers.replaceChildren(...newList);
  newAverage.innerHTML = `<span> $ ${avg} </span>`;
  newAverage.replaceWith(newAverage);
}

const addFreelancerInterval = setInterval(() => {
  addFreelancer();
  render();
}, 5000);

const renderList = [
  { name: "Alice", occupation: "writer", price: 30 },
  { name: "Bob", occupation: "teacher", price: 50 },
  { name: "Carol", occupation: "programmer", price: 70 },
];
function getAverage() {
  let sum = 0;
  for (let i = 0; i < renderList.length; i++) sum += renderList[i].price;
  return sum / renderList.length;
}
