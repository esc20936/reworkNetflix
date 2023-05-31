import { createSlice } from "@reduxjs/toolkit";

export const HeroSlice = createSlice({
    name: "Hero",
    initialState: {
        poster: "",
        title: "",
        directors: [],
        actors: [],
        tags: [],
        description: "",
        rating: 0,

    },
    reducers: {
        setPoster: (state, action) => {
            state.poster = action.payload;
        }
        ,
        setTitle: (state, action) => {
            state.title = action.payload;
        }
        ,
        setDirectors: (state, action) => {
            state.directors = action.payload;
        }
        ,
        setActors: (state, action) => {
            state.actors = action.payload;
        }
        ,
        setTags: (state, action) => {
            state.tags = action.payload;
        }
        ,
        setDescription: (state, action) => {
            state.description = action.payload;
        }
        ,
        setRating: (state, action) => {
            state.rating = action.payload;
        }
        ,

        setHeroData: (state, action) => {
            state.poster = action.payload.poster;
            state.title = action.payload.title;
            state.directors = action.payload.directors;
            state.actors = action.payload.actors;
            state.tags = action.payload.tags;
            state.description = action.payload.description;
            state.rating = action.payload.rating;
        }
        ,

    },
});

export const {
    setMaterial,
    removeMaterialById,
    pushMaterial,
    updateMaterialById,
} = HeroSlice.actions;