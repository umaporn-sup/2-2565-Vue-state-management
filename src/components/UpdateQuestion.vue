<script setup>
import { ref, onMounted } from 'vue'
import { useQuests } from '../stores/questions.js'
const myQuests = useQuests()
const addNewQuestion = () => {
  myQuests.addQuestion(newQuestionText.value)
  newQuestionText.value = ''
}
const newQuestionText = ref('')
onMounted(async () => {
  await myQuests.fetchQuestions()
})
</script>

<template>
  <div class="w-full">
    <h1 class="text-xl font-semibold">My Questions States</h1>
    <ul>
      <li v-for="quest in myQuests.questions" :key="quest.id">
        {{ quest.id }}. {{ quest.text }}
      </li>
    </ul>
    <div class="space-x-3">
      <input
        v-model="newQuestionText"
        type="text"
        class="border-gray-200 border p-1"
      />
      <button
        @click="addNewQuestion"
        class="bg-purple-800 text-white p-1 rounded-lg"
      >
        Add New Question
      </button>
    </div>
  </div>
</template>

<style scoped></style>
