const employees = [
  {
    name: "Vadim",
    email: "vadim@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Maischberger_-_2019-11-13-9498-2.jpg",
    hobbies: ["code", "bull", "bmw"],
  },
  {
    name: "Mariusz",
    email: "mariusz@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Jodie_Foster_C%C3%A9sars_2011_2_%28cropped%29.jpg",
    hobbies: ["code", "painting", "design"],
  },
  {
    name: "Niels",
    email: "niels@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/George_Clooney_2016.jpg/220px-George_Clooney_2016.jpg",
    hobbies: ["pot", "cocaine", "beer"],
  },
  {
    name: "Pawel",
    email: "pawel@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Maischberger_-_2019-11-13-9498-2.jpg",
    hobbies: ["code", "sleep", "cat"],
  },
  {
    name: "Marco",
    email: "marco@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Jodie_Foster_C%C3%A9sars_2011_2_%28cropped%29.jpg",
    hobbies: ["code", "n", "baby"],
  },
  {
    name: "Andreas",
    email: "andreas@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/George_Clooney_2016.jpg/220px-George_Clooney_2016.jpg",
    hobbies: ["code", "rap", "beer"],
  },
  {
    name: "Michael",
    email: "michael@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Maischberger_-_2019-11-13-9498-2.jpg",
    hobbies: ["code", "vegan", "pot"],
  },
  {
    name: "Melad",
    email: "melad@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Jodie_Foster_C%C3%A9sars_2011_2_%28cropped%29.jpg",
    hobbies: ["code", "math", "music"],
  },
  {
    name: "Kinan",
    email: "kinan@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/George_Clooney_2016.jpg/220px-George_Clooney_2016.jpg",
    hobbies: ["code", "sleep", "laugh"],
  },
  {
    name: "Victoria",
    email: "victoria@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Maischberger_-_2019-11-13-9498-2.jpg",
    hobbies: ["code", "design", "brat"],
  },
  {
    name: "Majd",
    email: "majd@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Jodie_Foster_C%C3%A9sars_2011_2_%28cropped%29.jpg",
    hobbies: ["code", "game", "done"],
  },
  {
    name: "Gaël",
    email: "gael@apollo.io",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/George_Clooney_2016.jpg/220px-George_Clooney_2016.jpg",
    hobbies: ["code", "design", "speak"],
  },
];

let bodyEl = document.querySelector("body");

bodyEl.style.margin = "0";
bodyEl.style.padding = "0";
bodyEl.style.boxSizing = "border-box";

const mar = document.querySelector(".employees");

mar.style.height = "100vh";
mar.style.color = "#fbd14b";
mar.style.fontFamily = "arial";
mar.style.fontWeight = "bold";
mar.style.backgroundColor = "#fbd14b";
mar.style.display = "flex";
mar.style.justifyContent = "space-evenly";
mar.style.alignItems = "center";

mar.style.textAlign = "center";

employees.map((employee) => {
  // create elements
  let employeeDiv = document.createElement("div");
  employeeDiv.classList.add("kinder");
  employeeDiv.style.backgroundColor = "#6a60a9";
  employeeDiv.style.width = "250px";
  employeeDiv.style.padding = "2px";
  employeeDiv.style.margin = "10px";
  // employeeDiv.style.display = "flex";
  // employeeDiv.style.flexDirection = "column";
  // employeeDiv.style.justifyContent = "center";
  // employeeDiv.style.alignItems = "center";

  // employeeDiv.style.margin = 'auto';
  let image = document.createElement("img");
  let info = document.createElement("div");
  info.classList.add("info");
  let paragraph = document.createElement("p");
  paragraph.classList.add("name");
  let link = document.createElement("a");
  link.classList.add("email");
  let lists = document.createElement("ul");
  lists.classList.add("hobbies");

  // image
  image.setAttribute("src", employee.image);
  image.style.width = "100%";
  image.style.height = "310px";

  // paragraph
  paragraph.innerText = employee.name;
  paragraph.style.fontSize = "22px";
  paragraph.style.color = "#dedcee";

  // links
  link.setAttribute("href", `mailto: ${employee.email}`);
  link.innerText = employee.email;
  link.style.color = "#fbd14b";
  link.style.textDecoration = "none";
  link.style.fontSize = "16px";

  // list
  employee.hobbies.forEach((hobbie) => {
    lists.innerHTML += `<li>${hobbie}</li>`;
    lists.style.fontSize = "14px";
    lists.style.fontWeight = "normal";
    lists.style.listStyle = "none";
    lists.style.padding = "0";
    lists.style.margin = "20px 0 35px 0";
  });

  // appendChild

  info.appendChild(paragraph);
  info.appendChild(link);
  info.appendChild(lists);
  employeeDiv.appendChild(image);
  employeeDiv.appendChild(info);
  mar.appendChild(employeeDiv);
});
