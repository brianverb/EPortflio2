<template>
  <div class="home">
    <section id="intro">
      <intro />
    </section>
    <section id="blogs">
      <blog-post v-for="blog in blogs" :key="blog.id" :blog=blog />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogPost from '@/components/BlogPost.vue';
import BlogPostService from '@/services/BlogPostService.js';

import Intro from '@/components/Intro.vue';

export default {
  name: 'Home',
  data() {
    return {
      blogs: []
    }
  },
  components: {
    BlogPost, Intro
  },
  created(){
    BlogPostService.getBlogs()
      .then(response => {
        this.blogs = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
<style scoped>
  section#intro{
    width: 100%;
    height: 400px;
    background-color: rgb(0, 0, 0, 0.9);
    color: darkgreen;
    font-size: 1.3rem;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  section#blogs{
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
</style>