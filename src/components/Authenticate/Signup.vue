<template>
  <div class="container">
    <form class="form-horizontal">
      <h2>Registration Form</h2>
      <div class="form-group">
        <label htmlFor="firstName" class="col-sm-3 control-label">Full Name</label>
        <div class="col-sm-9">
          <input type="text" id="firstName" placeholder="Full Name" class="form-control"
                 autoFocus/>
          <span class="help-block">Last Name, First Name, eg.: Smith, Harry</span>
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="email" class="col-sm-3 control-label">Email</label>
        <div class="col-sm-9">
          <input type="email" id="email" placeholder="Email" class="form-control"/>
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="password" class="col-sm-3 control-label">Password</label>
        <div class="col-sm-9">
          <input type="password" id="password" placeholder="Password" class="form-control"/>
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="birthDate" class="col-sm-3 control-label">Date of Birth</label>
        <div class="col-sm-9">
          <input type="date" id="birthDate" class="form-control"/>
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="country" class="col-sm-3 control-label">Country</label>
        <div class="col-sm-9">
          <select id="country" class="form-control">
            <option>Afghanistan</option>
            <option>Bahamas</option>
            <option>Cambodia</option>
            <option>Denmark</option>
            <option>Ecuador</option>
            <option>Fiji</option>
            <option>Gabon</option>
            <option>Haiti</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-3">Gender</label>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-4">
              <label class="radio-inline">
                <input type="radio" id="femaleRadio" defaultValue="Female"/>Female
              </label>
            </div>
            <div class="col-sm-4">
              <label class="radio-inline">
                <input type="radio" id="maleRadio" defaultValue="Male"/>Male
              </label>
            </div>
            <div class="col-sm-4">
              <label class="radio-inline">
                <input type="radio" id="uncknownRadio" defaultValue="Unknown"/>Unknown
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-3">Meal Preference</label>
        <div class="col-sm-9">
          <div class="checkbox">
            <label>
              <input type="checkbox" id="calorieCheckbox" defaultValue="Low calorie"/>Low
              calorie
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" id="saltCheckbox" defaultValue="Low salt"/>Low salt
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
          <div class="checkbox">
            <label>
              <input type="checkbox"/>I accept <a href="">terms</a>
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
          <button type="submit" class="btn btn-primary btn-block">Register</button>
        </div>
      </div>
      <div class="col-sm-9 col-sm-offset-3">
        <hr/>
        <span>Go to </span>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <span> or </span>
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </div>
    </form>
  </div>
</template>
