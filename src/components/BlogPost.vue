<template>
    <article>
        <div class="blogPositioning">
            <div class="blogImage">
                <img src="@/assets/logo.png" alt="test">
            </div>
            <div class="blogInformation">
                <h2 class="blogTitle">{{blog.title}}</h2>
                <h3 class="blogSituation">{{blog.date}} | {{blog.location}} | {{blog.duration}}</h3>
                <p class="blogText" v-html=blog.description></p>
                <ul class="blogTags">
                    <li v-for="tag in blog.tags" :key="tag.name">
                        <base-tag> {{tag}} </base-tag>
                    </li>
                </ul>
            </div>
        </div>
        <div class="end"></div>   
    </article>
</template>
<script>
import BaseTag from './_base/BaseTag.vue'
export default {
  components: { BaseTag },
    
    name: "BlogPost",
    props: {
        blog: Object
    }
}
</script>
<style scoped>
    li{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        display: inline-block;
        list-style-type: none;
    }
    article{
        width: 80%;
        height: 350px;
        margin: 20px;
    }
    .blogPositioning{
        height: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .blogImage{
        width: 30%;
        height: 100%;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .blogImage img{
        max-width: 80%;
        max-height: 80%;
    }
    .blogInformation{
        width: 60%;
        height: 100%;
        padding: 20px;
        display: inline-block;
    }
    .end{
        border-bottom: 5px solid rgba(0, 255, 134, 0.1); 
        width: 50%;
        height: 10%;
        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;
    }
    .blogSituation{
        color: lightslategray;
    }
    .blogText{
        height: 50%;
        overflow-y: auto;
    }

    
</style>