import { TopicsList } from "../pages/Topics/Topics";

const DateFormatPattern = "DD/MM/YYYY";

//Controls
export function goToNextPage(url) {
  let navigationList = [];

  TopicsList.forEach((item) => {
    navigationList.push(item.navigateTo);
  });

  let index = navigationList.findIndex((item) => item === url);

  if (navigationList[index + 1] !== undefined) {
    let stringNav = navigationList[index + 1].replace(".", "");
    let total = "/topics/" + stringNav;

    return total;
  } else {
    return "/topics";
  }
}

export function goToPreviousPage(url) {
  let navigationList = [];

  TopicsList.forEach((item) => {
    navigationList.push(item.navigateTo);
  });

  let index = navigationList.findIndex((item) => item === url);

  if (navigationList[index - 1] !== undefined) {
    let stringNav = navigationList[index - 1].replace(".", "");
    let total = "/topics/" + stringNav;

    return total;
  } else {
    return "/topics";
  }
}

//Date
export function formatDate(date = new Date(), Format = DateFormatPattern) {
  let newDate = undefined;

  import("moment").then((module) => {
    newDate = module.default(date).format(Format);
  });

  return newDate;
}

//String
export function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

//Array
export function sortArrayByItemName(array, order = "ascending") {
  let sortedArray = array.sort((a, b) => {
    if (order === "ascending") {
      return a.name.localeCompare(b.name); //ascendent
    } else {
      return b.name.localeCompare(a.name); //descendent
    }
  });

  return sortedArray;
}
