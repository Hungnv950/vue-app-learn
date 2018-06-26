<script>
  import Navigation from "@/components/ui/Navigation"
  import Footer from "@/components/ui/Footer"

  export default {
    components: {
      Navigation,
      Footer
    }
  }
</script>

<template>
  <div>
    <navigation/>

    <div class="container">
      <slot/>
    </div>

    <footer/>
  </div>
</template>
