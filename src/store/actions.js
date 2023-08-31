export const SONRAKI_FILM = "Siradaki filme gec";
export const ONCEKI_FILM = "ONCEKI filme gec";
export const FAV_EKLE = "Fvoori film ekle";
export const FAV_SIL = "Fvoori film CIAKAR";

export const silFav = (id) => {
  return {
    type: FAV_SIL,
    payload: id,
  };
};
