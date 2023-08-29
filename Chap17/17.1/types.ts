let a: string | number = 'hello'
a = 123

let arr: string[] = []
arr.push('hello')

interface Inter {
    hello: string
    world?: number // 있어도 그만 없어도 그만인 속성
} // 객체를 인터페이스로 타이핑할 수 있음
const b: Inter = { hello: 'interface' }

type Type = {
    hello: string
    func?: (param?: boolean) => void // 함수는 이런 식으로 타이핑함
}
const c: Type = { hello: 'type' }

interface Merge {
    x: number,
}
interface Merge {
    y: number,
}
const m: Merge = { x: 1, y: 2 }

export { a } // 타입스크립트 ECMAScript 모듈을 사용