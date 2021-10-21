# CommandLineArgs Loader

CommandLineArgs로 입력한 환경변수를 여러분이 지정한 타입에 맞춰 들고와 변환해주는 모듈입니다.  

## Badges

<!-- Badges -->
[![CircleCI](https://circleci.com/gh/rhea-so/CommandLineArgsLoader/tree/main.svg?style=svg)](https://circleci.com/gh/rhea-so/CommandLineArgsLoader/tree/main)
[![License](https://img.shields.io/github/license/rhea-so/CommandLineArgsLoader)](https://raw.githubusercontent.com//rhea-so/CommandLineArgsLoader/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/rhea-so/CommandLineArgsLoader)](https://github.com/rhea-so/CommandLineArgsLoader/issues)
[![Pull Request](https://img.shields.io/github/issues-pr/rhea-so/CommandLineArgsLoader)](https://github.com/rhea-so/CommandLineArgsLoader/pulls)
[![Stars](https://img.shields.io/github/stars/rhea-so/CommandLineArgsLoader)](https://github.com/rhea-so/CommandLineArgsLoader)

## Usage

```sh
npm config set registry https://npm.rhea-so.com/
npm i @rhea-so/command-line-args-loader
```

```typescript
import { Column, LoadCommandLineArgs } from '@rhea-so/command-line-args-loader';

@LoadCommandLineArgs()
export class CommandLineArgs {
	@Column()
	static NAME: string = 'rhea'; // Default value is 'rhea'

	@Column()
	static MATH_SCORE: number; // Default value is undefiend
}

console.log(CommandLineArgs.NAME); // rhea
console.log(CommandLineArgs.MATH_SCORE); // undefined
```

```sh
tsc
node dist/index.js # rhea, undefined
node dist/index.js --NAME="test" --MATH_SCORE=123 # test, 123
```

## Configuration & Setup

### Project Cloning

```sh
git clone https://github.com/rhea-so/CommandLineArgsLoader
cd 08_CommandLineArgsLoader
npm config set registry https://npm.rhea-so.com/
npm i
```

## Build 

```sh
tsc
```

## Test

```sh
npm test
```

### Get Test Coverage

```sh
npm run coverage
```

## Documentation

* [프로젝트 변경 사항](https://github.com/rhea-so/CommandLineArgsLoader/blob/main/CHANGELOG.md)
* [프로젝트 발전 방향](https://github.com/rhea-so/CommandLineArgsLoader/blob/main/ROADMAP.md)

## Contribute

부탁드립니다. 이 프로젝트는 여러분의 기여를 바라고 있습니다. 기여를 해주세요.  
기여를 하는 법은 크게 어렵지 않습니다!!

* [당장 기여하는 방법 알아보기](https://github.com/rhea-so/CommandLineArgsLoader/blob/main/CONTRIBUTING.md)
* [기여 해주신 고마운 분들](https://github.com/rhea-so/CommandLineArgsLoader/blob/main/CONTRIBUTORS.md)

## Questions

* GitHub - [open issue](https://github.com/rhea-so/CommandLineArgsLoader/issues)
* Email - [jeonghyeon.rhea@gmail.com](mailto:jeonghyeon.rhea@gmail.com?subject=[GitHub]%20Project%20Moon%20Community-Question)

### License

[GPL-3.0 License](https://github.com/rhea-so/CommandLineArgsLoader/blob/main/LICENSE)
