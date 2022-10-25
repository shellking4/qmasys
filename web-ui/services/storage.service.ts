export enum StorageType {
    SESSION = "session",
    COOKIE = "cookie",
    LOCAL = "local"
}

export class StorageService {

    store(key: string, value: any) {
        let jsonValue = JSON.stringify(value);
        sessionStorage.setItem(key, jsonValue)
        return value;
    }

    getPreviousPath(): string {
        let previousPath = sessionStorage.getItem("previousPath")!
        return previousPath
    }


}

export let storageService = new StorageService();
