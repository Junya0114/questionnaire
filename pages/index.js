
import Container from '@material-ui/core/Container';
import Input from "@material-ui/core/Input"

import { useForm, Controller } from "react-hook-form"

export default function Home() {
  const { register, handleSubmit, formState: { errors }, control } = useForm()

  const onSubmit = (data) => {
    console.log(data.birth)
  }
  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">名前を入力してください（匿名可）。</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
            />
          </div>

          <div>
            <label htmlFor="birth">生年月日を入力して（例：19900101）ください。</label>
            <Controller
              name="birth"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({ field: { value, onChange } }) => <Input value={value} onChange={onChange} />}
            />

            {
              errors.birth && errors.birth.type === "required" ?
                <span>このフィールドは回答必須です。</span> : null
            }
            {
              errors.birth && errors.birth.type === "pattern" ?
                <span>整数8桁で入力してください。</span> : null
            }
          </div>

          <div>
            <span>Q3. 現在、プログラミングを学習していますか？</span>
            <input
              id="isLearning1"{...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="isLearning1">はい</label>

            <input
              id="isLearning2"{...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="isLearning2">いいえ</label>

            <input
              id="isLearning3"{...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="isLearning2">わからない</label>

            {
              errors.islearning && errors.islearning.type === "required" ?
                <span>このフィールドは回答必須です。</span> : null
            }

          </div>

          <div>
            <span>Q4. これまでに、プログラミングを学習したことがありますか？</span>
            <input
              id="wasLearning1"{...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="waslearning">はい</label>

            <input
              id="wasLearning2"{...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="waslearning">いいえ</label>

            <input
              id="wasLearning3"{...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="waslearning">わからない</label>

            {
              errors.waslearning && errors.waslearning.type === "required" ?
                <span>このフィールドは回答必須です。</span> : null
            }

          </div>



          <input type="submit" value="アンケートを提出する" />
        </form>
      </Container>
    </>
  )

}
