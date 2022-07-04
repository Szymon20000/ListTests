import { SingleDataType } from "./DataType";

const dataBase = Array(1000).fill(null).map((_, ind) => {
  return {
    id: ind.toString(),
    author: "Szymon" + ind.toString(),
    msg: "sdsdfsdfsdfgg" + ind.toString(),
    height: Math.floor(Math.random() * 40) + 10,
    type: Math.round(Math.random()) == 1 ? 'right' : 'left',
  } as any as SingleDataType;
});

export const DATA: Array<SingleDataType> = [
  {
    author: "Szymon",
    msg: "sdfsfsdfsdfsdfsdf",
    height: 23,
    id: '-1',
    type: 'left',
  },
  ...dataBase,
];