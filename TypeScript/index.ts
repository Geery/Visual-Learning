interface NumberArray {
    [index: number]: number
}
const interfaceArr: NumberArray = [1]
const arr: Array<number> = [1, 2, 3]
const objectArray: Array<{ name: string, ag?: number }> = [{ name: 'jerry' }]
const directArr: number[] = [1]





const calAdd: (x: number, y: number) => number = (x: number, y: number): number => x + y
calAdd(1, 2)
interface AddFn {
    (x: number, y: number): number
}
const iCalAdd: AddFn = (x: number, y: number = 2, ...item: any[]): number => x + y





interface Person {
    readonly id: number,
    name: string,
    age?: number,
    [propName: string]: any
}
let jerry: Person = {
    id: 1,
    name: "John"
}


// 类(Class)：万事万物都有各自的特点，抽离出来，叫类 ， 包含它的属性和方法
// 对象（Object）：类的实例，通过 new 生成 面向对象（OOP）的三大特性：封装、继承、多态
// 封装（Encapsulation）： 封装操作方法         将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
// 继承（Inheritance）： 继承父类的家产            子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
// 多态（Polymorphism）：方法的多样性                 由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
// 存取器（getter & setter）：属性的操作器             用以改变属性的读取和赋值行为
// 修饰符（Modifiers）：限制key的可访问性         修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表-示公有属性或方法
// 抽象类（Abstract Class）： 定义一个公共模板       抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
// 接口（Interfaces）： 共有属性和方法的抽离           不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口



// public 公有属性
//      可以在任何地方被访问到

// private 私有属性
//      实例对象无法直接存取
//      子类不允许访问
//      修饰构造函数时，该类不允许被继承或实例化

// protected 保护属性
//      允许子类访问
//      修饰构造函数时，该类只允许继承

// readonly  只读
//      可以被访问 不可以被赋值
class PersonAsc {
    public pName: string;
    private pEmail: string; // 继承的子类无法访问
    protected pAge: number; // 继承的子类可以访问

    static age: number;

    static staticFn() {
        return '我是静态方法，只能通过PersonAsc.staticFn 来调用'
    }
    // name: string;
    get name() {
        return '3eee'
    }
    set name(value) {
        console.log('setter: ' + value);
    }
    constructor(name: string) {
        this.name = name;
    }

    say(): string {
        return 'Hello'
    }
}
class Tom extends PersonAsc {
    constructor(name: string) {
        super(name)
        console.log(this.name)
    }
    say() {
        return super.say()
    }
}
abstract class Animal {
    name: string
    constructor(name) {
        this.name = name
    }
    public abstract run(): string
}
class Cat extends Animal {
    public run() {
        return ''
    }

}




// 类型别名称
type NewName = string
type NewFn = (x: string, y: string) => string




// 泛型  ---抽取公共定义
const comFn = <T>(name: T): T => {
    return name
}
comFn('hello')
comFn(2)
comFn({ name: 'hello' })

// 泛型约束
interface PropertyLimit {
    width: number
}
const myF = <T extends PropertyLimit>(arg: T): T => {
    return arg

}
myF({ name: 'hello', width: 1 })

//泛型接口
interface TFn {
    <T>(name: T): Array<T>
}

interface TFn1<T> {
    (name: T): Array<T>
}
const tMyTn: TFn = <T>(name: T) => {
    return [name]
}



// 类型保护 
const a:string='3'
let type : typeof a

