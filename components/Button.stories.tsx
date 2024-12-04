import Button from "./Button";

export default {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  //👇 "Data"로 끝나는 export들은 스토리가 아닙니다.
  excludeStories: /.*Data$/,
  args: {},
};

export const Default = {
  args: {
    intent: 'default',
    size: 'l',
    children: '버튼',
    type: '',
    customClass: '',
  },
};