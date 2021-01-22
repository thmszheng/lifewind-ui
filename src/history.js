import { createBrowserHistory } from "history";

let history;

if (!history) {
  history = createBrowserHistory();
}

export default history;
