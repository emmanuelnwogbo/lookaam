import Vuex from "vuex";
import axios from "axios";

const base_url = "https://lookaam.herokuapp.com/";

const createStore = () => {
  return new Vuex.Store({
    state: {
      properties: [],
      property: {},
      propertyPhotos: [],
      propertySearch: []
    },
    mutations: {
      setProperties(state, data) {
        state.properties = data;
      },
      setPropertySearch(state, data) {
        state.propertySearch = data;
      },
      setProperty(state, data) {
        state.property = data;
      },
      setPropertyPhotos(state, data) {
        state.propertyPhotos = data;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return fetch(`${base_url}place?page=1&limit=15&search=lagos`)
          .then(response => response.json())
          .then(data => {
            const properties = data;
            vuexContext.commit("setProperties", properties);
            vuexContext.commit("setPropertySearch", properties);
          });
      },
      search(vuexContext, search_terms) {
        console.log(search_terms);
        return fetch(`${base_url}place?page=1&limit=15&search=lagos`)
          .then(response => response.json())
          .then(data => {
            const properties = data;
            vuexContext.commit("setPropertySearch", properties);
          });
      },
      get_property_photos(vuexContext, id) {
        return axios
          .get(`${base_url}place/${id}/photo`)
          .then(res => {
            console.log(res.data);
            const photos = res.data;
            vuexContext.commit("setPropertyPhotos", photos);
            return res.data;
          })
          .catch(error => error);
      },
      get_current_property(vuexContext, id) {
        return axios
          .get(`${base_url}place/${id}`)
          .then(res => {
            const property = res.data;
            vuexContext.commit("setProperty", property);
          })
          .catch(error => error);
      }
    },
    getters: {
      properties(state) {
        return state.properties;
      },
      property(state) {
        return state.property;
      },
      propertyPhotos(state) {
        return state.propertyPhotos;
      },
      searchedProperties(state) {
        return state.propertySearch;
      }
    }
  });
};

export default createStore;
