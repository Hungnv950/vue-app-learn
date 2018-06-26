<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <form class="form-login">
          <div class="form-group" controlId="email" bsSize="large">
            <label for="email">Email</label>
            <input class="form-control"
                   id="email"
                   autoFocus
                   type="email"
            />
          </div>
          <div class="form-group" controlId="password" bsSize="large">
            <label for="password">Password</label>
            <input class="form-control"
                   id="password"
                   type="password"
            />
          </div>
          <Button
            block
            bsSize="large"
            type="submit"
            class="btn btn-primary btn-md">
            Login
          </Button>
        </form>
        <hr/>
        <span>Go to </span>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <span> or </span>
        <router-link :to="{ name: 'Signup' }">Signup</router-link>
      </div>
    </div>
  </div>
</template>
