import { createStore } from "redux";


const initialState = {
    name: "",
    category: "",
    authorsFirst: "",
    authorsLast: "",
    ingredients: [],
    instructions: [],
    recipes: []

};

export const UPD_NAME = "UPD_NAME";
export const UPD_CATEGORY = "UPD_CATEGORY";
export const CHANGE_FIRSTNAME = "CHANGE_FIRSTNAME";
export const CHANGE_LASTNAME = "CHANGE_LASTNAME";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const ADD_RECIPE = 'ADD_RECIPE';


function reducer(state = initialState, action) {
    console.log(action)
    switch(action.type){
        case UPD_NAME:
            return {
                ...state, 
                name: action.payload
            };
        case UPD_CATEGORY:
            return {
                ...state, 
                category: action.payload
            };
        case CHANGE_FIRSTNAME:
            return {
                ...state,
                authorsFirst: action.payload
            }
        case CHANGE_LASTNAME:
            return {
                ...state,
                authorsLast: action.payload
            } 
        case ADD_INGREDIENT:
                const newIngredients = [...state.ingredients, action.payload];
                return { 
                    ...state, 
                    ingredients: newIngredients 
                } 
         case ADD_INSTRUCTION:
             const newInstructions = [...state.instructions, action.payload]
             return {
                 ...state, 
                 instructions: newInstructions
             } 
             case ADD_RECIPE:
                 const {
                     name,
                     category,
                     authorsFirst,
                     authorsLast,
                     ingredients,
                     instructions
                 } = state;
                 const recipe = {
                     name,
                     category,
                     authorsFirst,
                     authorsLast,
                     ingredients,
                     instructions
                 }
                 const newRecipe = [...state.recipes, recipe]

                 return {
                     ...state,
                     recipes: newRecipe
                 }    
        default: 
            return state
    }
    
};

export default createStore(reducer);
