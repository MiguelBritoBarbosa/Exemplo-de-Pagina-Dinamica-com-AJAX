import carregaResultado from "./carregaResultado.js";
import { request } from "./request.js";
export default async function carregaPagina(el) {
    const href = el.getAttribute("href");

    const objConfig = {
        method: "GET",
        url: href,
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch (e) {
        console.log(e);
    }
}
