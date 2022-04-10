import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

/**
 * @see https://epicreact.dev/improve-the-performance-of-your-react-forms
 * @see https://maximorlov.com/send-a-file-with-axios-in-nodejs/
 * @description Pending Upload
 * For some reason, file input from FormEvent is not valid
 * And it make the request pending
 */
export default function FormPage() {
  const [wasSubmitted, setWasSubmitted] = useState(false)

  function handleSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fieldValues = Object.fromEntries(formData.entries())

    console.log(fieldValues)
    setWasSubmitted(true)
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return
    }

    console.log('file', e.target.files[0], e.target.files.item(0))
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      // Auto fill input element by defining defaultValues
      category: 'sci-fi',
    },
  })

  const onSubmit: SubmitHandler<{ category: string }> = ({ category }) => {}

  return (
    <>
      <pre>{JSON.stringify(wasSubmitted, null, 2)}</pre>
      <form noValidate onSubmit={handleSubmitForm}>
        <input type="email" name="email" />
        <input type="file" name="image" onChange={onFileChange} />
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div>
            <input
              type="radio"
              id="category_1"
              value="action"
              {...register('category')}
            />
            <label htmlFor="category_1">Action</label>
          </div>

          <div>
            <input
              type="radio"
              id="category_2"
              value="sci-fi"
              {...register('category')}
            />
            <label htmlFor="category_2">Sci-Fi</label>
          </div>
        </fieldset>
      </form>
    </>
  )
}
