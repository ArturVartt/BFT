import "./style.css";
import "./reset.css";
import { renderCheckbox, renderListId } from "./listsRenderer";

const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);

const data = Array.from(new Array(20), (_, index) => ({
  id: index + 1,
}));

export function toggleIdInUrl(id) {
  const isIdPresent = searchParams.getAll("id").some((i) => i == id);

  if (!isIdPresent) {
    searchParams.append("id", id);
  } else {
    searchParams.delete("id", id);
  }

  window.history.replaceState(null, null, `?${searchParams.toString()}`);
  renderListId(searchParams);
}

document.addEventListener(
  "DOMContentLoaded",
  () => renderCheckbox(data, searchParams),
  renderListId(searchParams)
);
