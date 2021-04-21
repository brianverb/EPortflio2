<template>
    <div class="tag">
        <slot></slot>
    </div>
</template>
    
<script>
export default {
  name: 'Tag',
  props: {
    tagName: String,
  }
}
</script>
    
<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  color: greenyellow;
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid darkgreen;
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(0, 0, 0, 0.9);
  margin-right: 5px;
}
</style>
