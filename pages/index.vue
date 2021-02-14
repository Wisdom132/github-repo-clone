<template>
  <div>
    <Tabs />
    <main class="container">
      <div class="main-content">
        <Bio />
        <Repos />
      </div>
    </main>
  </div>
</template>

<script>
import Tabs from '@/components/tabs'
import Bio from '@/components/bio'
import Repos from '@/components/repos'
export default {
  components: { Tabs, Bio, Repos },
}
</script>

