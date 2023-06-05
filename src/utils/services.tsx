export const fetchHighlight = async (setHighlights: Function) => {
  try {
    const result = await fetch("https://web-dev.dev.kimo.ai/v1/highlights");
    const json = await result.json();
    setHighlights(json);
  } catch (err) {
    console.error("Error while fetching highlights ", err);
  }
};

export const fetchCategories = async (setCategories: Function) => {
  try {
    const result = await fetch("https://web-dev.dev.kimo.ai/v1/categories");
    const json = await result.json();
    setCategories(json);
  } catch (err) {
    console.error("Error while fetching highlights ", err);
  }
};

export const fetchHighlightData = async (
  setHighlightData: Function,
  id: string
) => {
  try {
    const result = await fetch(
      "https://web-dev.dev.kimo.ai/v1/activities/" + id
    );
    const json = await result.json();
    setHighlightData(json);
  } catch (err) {
    console.error("error while fetching highlight details ", err);
  }
};
