import { basePath, apiVersion } from "./config";

export function getBeers(page) {
    const url = `${basePath}/${apiVersion}/beers?page=${page}&per_page=12`;
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch(url, params)
        .then(resp => {
            return resp.json();
        }).then(result => {
            return result;
        }).catch(err => {
            return err.message;
        });
}

export function getBeers4() {
    const url = `${basePath}/${apiVersion}/beers?&per_page=4`;
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch(url, params)
        .then(resp => {
            return resp.json();
        }).then(result => {
            return result;
        }).catch(err => {
            return err.message;
        });
}