export function favoriteReducer(state, action) {
    if (typeof state == "undefined") {
        return [];
    }

    switch (action.type) {
        case "ADD":
            return [...state, action.product.name];

        case "REMOVE":
            return state.filter(item => item != action.product);

        default:
            return state;
    }
}