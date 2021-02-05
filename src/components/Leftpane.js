import React from 'react';
import { UL, LI, Item, Label, Arrow } from "../utils/stylesUtil";
import { handleArrowClick, handleMenuClick } from "../utils/eventUtils";
import { API } from '../utils/apiUtils';

/*
 *@Leftpane
 * function to populate multi-level navigation by pulling in data from an API
 */
const Leftpane = () => {
    const [activeMenus, setActiveMenus] = React.useState([]);
    const [navigationList, setNavigationList] = React.useState([]);

    React.useEffect(() => {
        getNavigationItems();
    }, []);

    const getNavigationItems = () => {
        API.getData('../../navigation.json')
            .then(result => setNavigationList(result.data));
    }

    const ListMenu = ({ depth, data, hasSubMenu, menuName, menuIndex }) => (
        <LI data-test="list_item">
            <Item depth={depth}>
                { depth == 1 ? <i className="fa fa-file-text-o"></i> : <span className="indent"></span> }
                <Label
                    className="itemLabel"
                    onClick={() => handleMenuClick(data)}>{data.title}
                </Label>
                {hasSubMenu && (
                    <Arrow
                        className="itemArrow"
                        onClick={() => {
                                let newActiveMenus = handleArrowClick(menuName, activeMenus);
                                setActiveMenus(newActiveMenus);
                            }
                        }
                        toggle={activeMenus.includes(menuName)}
                    />
                )}
            </Item>
            {hasSubMenu && (
                <SubMenu
                    depth={ depth }
                    data={ data.children }
                    toggle={ activeMenus.includes(menuName) }
                    menuIndex={ menuIndex }
                />
            )}
        </LI>
    );

    const SubMenu = ({ depth, data, toggle, menuIndex }) => {
        if (!toggle) {
            return null;
        }
        depth = depth + 1;

        return (
            <UL>
                {data.map((menu, index) => {
                    const menuName = `sidebar-submenu-${depth}-${menuIndex}-${index}`;

                    return (
                        <ListMenu
                            depth={ depth }
                            data={ menu }
                            hasSubMenu={ menu.children }
                            menuName={ menuName }
                            key={ menuName }
                            menuIndex={ index }
                        />
                    );
                })}
            </UL>
        );
    };

    return (
        <nav className="sideBarMenu" data-test="component_leftpane">
            <UL>
                {navigationList.map((menu, index) => {
                    const depth = 1;
                    const menuName = `sidebar-menu-${depth}-${index}`;

                    return (
                        <ListMenu
                            depth={depth}
                            data={menu}
                            hasSubMenu={menu.children}
                            menuName={menuName}
                            key={menuName}
                            menuIndex={index}
                        />
                    );
                })}
            </UL>
        </nav>
    );
};

export default Leftpane;