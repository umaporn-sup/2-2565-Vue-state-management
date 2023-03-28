import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { getQuestions } from '../composable/getQuestions.js'

export const useQuests = defineStore('quests', () => {
  const questions = ref([])
  const fetchQuestions = async () => {
    questions.value = await getQuestions()
    return questions.value
  }
  const getAllQuestions = () => {
    return questions.value
  }
  const resetQuestions = () => {
    questions.value = []
  }
  const addQuestion = (newQuestionText) => {
    questions.value.push({
      id: questions.value[questions.value.length - 1].id + 1,
      text: newQuestionText
    })
  }
  return {
    questions,
    fetchQuestions,
    getAllQuestions,
    addQuestion,
    resetQuestions
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuests, import.meta.hot))
}
