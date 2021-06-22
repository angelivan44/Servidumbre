import { apiFetch, BASE_URL } from "./apiFetch";


export const generatePlanos = (excelPath , dxfPath , csvPath , dirPath) =>
  apiFetch(`${BASE_URL}/planos`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({excelPath, dxfPath, csvPath , dirPath})
});

export const generarAutorizacion = (excelPath , autoPath, dirPath  ) =>
  apiFetch(`${BASE_URL}/auto`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({excelPath, autoPath, dirPath })
});


export const generarConntrato = (excelPath , contratoPath, dirPath ) =>
  apiFetch(`${BASE_URL}/contrato`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({excelPath, contratoPath , dirPath})
});

export const generarValorizacion = (excelPath , valorizacionPath, dirPath ) =>
  apiFetch(`${BASE_URL}/valorizacion`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({excelPath, valorizacionPath , dirPath})
});


export const generarRecibo = (excelPath , reciboPath, dirPath ) =>
  apiFetch(`${BASE_URL}/recibo`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({excelPath, reciboPath , dirPath})
});