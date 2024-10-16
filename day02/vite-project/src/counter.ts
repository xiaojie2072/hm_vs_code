import {sayHello} from './utils/Hello'

sayHello('ts')

const arr:number[] = [1,2,3]

arr.push(4)
/** 
 * 类型“string”的参数不能赋给类型“number”的参数。
 * arr.push('5')
 */