<script setup lang="ts">
import { formatDate, sortByDate } from 'valaxy'
import type { Post } from 'valaxy'
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  posts: Post[]
  title?: string
  icon?: string
  back?: Function
}>()
const years = ref<number[]>([])
const postListByYear = ref<Record<string, Post[]>>({})

watch(() => props.posts, () => {
  postListByYear.value = {}
  years.value = []
  props.posts.forEach((post) => {
    if (post.hide && post.hide !== 'index')
      return
    if (post.date) {
      const year = parseInt(formatDate(post.date, 'YYYY'))
      if (postListByYear.value[year]) {
        postListByYear.value[year].push(post)
      }
      else {
        years.value.push(year)
        postListByYear.value[year] = [post]
      }
    }
  })
}, { immediate: true })

const isDesc = ref(true)
const sortedYears = computed(() => {
  const y = years.value
  const arr = y.sort((a, b) => b - a)
  return isDesc.value ? arr : arr.reverse()
})

function OnBack() {
  if (typeof props.back === 'function')
    props.back()
}
</script>

<template>
  <div class="post-collapse-container">
    <header v-if="title" class="collapse-header" @click="OnBack">
      <h1>
        <div v-if="icon" class="icon" :class="icon" />
        <span>{{ title === "Uncategorized" ? '未分类' : title }}</span>
      </h1>
    </header>
    <ul>
      <li v-for="year in sortedYears" :key="year" class="collapse-collection">
        <div class="collection-title">
          <h2 :id="`#archive-year-${year}`" class="archive-year">
            {{ year }}
          </h2>
        </div>
        <article v-for="post, j in sortByDate(postListByYear[year], isDesc)" :key="j" class="post-item">
          <header class="post-header">
            <div class="post-meta">
              <time v-if="post.date">{{ formatDate(post.date, 'MM-DD') }}</time>
            </div>
            <h2 class="post-title">
              <router-link :to="post.path || ''" class="post-title-link">
                {{ post.title }}
              </router-link>
            </h2>
          </header>
        </article>
      </li>
    </ul>
  </div>
</template>
