export const GetCharacterNameStartWith = (name) => {
  if (name && typeof name === "string" && name.length < 101)
    return "nameStartsWith=" + name + "&";
  return "";
};

export const GetLimitCharactersNumber = (limit) => {
  if (limit && typeof limit === "number" && limit > 0 && limit < 101)
    return "limit=" + limit + "&";
  return "";
};

export const getCharacterId = (id) => {
  if (id && typeof id === "string" && id.length < 30)
    return "characters=" + id + "&";
  return "";
};
