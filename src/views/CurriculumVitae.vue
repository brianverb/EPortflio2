<template>
<div>
  <vue-pdf src="../files/Cv_ICT.pdf"></vue-pdf>
    <link rel="stylesheet" href="@/files/Cv_ICT.pdf" />
</div>
  
</template> 
<script>
import vuePdf from 'vue-pdf'

export default {
    
name:"CurriculumVitae",
components:{
    vuePdf
}
}
</script>