<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# debug
- attach : nest start --debug 需要加上参数--debug，然后跑attach, 控制台会打印
- launch via npm: 在配置加上npm的脚本`npm run xxx`

# guard > interceptor > pipe

`AOP`执行顺序。 `MiddleWare`属于外层逻辑, 然后是`guard > interceptor > pipe`

# custom decorator
- `@setMetaData`:
- `applyDecorators()`: 多个合并一个
- `createParamDecorator()` ：创建参数装饰器
- `ExecutionContext`:进而拿到 request、response


# 不同上下文复用Guard、Interceptor, Exception Filter

- `ArgumentsHost`
 1. `host.getType()` : `'http/ws/rpc'`
 2. `host.switchToHttp/switchToWs/switchToRpc` ： 获取上下文

- `ExecutionContext`: `ArgumentsHost的子类`
 - `getClass()`、`getHandler()`

# Metadata 和 Reflect
ts 有一个编译选项叫做 `emitDecoratorMetadata`，开启它就会自动添加一些元数据
`SetMetadata`底层实现自然是 Reflect.defineMetadata


# dynamic module

```ts
@Module({})
export class BbbModule{
  static register(options: Record<string, any>): DynamicModule{
    return {
      module: BbbModule,
      controllers: [BbbController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options
        }
      ],
      BbbSerivce
    },
    exports:[]
  }
}
@Module({
  imports: [BbbModule.register({})], //Imports 用法
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule{}


import { ConfigurableModuleBuilder } from "@nestjs/common";

export interface CccModuleOptions {
aaa: number;
bbb: string;
}

// builder方式创建模块
export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
new ConfigurableModuleBuilder<CccModuleOptions>().build();

```
# nest的middleware


# interceptor rxjs
AaaInterceptor 
# mysql

# redis

# nginx


