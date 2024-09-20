import { toggleIdInUrl } from "./main";

const list = document.querySelector(".list");

function renderListId(searchParams) {
  const allUrlId = searchParams.getAll("id");

  const listId = document.querySelector(".list__id");
  const listIdUl = document.createElement("ul");
  listId.innerHTML = "";

  allUrlId.forEach((id) => {
    listIdUl.classList.add("list__id-ul");

    const listIdLi = document.createElement("li");
    listIdLi.classList.add("list__id-li");
    listIdLi.textContent = id;

    listIdUl.appendChild(listIdLi);
    listId.appendChild(listIdUl);
  });
}

function renderCheckbox(data, searchParams) {
  const allUrlId = searchParams.getAll("id");

  data.forEach((item) => {
    const checkboxWrapper = document.createElement("div");
    checkboxWrapper.classList.add("checkbox__wrapper");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.id = item.id;
    checkbox.checked = allUrlId.includes(String(item.id));

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = item.id;

    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(label);

    list.appendChild(checkboxWrapper);
  });
}

list.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    const checkbox = e.target;
    toggleIdInUrl(checkbox.id);
  }
});

export { renderListId, renderCheckbox };
