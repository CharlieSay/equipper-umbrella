import { useState, useEffect } from 'react'

interface InfuencerForm {
  influencerName: string
  equipmentDetails: string
  evidenceArray: {
    name: string
    value: string
  }[]
}

const SubmitInfuencerForm = (props: InfuencerForm): boolean => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(
    () => {
      setTimeout(() => {
        setIsLoading(false)
        console.log(JSON.stringify(props))
      }, 1000)
    },
    // if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  )

  return isLoading
}

export default SubmitInfuencerForm
