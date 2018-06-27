<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>HungNV B: Vue.js 2 & Firebase single page application</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Add Book</h3>
      </div>
      <div class="panel-body">
        <form action="" class="form-inline" v-on:submit.prevent="addBook">
          <div class="form-group">
            <label for="bookTitle">Title:</label>
            <input type="text" class="form-control" id="bookTitle" v-model="newBook.title">
          </div>
          <div class="form-group">
            <label for="bookAuthor">Author:</label>
            <input type="text" class="form-control" id="bookAuthor" v-model="newBook.author">
          </div>
          <div class="form-group">
            <label for="bookUrl">Url:</label>
            <input type="text" class="form-control" id="bookUrl" v-model="newBook.url">
          </div>
          <input type="submit" class="btn btn-info" value="Add Book"/>
        </form>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Books Lists</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>url</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="book in books">
            <td>{{book.title}}</td>
            <td>{{book.author}}</td>
            <td>
              <a v-bind:href="book.url" target="_blank">{{book.url}}</a>
            </td>
            <td>
              <button class="btn btn-danger glyphicon glyphicon-trash" v-on:click="removeBook(book)"></button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from '../configFirebase'

  let db = firebase.database();

  let bookRef = db.ref('books');

  export default {
    name: 'App',
    firebase: {
      books: bookRef
    },
    data() {
      return {
        newBook: {
          title: '',
          author: '',
          url: ''
        }
      }
    },
    methods: {
      addBook() {
        bookRef.push(this.newBook);
        this.newBook.title = '';
        this.newBook.author = '';
        this.newBook.url = '';
      },
      removeBook: function (book) {
        bookRef.child(book['.key']).remove();
        console.log(book);
      }
    }
  }
</script>
