<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="form-login">
          <div class="form-group">
            <label for="email">Email</label>
            <input class="form-control"
                   id="email"
                   autoFocus
                   type="email"
                   v-model="userReq.email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input class="form-control"
                   id="password"
                   type="password"
                   v-model="userReq.password"
            />
          </div>
          <Button
            class="btn btn-primary btn-md"
            v-on:click="signIn"
          >
            Login
          </Button>
        </div>
        <hr/>
        <span>Go to </span>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <span> or </span>
        <router-link :to="{ name: 'Signup' }">Signup</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import VueRouter from 'vue-router'

  let router = new VueRouter();

  export default {
    data() {
      return {
        userReq: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      signIn: function () {
        // this.$router.replace(    'home')
        firebase.auth().signInWithEmailAndPassword(this.userReq.email, this.userReq.password).then(
          (respone) => {
            window.localStorage.setItem('authUser', respone.user);
            this.$router.replace('/about');
          },
          (err) => {
            alert(err.message)
          }
        );
      }
    }
  }
</script>
