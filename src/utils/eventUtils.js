export const handleArrowClick = (menuName, activeMenus) => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
        var index = newActiveMenus.indexOf(menuName);
        if (index > -1) {
            newActiveMenus.splice(index, 1);
        }
    } else {
        newActiveMenus.push(menuName);
    }
    return newActiveMenus;
};

export const handleMenuClick = data => {
    window.location.pathname = data.url;
};