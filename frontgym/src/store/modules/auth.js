import axios from "axios";

const state = {
    usuario: null, 
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
  usuarioLogueado: (state) => state.usuario,
};

const actions = {
  async Register({dispatch}, form) {
    await axios.post('register', form)
    let UserForm = new FormData()
    UserForm.append('username', form.username)
    UserForm.append('password', form.password)
    await dispatch('LogIn', UserForm)
  },

  loginExitoso({ commit }, usuario) {
    commit('setUsuario', usuario);
  },

  async LogIn({commit}, user) {
    await axios.post("login", user);
    await commit("setUser", user.get("username"));
  },

  async CreatePost({ dispatch }, post) {
    await axios.post("post", post);
    return await dispatch("GetPosts");
  },

  async GetPosts({ commit }) {
    let response = await axios.get("posts");
    commit("setPosts", response.data);
  },
  
  logout({ commit }) {
    commit('setUsuario', null);
  },

//  async LogOut({ commit }) {
//    let user = null;
//console.log("Entra en logout");
//    commit("logout", user);
//  },
};

const mutations = {
  setUserData(state, userData) {
    state.userData = userData;
  },
  setUsuario(state, usuario) {
    state.usuario = usuario;
  },
//  setUser(state, username) {
//    state.user = username;
//  },

  setPosts(state, posts) {
    state.posts = posts;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
