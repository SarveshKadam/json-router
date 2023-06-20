export function capitalCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function findBreadCrumbs(pathname: string) {
    let currentAddress = "";
    return pathname
        .split("/")
        .filter((crumb) => crumb !== "")
        .map((crumb) => {
            currentAddress += `/${crumb}`;
            return {
                name: crumb,
                path: currentAddress,
            };
        });
}