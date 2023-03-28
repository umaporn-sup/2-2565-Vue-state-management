const getQuestion = async (questId) => {
  try {
    // const url = 'http://localhost:5000/questions'
    const url = `${import.meta.env.VITE_BASE_URL}/questions`
    console.log(url)
    const res = await fetch(url)
    if (res.ok) {
      const question = await res.json()
      questions.push(question)
      return questions
    } else {
      throw new Error('There is something wrong, cannot get your data!')
    }
  } catch (error) {
    console.log(error)
  }
}

export { getQuestion }
