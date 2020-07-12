import { NavigationActions } from "react-navigation";

let navigation;

export const setNavigation = (nav) => {
    navigation = nav
}

export const navigate = ( routeName, params ) => {
    navigation.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}