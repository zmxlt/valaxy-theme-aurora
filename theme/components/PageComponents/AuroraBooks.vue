<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFrontmatter, useThemeConfig } from 'valaxy'
import { getMenuQuote } from '../../utils'
import type { BookType } from '../../types'
import { useFetchData } from '../../composables'

const themeConfig = useThemeConfig()
const frontmatter = useFrontmatter()
const iconRecIndex = themeConfig.value.iconStyle.bookRecIndex
const pathName = useRoute().name
const quote = getMenuQuote(themeConfig.value.menu, pathName)
const data = typeof (frontmatter.value.books) === 'string' ? useFetchData<BookType>(frontmatter.value.books) : frontmatter.value.books as BookType[]
</script>

<template>
  <div class="books">
    <AuroraQuote :quote="quote" />
    <ul class="book-list">
      <li v-for="(b, i) in data" :key="i" class="book">
        <div class="book-info">
          <div class="book-image-container">
            <div v-if="b.cover" class="book-image">
              <img v-if="b.cover" :src="b.cover" :alt="b.name">
            </div>

            <a v-if="b.source" :href="b.source" target="_blank" class="book-source-url" />
          </div>
          <div class="book-meta">
            <h3 v-if="b.name">
              {{ b.name }}
            </h3>
            <p v-if="b.author">
              {{ `作者：${b.author}` }}
            </p>
            <p v-if="b.publicationTime">
              {{ `出版时间：${b.publicationTime}` }}
            </p>
            <div v-if="b.recommendIndex" class="rec-index">
              <span>推荐指数：</span>
              <i v-for="j in b.recommendIndex" :key="j" class="icon-rec-index" :class="iconRecIndex" />
            </div>
          </div>
        </div>

        <div class="book-desc">
          <p> {{ b.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
