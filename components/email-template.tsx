type Props = {
  name: string
  email: string
  message: string
}

export const EmailTemplate = ({ name, email, message }: Props) => (
  <div>
    <h1>お名前：{name}</h1>
    <p>メールアドレス：{email}</p>
    <p>お問い合わせ内容：{message}</p>
  </div>
)
