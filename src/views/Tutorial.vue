<template>
    <div class="container">
        <header>
            <h1>Tutorial fake json-server</h1>
            <p>
                This tutorial will give a brief explanation abouw how to set up json-server online, and use it in your Vue project.
                A fake json-server is used to make a front-end with a fake back-end. This is usefull when developing a front-end of which the back-end is still in progress. This tutorial assumes you know the basics of Vue and Git.
            </p>
        </header>
        <main>
            <article>
                <h2>Set up:</h2>
                <p>Before starting we need a couple of things:</p>
                <ol>
                    <li>An editor to work in, I recommend Visual Studio Code: <a href="https://code.visualstudio.com/download">Download Visual studio code</a> </li>
                    <li>A project which u want to make. Here we will use a project about cheeses.</li>
                    <li>A GitHub account: <a href="https://github.com/">GitHub</a> </li>
                    <li>Have Vue and Node installed: <a href="https://cli.vuejs.org/guide/installation.html">Vue CLI installation</a> </li>
                </ol>
            </article>
            <article>
                <h2>Let's begin</h2>
                <p>First we will make a Vue project using the command: <b>vue create PROJECT_NAME</b>, you can just choose the default values in the next steps.</p>
                
                <h3>db.json</h3>
                <p>Now to start on our fake json-server, we first want to install json-server. For this we run the command: <b> npm install json-server -g</b>.</p>
                <p>We now have json-server installed/. Let's start on making the file we will use as our database. make a file in the root of the project called: "db.json". We can fill it with the following text: </p>
                <p>{"cheeses": [{"id": 0, "name": "Swiss cheese"},{"id": 1, "name": "Cheddar"},{"id": 2, "name": "Emmentaller"} ]</p>
                <p>This is a rather standard json excisting of an array of cheese objects.</p>
            </article>

            <article>
                <h2>Starting to use it</h2>
                <p>
                    To use the json.server we'll need to fetch it. Here we will use axios and install it using the following command: <b>npm install axios</b>
                </p>
                <p>Once it is installed you can import it in your script and use it in your code. To keep this tutorial short and clear I won't be explaining how to use Axios, but here is a usefull link with everything you need: https://github.com/axios/axios</p>
                <p>
                    Here we do a quick get request to get all of our cheeses: <b> let result = await axios.get(`http://localhost:3000/cheeses`)</b>. You can use this result to build up html or whatever you want.
                </p>
                <p>Now we have the db.json file up and running, but wait. If we want to deploy this app we can't use it since it's just a file and doesn't get hosted with the website. For this reason we might want to put the fake json-server online. Which is easier than you might guess these days.</p>
                <p>Let's follow these simple steps:
                    <ol>
                        <li>Get your code on <a href="https://github.com/">GitHub</a> and set it public</li>
                        <li>Take a look at this site: <a href="https://my-json-server.typicode.com/">My-json-server</a></li>
                        <li>Visit your json-server at: https://my-json-server.typicode.com/[USERNAME]/[REPO]</li>
                        <li>Adjust your code to fetch the data at the above link instead of localhost</li>
                    </ol>
                </p>
            </article>
            <article>
                <h2>Rounding up</h2>
                <p>What have we done:
                    <ol>
                        <li>Made a Vue project</li>
                        <li>Installed and configured a json-server</li>
                        <li>Tested out the server with Axios</li>
                        <li>Placed the json-server online</li>
                    </ol>
                </p>
            </article>
        </main>
        <footer>
            <h2>Usefull links: </h2>
            <ul>
                <li><a href="https://code.visualstudio.com/download">Visual studio code download</a></li>
                <li><a href="https://github.com/">GitHub</a></li>
                <li><a href="https://cli.vuejs.org/guide/installation.html">Vue CLI</a></li>
                <li><a href="https://cli.vuejs.org/guide/creating-a-project.html#vue-create">Create a Vue project</a></li>
                <li><a href="https://developer.school/how-to-use-vue-js-json-server-and-axios/">Use json-server and Axios</a></li>
                <li><a href="https://github.com/axios/axios">Use and install Axios</a></li>
            </ul>
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>   
<style scoped>
.container{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3rem;
    text-align: left;
}
main{
    margin-bottom: 50px;
}
footer{
    margin-top: 50px;
}
article{
    margin-top: 50px;
}
h1{
    font-size: 2rem;
    color: darkgreen;
}
h2{
    font-size: 1.6rem;
    color: darkgreen;
}
h3{
    font-size: 1.2rem;
    color: darkgreen;
}
</style>