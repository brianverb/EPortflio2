<template>
    <article>
        <div class="introImage">
            <img src="@/assets/introSelfie.png" alt="me">
        </div>
        <div class="introText">
            <h1>E-Portfolio Brian Verbanck</h1>
            <p>
                Welcome to my E-portfolio, I am Brian Verbanck, 20 year olds, located in Wanzele. Currently I'm completing my bachelor degree at Howest for computer science: software engineer.
            </p>
            <p>
                This E-portfolio contains my past expierences, strengths, contact info, and curriculum vitae.
            </p>
        </div>
    </article>
</template>
<script>
export default {
    name: "Intro"
}
</script>
<style scoped>
h1{
    color: black;
    font-size: 1.6rem;
    font-weight: 600;
}
article{
    width: 80%;
    height: 80%;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.introImage{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.introImage img{
    max-height: 100%;
    width: 100%;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;

}
.introText{
    display: inline-block;
    width: 80%;
    height: 100%;
}
</style>