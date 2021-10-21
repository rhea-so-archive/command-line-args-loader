import 'reflect-metadata';
import commandLineArgs from 'command-line-args';

export const CommandLineArgsStorage = new Map<string, { name: string, type: Function }[]>();

/**
 * 값을 들고 오겠다고 정의하는 데코레이터입니다.
 * ### Example
 * ```typescript
 * ㅤ@LoadCommandLineArgs()
 * ㅤclass CommandLineArgs {
 * ㅤ	@Column()
 * ㅤ	value1: string = "Default Value"
 * ㅤ}
 * ```
 */
export function Column(): PropertyDecorator {
	return (object: any, propertyName: string) => {
		const reflectMetadataType = Reflect && Reflect.getMetadata ? Reflect.getMetadata("design:type", object, propertyName) : undefined;
		let storage = CommandLineArgsStorage.get(object.name);
		if (storage === undefined) {
			storage = [];
			CommandLineArgsStorage.set(object.name, storage);
		}
		storage?.push({ name: propertyName, type: reflectMetadataType });
	}
};

/**
 * CommandLineArgs를 읽어와주는 데코레이터입니다.  
 * ### Example
 * ```typescript
 * ㅤ@LoadCommandLineArgs()
 * ㅤclass CommandLineArgs {}
 * ```
 */
export function LoadCommandLineArgs(): ClassDecorator {
	return (object: any) => {
		const optionDefinitions: any[] = [];
		const columns = CommandLineArgsStorage.get(object.name);
		if (columns) {
			for (const column of columns) {
				optionDefinitions.push({
					name: column.name,
					type: column.type,
					defaultValue: object[column.name]
				});
			}
		}

		// partial: true로 해야 mocha test 등 다른 기능을 사용할때, command line args에서 에러가 발생하지 않는다. - JeongHyeon Kim 2021.09.14
		const parsedData = commandLineArgs(optionDefinitions, { partial: true });
		for (const index in parsedData) {
			object[index] = parsedData[index];
		}
	}
}