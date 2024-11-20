export default function Eslint() {
  const setting = `
  8.57.1 2024-10-05 지원종료 node.js ^12.22.0, ^14.17.0 >= 16.0.0 이상 지원
  npm install --save-dev eslint@version
  pnpm add -D eslint
  eslintrc(js, json)
  npm eslint --init(eslintrc 파일 추가)

  9.x.x 현재 진행중 node.js ^18.18.0, ^20.9.0 또는 >=21.1.0 이상 지원
  pnpm create @eslint/config@latest
  npm init @eslint/conifg@latest

  //eslint와 prettier의 규칙 충돌 방지
  npm install --save-dev eslint-config-prettier
  pnpm add --save-dev eslint-config-prettier
  `;
  const prettier = `
  pnpm add --save-dev preiiter
  pnpm install -D prettier eslint-plugin-prettier
  `;
  return (
    <>
      <section>
        <h1>esLint</h1>
        <p className="heading-con">
          ecma script 문법 검사기 타인과 협업할때 에러와 코딩 스타일 통일성을
          위해서 사용함
        </p>
        <dl>
          <dt>1. 설치</dt>
          <dd>
            <pre>{setting}</pre>
          </dd>
        </dl>
      </section>
      <section>
        <h1>prettier</h1>
        <dl>
          <dt>1. 설치</dt>
          <dd>
            <pre>{prettier}</pre>
          </dd>
        </dl>
      </section>
    </>
  );
}
